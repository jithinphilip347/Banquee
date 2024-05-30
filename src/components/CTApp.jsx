import { PiCheckBold } from "react-icons/pi";
import Noise from '../assets/noise.png';
import Contactless from '../assets/signal.png';
import  Visa from '../assets/visa.png';
import { RiUserShared2Line } from "react-icons/ri";
import { RiUserReceived2Line } from "react-icons/ri";
import { FaApple } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import Appstore from '../assets/appstore.png';
import Playstore from '../assets/playstore.png';



const CTApp = () => {
  return (
    <div className=" h-screen ">
   <div className=" bg-customGreen w-[1200px] h-[550px] rounded-2xl relative top-[600px] left-[95px] overflow-hidden">
     <div className="flex items-center justify-between px-20">
      <div className=" w-[400px] relative bottom-56">
       <h1 className="leading-[60px] text-5xl font-sans font-semibold  text-white">One app. <br />One banking.</h1>
       <p className=" text-sm font-sans relative top-6  text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
        <div>
        <div className=" flex gap-6 relative top-16 left-3 font-medium  text-base font-sans ">
         <div className=" flex flex-col gap-3 text-white">
         <div className=" flex items-center gap-2">
          <PiCheckBold className=" text-white w-6 h-6 p-1 rounded-full bg-babyAquva	"/>
           <p>Instant transactions</p>
          </div>
          <div className=" flex items-center gap-2">
          <PiCheckBold className=" text-white w-6 h-6 p-1 font-bold rounded-full bg-babyAquva"/>
           <p>Saving accounts</p>
          </div>
         </div>
         <div className=" flex flex-col gap-3 text-white">
         <div className=" flex items-center gap-2">
          <PiCheckBold className=" text-white w-6 h-6 p-1 rounded-full bg-babyAquva"/>
           <p>Payments worldwide</p>
          </div>
          <div className=" flex items-center gap-2">
          <PiCheckBold className=" text-white w-6 h-6 p-1 rounded-full bg-babyAquva"/>
           <p>100% mobile banking</p>
          </div>
         </div>
        </div>
        <div className=" flex items-center relative top-28 gap-4 left-4">
          <img src={Appstore} alt="" className=" w-40 "/>
          <img src={Playstore} alt="" className=" w-44" />
        </div>
        </div>
      </div>
      <div className="  relative left-10">
      <div className=" flex flex-col rounded-[45px]	 border-4 border-black w-96 h-[860px] relative top-20 right-20 bg-white ">
            <div className="flex items-center gap-3 relative top-7 left-16 ">
                <p className=" text-sm">Current balance</p>
                <h2 className="font-semibold text-base leading-3">$ 4.658,50</h2>
                </div>
                <div>
                <div className='  bg-blend-screen relative bg-gradient-to-r from-customGray1 to-customGray2 w-80 h-52 rounded-xl left-7 top-14 '>
                    <img src={Noise} alt="" className="object-fill w-60 h-40 opacity-5 "  />
                    <div className=" flex items-center gap-2 relative bottom-36 justify-between p-3">
                        <h2 className="text-white text-xl font-sans leading-3 font-semibold">banquee.</h2>
                        <img src={Contactless} alt="contactless-icon"  className=" w-5 h-5"/>
                    </div>
                    <div>
                    <h2 className="font-kreditback text-2xl relative bottom-32 left-7  text-white font-semibold">1234 5678 9000 0000</h2>
                </div>
                <div className=" flex items-center justify-between relative bottom-28 text-white p-3">
                    <div className="flex flex-col ">
                        <p className="text-sm font-sans font-thin ">Card Holder</p>
                        <h2 className=" text-sm font-semibold ">John Doe</h2>
                    </div>
                    <div>
                        <p className="text-sm font-sans font-thin ">Expiry Date</p>
                        <h2 className=" text-sm font-semibold ">09/28</h2>
                    </div>
                    <div>
                        <img src={Visa} alt="" className="w-14 h-14" />
                    </div>
                </div>
                </div>
                
                </div>
                
                <div>
                <div className="flex item items-center relative top-16 left-5"> 
                 <div className=" flex items-center gap-2">
                 <div className="w-12 h-12 rounded-full bg-clearDay relative top-2">
                  <RiUserShared2Line className=" w-8 h-8 relative top-2 left-2 text-customGreen "/>     
                </div>
                <p className="text-sm font-inter font-semibold relative top-2">Send Money</p>
                 </div>
                 <div className=" flex items-center gap-2 relative left-4 ">
                 <div className="w-12 h-12 rounded-full bg-clearDay relative top-2">
                  <RiUserReceived2Line className=" w-8 h-8 relative top-2 left-2 text-customGreen "/>     
                </div>
                <p className=" text-sm font-inter font-semibold relative top-2">Receive Money</p>
                 </div>
                 </div>
                 <div>
                    <div className=" flex items-center relative top-20 justify-between px-8">
                        <p>Transactions</p>
                        <p className=" flex text-customGreen gap-2">View all
                        <FaArrowRight  className=" relative top-1"/>
                        </p>
                    </div>
                    <div className=" flex flex-col gap-3">
                        <div className="bg-customGray h-20 rounded-lg mx-7 relative top-20 flex items-center gap-4 p-4  ">
                        <div className=" w-12 h-12 bg-customGreen rounded-lg ">
                        <FaApple className=" text-white w-8 h-8 relative top-1 left-2"/>
                        </div>
                        <div className=" flex flex-col">
                        <p className=" text-lg font-inter font-semibold">Apple</p>
                        <p className=" font-inter text-sm">Electronic</p>
                        </div>   
                            <div className=" relative left-20">
                            <p className="text-xl font-semibold font-inter">-799$</p>
                            </div>
                        </div>
                    </div>
                    <div  >
                    </div>
                 </div>
                </div>
        </div>
      </div>
     </div>
   </div>
      </div>
  )
}

export default CTApp