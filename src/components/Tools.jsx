import Webflow from '../assets/webflow.png';
import Shopify from '../assets/shopify.png';
import Zapier from '../assets/zapier.png';
import Bitcoin from '../assets/bitcoin.png';
import Paypal from  '../assets/paypal.png';
import MasterCard from '../assets/mastercard.png';
import VisaCard from '../assets/visacard.png';
import Gpay from '../assets/gpay.png';
import ApplePay from '../assets/applepay.png';
import AmazonPay from '../assets/amazonpay.png';
import { PiCheckBold } from "react-icons/pi";





const Tools = () => {
  return (
    <div className=' h-full'>
     <div>
        <div className='flex flex-col gap-3 '>
            <div className=' flex gap-2 mx-28'>                
                <img src={Webflow} alt="" className=' w-[135px] h-[45px] bg-gray-100 px-6 py-2 rounded-lg' />              
                <img src={Shopify} alt="" className=' w-[135px] h-[45px] bg-gray-100 px-4   rounded-lg'/> 
                <img src={Zapier} alt="" className=' w-[135px] h-[45px] bg-gray-100 px-7 rounded-lg'/>  
                <img src={Bitcoin} alt="" className=' w-[135px] h-[45px] bg-gray-100 px-8 py-2 rounded-lg'/>               
            </div>
            <div className='flex items-center gap-2 mx-28'>
                <img src={Paypal} alt="" className=' w-[135px] h-[45px] bg-gray-100 px-6 py-2 rounded-lg' />
                <img src={MasterCard} alt="" className=' w-[135px] h-[45px] bg-gray-100 px-12    rounded-lg' />
                <img src={VisaCard} alt="" className=' w-[135px] h-[45px] bg-gray-100 px-8 py-2 rounded-lg' />
                <img src={Gpay} alt="" className=' w-[135px] h-[45px] bg-gray-100 px-8 py-2 rounded-lg' />
                <img src={ApplePay} alt="" className=' w-[135px] h-[45px] bg-gray-100 px-8 py-2 rounded-lg' />
                <img src={AmazonPay} alt="" className=' w-[135px] h-[45px] bg-gray-100  px-2  rounded-lg' />
            </div>
        </div>
        <div className=' flex items-center pr-48 mx-28 justify-between'>
            <div className='w-[500px] relative top-12'>
                <p className=" text-sm relative top-2">Tools</p>
                <h1 className="leading-[60px] text-5xl font-sans font-normal relative top-6">Seemless <br /> integration</h1>
                <p className=" text-base font-sans font-medium relative top-10">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>
            <div>
            <div className=" flex flex-col gap-3 relative top-32 left-3 font-medium  text-base font-sans ">
          <div className=" flex items-center gap-2">
          <PiCheckBold className=" text-customGreen w-5 h-5 p-1 rounded-full bg-LightGray"/>
           <p>Secure and encrypted integration</p>
          </div>
          <div className=" flex items-center gap-2">
          <PiCheckBold className=" text-customGreen w-5 h-5 p-1 rounded-full bg-LightGray"/>
           <p>Fully API interface</p>
          </div>
          <div className=" flex items-center gap-2">
          <PiCheckBold className=" text-customGreen w-5 h-5 p-1 rounded-full bg-LightGray"/>
           <p>Payments worldwide</p>
          </div>
        </div>
            </div>
        </div>
     </div>
     <hr className=' relative top-36' />
    </div>
  )
}

export default Tools