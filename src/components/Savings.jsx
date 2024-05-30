import { FaArrowRight } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";




const Savings = () => {
  return (
    <div className="h-screen  p-4 mx-36 my-32">
        <div >
           <div>
               <div className=" flex flex-col gap-6 w-[480px]">
                <p>Saving Accounts</p>
                <h1 className="leading-[70px] text-5xl font-sans font-normal">Organize your <br /> money the right way</h1>
                <p className=" text-base font-sans font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p className=" relative left-[700px] top-2 text-base font-inter text-customGreen flex gap-2">All Features<FaArrowRight className=" relative top-1"/></p>
               </div>
               <div className=" flex items-center gap-4 relative top-10">
                <div className="flex flex-col gap-5">                   
                 <div className=" w-40 h-40 bg-clearDay rounded-lg">
                    <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4bb.svg" alt="" className=" w-10 h-10 relative top-14 left-14" />
                 </div>
                 <div className=" flex flex-col gap-2">
                    <h2 className=" text-base font-sans font-semibold ">New Laptop</h2>
                    <p className=" text-sm text-gray-400 font-sans">400$</p>
                 </div>
                </div>

                <div className=" flex flex-col gap-5">                   
                 <div className=" w-40 h-40 bg-customLightrose rounded-lg">
                    <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f6b2.svg" alt="" className=" w-10 h-10 relative top-14 left-14" />
                 </div>
                 <div className=" flex flex-col gap-2">
                    <h2 className=" text-base font-sans font-semibold ">Dream bike</h2>
                    <p className=" text-sm text-gray-400 font-sans">200$</p>
                 </div>
                </div>

                <div className=" flex flex-col gap-5">                   
                 <div className=" w-40 h-40 bg-customLight rounded-lg ">
                    <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/2708.svg" alt="" className=" w-10 h-10 relative top-14 left-14" />
                 </div>
                 <div className=" flex flex-col gap-2">
                    <h2 className=" text-base font-sans font-semibold ">Holiday</h2>
                    <p className=" text-sm text-gray-400 font-sans">14000$</p>
                 </div>
                </div>

                <div className=" flex flex-col gap-5">                   
                 <div className=" w-40 h-40 bg-customLightsky rounded-lg">
                    <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4f8.svg" alt="" className=" w-10 h-10 relative top-14 left-14" />
                 </div>
                 <div className=" flex flex-col gap-2">
                    <h2 className=" text-base font-sans font-semibold ">Camera</h2>
                    <p className=" text-sm text-gray-400 font-sans">100$</p>
                 </div>
                </div>
                <div >                   
                 <div className=" w-40 h-40 bg-customLightgray rounded-lg relative bottom-9">
                 <FaCirclePlus className=" w-8 h-8 relative top-16 left-16"/>
                 </div>
                 <div>
                    
                 </div>
                </div>

               </div>
           </div>
           <div>

           </div>
        </div>
        
    </div>
  )
}

export default Savings