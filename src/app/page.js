"use client";
import Graph from "@/components/Graph";
import { Card } from "@/components/ui/card";
import { diagnosticList, labResult } from "@/lib/dataList";
import Image from "next/image";
import homeimg from "@/../public/home.svg";
import Navbar from "@/components/Navbar";
import ProfileInfo from "@/components/ProfileInfo";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Home() {
  const [patientList, setPatientList] = useState([]);
  const [tylorData, setTylorData] = useState([]);

  const fechData = async () => {
    try {
      const response = await axios.get(
        "https://fedskillstest.coalitiontechnologies.workers.dev",
        {
          auth: {
            username: "coalition",
            password: "skills-test",
          },
        }
      );
      setPatientList(response.data);
      setTylorData(response.data[3]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fechData();
  }, []);

  let temp = 0;
  let avgTemp = 0;
  let heartRate = 0;
  let avgHeartRate = 0;
  let respiratory_rate = 0;
  let avgrespiratory_rate = 0;
  let systolic = 0;
  let avgSystolic = 0;
  let diastolic = 0;
  let avgDiastolic = 0;

  tylorData?.diagnosis_history?.length > 0 &&
    tylorData?.diagnosis_history?.map((item) => {
      temp = temp + item.temperature.value;
      avgTemp = temp / tylorData?.diagnosis_history?.length;

      heartRate = heartRate + item.heart_rate.value;
      avgHeartRate = heartRate / tylorData?.diagnosis_history?.length;

      respiratory_rate = respiratory_rate + item.respiratory_rate.value;
      avgrespiratory_rate =
        respiratory_rate / tylorData?.diagnosis_history?.length;

      systolic = systolic + item.blood_pressure.systolic.value;
      avgSystolic = Math.floor(systolic / tylorData?.diagnosis_history?.length);

      diastolic = diastolic + item.blood_pressure.diastolic.value;
      avgDiastolic = Math.floor(
        diastolic / tylorData?.diagnosis_history?.length
      );
    });

  return (
    <>
      <div className="bg-[#F6F7F8] w-full ">
        <Navbar />
        {/* second section start */}

        <div className="flex justify-between m-4">
          <div className="bg-white p-4 rounded-[20px] w-[25%] my-4 mr-4 ">
            <div className="flex justify-between">
              <h1 className="text-[24px] font-bold">Patient</h1>
              <Image
                src="./search.svg"
                width={18}
                height={18}
                className=""
                alt="search"
              />
            </div>
            <div className="flex flex-col h-[100vh] overflow-y-scroll ">
              {patientList.length > 0 &&
                patientList.map((item) => (
                  <div
                    className={`my-2 p-2 flex justify-between ${
                      item.name === "Jessica Taylor"
                        ? "bg-[#D8FCF7] rounded-[10px] shadow-sm "
                        : ""
                    }`}
                  >
                    <div className="flex justify-between">
                      <Image
                        src={item.profile_picture}
                        width={48}
                        height={48}
                        alt="profile_picture"
                      />
                      <div className="flex justify-between flex-col ml-5 ">
                        <b className="text-[14px]">{item.name}</b>
                        <p className="text-[14px]">
                          {item.gender}, {item.age}
                        </p>
                      </div>
                    </div>
                    <Image
                      src="/more_horiz.svg"
                      width={18}
                      height={4}
                      className="cursor-pointer"
                      alt="more_horiz"
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="w-[50%] m-4 flex flex-col ">
            <div className="bg-white p-4 rounded-[20px] ">
              <div className="flex bg-[#F6F7F8] rounded-[20px] m-3  ">
                <Graph data={tylorData} />
                {/* <Card></Card> */}
                <div className="flex flex-col ml-2 mt-6 ">
                  <div className="flex items-center">
                    <div className="bg-[#E66FD2] w-[12px] h-[12px] rounded-[50%] shadow-sm"></div>
                    <div className="text-[14px] ml-2 font-bold">Systolic</div>
                  </div>
                  <b className="font-bold text-[24px] mt-2 ">{avgSystolic}</b>
                  <p className="mt-2 text-[14px]">Higher than Average</p>
                  <div className="h-[1px] bg-black mr-1 opacity-10 mt-2 "></div>
                  <div className="flex items-center">
                    <div className="bg-[#8C6FE6] w-[12px] h-[12px] rounded-[50%] shadow-sm"></div>
                    <div className="text-[14px] ml-2 font-bold mt-2">
                      Diastolic
                    </div>
                  </div>
                  <b className="font-bold text-[24px] mt-2 ">{avgDiastolic}</b>
                  <p className="mt-2 text-[14px]">Higher than Average</p>
                </div>
              </div>
              <div className="flex justify-between ">
                <div className="bg-[#E0F3FA] w-[33%] p-3 rounded-[10px] m-3 shadow-sm">
                  <Image
                    src="./HeartBPM.svg"
                    width={80}
                    height={80}
                    alt="HeartBPM.svg"
                  />
                  <p className="text-[16px] mt-6 font-bold">Respiratory Rate</p>
                  <b className="text-[30px] mt-6 ">{avgrespiratory_rate} bpm</b>
                  <p className="text-[14px] pt-4">Normal</p>
                </div>
                <div className="bg-[#FFE6E9] w-[33%] p-3 rounded-[10px]  m-3 shadow-sm">
                  <Image
                    src="./temperature.svg"
                    width={80}
                    height={80}
                    alt="temperature.svg"
                  />
                  <p className="text-[16px] mt-6 font-bold">Temperature</p>
                  <b className="text-[30px] mt-6 ">{avgTemp} F</b>
                  <p className="text-[14px] pt-4">Normal</p>
                </div>
                <div className="bg-[#FFE6E9] w-[33%] p-3 rounded-[10px]  m-3 shadow-sm">
                  <Image
                    src="./HeartBPM.svg"
                    width={80}
                    height={80}
                    alt="HeartBPM.svg"
                  />
                  <p className="text-[16px] mt-6 ">Heart Rate</p>
                  <b className="text-[30px] mt-6 ">{avgHeartRate} bpm</b>
                  <p className="text-[14px] pt-4">Low then Avarage</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-[20px] mt-4 ">
              <b className="text-[24px]">Diagnostic List</b>
              <div className="flex justify-between bg-[#F6F7F8] rounded-[40px] mt-4 p-4  items-center">
                <b className="text-[14px] w-[33%] text-start">
                  Problem/Diagnosis
                </b>
                <b className="text-[14px] w-[33%] text-center">Description</b>
                <b className="text-[14px] w-[33%] text-end">Status</b>
              </div>
              <div className="h-[250px] overflow-y-scroll ">
                {tylorData.diagnostic_list?.map((item) => (
                  <>
                    <div className="flex justify-between mt-4 p-4">
                      <p className="text-[14px] text-start  w-[33%] ">
                        {item.name}
                      </p>
                      <p className="text-[14px]  text-center w-[33%]  ">
                        {item.description}
                      </p>
                      <p className="text-[14px] text-end  w-[33%] ">
                        {item.status}
                      </p>
                    </div>
                    <div className="h-[1px] bg-black opacity-10 mt-2 "></div>
                  </>
                ))}
              </div>
            </div>
          </div>
          {/* right section */}
          <div className="w-[25%] my-4 ml-4 flex flex-col ">
            {/* yha me hoga */}
            <ProfileInfo data={tylorData} />
            <div className="bg-white p-4 rounded-[20px] mt-4">
              <b className="text-[24px]">Lab Results</b>
              <div className="h-[200px] overflow-y-scroll ">
                {tylorData.lab_results?.map((item) => (
                  <div className="flex justify-between mt-4 p-4 rounded-[20px] hover:bg-[#F6F7F8] ">
                    <p className="text-[14px]">{item}</p>
                    <Image
                      src="./download.svg"
                      width={20}
                      height={20}
                      className=""
                      alt="download.svg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
