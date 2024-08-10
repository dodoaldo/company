"use client";


import Teamcard from "@/components/teamcard";
import Teamcard2 from "@/components/teamcard2";
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
          <Teamcard2/>
          <Teamcard2/>
          <Teamcard2/>
          <Teamcard/>
          <Teamcard/>
          <Teamcard/>
        </div>
      </div>
      
    </div>
  );
}
