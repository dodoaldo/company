import Intro from "@/components/intro";
import Isi from "@/components/isi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paragon Oak | About Us",
  description: "Learn more about us on this page.",
};

export default function AboutUsPage() {
  return (
    <div id="company-overview">
      <Intro />
      <Isi />
    </div>
  );
}
