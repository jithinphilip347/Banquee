import { IoIosCall } from "react-icons/io";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";


const Help = () => {
  return (
    <div className="h-screen">
        <div className=" flex items-center relative top-[600px] mx-44 justify-between">
            <div className=" flex flex-col gap-6">
                <h1 className="leading-[60px] text-5xl font-sans font-semibold ">Need help?</h1>
                <div className=" flex items-center gap-2">
                 <div className="w-12 h-12 rounded-full bg-clearDay relative top-2">
                  <IoIosCall className=" w-8 h-8 relative top-2 left-2 text-customGreen "/>     
                </div>
                <div className=" flex flex-col gap-3">
                <p className="text-sm font-inter font-semibold relative top-2">+49 176 123 456</p>
                <p className=" font-sans font-light text-gray-400 ">Support Hotline</p>
                </div>
                 </div >
                 <div className=" flex items-center gap-2">
                 <div className="w-12 h-12 rounded-full bg-clearDay relative top-2">
                  <IoMailUnreadOutline className=" w-8 h-8 relative top-2 left-2 text-customGreen "/>     
                </div>
                <div className=" flex flex-col gap-3">
                <p className="text-sm font-inter font-semibold relative top-2">help@banquee.com</p>
               <p className=" font-sans font-light text-gray-400 ">Support Email</p>
                </div>
                 </div>
                 <div>
                 <p className=" flex text-customGreen gap-2 relative left-4">Support all
                        <FaArrowRight  className=" relative top-1"/>
                        </p>
                 </div>
            </div>
            <div className=" flex items-center ">
                <div className=" flex flex-col gap-2 relative top-24">
                    <h1 className=" flex justify-between leading-[60px] text-xl font-sans font-semibold ">How do I open an Banko account?<FiPlus className=" relative top-5 text-customGreen" /></h1>
                    <hr />
                    <h1 className="flex justify-between leading-[60px] text-xl font-sans font-semibold">How do I order a new card?<FiPlus className=" relative top-5 text-customGreen"/> </h1>
                    <hr />
                    <h1 className="flex justify-between leading-[60px] text-xl font-sans font-semibold">How to change my account limits?<FiPlus className=" relative top-5 text-customGreen"/></h1>
                    <hr />
                    <h1 className="flex justify-between leading-[60px] text-xl font-sans font-semibold">How does Banko premium works?<IoCloseSharp className=" relative top-5 text-customGreen"/></h1>
                    <p className=" w-[580px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Dui accumsan sit amet nulla facilisi morbi. 
                        Eget gravida cum sociis natoque penatibus et magnis dis parturient.
                    </p>
                    <hr />
                    <h1 className=" flex justify-between leading-[60px] text-xl font-sans font-semibold">Can I have two Banko accounts?<FiPlus className=" relative top-5 text-customGreen"/></h1>
                </div>
                <div>   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Help
