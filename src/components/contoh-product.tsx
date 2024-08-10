import Head from "next/head";
import Image from "next/image";

export default function ContohProduct() {
  return (
    <div>
      <Head>
        <link
          rel="preload"
          href="https://i.pinimg.com/originals/ea/10/c7/ea10c7f99773f05f3e363058b027ab48.jpg"
          as="image"
        />
        <link
          rel="preload"
          href="https://i.ytimg.com/vi/8YqWZM1Tt4Q/maxresdefault.jpg"
          as="image"
        />
        <link
          rel="preload"
          href="https://theoakrestaurants.com/wp-content/uploads/2019/11/The-Oak-W12-115-2.jpg"
          as="image"
        />
        <link
          rel="preload"
          href="https://oakframesdirect.com/wp-content/uploads/2021/10/3-Bay-Oak-Frame-Garage-with-First-Floor-Oak-Frames-Direct-1.jpg"
          as="image"
        />
      </Head>

      <div className="items-center text-center mt-8 row-span-1 mb-8">
        <p className="text-2xl tracking-tight text-amber-700">You & Us</p>
        <p className="mt-2 text-6xl tracking-tighter text-amber-900">
          Let&apos;s build this together.
        </p>
        <p className="mt-3 text-base/loose">
          Heart of oak &hellip; three words that for centuries have represented
          all that is best and strong about Britain. Now Paragon Oak is proud to
          carry that great tradition forward into the 21st century.
        </p>
        <p className="text-base/loose">
          We specialise in the design, manufacture and installation of stunning
          oak framed
        </p>
        <p className="italic underline text-base/loose">
          buildings, Houses, Garden Rooms, Garages, Stables, Extensions,
          Commercial and more.
        </p>
      </div>

      <div className="flex justify-center items-center h-screen mt-24">
        <div className="grid grid-cols-2 gap-4">
          <div className="gambar-overflow">
            <div
              className="gambar-zoom"
            >
              <Image
                src="https://i.pinimg.com/originals/ea/10/c7/ea10c7f99773f05f3e363058b027ab48.jpg"
                width={800}
                height={800}
                alt="Contoh Product 1"
              />
            </div>
            <button title="Residential Project" className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-end p-6">
              <p className="text-white font-bold tracking-widest">
                Be inspired
              </p>
              <p className="text-white font-bold tracking-widest italic">
                Residential Project
              </p>
            </button>
          </div>
          <div className="gambar-overflow">
            <div
              className="gambar-zoom"
            >
               <Image
                src="https://i.ytimg.com/vi/8YqWZM1Tt4Q/maxresdefault.jpg"
                width={800}
                height={800}
                alt="Contoh Product 2"
              />
            </div>
            <button title="Garage Project" className="absolute bottom-0 left-0 w-full h-full bg-white bg-opacity-50 flex flex-col justify-end p-6">
              <p className="text-slate-800 font-bold tracking-widest">
                Be inspired
              </p>
              <p className="text-slate-800 font-bold tracking-widest italic">
                Garage Project
              </p>
            </button>
          </div>
          <div className="gambar-overflow">
            <div
              className="gambar-zoom"
            >
              <Image
                src="https://theoakrestaurants.com/wp-content/uploads/2019/11/The-Oak-W12-115-2.jpg"
                width={800}
                height={800}
                alt="Contoh Product 3"
              />
            </div>
            <button title="Commercial Project" className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-end p-6">
              <p className="text-white font-bold tracking-widest">
                Be inspired
              </p>
              <p className="text-white font-bold tracking-widest italic">
                Commercial Project
              </p>
            </button>
          </div>
          <div className="gambar-overflow">
            <div className="gambar-zoom">
              <Image
                src="https://oakframesdirect.com/wp-content/uploads/2021/10/3-Bay-Oak-Frame-Garage-with-First-Floor-Oak-Frames-Direct-1.jpg"
                width={800}
                height={800}
                alt="Contoh Product 4"
              />
            </div>
            <button title="Stable project" className="absolute bottom-0 left-0 w-full h-full bg-white bg-opacity-50 flex flex-col justify-end p-6">
              <p className="text-slate-800 font-bold tracking-widest">
                Be inspired
              </p>
              <p className="text-slate-800 font-bold tracking-widest italic">
                Stable Project
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
