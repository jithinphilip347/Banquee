
const Hero = () => {
  return (
    <div className=" bg-clearDay h-screen">
       <div className="flex flex-col items-center justify-center h-[400px] ">
  <div className="text-center font-sans py-5 ">
    <p className=" text-md font-medium leading-10 relative bottom-3">Features</p>
    <h1 className="text-6xl	leading-10	font-medium	tracking-wide">All in one card.</h1>
  </div>

  <div className="text-center text-md font-medium leading-7 font-inter py-4">
    <p>Senectus et netus et malesuada fames ac turpis.</p>
    <p>Sagittis vitae et leo duis ut diam.</p>
  </div>

  <div className="flex items-center justify-center gap-5 font-inter text-sm font-normal leading-7 py-4">
    <button className="bg-customGreen text-white rounded-md h-10 w-36 ">Open Account</button>
    <p className="flex items-center gap-3 text-customGreen">
      Compare Cards
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className="w-5 h-5"
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
    </div>
  )
}

export default Hero