import ContohProduct from "@/components/contoh-product";
import ContohProduct1 from "@/components/contoh-product1";
import Testimonial from "@/components/testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paragon Oak | Product",
  description: "Learn more about our Product on this page.",
};


export default function ProductPage() {
  return (
    <div>
      <div id="company-overview">
        <ContohProduct1 />
      </div>
      <div >
        <ContohProduct />
      </div>
      <div>
        <Testimonial />
      </div>
    </div>
  );
}
