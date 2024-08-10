import Image from "next/image";

export default function Isi() {
  return (
    <div id="company-overview">
      <div className=" h-[600px] bg-cover justify-between flex">
        <div className="w-[650px] text-green-950 p-28 ">
          
          <p className="font-extrabold text-5xl mb-6">
            Roots are vital in anchoring the tree in the ground
          </p>
          <p>
            Determining its alignment and providing nutrients to grow. Paragon
            Oaks family of inventors, visionaries and exemplary craftsmen live
            and breathe these foundations to achieve success. Our team strives
            to sow passion, strength and determination, thus ensuring every
            project grows from start to finish with a precision and beauty that
            will last a lifetime.
          </p>
          
        </div>
        <div className="gambar-overflow mr-22 mt-28">
          <Image
            src="https://www.welshoakframe.com/wp-content/uploads/2023/04/NJY_DSC6721-400x400.jpg"
            alt="rumah2"
            width={400}
            height={200}
          />
        </div>
      </div>
      <div className=" text-green-950 flex justify-between mx-[300px] mb-10">
        <Image
          className="w-[400px] h-[400px] relative"
          src="https://th.bing.com/th/id/OIP.HnylDfN1gCG8ebP__W2T4AHaH9?pid=ImgDet&w=161&h=173&c=7"
          alt="rumah3"
          width={400}
      height={400}
        />
        <h1 className="mb-6 w-[650px]">
          <p className="font-extrabold text-5xl">
            We combine technical expertise,
          </p>
          <p className="italic font-extrabold text-5xl">master craftsmanship</p>
          <p className="font-extrabold text-5xl mb-4">
            and sustainable materials
          </p>
          <p className="text-2xl font-bold mb-6">
            All while working closely with you to bring your dreams to life.
          </p>
          
          <p>
            We at Paragon Oak are proud that the majority of our new projects
            come from client referrals. We take pride in our ability to tailor
            the perfect customer experience whether you want to fully immerse
            yourself in the conceptual process of creating something beautiful
            or by trusting our expert team to design and transform your space in
            style.
          </p>
          
        </h1>
      </div>
      <div className="kotak w-[1200px] h-[500px] mx-auto ">
        <p className="text-white text-center tracking-wider font-mono w-[700px] ml-24 text-2xl">
          We continuously strive to develop new techniques that place us at the
          forefront of the oak-framing industry.
        </p>
        <Image
          className="h-[400px] w-[200px] mr-5 relative"
          src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/marvel-studios-cinematic-universe/1/16/Groot_textless.jpg"
          alt=""
          width={400}
      height={400}
        />
      </div>
      <div>
        <div className="w-[1200px] h-[500px] mx-auto flex justify-between">
          <h1 className="font-bold text-4xl w-[400px] my-auto mx-5">
            <p>We are inventors,</p>
            <p className="italic"> visionaries and exemplary craftsmen</p>
          </h1>
          <h1 className="w-[400px] my-auto mx-5">
            <p className="text-slate-500 tracking-wider">Managing Director</p>
            <p className="tracking-widest text-amber-900 mb-6">Groot</p>
            <p className="tracking-tight mb-4">
            &quot;Quality is the word that I believe best describes our work and it
              is the foundation on which this company has been built. Knowing
              that any frame isn't completed to the highest standard possible,
              is something I just could not accept.&quot;
            </p>
            <p className="tracking-tight">
            &quot;I take great pride in what we have achieved over the years and we
              will continue with the same drive and ambition that has served us
              well, for many years to come.&quot;
            </p>
            
          </h1>
        </div>
      </div>
     
    </div>
  );
}
