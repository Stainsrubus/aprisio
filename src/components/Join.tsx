import { RiArrowRightLine } from "react-icons/ri"
import join from "../../public/images/join-comunity.png"
import Image from "next/image"
import joinSmall from "../../public/images/join-small.png"
export default function Join(){

    return(
        <section className="relative">
            <div className="relative lg:block hidden">
                <Image src={join} className="w-full h-[560px]" alt="image" />
            </div>
            <div className="relative block lg:hidden">
                <Image src={joinSmall} className="w-full h-[680px]" alt="image" />
            </div>
            <div className="absolute inset-0 flex lg:top-36 lg:left-24 -top-64 items-center justify-center lg:justify-start">
        <button className="flex py-5 text-2xl pl-6 pr-4 font-mulish font-bold bg-[#F0B73F] rounded-full justify-center items-center gap-5">
          Join Community
          <span className="text-white bg-[#00000029] rounded-full p-1">
            <RiArrowRightLine className="w-6 h-6" />
          </span>
        </button>
      </div>
        </section>
    )
}