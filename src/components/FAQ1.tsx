import Image from "next/image"
import step1 from "../../public/images/1.png"
import step2 from "../../public/images/2.png"
import step3 from "../../public/images/3.png"
import arrow from "../../public/images/arrow.png"
import arrowDown from "../../public/images/arrow-down.png"
export default function FAQ1(){
    return(
<section className="lg:p-14 p-5 bg-white">
    <div>
      <h1 className=" font-mulish lg:text-7xl text-2xl text-[#353535] font-bold">
      How it Works?
      </h1>
      <p className="font-mulish font-light lg:pt-8 pt-2 text-[#353535CC] lg:text-3xl text-xl">
      Getting Started is Simple! Steps
      </p>
    </div>

    <div className="lg:pt-16 pt-10 flex lg:flex-row flex-col">

<div className="flex lg:flex-col items-start gap-5">
<div className="">
<Image className="lg:w-24 lg:h-24 w-14 h-14"  src={step1} alt="step1"/>
</div>
<div className="-mt-6 lg:mt-0">
    <h1 className="text-[#353535] pt-10 lg:text-4xl text-xl font-bold font-mulish">
    Create Your Profile
    </h1>
    <p className="font-mulish lg:text-3xl text-xl text-[#353535CC] lg:pt-10 pt-2"> 
    Share your interests and skills.
    </p>
</div>
</div>
<div className="pr-10 lg:block hidden">
    <Image className="h-16 w-16"  src={arrow} alt=""/>
</div>
<div className="pl-4 pb-4 lg:hidden block">
    <Image className="h-6 w-6"  src={arrowDown} alt=""/>
</div>
<div className="flex lg:flex-col items-start gap-5">
<div >
<Image className="lg:w-24 lg:h-24 w-14 h-14"  src={step2} alt="step2"/>
</div>
<div className="-mt-6 lg:mt-0">
    <h1 className="text-[#353535] pt-10 lg:text-4xl text-xl font-bold font-mulish">
    Join Groups
    </h1>
    <p className="font-mulish lg:text-3xl text-xl text-[#353535CC] lg:pt-10 pt-2"> 
    Find your niche or share opportunities.
    </p>
</div>
<div>

</div>
</div>

<div className="pr-10 lg:block hidden">
    <Image className="h-16 w-16"  src={arrow} alt=""/>
</div>
<div className="pl-4 pb-4 lg:hidden block">
    <Image className="h-6 w-6"  src={arrowDown} alt=""/>
</div>
<div className="flex lg:flex-col items-start gap-5">
<div className="">
<Image className="lg:w-24 lg:h-24 w-14 h-14"  src={step3} alt="step3"/>
</div>
<div className="-mt-6 lg:mt-0">
    <h1 className="text-[#353535] pt-10 lg:text-4xl text-xl font-bold font-mulish">
    Connect and Collaborate
    </h1>
    <p className="font-mulish lg:text-3xl text-xl text-[#353535CC] lg:pt-10 pt-2"> 
    Arrange meetups and build relationships.
    </p>
</div>
<div>

</div>
</div>

    </div>
</section>
    )
}