import Image from "next/image";

export default function Introhome() {
  return (
    <div>
      <div className="hero-section ">
        <div className="hero-image ">
          <Image
            src="https://th.bing.com/th/id/R.c27a26e1c11d4a7b0baf1f1fd9770ffe?rik=wRZfmWSbhaRQlQ&riu=http%3a%2f%2fwww.heartwoodconstruction.co.uk%2fuserfiles%2fOak+Frame+Building+Surrey(1).jpg&ehk=SIBBetMOsfHRd7Pl0c292%2fIvX%2f6TTXaVOhQYvLQCW5E%3d&risl=&pid=ImgRaw&r=0)
            "
            alt=""
            className="image--hero"
          />
        </div>
        <div className="relative justify-center text-white hero-content brightness-[1]">
          <p className="text-[2rem] tracking-widest ">
            Living, breathing, beauty{" "}
          </p>
          <p className="text-[5rem] tracking-wider">Oak framed buildings</p>
          <p className="text-[1rem] tracking-tighter italic">
            From luxury extensions to full oak-framed homes
          </p>
        </div>
      </div>
    </div>
  );
}
