import prisma from '@/lib/db/db'

export async function POST (req) {
  const { session } = await req.json()
  const { name, email } = session.user

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

    return Response.json({ favorites })
  } catch (error) {
    return Response.json(error)
  }
  // return Response.json({ user })
}
