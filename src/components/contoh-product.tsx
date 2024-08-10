export default function ContohProduct() {
  return (
    <div>
      
      <div className="items-center text-center mt-8 row-span-1 mb-8">
        <p className="text-2xl tracking-tight text-amber-700">You & Us</p>
        <p className="mt-2 text-6xl tracking-tighter text-amber-900">
          Let's build this together.
        </p>
        /* eslint-disable react/no-unescaped-entities */
        <p className="mt-3 text-base/loose">
          Heart of oak … three words that for centuries have represented all
          that is best and strong about Britain. Now Paragon Oak is proud to
          carry that great tradition forward into the 21st century.
        </p>
        <p className="text-base/loose">
          We specialise in the design, manufacture and installation of stunning
          oak framed{" "}
        </p>
        <p className="italic underline text-base/loose">
          buildings, Houses, Garden Rooms, Garages, Stables, Extensions,
          Commercial and more.
        </p>
        /* eslint-disable react/no-unescaped-entities */
      </div>

      <div className="flex justify-center items-center h-screen mt-24">
        <div className="grid grid-cols-2 gap-4">
          <h1 className="gambar-overflow">
            <div
              className="bg-cover bg-no-repeat w-full h-full gambar-zoom"
              style={{
                backgroundImage:
                  'url("https://i.pinimg.com/originals/ea/10/c7/ea10c7f99773f05f3e363058b027ab48.jpg")',
              }}
            ></div>
            <button className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-end p-6">
              <p className="text-white font-bold tracking-widest">
                Be inspired
              </p>
              <p className="text-white font-bold tracking-widest italic">
                Residential Project
              </p>
            </button>
          </h1>
          <h1 className="gambar-overflow">
            <div
              className="bg-cover bg-no-repeat w-full h-full gambar-zoom"
              style={{
                backgroundImage:
                  "url(https://i.ytimg.com/vi/8YqWZM1Tt4Q/maxresdefault.jpg)",
              }}
            ></div>
            <button className="absolute bottom-0 left-0 w-full h-full bg-white bg-opacity-50 flex flex-col justify-end p-6">
              <p className="text-slate-800 font-bold tracking-widest">
                Be inspired
              </p>
              <p className="text-slate-800 font-bold tracking-widest italic">
                Garage Project
              </p>
            </button>
          </h1>
          <h1 className="gambar-overflow">
            <div
              className="bg-cover bg-no-repeat w-full h-full gambar-zoom"
              style={{
                backgroundImage:
                  "url(https://theoakrestaurants.com/wp-content/uploads/2019/11/The-Oak-W12-115-2.jpg)",
              }}
            ></div>
            <button className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-end p-6">
              <p className="text-white font-bold tracking-widest">
                Be inspired
              </p>
              <p className="text-white font-bold tracking-widest italic">
                Commercial Project
              </p>
            </button>
          </h1>
          <h1 className="gambar-overflow">
            <div
              className="bg-cover bg-no-repeat w-full h-full gambar-zoom"
              style={{
                backgroundImage:
                  'url("https://oakframesdirect.com/wp-content/uploads/2021/10/3-Bay-Oak-Frame-Garage-with-First-Floor-Oak-Frames-Direct-1.jpg")',
              }}
            ></div>
            <button className="absolute bottom-0 left-0 w-full h-full bg-white bg-opacity-50 flex flex-col justify-end p-6">
              <p className="text-slate-800 font-bold tracking-widest">
                Be inspired
              </p>
              <p className="text-slate-800 font-bold tracking-widest italic">
                Stable Project
              </p>
            </button>
          </h1>
        </div>
        /* eslint-disable react/no-unescaped-entities */
      </div>
      
    </div>
  );
}
