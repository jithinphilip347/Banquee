import Noise from '../assets/noise.png';
import Contactless from '../assets/signal.png';
import  Visa from '../assets/visa.png';


const Account = () => {
  return (
    <div className=" h-screen">
       
        <div className="flex flex-col items-center justify-center m-64  ">
         <div className=' flex flex-col gap-5'>
            <p className='text-sm text-center font-sans'>Account</p>
            <h1 className="leading-[55px] text-center text-5xl font-sans font-bold">Perfect card <br /> for your needs.</h1>
            <p className=" text-base font-sans text-center font-medium">Senectus et netus et malesuada fames ac turpis.  <br />
                Sagittis vitae et leo duis ut diam.</p>
         </div>
         <div className=' flex flex-col relative right-5'>
         <div className='  bg-blend-screen relative bg-gradient-to-r from-customGreen to-customGreen2 w-80 h-48 rounded-xl left-7 top-16 '>
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
                <div className='  bg-blend-screen relative bg-gradient-to-r from-customGray1 to-customGray2 w-80 h-48 rounded-xl left-7 bottom-16 '>
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
                <div className='  bg-blend-screen relative bg-gradient-to-r from-customCream1 to-customCream2 w-80 h-48 rounded-xl left-7 bottom-44 '>
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
          <div className=' flex gap-4 relative bottom-28 left-2 '>
          <button className="bg-customGreen text-white rounded-md h-10 w-32 ">Open Account</button>
          <button className="bg-white text-black rounded-md border h-10 w-32 ">Compare Cards</button>
          </div>
        </div>

    </div>
  )
}

export default Account