"use client";
import Image from "next/image";
import img from "@/../public/doctor.png";
import { useEffect } from "react";
import axios from "axios";
import BirthIcon from "@/../public/BirthIcon.svg";
import FemaleIcon from "@/../public/FemaleIcon.svg";
import PhoneIcon from "@/../public/PhoneIcon.svg";
import InsuranceIcon from "@/../public/InsuranceIcon.svg";

const ProfileInfo = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-[20px]">
      <div className="flex justify-center items-center flex-col">
        <Image
          src={data.profile_picture}
          width={200}
          height={200}
          alt="profileimg"
        />
        <b className="my-4 text-[24px] font-sans ">{data.name}</b>
      </div>
      <div className="flex my-3 ">
        <Image
          src={BirthIcon}
          width={42}
          height={42}
          className=""
          alt="bithicon"
        />
        <div className="ml-4">
          <p className=" text-[14px] font-sans ">Date of Birth</p>
          <b className="font-bold text-[14px] font-sans ">
            {data.date_of_birth}
          </b>
        </div>
      </div>
      <div className="flex my-4 ">
        <Image
          src={FemaleIcon}
          width={42}
          height={42}
          className=""
          alt="femaleicon"
        />
        <div className="ml-4">
          <p className=" text-[14px] ">Gender</p>
          <b className="font-bold text-[14px]">{data.gender}</b>
        </div>
      </div>
      <div className="flex my-4 ">
        <Image
          src={PhoneIcon}
          width={42}
          height={42}
          className=""
          alt="PhoneIcon"
        />
        <div className="ml-4">
          <p className=" text-[14px] ">Contact Info</p>
          <b className="font-bold text-[14px]">{data.phone_number}</b>
        </div>
      </div>{" "}
      <div className="flex my-4 ">
        <Image
          src={PhoneIcon}
          width={42}
          height={42}
          className=""
          alt="PhoneIcon"
        />
        <div className="ml-4">
          <p className="text-[14px]">Emergency Contacts</p>
          <b className="font-bold text-[14px]">{data.emergency_contact}</b>
        </div>
      </div>{" "}
      <div className="flex my-4 ">
        <Image
          src={InsuranceIcon}
          width={42}
          height={42}
          className=""
          alt="InsuranceIcon"
        />
        <div className="ml-4">
          <p className="text-[14px]">Insurance Provider</p>
          <b className="font-bold text-[14px]">{data.insurance_type}</b>
        </div>
      </div>
      <div className="flex justify-center">
        <button className=" text-center bg-[#01F0D0] py-2 px-10 rounded-[20px] mt-6 text-[14px] font-bold shadow-sm">
          Show All Information
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
