
import Introhome from "@/components/introhome";
import IsiHome from "@/components/isihome";
import IsiHome2 from "@/components/isihome2";
import Testimonial from "@/components/testimonial";
import { Metadata } from "next";



export default function Home() {
  return (
    <main >
      <div id="company-overview">
      <Introhome/>

      </div>
      <IsiHome />
      
      <IsiHome2/>
      <Testimonial/>

    </main>
  );
}
