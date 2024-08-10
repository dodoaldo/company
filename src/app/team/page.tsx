"use client";


import Teamcard3 from "@/components/teamcard3";
import Teamcard4 from "@/components/teamcard4";

;



export default function TeamPage() {
  return (
    <div>
      <div className="flex justify-center items-center my-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-[1400px] relative">
          <Teamcard4/>
         
          <Teamcard3/>
          <Teamcard3/>
        </div>
      </div>
      
    </div>
  );
}
