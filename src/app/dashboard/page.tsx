import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { auth } from '@/lib/auth/auth'
import { logoutAction } from '@/app/login/_actions/logout'
import { getUserBalanceFromTravel } from '@/lib/utils/balance-utils'
import { formatCurrency } from '@/lib/utils/currency'
import { UserRole, TravelStatus } from '../../../generated/prisma'

export default async function Dashboard() {
  const session = await auth()

  if (!session?.user?.id) {
    redirect('/login')
  }

  const userTravels = await prisma.userTravel.findMany({
    where: {
      userId: session.user.id,
      leftAt: null
    },
    include: {
      travel: {
        include: {
          _count: {
            select: {
              expenses: true,
              userTravels: true
            }
          },
          expenses: {
            include: {
              payer: true,
              participants: true
            }
          },
          userTravels: {
            include: {
              user: {
                select: {
                  id: true,
                  firstName: true,
                  lastName: true,
                }
              }
            }
          }
        }
      }
    },
    orderBy: {
      travel: {
        createdAt: 'desc'
      }
    }
  })

  const travelsWithBalances = await Promise.all(
    userTravels.map(async (userTravel) => {
      const travel = userTravel.travel;

      const expenseData = travel.expenses.map((expense: any) => ({
        id: expense.id,
        amount: Number(expense.amount),
        payerId: expense.payer.id,
        participants: expense.participants.map((p: any) => ({
          userId: p.userId,
          share: Number(p.share)
        })),
      }));

      const userData = travel.userTravels.map((p: any) => ({
        id: p.user.id,
        firstName: p.user.firstName,
        lastName: p.user.lastName,
      }));

      const userBalance = getUserBalanceFromTravel(
        { expenses: expenseData, users: userData },
        session.user.id
      );

      return {
        ...userTravel,
        userBalance: userBalance
      };
    })
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-2">Bienvenido, {session.user.name || session.user.email}</p>
          </div>
          <form action={logoutAction}>
            <button
              type="submit"
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Cerrar Sesión
            </button>
          </form>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">Mis Viajes</h2>
          <Link
            href="create-travel"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Crear Viaje
          </Link>
        </div>
      </div>

      {travelsWithBalances.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <div className="text-gray-500">
            <p className="text-lg mb-2">No tienes viajes aún</p>
            <p className="text-sm">Crea tu primer viaje para comenzar a gestionar gastos colaborativos</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {travelsWithBalances.map((userTravel) => {
            const travel = userTravel.travel
            const isActive = travel.status === TravelStatus.ACTIVE
            const expenseCount = travel._count.expenses
            const participantCount = travel._count.userTravels
            const userBalance = userTravel.userBalance

            return (
              <Link
                key={travel.id}
                href={`/travel/${travel.id}`}
                className={`block rounded-lg shadow hover:shadow-md transition-all ${isActive
                  ? 'bg-white'
                  : 'bg-gray-100 opacity-75 hover:opacity-90'
                  }`}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className={`text-lg font-semibold truncate ${isActive ? 'text-gray-900' : 'text-gray-600'
                      }`}>
                      {travel.title}
                    </h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${isActive
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-200 text-gray-600'
                      }`}>
                      {isActive ? 'Activo' : 'Finalizado'}
                    </span>
                  </div>

                  {travel.description && (
                    <p className={`text-sm mb-4 line-clamp-2 ${isActive ? 'text-gray-600' : 'text-gray-500'
                      }`}>
                      {travel.description}
                    </p>
                  )}

                  <div className={`space-y-2 text-sm ${isActive ? 'text-gray-500' : 'text-gray-400'
                    }`}>
                    <div className="flex justify-between">
                      <span>{participantCount} participantes</span>
                      <span>{expenseCount} gastos</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Saldo:</span>
                      <span className={`font-medium ${userBalance > 0.01 ? 'text-blue-600' :
                        userBalance < -0.01 ? 'text-red-600' : 'text-green-600'
                        }`}>
                        {userBalance > 0.01 ? `le deben ${formatCurrency(userBalance)}` :
                          userBalance < -0.01 ? `Debe  ${formatCurrency(userBalance)}` : '✓ Al día'}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                      <span className={`text-xs ${isActive ? 'text-gray-400' : 'text-gray-400'
                        }`}>
                        {userTravel.role === UserRole.ADMIN ? 'Administrador' : 'Miembro'}
                      </span>
                      <span className={`text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-500'
                        }`}>
                        Ver detalles →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}