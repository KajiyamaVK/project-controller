/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import logo from '../../public/imgs/LogoIcon.png'
import Image from 'next/image'

export function FullstackerLogo() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        style={{ fontFamily: 'font-family: "Inter", sans-serif' }}
        className="flex  items-center"
      >
        <div className="flex">
          <p className="text-xs mb-2 italic mr-3">POWERED BY</p>
          <Image
            src={logo}
            alt="Fullstacker Logo"
            height={50}
            className="object-contain ml-3 "
          />
        </div>
        <div>
          <p className="font-bold">FULLSTACKER</p>
          <p className="font-thin">INTEL</p>
        </div>
      </div>
    </>
  )
}
