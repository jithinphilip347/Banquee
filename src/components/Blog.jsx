import { FaArrowRight } from "react-icons/fa6";


const Blog = () => {
  return (
    <div className="h-screen">
      <div className=" mx-40 relative top-[700px]">
        <div className=" flex justify-between">
          <h1 className=" text-5xl font-sans font-semibold">Blog</h1>
          <p className=" flex text-customGreen gap-2">Support all
          <FaArrowRight  className=" relative top-1"/>
          </p>
        </div>
        <div className="flex items-center justify-between gap-6 relative top-14">
          <div className=" w-[450px] h-[637px]">
            <div className=" flex flex-col gap-4">
              <img src="https://assets-global.website-files.com/632a4fcffe442d620c014757/632a4fcffe442d42640147ae_post-01.webp" alt="" className=" rounded-2xl"/>
              <h1 className=" text-[22px] font-sans font-semibold ">How To Start Using Banko For Your Startup</h1>
              <p className=" text-sm font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                 Dui accumsan sit amet nulla facilisi morbi.</p>
            </div>
            <div className=" flex gap-3 relative top-4">
              <p className=" bg-customGray p-2 font-sans text-base">Product</p>
              <p className=" bg-customGray p-2 font-sans text-base">Technology</p>
            </div>
          </div>  
          <div className=" w-[450px] h-[637px]">
            <div className=" flex flex-col gap-4">
              <img src="https://assets-global.website-files.com/632a4fcffe442d620c014757/632a4fcffe442dfdd301475f_post-02.webp" alt="" className=" rounded-2xl"/>
              <h1 className=" text-[22px] font-sans font-semibold ">10 Things Nobody Told You About Banko</h1>
              <p className=" text-sm font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                 Dui accumsan sit amet nulla facilisi morbi.</p>
            </div>
            <div className=" flex gap-3 relative top-4">
              <p className=" bg-customGray p-2 font-sans text-base">Product</p>
              <p className=" bg-customGray p-2 font-sans text-base">Technology</p>
            </div>
          </div>
          <div className=" w-[450px] h-[637px]">
            <div className=" flex flex-col gap-4">
              <img src="https://assets-global.website-files.com/632a4fcffe442d620c014757/632a4fcffe442d063701475c_post-03.webp" alt="" className=" rounded-2xl"/>
              <h1 className=" text-[22px] font-sans font-semibold ">7 Ways To Improve You Saving Habits</h1>
              <p className=" text-sm font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                 Dui accumsan sit amet nulla facilisi morbi.</p>
            </div>
            <div className=" flex gap-3 relative top-4">
              <p className=" bg-customGray p-2 font-sans text-base">Product</p>
              <p className=" bg-customGray p-2 font-sans text-base">Technology</p>
            </div>
          </div>
          </div>
      </div>
      
    </div>
  )
}

export default Blog