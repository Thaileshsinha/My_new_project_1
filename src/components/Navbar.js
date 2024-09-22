import logo from "@/../public/logo.svg";
import home from "@/../public/home.svg";
import group from "@/../public/group.svg";
import calendar_today from "@/../public/calendar_today.svg";
import chat_bubble from "@/../public/chat_bubble.svg";
import credit_card from "@/../public/credit_card.svg";
import doctor from "@/../public/doctor.png";
import settings from "@/../public/settings.png";
import more from "@/../public/more.png";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white px-4 py-3 rounded-[40px] shadow-md m-4 ">
      <div className="flex items-center">
        <div className="mr-4">
          <Image src={logo} width={210} height={50} property />
        </div>
      </div>
      <div className="flex items-center ">
        <div className="mx-4 flex justify-around cursor-pointer">
          {/* <a href={item.link} class="text-gray-500 hover:text-gray-700"> */}
          <Image src={home} width={16} height={17} />
          <span className="ml-2 font-sans font-bold text-[14px]">Overview</span>
          {/* </a> */}
        </div>
        <div className="mx-4 flex justify-around rounded-[40px] bg-[#01F0D0] p-3 cursor-pointer shadow-sm">
          {/* <a href={item.link} class="text-gray-500 hover:text-gray-700"> */}
          <Image src={group} width={24} height={17} />
          <span className="ml-2 font-sans font-bold text-[14px]">Patients</span>
          {/* </a> */}
        </div>
        <div className="mx-4 flex justify-around cursor-pointer">
          {/* <a href={item.link} class="text-gray-500 hover:text-gray-700"> */}
          <Image src={calendar_today} width={15} height={17} />
          <span className="ml-2 font-sans font-bold text-[14px]">Schedule</span>
          {/* </a> */}
        </div>
        <div className="mx-4 flex justify-around cursor-pointer ">
          {/* <a href={item.link} class="text-gray-500 hover:text-gray-700"> */}
          <Image src={chat_bubble} width={18} height={17} />
          <span className="ml-2 font-sans font-bold text-[14px]">Message</span>
          {/* </a> */}
        </div>
        <div className="mx-4 flex justify-around cursor-pointer ">
          {/* <a href={item.link} class="text-gray-500 hover:text-gray-700"> */}
          <Image src={credit_card} width={22} height={17} />
          <span className="ml-2 font-sans font-bold text-[14px]">
            Transactions
          </span>
          {/* </a> */}
        </div>
      </div>
      <div className="flex items-center justify-around">
        <Image src={doctor} width={44} height={44} />
        <div className="mx-3">
          <b className="font-bold text-[14px]">Dr. Jose Simmonus </b>
          <p className="text-[14px]">General Practitioner</p>
        </div>
        <div className="w-[1px] bg-black h-[44px] opacity-10"></div>
        <Image src={settings} width={19} height={20} className="mx-3" />
        <Image src={more} width={4} height={18} className="mx-3" />
      </div>
    </div>
  );
};

export default Navbar;
