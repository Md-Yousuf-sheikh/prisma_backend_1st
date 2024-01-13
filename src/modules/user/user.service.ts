import { PrismaClient, Profile, User } from '@prisma/client'

const prisma = new PrismaClient()

const insertIntoDB = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  })

  return result
}

// Profile
const insertOrUpdateProfile = async (data: Profile): Promise<Profile> => {
  //
  const isExist = await prisma.profile.findUnique({
    where: {
      userId: data?.userId,
    },
  })

  if (isExist) {
    const result = await prisma.profile.update({
      where: {
        userId: data?.userId,
      },
      data: {
        bio: data.bio,
      },
    })
    return result
  }
  // create

  const result = await prisma.profile.create({
    data,
  })
  return result
}
//  Get user
const getUsersIntoDB = async (): Promise<{ email: string }[]> => {
  const result = await prisma.user.findMany({
    select: {
      email: true,
    },
  })
  return result
}

//  Get user
const getSingleUserIntoDB = async (id: number): Promise<any> => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      profile: true,
    },
  })
  return result
}

export const UserService = {
  insertIntoDB,
  insertOrUpdateProfile,
  getUsersIntoDB,
  getSingleUserIntoDB,
}
