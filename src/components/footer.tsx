export default function Footer() {
  return (
    <div className="bg-slate-900 h-[30rem]">
      <div className="ml-[15rem] mb-8">
        <p className="text-amber-500 pt-20 text-[2rem] mb-4">
          Reinvent your space, with us.
        </p>
        <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded flex items-center">
          Contact Us
        </button>
      </div>
      <div className="grid-cols-4 grid gap-42 ml-[15rem]">
        <div className="text-white col-span-2">
          <p className=" tracking-widest text-[12px]">contact-us</p>
          <p>01484 943006</p>
          <button className="text-slate-400 hover:text-amber-600 mb-5 mt-2">
            info@paragonoak.com
          </button>
          <p className="text-[13px] tracking-tighter">Paragon Oak</p>
          <p className="text-[13px] tracking-tighter">
            Wheatley Park, Mirfield
          </p>
          <p className="text-[13px] tracking-tighter">
            West Yorkshire, WF148HE
          </p>
          <button className="text-slate-400 hover:text-amber-600 text-[10px] mt-3">
            open in google maps
          </button>
        </div>
        <div className="text-white">
          <p className=" tracking-wider text-[12px] mb-7">Services</p>
          <p className="text-slate-400 hover:text-amber-600 text-[14px] mb-2">
            <button>Residential Project</button>
          </p>
          <p className="text-slate-400 hover:text-amber-600 text-[14px] mb-2">
            <button>Garage Project</button>
          </p>
          <p className="text-slate-400 hover:text-amber-600 text-[14px] mb-2">
            <button>Commercial Project</button>
          </p>
          <p className="text-slate-400 hover:text-amber-600 text-[14px]">
            <button>Stable Project</button>
          </p>
        </div>
        <div className="text-white">
          <p className="tracking-widest text-[12px] mb-7">Information</p>
          <p className="text-slate-400 hover:text-amber-600 text-[14px] mb-2">
            <button>Project Sequences</button>
          </p>
          <p className="text-slate-400 hover:text-amber-600 text-[14px] mb-2">
            <button>Sustainability</button>
          </p>
          <p className="text-slate-400 hover:text-amber-600 text-[14px] mb-2">
            <button>Aftercare</button>
          </p>
          <p className="text-slate-400 hover:text-amber-600 text-[14px]">
            <button>Case Studies</button>
          </p>
        </div>
      </div>
      <div>
      <p className="text-white ml-[15rem] mt-5">© 2024 Paragon Oak Ltd.</p>
      </div>
    </div>
  );
}
