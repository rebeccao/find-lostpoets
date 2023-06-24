// app/utils/user.server.ts
import { prisma } from './prisma.server'

export const getPoets = async () => {
    return prisma.poets.findMany({
      orderBy: {
        poet_id: 'asc',
      },
    })
  }


  /*
  export const getPoets = async (userId: string) => {
    return prisma.user.findMany({
      where: {
        id: { not: userId },
      },
      orderBy: {
        profile: {
          firstName: 'asc',
        },
      },
    })
  }
  */
  