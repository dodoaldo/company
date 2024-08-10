import Chat3 from "./chatbubble3";
import Chat from "./chatbubble";
import Chat2 from "./chatbubble2";

export default function Testimonial() {
  return (
    <div>
      <div className="flex items-center justify-center mt-20 mb-20">
        <div className="text-center w-[800px]">
          <p className="text-2xl tracking-widest font-bold">
            Paragon Oak understands the warmth, comfort and sheer beauty that
            oak provides.
          </p>
          <p className="mt-8">
            Strong, durable and versatile, an oak framed building is like a fine
            wine … it gets even better with age. What’s more, at a time when it
            is so vital to protect the environment, all our oak is
            sustainably-sourced. Working with such a wonderful material every
            day is an inspiration for our passionate craftsmen. Now it will be
            Paragon’s privilege to work with you to create the perfect oak frame
            for your home or business.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[1200px] flex items-center justify-between gap-20">
          <div className="w-[700px]">
            <p className="text-slate-700 text-2xl">Testimonials</p>
            <p className="text-3xl font-bold tracking-widest mt-4 mb-8">
              We love to take on complex challenges
            </p>
            <p className="mb-8">
              Paragon Oak’s award-winning reputation is testimony to more than
              30 years of experience and knowledge. During this time we have
              taken pride in delivering the finest-quality design combined with
              exemplary customer service. Importantly, we understand how the
              best solutions always come from developing a close, trusted
              relationship with clients. Don’t just take our word for it. Get
              inspired by taking a leaf from some of our delighted customers..
            </p>
          </div>
          <div>
            <img
              src="https://cdn.quotesgram.com/img/15/15/1533334940-featured_thesaidwhat_final_5501.jpg"
              alt="what they said"
            />
          </div>
        </div>
      </div>
      <div className="justify-center flex my-20">
        <Chat/>
        <Chat2/>
        <Chat3/>
      </div>
    </div>
  );
}
