import Hero from "./components/HomeComponents/Hero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Common from "./components/layout";
import { FaHome, FaTrophy, FaBuilding, FaHandshake } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { VscProject } from "react-icons/vsc";
import VideoModal from "./components/HomeComponents/VideoModal";
import { MdAccessTime } from "react-icons/md";
import { GiMedal, GiScales } from "react-icons/gi";
import { GoShieldLock } from "react-icons/go";
import { IoDocumentTextSharp } from "react-icons/io5";
import { TbBulbFilled } from "react-icons/tb";

export default function Home() {

  return (
    <>
      <Common>
        <Hero />
        <div className="lg:px-40 my-20 grid lg:grid-cols-2 gap-4 py-5 w-full bg-cover bg-[url('/assets/089035460b1685390c840f400f092d06.png')]">
          {
            [
              { icon: <FaHome size={50} />, text1: '100+', text2: 'DELIVERY OF HOMES AND BUSINESS SPACES/MONTH' },
              { icon: <BsFillPeopleFill size={50} />, text1: '6000+', text2: 'HAPPY SUSHMA GROUP FAMILIES' },
              { icon: <VscProject size={50} />, text1: '14 PROJECTS', text2: 'DELIVERED IN 13 YEARS' },
              { icon: <FaTrophy size={50} />, text1: 'COMPANY OF THE YEAR', text2: 'TRICITY BUSINESS 2024' },
            ]
              .map((i, index) => (
                <div key={index} className="flex items-center">
                  <div className="m-4 p-2 pe-4 border-[black] border-e-[1px]">{i.icon}</div>
                  <div>
                    <div className="text-4xl font-bold">{i.text1}</div>
                    <div className="font-semibold">{i.text2}</div>
                  </div>
                </div>
              ))
          }
        </div>
        <div className="lg:flex lg:ms-32 ms:10 my-20 text-center lg:text-left">
          <div>
            <div className="flex justify-center px-20 my-10">
              <img className="min-w-[300px]" src="/assets/46f00ea88134fb2e0b90c47f7672bd3e.394c3ce1.png" width="450px" />
            </div>
          </div>
          <div className="lg:ms-20">
            <div className="text-5xl font-semibold lg:mb-14 mb-5 text-[#1E6DA4] font-Supera_700">
              About<br />
              Sushma Group
            </div>
            <div className="lg:w-[500px] mx-10 lg:m-0 lg:text-xl font-Supera_700">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry‘s standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            </div>
            <div className="mt-10 text-3xl">
              WE PROVIDE YOU THE BEST
              <div className="font-semibold">EXPERIENCE</div>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-2 justify-around text-center bg-[#1E6DA4] mt-10 rounded-t-xl px-4   ">
              {
                [
                  { title: '14', text: <>Completed <br /> Project</> },
                  { title: '07', text: <>Residential <br /> Project</> },
                  { title: '04', text: <>Commercial <br /> Project</> },
                  { title: '07', text: <>Upcoming</> },
                ]
                  .map((i, e) => (
                    <div key={e} className={`${e !== 3 ? 'border-e-[1px] border-dashed' : ''} p-3`}>
                      <div className="lg:text-4xl text-2xl font-bold">{i.title}</div>
                      <div className="leading-none font-medium">{i.text}</div>
                    </div>
                  ))
              }
            </div>
            <div className="h-1 bg-[#1E6DA4] mt-[2px]"></div>
          </div>
        </div>
        <VideoModal />
        <div className="lg:flex">
          <div className="lg:w-1/3 h-[300px] lg:h-[600px]">
            <video width="95%" className="h-full w-full object-cover" autoPlay muted loop>
              <source src='assets/whysushmavideo.mp4' type='video/mp4' />
              Your browser does not support the video tag. Please upgrade your browser.
            </video>
          </div>
          <div className="lg:w-2/3 bg-[#1E6DA4] h-full text-center p-5 pt-10">
            <div>
              <div className="text-4xl font-bold mb-2">WHY SUSHMA GROUP</div>
              <div className="text-xl">Within the premises of the Sushma Township are reputed Schools.</div>
            </div>
            <div className="sm:grid grid-cols-2 gap-10 py-10 mt-10">
              {
                [
                  { icon: <FaBuilding size={40} />, text: 'Quality Construction' }, { icon: <MdAccessTime size={40} />, text: 'On Time Delivery' },
                  { icon: <GiMedal size={40} />, text: 'Superior product design, styling & quality' }, { icon: <GoShieldLock size={40} />, text: 'Transparency and trustworthiness' },
                  { icon: <FaHandshake size={40} />, text: 'Mutual Respect' }, { icon: <IoDocumentTextSharp size={40} />, text: 'Commitment to all stakeholders' },
                  { icon: <GiScales size={40} />, text: 'Integrity and fairness' }, { icon: <TbBulbFilled size={40} />, text: 'Innovation in product offerings' },
                ]
                  .map((i, e) => (
                    <div key={e} className="flex mt-5 sm:mt-0 border-b-[1px] px-2 pb-4">
                      <div>{i.icon}</div>
                      <div className="ps-4 text-xl text-left font-semibold">{i.text}</div>
                    </div>
                  ))
              }
            </div>
          </div>
        </div>
        <div className="text-center my-20">
          <div className="my-14">
            <div className="text-4xl font-bold text-[#1E6DA4]">OUR OFFERING</div>
            <div className="text-xl mt-5 text-[grey]">Within the premises of the Sushma Township are reputed Schools.</div>
          </div>
          <div className="flex justify-around border p-3">
            <div className="relative group">
              <div className="text-2xl font-bold text-[#1E6DA4] cursor-pointer">RESIDENTIAL</div>
              <div className="group-hover:block hidden py-2 px-3 absolute text-left top-[90%] w-[150%] bg-black">
                <ul className="">
                  {['New Laungh', 'Ongoing Project', 'Upcoming Project', 'Completed']
                    .map((i) => (
                      <li className="p-[2px] text-[grey] hover:text-[#1E6DA4] text-[18px] font-medium cursor-pointer">{i}</li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="text-2xl relative group">
              <div className="text-2xl font-bold text-[grey] cursor-pointer">COMMERTIAL</div>
              <div className="group-hover:block hidden py-2 px-3 absolute text-left top-[90%] w-[150%] bg-black">
                <ul className="">
                  {['New Laungh', 'Ongoing Project', 'Upcoming Project', 'Completed']
                    .map((i) => (
                      <li className="p-[2px] text-[grey] hover:text-[#1E6DA4] text-[18px] font-medium cursor-pointer">{i}</li>
                    ))}
                </ul>
              </div>
            </div>
            <div className=" p-2 px-8 bg-[#1E6DA4] rounded-full font-semibold">SEE ALL PROJECTS</div>
          </div>
        </div>
      </Common >
    </>
  );
}
