import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaDropbox } from "react-icons/fa";
import { SiPaypal } from "react-icons/si";


const Transaction = () => {
  return (
    <div className=" flex bg-clearDay h-screen ">
     <div className=" w-[900px] gap-14 px-40  py-28">
        <div className=" flex flex-col gap-6">
            <h1 className="leading-[70px] text-5xl font-sans font-normal">Send & receive <br /> money instantly</h1>
            <p className=" font-inter font-base font-medium leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et.</p>
        </div>
        <div className=" flex flex-col gap-3 relative top-6 left-3 font-inter">
          <div className=" flex items-center gap-2">
          <IoCheckmarkCircleSharp className=" text-customGreen w-5 h-5"/>
           <p>Malesuada Ipsum</p>
          </div>
          <div className=" flex items-center gap-2">
          <IoCheckmarkCircleSharp className=" text-customGreen w-5 h-5"/>
           <p>Vestibulum</p>
          </div>
          <div className=" flex items-center gap-2">
          <IoCheckmarkCircleSharp className=" text-customGreen w-5 h-5"/>
           <p>Parturient Lorem</p>
          </div>
        </div>
     </div>
     <div className=" w-[600px] relative right-[140px] bottom-16 ">
        <div className=" flex flex-col gap-3">
        <div className="bg-customGray h-20 rounded-lg mx-7 relative top-32 flex items-center gap-4 p-4  ">
                        <div className=" w-12 h-12 bg-customGreen rounded-lg ">
                        <FaApple className=" text-white w-8 h-8 relative top-1 left-2"/>
                        </div>
                        <div className=" flex flex-col">
                        <p className=" text-lg font-inter font-semibold">Apple</p>
                        <p className=" font-inter text-sm">Macbook</p>
                        </div>   
                            <div className=" relative left-52">
                            <p className="text-xl font-semibold font-inter">-999€</p>
                            </div>
         </div>
         <div className="bg-customGray h-20 rounded-lg mx-7 relative top-32 flex items-center gap-4 p-4  ">
                        <div className=" w-12 h-12 bg-customGreen rounded-lg ">
                        <FaAmazon className=" text-white w-8 h-8 relative top-1 left-2"/>
                        </div>
                        <div className=" flex flex-col">
                        <p className=" text-lg font-inter font-semibold">Amazon</p>
                        <p className=" font-inter text-sm">Electronics</p>
                        </div>   
                            <div className=" relative left-52">
                            <p className="text-xl font-semibold font-inter">-49€</p>
                            </div>
         </div>
         <div className="bg-customGray h-20 rounded-lg mx-7 relative top-32 flex items-center gap-4 p-4  ">
                        <div className=" w-12 h-12 bg-customGreen rounded-lg ">
                        <FaTwitter className=" text-white w-8 h-8 relative top-1 left-2"/>
                        </div>
                        <div className=" flex flex-col">
                        <p className=" text-lg font-inter font-semibold">Twitter</p>
                        <p className=" font-inter text-sm">Ads</p>
                        </div>   
                            <div className=" relative left-56">
                            <p className="text-xl font-semibold font-inter">-29€</p>
                            </div>
         </div>
         <div className="bg-customGray h-20 rounded-lg mx-7 relative top-32 flex items-center gap-4 p-4  ">
                        <div className=" w-12 h-12 bg-customGreen rounded-lg ">
                        <FaApple className=" text-white w-8 h-8 relative top-1 left-2"/>
                        </div>
                        <div className=" flex flex-col">
                        <p className=" text-lg font-inter font-semibold">Microsoft</p>
                        <p className=" font-inter text-sm">Office Suite</p>
                        </div>   
                            <div className=" relative left-48">
                            <p className="text-xl font-semibold font-inter">-149€</p>
                            </div>
         </div>
         <div className="bg-customGray h-20 rounded-lg mx-7 relative top-32 flex items-center gap-4 p-4  ">
                        <div className=" w-12 h-12 bg-customGreen rounded-lg ">
                        <FaDropbox className=" text-white w-8 h-8 relative top-2 left-2"/>
                        </div>
                        <div className=" flex flex-col">
                        <p className=" text-lg font-inter font-semibold">Dropbox</p>
                        <p className=" font-inter text-sm">Cloud</p>
                        </div>   
                            <div className=" relative left-52">
                            <p className="text-xl font-semibold font-inter">-14€</p>
                            </div>
         </div>
         <div className="bg-customGray h-20 rounded-lg mx-7 relative top-32 flex items-center gap-4 p-4  ">
                        <div className=" w-12 h-12 bg-customGreen rounded-lg ">
                        <SiPaypal className=" text-white w-8 h-8 relative top-2 left-2"/>
                        </div>
                        <div className=" flex flex-col">
                        <p className=" text-lg font-inter font-semibold">Paypal</p>
                        <p className=" font-inter text-sm">Shopping</p>
                        </div>   
                            <div className=" relative left-52">
                            <p className="text-xl font-semibold font-inter">-200€</p>
                            </div>
         </div>

        </div>
     </div>
    </div>
  )
}

export default Transaction