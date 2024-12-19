import Image from "next/image"
import mail from "../../public/images/mail.png"
import location from "../../public/images/location.png"
import instagram from "../../public/images/Instagram.png"
import facebook  from "../../public/images/facebook.png"
import twitter from "../../public/images/twitter.png"
export default function Footer() {
    return (
        <section className="">
            <div className="bg-white  lg:grid-cols-3 grid-cols-1 gap-9 lg:gap-0 grid py-14  lg:px-24 px-5">
            <div className="w-1/3">
                <h1 className="text-[#043A53] lg:text-3xl text-2xl  pb-4  lg:pb-8 font-roboto font-semibold">
                    Aprisio
                </h1>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3"> 
                        <Image className="w-6 h-6" src={mail} alt="email"/>
                        <p className="text-[#353535E3] font-sans lg:text-2xl text-xl">aprisio@gmail.com</p>
                    </div>
                    <div className="flex items-center gap-3">
                    <Image className="w-6 h-6" src={location} alt="email"/>
                        <p className="text-[#353535E3] font-sans lg:text-2xl text-xl">
                            Banglore
                        </p>
                    </div>
                </div>
            </div>
            {/* about */}
            <div>
                <h1 className="text-[#043A53] font-roboto font-semibold lg:text-3xl text-2xl lg:pb-8 pb-4">
                    About Us
                </h1>
                <p className="text-[#353535E3] font-sans lg:text-2xl text-xl">
                    Aprisio is a community for individuals aged 50+ to explore shared interests, foster meaningful connections, and discover job opportunities that value their experience.
                </p>
                {/* social icons */}
                <div className="flex pt-5 lg:gap-5 gap-3">
                    <Image className="w-10 h-10" src={instagram} alt="email"/>
                    <Image className="w-10 h-10" src={facebook} alt="email"/>
                    <Image className="w-10 h-10" src={twitter} alt="email"/>
                </div>
            </div>

            {/* Navigations */}
            <div className="flex flex-col lg:items-end">
                <div>
                <h1 className="text-[#043A53] lg:pb-8 pb-4 font-roboto lg:text-3xl text-2xl font-semibold">
                    Navigations
                </h1>
                <ul className="flex flex-col gap-4">
                    <li className="lg:text-2xl text-xl text-[#353535E3]">Home</li>
                    <li className="lg:text-2xl text-xl text-[#353535E3]">About Us</li>
                    <li className="lg:text-2xl text-xl text-[#353535E3]">Community</li>
                    <li className="lg:text-2xl text-xl text-[#353535E3]">Job</li>
                    <li className="lg:text-2xl text-xl text-[#353535E3]">Contact</li>
                </ul>
                </div>
               
            </div>
            </div>
         

            <div className=" font-mulish text-xl text-[#043A53] lg:px-24 lg:py-7 py-3 px-3 flex md:justify-between justify-center  items-center">
                <p className="md:block hidden">Aprisio</p>
                <p className="md:text-xl text-base ">Privacy Policy , Terms & Conditions</p>
                <p className="md:block hidden">
                    2024
                </p>
            </div>
        </section>
    )
}