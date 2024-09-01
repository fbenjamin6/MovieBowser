import prisma from '@/lib/db/db'

export async function POST (req) {
  const { mediaId, mediaType, session } = await req.json()
  const { name, email } = session.user

  try {
    const findUser = await prisma.user.findFirst({
      where: {
        name,
        email

      },
      include: {
        favorites: true
      }
    })

    const newFavorite = await prisma.favorites.create({
      data: {
        user: {
          connect: {
            id: findUser.id
          }
        },
        mediaId,
        mediaType
      }
    })

    return Response.json(newFavorite)
  } catch (error) {
    return Response.json(error)
  }
  // return Response.json({ user })
}
