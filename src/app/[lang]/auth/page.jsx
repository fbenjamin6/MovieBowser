import { GithubButton } from '@/components/auth/GithubButton'
import { GoogleButton } from '@/components/auth/GoogleButton'
import { LogOutButton } from '@/components/auth/LogoutButton'
import { getUserSession } from '@/lib/auth/getUserSession'
import { getDictionary } from '@/lib/dictionaries/dictionary'
import Image from 'next/image'
import React from 'react'

export default async function LoginPage ({ params }) {
  const { lang } = params
  const { isLoggedIn } = await getUserSession()
  const { logIn } = await getDictionary(lang)

  return (
    <>
      <section className=' flex justify-center items-center min-h-full mb-36 ' >

        <Image src={'/ui/spidermanLogin.svg'} alt='Spider-man in profile with a dark background and a beam of light ' width={720} height={1280} className='absolute hidden lg:block z-0 -left-24 spiderman '/>
        <div className='venom absolute hidden lg:block z-0 -right-14 before:content-[""] before:top-0 before:w-full before:h-full before:absolute before:bg-gradient-to-l from-black via-slate-950/20 to-slate-950'>
          <Image src={'/ui/venomLogin.svg'} alt='A clipping of the venom movie poster 2024' width={700} height={1055} className=' '/>
        </div>
        <div className=' dune bg-[url("/ui/duneLogin.jpg")] absolute block lg:hidden top-16 w-full h-full bg-center bg-cover bg-no-repeat bg-opacity-80'/>

        <div className='flex flex-col items-center h-max gap-3 rounded-lg bg-slate-950/70 lg:bg-cyan-950/30 backdrop-blur px-6 py-5 md:py-7 md:px-10 text-center'>
          {
            isLoggedIn
              ? <LogOutButton>{logIn.logOut}</LogOutButton>
              : (
                  <>
                    <h2 className='text-2xl font-semibold'>{logIn.logIn} </h2>
                    <p >{logIn.text}</p>
                    <GoogleButton>{logIn.google}</GoogleButton>
                    <GithubButton>{logIn.github}</GithubButton>
                  </>
                )
          }
        </div>
      </section>
    </>
  )
  // bg-[url("/ui/duneLogin3.jpg")] absolute block lg:hidden top-16 w-full h-full bg-center bg-cover bg-no-repeat bg-opacity-80
}
