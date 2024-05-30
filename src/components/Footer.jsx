

const Footer = () => {
  return (
    <div className=" h-screen">
      <hr />
      <hr className="relative top-[900px]"/>
      <div className=" mx-36 relative top-[1000px]">
        <div className=" flex">
          <div>
            <h1 className="text-customGreen font-semibold text-2xl md:text-3xl">banquee.</h1>
          </div>
          <div className=" flex items-center gap-32 relative left-56 "> 

            <div className="flex flex-col gap-7 ">
              <h4 className="text-base font-sans font-semibold">About</h4>
              <div className=" flex flex-col gap-2 text-gray-500 text-sm font-sans">
              <p>Features</p>
              <p>Pricing</p>
              <p>Support</p>
              </div>
            </div>

            <div className="flex flex-col gap-7 ">
              <h4 className="text-base font-sans font-semibold">Blog</h4>
              <div className=" flex flex-col gap-2 text-gray-500 text-sm font-sans">
              <p>Features</p>
              <p>Pricing</p>
              <p>Support</p>
              </div>
            </div>

            <div className="flex flex-col gap-7 ">
              <h4 className="text-base font-sans font-semibold">Webflow</h4>
              <div className=" flex flex-col gap-2 text-gray-500 text-sm font-sans">
              <p>Features</p>
              <p>Pricing</p>
              <p>Support</p>
              </div>
            </div>

            <div className="flex flex-col gap-7 ">
              <h4 className="text-base font-sans font-semibold">Social Media</h4>
              <div className=" flex flex-col gap-2 text-gray-500 text-sm font-sans">
              <p>Features</p>
              <p>Pricing</p>
              <p>Support</p>
              </div>
            </div>

          </div>
        </div>
        <div className="flex items-center justify-between relative top-14">
          <div>
          <p className=" text-gray-500 text-sm font-sans">©  Made by <span className="text-customGreen">Pawel Gola</span>  - Powered by <span className="text-customGreen">Webflow</span> </p>
          </div>
          <div className=" flex gap-4 items-center">
            <p className=" text-gray-500 text-sm font-sans">Impressum</p>
            <p className=" text-gray-500 text-sm font-sans">Datenschutz</p>
          </div>

        </div>

      </div>
      <hr  className="relative top-[1010px] mx-36"/>
     
    </div>
  )
}

export default Footer