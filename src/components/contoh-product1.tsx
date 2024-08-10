import Image from "next/image";

export default function ContohProduct1() {
  return (
    <div>
      <div className="hero-section hero-image">
      <Image
        className="object-cover w-full h-full image--hero"
        src="https://i.pinimg.com/originals/3c/3e/51/3c3e517d2b528d0ba750a566a0eb922a.jpg"
        width={1220}
        height={820}
        alt="Intro image"
      />
        <div className="text-center pt-[170px]">
          <p className="text-[5rem] font-serif text-white italic items-center">
            Oak Framed Building
          </p>
          <p className="text-[5rem] font-serif text-white italic ">
            Specialists - Yorkshire
          </p>
        </div>
      </div>
      
    </div>
  );
}
