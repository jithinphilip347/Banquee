import Noise from '../assets/noise.png';
import Contactless from '../assets/signal.png';
import  Visa from '../assets/visa.png';


const Hero = () => {
  return (
    <div className=" bg-clearDay h-screen  overflow-hidden">
<div className="flex flex-col items-center justify-center h-auto md:h-[400px] px-4">
  <div className="text-center font-sans py-4">
    <p className="text-sm md:text-md font-medium leading-7 md:leading-10 relative bottom-1 md:bottom-3">Features</p>
    <h1 className="text-4xl md:text-6xl leading-tight md:leading-10 font-medium tracking-wide">All in one card.</h1>
  </div>
  <div className="text-center text-sm md:text-md font-medium leading-6 md:leading-7 font-inter py-2 md:py-4">
    <p>Senectus et netus et malesuada fames ac turpis.</p>
    <p>Sagittis vitae et leo duis ut diam.</p>
  </div>
  <div className="flex  md:flex-row items-center justify-center gap-2 md:gap-5 font-inter text-sm font-normal leading-7 py-2 md:py-4">
    <button className="bg-customGreen text-white rounded-md h-10 w-36">Open Account</button>
    <p className="flex items-center gap-1 md:gap-3 text-customGreen hover:cursor-pointer">
      Compare Cards
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className="w-4 md:w-5 h-4 md:h-5"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" 
        />
      </svg>
    </p>
  </div>
</div>

   <div className=" flex gap-2">
    <div className=''>
    <div className='  bg-blend-screen relative bg-gradient-to-r from-customCream1 to-customCream2 w-96 h-72  right-[122px] rounded-xl top-[155px]  rotate-90'>
                    <img src={Noise} alt="" className="object-fill w-60 h-40 opacity-5 "  />
                    <div className=" flex items-center gap-2 relative  bottom-32 justify-between px-8">
                        <h2 className="text-white text-xl font-sans leading-3 font-semibold">banquee.</h2>
                        <img src={Contactless} alt="contactless-icon"  className=" w-5 h-5"/>
                    </div>
                    <div>
                    <h2 className="font-kreditback text-3xl relative bottom-20 left-6  text-white font-semibold">1234 5678 9000 0000</h2>
                </div>
                <div className=" flex items-center justify-between relative bottom-14 text-white p-3">
                    <div className="flex flex-col relative left-6 ">
                        <p className="text-[8px] font-sans font-thin ">Card Holder</p>
                        <h2 className=" text-[12px] font-semibold ">John Doe</h2>
                    </div>
                    <div className=' relative right-12'>
                        <p className="text-sm font-sans font-thin  ">Expiry Date</p>
                        <h2 className=" text-sm font-semibold ">09/28</h2>
                    </div>
                    <div>
                        <img src={Visa} alt="" className="w-14 h-14" />
                    </div>
                </div>
    </div>
    </div>


    <div>
    <div className='  bg-blend-screen relative bg-gradient-to-r from-customGray1 to-customGray2 w-96 h-72  right-[200px] rounded-xl top-[86px]  rotate-90'>
                    <img src={Noise} alt="" className="object-fill w-60 h-40 opacity-5 "  />
                    <div className=" flex items-center gap-2 relative  bottom-32 justify-between px-8">
                        <h2 className="text-white text-xl font-sans leading-3 font-semibold">banquee.</h2>
                        <img src={Contactless} alt="contactless-icon"  className=" w-5 h-5"/>
                    </div>
                    <div>
                    <h2 className="font-kreditback text-3xl relative bottom-20 left-6  text-white font-semibold">1234 5678 9000 0000</h2>
                </div>
                <div className=" flex items-center justify-between relative bottom-14 text-white p-3">
                    <div className="flex flex-col relative left-6 ">
                        <p className="text-[8px] font-sans font-thin ">Card Holder</p>
                        <h2 className=" text-[12px] font-semibold ">John Doe</h2>
                    </div>
                    <div className=' '>
                        <p className="text-sm font-sans font-thin relative right-14 ">Expiry Date</p>
                        <h2 className=" text-sm font-semibold relative right-9">09/28</h2>
                    </div>
                    <div>
                        <img src={Visa} alt="" className="w-14 h-14" />
                    </div>
                </div>
    </div>
    </div>


    <div>
    <div className='  bg-blend-screen relative bg-gradient-to-r from-customGreen to-customGreen2 w-96 h-72  right-[275px] rounded-xl top-[24px]  rotate-90'>
                    <img src={Noise} alt="" className="object-fill w-60 h-40 opacity-5 "  />
                    <div className=" flex items-center gap-2 relative  bottom-32 justify-between px-8">
                        <h2 className="text-white text-xl font-sans leading-3 font-semibold">banquee.</h2>
                        <img src={Contactless} alt="contactless-icon"  className=" w-5 h-5"/>
                    </div>
                    <div>
                    <h2 className="font-kreditback text-3xl relative bottom-20 left-6  text-white font-semibold">1234 5678 9000 0000</h2>
                </div>
                <div className=" flex items-center justify-between relative bottom-14 text-white p-3">
                    <div className="flex flex-col relative left-6 ">
                        <p className="text-[8px] font-sans font-thin ">Card Holder</p>
                        <h2 className=" text-[12px] font-semibold ">John Doe</h2>
                    </div>
                    <div className=' '>
                        <p className="text-sm font-sans font-thin relative right-14 ">Expiry Date</p>
                        <h2 className=" text-sm font-semibold relative right-9">09/28</h2>
                    </div>
                    <div>
                        <img src={Visa} alt="" className="w-14 h-14" />
                    </div>
                </div>
    </div>
    </div>


    <div>
    <div className='  bg-blend-screen relative bg-gradient-to-r from-customGray1 to-customGray2 w-96 h-72  right-[355px] rounded-xl top-[86px]  rotate-90'>
                    <img src={Noise} alt="" className="object-fill w-60 h-40 opacity-5 "  />
                    <div className=" flex items-center gap-2 relative  bottom-32 justify-between px-8">
                        <h2 className="text-white text-xl font-sans leading-3 font-semibold">banquee.</h2>
                        <img src={Contactless} alt="contactless-icon"  className=" w-5 h-5"/>
                    </div>
                    <div>
                    <h2 className="font-kreditback text-3xl relative bottom-20 left-6  text-white font-semibold">1234 5678 9000 0000</h2>
                </div>
                <div className=" flex items-center justify-between relative bottom-14 text-white p-3">
                    <div className="flex flex-col relative left-6 ">
                        <p className="text-[8px] font-sans font-thin ">Card Holder</p>
                        <h2 className=" text-[12px] font-semibold ">John Doe</h2>
                    </div>
                    <div className=' '>
                        <p className="text-sm font-sans font-thin relative right-14 ">Expiry Date</p>
                        <h2 className=" text-sm font-semibold relative right-9">09/28</h2>
                    </div>
                    <div>
                        <img src={Visa} alt="" className="w-14 h-14" />
                    </div>
                </div>
    </div>
    </div>


    <div>
    <div className='  bg-blend-screen relative bg-gradient-to-r from-customCream1 to-customCream2 w-96 h-72 top-[155px]  rounded-xl   right-[432px]  rotate-90 '>
                    <img src={Noise} alt="" className="object-fill w-60 h-40 opacity-5 "  />
                    <div className=" flex items-center gap-2 relative  bottom-10 justify-between px-8">
                        <h2 className="text-white text-xl font-sans leading-3 font-semibold">banquee.</h2>
                        <img src={Contactless} alt="contactless-icon"  className=" w-5 h-5"/>
                    </div>
                    <div>
                    <h2 className="font-kreditback text-3xl relative bottom-2 left-6  text-white font-semibold">1234 5678 9000 0000</h2>
                </div>
                <div className=" flex items-center justify-between relative bottom-1 text-white p-3">
                    <div className="flex flex-col relative left-6 ">
                        <p className="text-[8px] font-sans font-thin ">Card Holder</p>
                        <h2 className=" text-[12px] font-semibold ">John Doe</h2>
                    </div>
                    <div className=' relative right-12'>
                        <p className="text-sm font-sans font-thin  ">Expiry Date</p>
                        <h2 className=" text-sm font-semibold ">09/28</h2>
                    </div>
                    <div>
                        <img src={Visa} alt="" className="w-14 h-14" />
                    </div>
                </div>
    </div>
    </div>


   </div>
    </div>
  )
}

export default Hero