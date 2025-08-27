import { prisma } from '@/lib/prisma';

export async function getExpenseWithParticipants(expenseId: string, userId: string) {
  return await prisma.expense.findFirst({
    where: {
      id: expenseId,
      travel: {
        userTravels: {
          some: { userId }
        }
      }
    },
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
      },
      travel: {
        select: {
          id: true,
          title: true
        }
      }
    }
  });
}

export async function getPaginatedExpenses(
  travelId: string,
  userId: string,
  page: number = 1,
  limit: number = 10
) {
  const skip = (page - 1) * limit;

  const [expenses, totalCount] = await Promise.all([
    prisma.expense.findMany({
      where: {
        travelId,
        travel: {
          userTravels: {
            some: { userId }
          }
        }
      },
      include: {
        payer: {
          select: {
            id: true,
            firstName: true,
            lastName: true
          }
        },
        participants: {
          select: {
            userId: true,
            share: true,
            user: {
              select: {
                firstName: true,
                lastName: true
              }
            }
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      },
      skip,
      take: limit
    }),
    prisma.expense.count({
      where: {
        travelId,
        travel: {
          userTravels: {
            some: { userId }
          }
        }
      }
    })
  ]);

  return {
    expenses,
    totalCount,
    totalPages: Math.ceil(totalCount / limit),
    currentPage: page,
    hasNextPage: page < Math.ceil(totalCount / limit),
    hasPreviousPage: page > 1
  };
}

export async function getExpensesByCategory(travelId: string, userId: string) {
  return await prisma.expense.groupBy({
    by: ['category'],
    where: {
      travelId,
      travel: {
        userTravels: {
          some: { userId }
        }
      },
      category: {
        not: null
      }
    },
    _sum: {
      amount: true
    },
    _count: {
      id: true
    },
    orderBy: {
      _sum: {
        amount: 'desc'
      }
    }
  });
}

export async function getUserExpenseSummary(travelId: string, userId: string) {
  const [paidExpenses, participatedExpenses] = await Promise.all([
    // Expenses paid by user
    prisma.expense.aggregate({
      where: {
        travelId,
        payerId: userId,
        travel: {
          userTravels: {
            some: { userId }
          }
        }
      },
      _sum: {
        amount: true
      },
      _count: {
        id: true
      }
    }),
    // Expenses user participated in
    prisma.expenseParticipant.aggregate({
      where: {
        userId,
        expense: {
          travelId,
          travel: {
            userTravels: {
              some: { userId }
            }
          }
        }
      },
      _sum: {
        share: true
      },
      _count: {
        id: true
      }
    })
  ]);

  return {
    totalPaid: Number(paidExpenses._sum.amount) || 0,
    expensesPaidCount: paidExpenses._count.id,
    totalOwed: Number(participatedExpenses._sum.share) || 0,
    expensesParticipatedCount: participatedExpenses._count.id,
    netBalance: (Number(paidExpenses._sum.amount) || 0) - (Number(participatedExpenses._sum.share) || 0)
  };
}
