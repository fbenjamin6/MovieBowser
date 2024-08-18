import prisma from '@/lib/db/db'

export async function POST (req) {
  const { session } = await req.json()
  const { name, email, provider } = session.user

  try {
    const { favorites } = await prisma.user.findFirst({
      where: {
        name,
        email
      },
      include: {
        favorites: true
      }
    })
    // console.log(favorites)
    return Response.json({ favorites })
  } catch (error) {
    console.log(error)
    return Response.json(error)
  }
  // return Response.json({ user })
}
