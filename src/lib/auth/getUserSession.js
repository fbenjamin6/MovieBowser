'use server'
import { getServerSession } from 'next-auth'

export async function getUserSession () {
  const session = await getServerSession()
  const isLoggedIn = !!session

  return { session, isLoggedIn }
}
