import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth/auth';
import { prisma } from '@/lib/prisma';
import { ExpenseList } from './_components/ExpenseList';
import SettlementView from './_components/SettlementView';
import { ParticipantManagement } from './_components/ParticipantManagement';
import { BalanceSummary } from './_components/BalanceSummary';
import { BackButton } from '@/components/ui/BackButton';
import { calculateTravelSettlement } from '@/lib/settlement';
import AppExpenseButton from './_components/AppExpenseButton';
import { UserRole, TravelStatus } from '../../../../generated/prisma';

interface TravelPageProps {
  params: Promise<{ travelId: string }>;
  searchParams: Promise<{ tab?: string }>;
}

export default async function TravelPage({ params, searchParams }: TravelPageProps) {
  const { travelId } = await params;
  const { tab = 'expenses' } = await searchParams;
  const session = await auth();

  if (!session?.user) {
    redirect('/login');
  }

  const userTravel = await prisma.userTravel.findFirst({
    where: {
      travelId,
      userId: session.user.id,
    },
  });

  if (!userTravel) {
    redirect('/dashboard');
  }

  const travel = await prisma.travel.findUnique({
    where: { id: travelId },
    include: {
      userTravels: {
        where: {
          leftAt: null,
        },
        include: {
          user: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true,
            },
          },
        },
      },
      expenses: {
        include: {
          payer: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true,
            },
          },
          participants: {
            include: {
              user: {
                select: {
                  id: true,
                  firstName: true,
                  lastName: true,
                  email: true,
                },
              },
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      },
    },
  });

  if (!travel) {
    redirect('/dashboard');
  }

  const allParticipants = await prisma.userTravel.findMany({
    where: { travelId },
    include: {
      user: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
        },
      },
    },
  });

  const expenseData = travel.expenses.map(expense => ({
    id: expense.id,
    amount: Number(expense.amount),
    payerId: expense.payerId,
    participants: expense.participants.map(p => ({
      userId: p.userId,
      share: Number(p.share),
    })),
  }));

  const userData = travel.userTravels.map(p => ({
    id: p.user.id,
    firstName: p.user.firstName,
    lastName: p.user.lastName,
  }));

  const settlement = calculateTravelSettlement(expenseData, userData);

  const isAdmin = userTravel.role === UserRole.ADMIN;

  const participantsForComponents = travel.userTravels.map(p => ({
    id: p.user.id,
    name: `${p.user.firstName} ${p.user.lastName}`,
    email: p.user.email || '',
    role: p.role as UserRole,
    joinedAt: p.joinedAt,
    leftAt: p.leftAt
  }))

  const participantsForManagement = allParticipants.map(p => ({
    id: p.user.id,
    name: `${p.user.firstName} ${p.user.lastName}`,
    email: p.user.email || '',
    role: p.role as UserRole,
    joinedAt: p.joinedAt,
    leftAt: p.leftAt,
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto py-4 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-4 sm:mb-6">
          <BackButton
            href="/dashboard"
            label="Volver al Dashboard"
            className="mb-3 sm:mb-4"
          />
        </div>

        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 break-words">
            {travel.title}
          </h1>
          {travel.description && (
            <p className="text-gray-600 mt-2 text-sm sm:text-base break-words">
              {travel.description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row sm:gap-4 mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500 space-y-1 sm:space-y-0">
            <span>Creado: {new Date(travel.createdAt).toLocaleDateString('es-CO')}</span>
            <span className="hidden sm:inline">•</span>
            <span>{travel.userTravels.length} participantes activos</span>
          </div>
        </div>

        <div className="mb-4 sm:mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex overflow-x-auto scrollbar-hide">
              <a
                href={`/travel/${travelId}?tab=expenses`}
                className={`flex-shrink-0 border-b-2 py-2 px-3 sm:px-4 text-sm font-medium whitespace-nowrap ${tab === 'expenses'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
              >
                Gastos
              </a>
              <a
                href={`/travel/${travelId}?tab=settlement`}
                className={`flex-shrink-0 border-b-2 py-2 px-3 sm:px-4 text-sm font-medium whitespace-nowrap ${tab === 'settlement'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
              >
                Liquidación
              </a>
              <a
                href={`/travel/${travelId}?tab=participants`}
                className={`flex-shrink-0 border-b-2 py-2 px-3 sm:px-4 text-sm font-medium whitespace-nowrap ${tab === 'participants'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
              >
                Participantes
              </a>
            </nav>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {tab === 'expenses' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
                  Gastos del Viaje
                </h2>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
                  <div className="order-2 xl:order-1">
                    <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">
                      Agregar Nuevo Gasto
                    </h3>
                    {travel.status === TravelStatus.ACTIVE && (
                      <AppExpenseButton
                        travelId={travelId}
                        participantsForComponents={participantsForComponents}
                        session={session}
                      />
                    )}

                  </div>
                  <div className="order-1 xl:order-2">
                    <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">
                      Lista de Gastos
                    </h3>
                    <ExpenseList
                      expenses={travel.expenses.map(expense => ({
                        ...expense,
                        amount: Number(expense.amount),
                        participants: expense.participants.map(p => ({
                          ...p,
                          share: Number(p.share)
                        }))
                      }))}
                      travelId={travelId}
                      participants={participantsForComponents}
                      currentUserId={session.user.id}
                      travelIsActive={travel.status === TravelStatus.ACTIVE}
                    />
                  </div>
                </div>
              </div>
              <BalanceSummary balances={settlement.balances} />
            </div>
          )}

          {tab === 'settlement' && (
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
                Liquidación
              </h2>
              <SettlementView
                balances={settlement.balances}
                settlements={settlement.settlements}
                totalExpenses={settlement.totalExpenses}
                isSettled={settlement.isSettled}
                travelId={travelId}
                isAdmin={userTravel.role === UserRole.ADMIN}
                travelIsActive={travel.status === TravelStatus.ACTIVE}
              />
            </div>
          )}

          {tab === 'participants' && (
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
                Gestión de Participantes
              </h2>
              <ParticipantManagement
                travelId={travelId}
                participants={participantsForManagement}
                currentUserId={session.user.id}
                isAdmin={userTravel.role === UserRole.ADMIN}
                expenses={expenseData}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
