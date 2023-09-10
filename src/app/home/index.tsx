import Image from 'next/image'
import bg from '../../../public/imgs/homeBGImg.png'

export function Home() {
  return (
    <div className="overflow-hidden ">
      <div className="bg-pink relative w-screen h-screen">
        <Image
          src={bg}
          style={{ objectFit: 'cover' }}
          fill
          alt=""
          objectPosition="top"
          className="opacity-40"
          placeholder="blur"
        />

        {/* <div className="absolute inset-0 bg-gradient-to-r from-pink to-transparent z-10 w-[1980px]" /> */}
      </div>
    </div>
  )
}
