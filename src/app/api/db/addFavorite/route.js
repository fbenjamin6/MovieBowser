import prisma from '@/lib/db/db'

export async function POST (req) {
  const { mediaId, mediaType, session } = await req.json()
  const { name, email, provider } = session.user

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

    console.log(newFavorite)
    return Response.json(newFavorite)
  } catch (error) {
    console.log(error)
    return Response.json(error)
  }
  // return Response.json({ user })
}
