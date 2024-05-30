import { FaChartLine } from "react-icons/fa6";
import { RiSafe2Fill } from "react-icons/ri";
import { MdCreditCard } from "react-icons/md";
import { IoWifiSharp } from "react-icons/io5";
import { FiSmartphone } from "react-icons/fi";
import Noise from '../assets/noise.png';
import Contactless from '../assets/signal.png';
import  Visa from '../assets/visa.png';
import { RiUserShared2Line } from "react-icons/ri";
import { RiUserReceived2Line } from "react-icons/ri";
import { FaApple } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { RiHome2Line } from "react-icons/ri";
import { LuCircleDollarSign } from "react-icons/lu";
import { FiUser } from "react-icons/fi";



const Feature = () => {
  return (
    <div className=" flex  gap-14 h-full px-40 m-28 ">
      <div className="w-[600px] ">
        <div>
          <h1 className="leading-[70px] text-6xl  font-normal">
            One app.
            <br />
            One banking.
          </h1>
        </div>

        <div className="flex gap-4 relative top-2">
          <div className=" w-60  h-60 border-2 p-5 flex flex-col relative top-8 rounded-xl ">
            <div className="w-14 h-14 rounded-full bg-clearDay relative top-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=" w-10 h-10 relative top-2 left-2 text-customGreen "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                />
              </svg>
            </div>
            <div className="font-inter">
              <h4 className="text-base font-semibold relative top-7">
                Instant transactions
              </h4>
              <p className="relative top-10 text-sm">
                Odio euismod lacinia at quis. Amet purus gravida quis blandit
                turpis.
              </p>
            </div>
          </div>
          <div className=" w-60  h-60 border-2 p-5 flex flex-col relative top-8 rounded-xl ">
            <div className="w-14 h-14 rounded-full bg-clearDay relative top-2">
            <RiSafe2Fill className=" w-10 h-10 relative top-2 left-2 text-customGreen " />
            </div>
            <div className="font-inter">
              <h4 className="text-base font-semibold relative top-7">
              Saving accounts
              </h4>
              <p className="relative top-10 text-sm">
                Odio euismod lacinia at quis. Amet purus gravida quis blandit
                turpis.
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 relative top-6">
          <div className=" w-60  h-60 border-2 p-5 flex flex-col relative top-8 rounded-xl ">
            <div className="w-14 h-14 rounded-full bg-clearDay relative top-2">
            <FiSmartphone className=" w-10 h-10 relative top-2 left-2 text-customGreen "/>

            </div>
            <div className="font-inter">
              <h4 className="text-base font-semibold relative top-7">
              Mobile banking
              </h4>
              <p className="relative top-10 text-sm">
                Odio euismod lacinia at quis. Amet purus gravida quis blandit
                turpis.
              </p>
            </div>
          </div>
          <div className=" w-60  h-60 border-2 p-5 flex flex-col relative top-8 rounded-xl ">
            <div className="w-14 h-14 rounded-full bg-clearDay relative top-2">
            <FaChartLine className=" w-10 h-10 relative top-2 left-2 text-customGreen "/>
            </div>
            <div className="font-inter">
              <h4 className="text-base font-semibold relative top-7">
              Advanced statistics
              </h4>
              <p className="relative top-10 text-sm">
                Odio euismod lacinia at quis. Amet purus gravida quis blandit
                turpis.
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 relative top-10">
          <div className=" w-60  h-60 border-2 p-5 flex flex-col relative top-8 rounded-xl ">
            <div className="w-14 h-14 rounded-full bg-clearDay relative top-2">
            <MdCreditCard className=" w-10 h-10 relative top-2 left-2 text-customGreen "/>
            </div>
            <div className="font-inter">
              <h4 className="text-base font-semibold relative top-7">
              Virtual cards
              </h4>
              <p className="relative top-10 text-sm">
                Odio euismod lacinia at quis. Amet purus gravida quis blandit
                turpis.
              </p>
            </div>
          </div>
          <div className=" w-60  h-60 border-2 p-5 flex flex-col relative top-8 rounded-xl ">
            <div className="w-14 h-14 rounded-full bg-clearDay relative top-2">
            <IoWifiSharp className=" w-10 h-10 relative top-2 left-2 text-customGreen "/>
            </div>
            <div className="font-inter">
              <h4 className="text-base font-semibold relative top-7">
              Contactless payments
              </h4>
              <p className="relative top-10 text-sm">
                Odio euismod lacinia at quis. Amet purus gravida quis blandit
                turpis.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[600px]">
        <div className=" flex flex-col rounded-[45px]	 border-4 border-black w-96 h-[860px] relative top-2">
            <div className="flex items-center gap-3 relative top-7 left-16 ">
                <p className=" text-sm">Current balance</p>
                <h2 className="font-semibold text-base leading-3">$ 4.658,50</h2>
                </div>
                <div>
                <div className='  bg-blend-screen relative bg-gradient-to-r from-customGray1 to-customGray2 w-80 h-48 rounded-xl left-7 top-16 '>
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
                <div className="flex item items-center relative top-24 left-7"> 
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
                    <div className=" flex items-center relative top-28 justify-between px-8">
                        <p>Transactions</p>
                        <p className=" flex text-customGreen gap-2">View all
                        <FaArrowRight  className=" relative top-1"/>
                        </p>
                    </div>
                    <div className=" flex flex-col gap-3">
                        <div className="bg-customGray h-20 rounded-lg mx-7 relative top-32 flex items-center gap-4 p-4  ">
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
                        <div className="bg-customGray h-20 rounded-lg mx-7 relative top-32 flex items-center gap-4 p-4  ">
                        <div className=" w-12 h-12 bg-customGreen rounded-lg ">
                        <FaGoogle className=" text-white w-8 h-8 relative top-2 left-2"/>
                        </div>
                        <div className=" flex flex-col">
                        <p className=" text-lg font-inter font-semibold">Google Play Store</p>
                        <p className=" font-inter text-sm">Apps</p>
                        </div>   
                            <div className=" relative left-2">
                            <p className="text-xl font-semibold font-inter">-49$</p>
                            </div>
                        </div>
                        <div className="bg-customGray h-20 rounded-lg mx-7 relative top-32 flex items-center gap-4 p-4  ">
                        <div className=" w-12 h-12 bg-customGreen rounded-lg ">
                        <FaAmazon className=" text-white w-8 h-8 relative top-2 left-2"/>
                        </div>
                        <div className=" flex flex-col">
                        <p className=" text-lg font-inter font-semibold">Amazon</p>
                        <p className=" font-inter text-sm">Shopping</p>
                        </div>   
                            <div className=" relative left-24">
                            <p className="text-xl font-semibold font-inter">-59$</p>
                            </div>
                        </div>
                        <div className="bg-customGray h-20 rounded-lg mx-7 relative top-32 flex items-center gap-4 p-4  ">
                        <div className=" w-12 h-12 bg-customGreen rounded-lg ">
                        <FaTwitter className=" text-white w-8 h-8 relative top-2 left-2"/>
                        </div>
                        <div className=" flex flex-col">
                        <p className=" text-lg font-inter font-semibold">Twitter</p>
                        <p className=" font-inter text-sm">Ads</p>
                        </div>   
                            <div className=" relative left-28">
                            <p className="text-xl font-semibold font-inter">-9$</p>
                            </div>
                        </div>
                    </div>
                    <div  >
                        <div className="flex items-center relative top-[142px] px-9 gap-10">
                            <div className="flex flex-col items-center gap-2">
                            <RiHome2Line className=" w-7 h-7 text-customGreen"/>
                            <p className=" text-sm font-sans font-medium text-customGreen ">Home</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                            <LuCircleDollarSign className="w-7 h-7"/>
                            <p className=" text-sm font-sans font-medium ">Savings</p>
                            </div>
                        <div className="flex flex-col items-center gap-2">
                        <MdCreditCard className="w-7 h-7"/>
                        <p className=" text-sm font-sans font-medium ">Cards</p>
                        </div>
                       <div className="flex flex-col items-center gap-2">
                       <FiUser className="w-7 h-7"/>
                       <p className=" text-sm font-sans font-medium ">Account</p>
                       </div>
                        </div>
                    </div>
                 </div>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
