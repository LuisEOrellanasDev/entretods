import { prisma } from '@/lib/prisma';

export async function getTravelWithExpenses(travelId: string, userId: string) {
  return await prisma.travel.findFirst({
    where: {
      id: travelId,
      userTravels: {
        some: { userId }
      }
    },
    include: {
      expenses: {
        include: {
          payer: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true
            }
          },
          participants: {
            include: {
              user: {
                select: {
                  id: true,
                  firstName: true,
                  lastName: true,
                  email: true
                }
              }
            }
          }
        },
        orderBy: {
          createdAt: 'desc'
        }
      },
      userTravels: {
        include: {
          user: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true
            }
          }
        }
      }
    }
  });
}

export async function getTravelParticipants(travelId: string, userId: string) {
  const travel = await prisma.travel.findFirst({
    where: {
      id: travelId,
      userTravels: {
        some: { userId }
      }
    },
    include: {
      userTravels: {
        include: {
          user: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true
            }
          }
        }
      }
    }
  });

  return travel?.userTravels.map(ut => ({
    ...ut.user,
    role: ut.role
  })) || [];
}

export async function getUserTravels(userId: string) {
  return await prisma.userTravel.findMany({
    where: { userId },
    include: {
      travel: {
        select: {
          id: true,
          title: true,
          description: true,
          createdAt: true,
          _count: {
            select: {
              expenses: true,
              userTravels: true
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
  });
}

export async function getTravelExpensesForSettlement(travelId: string, userId: string) {
  const travel = await prisma.travel.findFirst({
    where: {
      id: travelId,
      userTravels: {
        some: { userId }
      }
    },
    select: {
      id: true,
      expenses: {
        select: {
          id: true,
          payerId: true,
          amount: true,
          participants: {
            select: {
              userId: true,
              share: true
            }
          }
        }
      },
      userTravels: {
        select: {
          user: {
            select: {
              id: true,
              firstName: true,
              lastName: true
            }
          }
        }
      }
    }
  });

  if (!travel) return null;

  return {
    expenses: travel.expenses,
    users: travel.userTravels.map(ut => ut.user)
  };
}
