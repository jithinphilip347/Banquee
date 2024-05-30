import { MdOutlineStarPurple500 } from "react-icons/md";

const Testimonial = () => {
  return (
    <div className="h-screen">
      <div>
        <div className=" flex items-center m-44  justify-between">
          <div>
            <p className=" text-sm relative top-2">Testimonials</p>
            <h1 className="leading-[60px] text-5xl font-sans font-normal relative top-6">
              People all over the <br />
              world use banko.
            </h1>
          </div>
          <div className=" relative top-20">
            <p className=" flex gap-2 text-base font-sans font-medium relative top-1">
              <MdOutlineStarPurple500 className=" text-customGreen rounded-full w-8 h-8 p-2 bg-gray-200" />{" "}
              Rated <span className=" text-customGreen">4.8/5</span> from over
              1000 users
            </p>
          </div>
        </div>
        <div className="flex mx-36 gap-4">

          <div className="flex flex-col gap-4 ">
            <div className=" flex flex-col gap-4  w-[330px] h-[360px] border rounded-lg p-6  relative bottom-5">
              <div className="flex items-center">
                <MdOutlineStarPurple500 className=" text-customGreen" />
                <MdOutlineStarPurple500 className=" text-customGreen" />
                <MdOutlineStarPurple500 className=" text-customGreen" />
                <MdOutlineStarPurple500 className=" text-customGreen" />
                <MdOutlineStarPurple500 className=" text-customGreen" />
              </div>
              <div className=" flex flex-col gap-6 ">
                <h1 className=" text-xl font-sans font-semibold">
                  Sunt qui esse pariatur <br />
                  duis deserunt mollit{" "}
                </h1>
                <p className=" text-sm font-sans font-medium ">
                  Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                  ullamco cillum dolor. Voluptate exercitation incididunt
                  aliquip deserunt reprehenderit elit laborum.{" "}
                </p>
                <div>
                <h3 className=" text-md font-sans font-semibold">Cody Fisher</h3>
                <p className=" font-sans font-light text-gray-400 "> Medical Assistant</p>
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-4  w-[330px] h-[360px] border rounded-lg p-6 relative bottom-5">
              <div className="flex items-center">
                <MdOutlineStarPurple500 className=" text-customGreen" />
                <MdOutlineStarPurple500 className=" text-customGreen" />
                <MdOutlineStarPurple500 className=" text-customGreen" />
                <MdOutlineStarPurple500 className=" text-customGreen" />
                <MdOutlineStarPurple500 className=" text-customGreen" />
              </div>
              <div className=" flex flex-col gap-4 ">
                <h1 className=" text-xl font-sans font-semibold">
                  Sunt qui esse pariatur <br />
                  duis deserunt mollit{" "}
                </h1>
                <p className=" text-sm font-sans font-medium ">
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
                Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
                </p>
                <div>
                <h3 className=" text-md font-sans font-semibold">Cody Fisher</h3>
                <p className=" font-sans font-light text-gray-400 "> Medical Assistant</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className=" flex flex-col gap-4  w-[360px] h-[440px] border rounded-lg p-6  relative bottom-5">
              <div className="flex items-center">
                <MdOutlineStarPurple500 className=" text-customGreen" />
                <MdOutlineStarPurple500 className=" text-customGreen" />
                <MdOutlineStarPurple500 className=" text-customGreen" />
                <MdOutlineStarPurple500 className=" text-customGreen" />
                <MdOutlineStarPurple500 className=" text-customGreen" />
              </div>
              <div className=" flex flex-col gap-4 ">
                <h1 className=" text-xl font-sans font-semibold">
                At lectus urna duis <br /> convallis tellus
                </h1>
                <p className=" text-md font-sans font-medium ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Dui accumsan sit amet nulla facilisi morbi.
                </p>
                <p className=" text-md font-sans font-medium ">
                In nibh mauris cursus mattis. 
                At lectus urna duis convallis convallis tellus. 
                Enim blandit volutpat maecenas volutpat.
                </p>
                <div>
                <h3 className=" text-md font-sans font-semibold">Jenny Wilson</h3>
                <p className=" font-sans font-light text-gray-400 "> Nursing Assistant</p>
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-4  w-[360px] h-[360px] border rounded-lg p-6  relative bottom-5">
              <div className="flex items-center">
                <MdOutlineStarPurple500 className=" text-customGreen" />
                <MdOutlineStarPurple500 className=" text-customGreen" />
                <MdOutlineStarPurple500 className=" text-customGreen" />
                <MdOutlineStarPurple500 className=" text-customGreen" />
                <MdOutlineStarPurple500 className=" text-customGreen" />
              </div>
              <div className=" flex flex-col gap-4 ">
                <h1 className=" text-xl font-sans font-semibold">
                Donec et fringilla neque
                </h1>
                <p className=" text-md font-sans font-medium ">
                Etiam accumsan porta neque in viverra. Proin eleifend, 
                eros in tristique hendrerit, nisi purus cursus sapien, 
                id ultrices nunc tellus a ipsum. Donec et fringilla neque.
                 Aenean consequat purus quis lectus maximus fermentum.
                </p>
                <div>
                <h3 className=" text-md font-sans font-semibold">Darlene Robertson</h3>
                <p className=" font-sans font-light text-gray-400 ">Dog Trainer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className=" flex flex-col gap-4  w-[360px] h-[360px] border rounded-lg p-6 relative bottom-5">
              <div className="flex items-center">
                <MdOutlineStarPurple500 className=" text-customGreen" />
                <MdOutlineStarPurple500 className=" text-customGreen" />
                <MdOutlineStarPurple500 className=" text-customGreen" />
                <MdOutlineStarPurple500 className=" text-customGreen" />
                <MdOutlineStarPurple500 className=" text-customGreen" />
              </div>
              <div className=" flex flex-col gap-4 ">
                <h1 className=" text-xl font-sans font-semibold">
                Elit aute irure tempor <br /> cupidatat incididunt
                </h1>
                <p className=" text-md font-sans font-medium ">
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
                Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
                </p>
                <div>
                <h3 className=" text-md font-sans font-semibold">Guy Hawkins</h3>
                <p className=" font-sans font-light text-gray-400 ">President of Sales</p>
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-4  w-[360px] h-[360px] border rounded-lg p-6 relative bottom-5">
              <div className="flex items-center">
                <MdOutlineStarPurple500 className=" text-customGreen" />
                <MdOutlineStarPurple500 className=" text-customGreen" />
                <MdOutlineStarPurple500 className=" text-customGreen" />
                <MdOutlineStarPurple500 className=" text-customGreen" />
                <MdOutlineStarPurple500 className=" text-customGreen" />
              </div>
              <div className=" flex flex-col gap-4 ">
                <h1 className=" text-xl font-sans font-semibold">
                Etiam accumsan porta <br /> neque eros
                </h1>
                <p className=" text-md font-sans font-medium ">
                Nulla Lorem mollit cupidatat irure. 
                Laborum magna nulla duis ullamco cillum dolor. 
                Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
                </p>
                <div>
                <h3 className=" text-md font-sans font-semibold">Dianne Russell</h3>
                <p className=" font-sans font-light text-gray-400 ">Medical Assistant</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Testimonial;
