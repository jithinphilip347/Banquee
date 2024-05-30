import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";


const Notification = () => {
  return (
    <div className=" h-screen">
        <div className="flex items-center justify-between p-36">
            <div className=" w-[500px] relative bottom-48">
             <div className=" flex flex-col gap-5">
                <p className=" text-sm">Notifications</p>
                <h1 className="leading-[70px] text-5xl font-sans font-normal">Stay notified</h1>
                <p className=" text-base font-sans font-medium">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
             </div>
             <div>
             <div className=" flex flex-col gap-3 relative top-14 left-3 font-inter">
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
             <div>
             <p className=" relative left-[20px] top-28 text-base font-inter text-customGreen flex gap-2">Compare Cards<FaArrowRight className=" relative top-1"/></p>

             </div>
            </div>
            <div className=" flex flex-col relative bottom-32 gap-4 ">
            <div className="bg-customGray h-20 w-96 rounded-lg  flex gap-5">
                        <div className=" w-12 h-12 bg-customGreen rounded-lg relative top-4 left-4 ">
                        <p className=" text-3xl font-sans font-bold text-white w-9 h-9 relative top-2 left-2">b.</p>
                        </div>
                        <div className=" flex flex-col relative top-4 left-4 ">
                        <p className=" text-sm font-bold font-sans">Banko.</p>
                        <p className=" font-sans text-sm ">You payment of 49€ has been processed!</p>
                        </div>                            
         </div>
         <div className="bg-customGray h-20 w-96 rounded-lg  flex gap-5">
                        <div className=" w-12 h-12 bg-customGreen rounded-lg relative top-4 left-4 ">
                        <p className=" text-3xl font-sans font-bold text-white w-9 h-9 relative top-2 left-2">b.</p>
                        </div>
                        <div className=" flex flex-col relative top-4 left-4 ">
                        <p className=" text-sm font-bold font-sans">Banko.</p>
                        <p className=" font-sans text-sm ">You payment of 49€ has been processed!</p>
                        </div>                            
         </div>
         <div className="bg-customGray h-20 w-96 rounded-lg  flex gap-5">
                        <div className=" w-12 h-12 bg-customGreen rounded-lg relative top-4 left-4 ">
                        <p className=" text-3xl font-sans font-bold text-white w-9 h-9 relative top-2 left-2">b.</p>
                        </div>
                        <div className=" flex flex-col relative top-4 left-4 ">
                        <p className=" text-sm font-bold font-sans">Banko.</p>
                        <p className=" font-sans text-sm ">You payment of 49€ has been processed!</p>
                        </div>                            
         </div>
         <div className="bg-customGray h-20 w-96 rounded-lg  flex gap-5">
                        <div className=" w-12 h-12 bg-customGreen rounded-lg relative top-4 left-4 ">
                        <p className=" text-3xl font-sans font-bold text-white w-9 h-9 relative top-2 left-2">b.</p>
                        </div>
                        <div className=" flex flex-col relative top-4 left-4 ">
                        <p className=" text-sm font-bold font-sans">Banko.</p>
                        <p className=" font-sans text-sm ">You payment of 49€ has been processed!</p>
                        </div>                            
         </div>
         <div className="bg-customGray h-20 w-96 rounded-lg  flex gap-5">
                        <div className=" w-12 h-12 bg-customGreen rounded-lg relative top-4 left-4 ">
                        <p className=" text-3xl font-sans font-bold text-white w-9 h-9 relative top-2 left-2">b.</p>
                        </div>
                        <div className=" flex flex-col relative top-4 left-4 ">
                        <p className=" text-sm font-bold font-sans">Banko.</p>
                        <p className=" font-sans text-sm ">You payment of 49€ has been processed!</p>
                        </div>                            
         </div>
            </div>
        </div>
    </div>
  )
}

export default Notification