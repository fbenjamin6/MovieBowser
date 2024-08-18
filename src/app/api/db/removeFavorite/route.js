import prisma from '@/lib/db/db'
import { data } from 'autoprefixer'
import Email from 'next-auth/providers/email'

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
    console.log(findUser)
    const removeFavorite = await prisma.favorites.deleteMany({
      where: {
        mediaId,
        mediaType,
        user: {
          id: findUser.id
        }
      }

    })

    console.log(removeFavorite)
    return Response.json({ removeFavorite })
  } catch (error) {
    console.log(error)
    return Response.json(error)
  }
  // return Response.json({ user })
}
