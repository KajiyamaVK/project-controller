'use client'

import Image from 'next/image'
import img1 from '../../../public/imgs/mustardSeedLoginImg.png'
import { useState } from 'react'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="flex">
      {/* Login Left site - only appears on large screens */}
      <div className=" hidden xl:block  xl:w-[730px] h-screen relative ">
        {/* Image on top of the left side */}
        <div className="flex h-full relative overflow-hidden">
          <Image
            src={img1}
            alt="Images at login page"
            style={{ objectFit: 'contain' }}
          />
          <div
            className="absolute inset-0 bottom-0"
            style={{
              background:
                'linear-gradient(rgba(39, 41, 53, 0), rgba(39, 41, 53, 1)) ',
            }}
          />
        </div>
        {/* Box at the bottom */}
        <div className="absolute bottom-28 dialog h-80 rounded-tr-3xl  w-[830px] py-10 px-20">
          {/* Title of the bottom text */}
          <h3 className="text-2xl font-bold">
            A fé do tamanho de um grão de mostarda{' '}
            <span className="font-thin italic text-lg">(Mateus 17:20)</span>
          </h3>
          {/* Bottom description */}
          <p className="indent-3 mt-5">
            Ele respondeu: &quot;Porque a fé que vocês têm é pequena. Eu
            asseguro que, se vocês tiverem fé do tamanho de um grão de mostarda,
            poderão dizer a este monte: &apos;Vá daqui para lá&apos;, e ele irá.
            Nada será impossível para vocês.&quot;
          </p>
        </div>
      </div>
      {/* Right side - Login Form */}
      <form noValidate className="xl:w-1/2 h-screen flex m-auto items-center">
        {/* Login Background Image using Image component */}

        <div className="w-1/2 m-auto  min-w-[300px] z-10">
          <label htmlFor="email">E-mail</label>
          <input
            className="w-full border-2 border-gray-300 rounded-md p-2 mt-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
          />
          <label htmlFor="senha" className="inline-block mt-5">
            Senha <i>(mínimo 6 caracteres)</i>
          </label>
          <input
            className="w-full border-2 border-gray-300 rounded-md p-2 mt-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="senha"
            id="senha"
          />

          <div className="flex justify-between ">
            <button type="submit" name="submit" className={'mt-5 btn'}>
              Entrar
            </button>
          </div>
          <div className="block">
            <p className="mt-10">Ou logue com:</p>
          </div>
          <div className={`block`}>
            <p className="mt-10">Não tem uma conta?</p>
            <p className="cursor-pointer !text-teal-600 font-bold">
              Cadastre-se{' '}
            </p>
          </div>
          <p className="mt-5">Não conhece o Emunah✶Life? </p>
          <a href="#" className="text-teal-600">
            <b>Clique aqui e saiba mais</b>
          </a>
        </div>
      </form>
    </div>
  )
}
