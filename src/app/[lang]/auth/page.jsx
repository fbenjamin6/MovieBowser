import { GithubButton } from '@/components/auth/GithubButton'
import { GoogleButton } from '@/components/auth/GoogleButton'
import { Venom } from '@/components/auth/Venom'
import Image from 'next/image'
import React from 'react'

export default function LoginPage ({ params }) {
  const { lang } = params

  return (
    <>

    <section className=' flex justify-center items-center min-h-full mb-36'>

      <Image src={'/ui/spidermanLogin.svg'} width={720} height={1280} className='absolute z-0 left-0 spiderman'/>
      <div className='venom absolute z-0 right-0 before:content-[""] before:top-0 before:w-full before:h-full before:absolute before:bg-gradient-to-l from-black via-slate-950/20 to-slate-950'>
        <Image src={'/ui/venomLogin.svg'} alt='' width={700} height={1280} className=' '/>
      </div>
        <div className='flex flex-col items-center h-max gap-2 rounded-lg bg-cyan-950/30 backdrop-blur p-10'>

        <h2>Log in </h2>
        <GoogleButton>Log in with Google</GoogleButton>
        <p >Or</p>
        <GithubButton>Log in with GitHub</GithubButton>
      </div>
    </section>
    </>
  )
}
