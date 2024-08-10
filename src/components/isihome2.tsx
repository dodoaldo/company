import Image from "next/image";

export default function IsiHome2() {
  return (
    <div className="bg-slate-600 flex justify-between">
      <div className="w-[40%] ml-[15%] text-white col-start-2">
        <p className="text-4xl pt-[20%]">30 years of bespoke oak</p>
        <p className="my-[2%] tracking-tightest">
          For more than three decades, our creative design and high-quality
          craftsmanship has resulted in a wide range of both contemporary and
          period oak framed buildings.
        </p>
        <p className="my-[2%] tracking-tightest">
          Whether your vision is for a full oak-framed home or an extension to
          your existing home, our artisans design and construct everything from
          orangeries and conservatories to swimming pools and garden rooms.
        </p>
      </div>

        <Image className="my-[2%]" src="https://th.bing.com/th/id/OIP.3rAY-UFQha_rrXCEP3G8CwHaGV?rs=1&pid=ImgDetMain" alt="Tree image" />
      <div>
            
      </div>
    </div>
  );
}
