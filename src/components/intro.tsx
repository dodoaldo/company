import Head from "next/head";
import Image from "next/image";

export default function Intro() {
  return (
    <div>
      <Head>
        <link
          rel="preload"
          href="https://i.pinimg.com/originals/2f/ea/4b/2fea4b012168f263b6a4a8a6b31adfb4.jpg"
          as="intro image"
        />
      </Head>
      
      <div className="hero-section hero-image">
        <Image
          className="object-cover w-full h-full image--hero"
          src="https://i.pinimg.com/originals/2f/ea/4b/2fea4b012168f263b6a4a8a6b31adfb4.jpg"
          width={820}
          height={800}
          quality={40}
          alt="Intro image"
        />
        <div className="flex flex-col justify-center ml-24 h-full text-white">
          <p className="text-[1rem]">Oak Framed</p>
          <p className="text-[5rem] font-serif">Like Every</p>
          <p className="text-[5rem] font-serif">Oak Tree</p>
          <p className="text-[1rem] italic">Our roots are what allow us to thrive</p>
        </div>
      </div>
    </div>
  );
}
