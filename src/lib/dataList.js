import patient1 from "@/../public/Layer 1.png";
import patient2 from "@/../public/Layer 2.png";
import patient3 from "@/../public/Layer 3.png";
import patient4 from "@/../public/Layer 4.png";
import patient5 from "@/../public/Layer 6.png";
import patient6 from "@/../public/Layer 8.png";

export const labResult = [
  {
    name: "Blood Test",
  },
  {
    name: "CT Scans",
  },
  {
    name: "MRI",
  },
  {
    name: "Ultrasound",
  },
  {
    name: "X-Ray",
  },
];

export const diagnosticList = [
  {
    problem: "Hypertension",
    description: "High blood pressure",
    status: "Under Observation",
  },
  {
    problem: "Type 2 Diabetes",
    description: "Insulin resistance",
    status: "Cured",
  },
  {
    problem: "Cancer",
    description: "Cancer metastasis",
    status: "Cured",
  },
  {
    problem: "Covid-19",
    description: "Covid-19",
    status: "Under Observation",
  },
  {
    problem: "Asthma",
    description: "Chronic cough",
    status: "Cured",
  },
];

export const patientList = [
  {
    id: 1,
    profile_picture: patient1,
    name: "Ryan Johnson",
    gender: "Male",
    age: 45,
    phoneNumber: "(415) 555-1231",
    emergencyContact: "(415) 555-5671",
    insuranceType: "Blue Cross",
  },
  {
    id: 2,
    profile_picture: patient4,
    name: "Emily Davis",
    gender: "Female",
    age: 32,
    phoneNumber: "(415) 555-1234",
    emergencyContact: "(415) 555-5674",
    insuranceType: "Blue Cross",
  },
  {
    id: 3,
    profile_picture: patient3,
    name: "Michael Brown",
    gender: "Male",
    age: 25,
    phoneNumber: "(415) 555-1233",
    emergencyContact: "(415) 555-5673",
    insuranceType: "Blue Cross",
  },
  {
    id: 4,
    profile_picture: patient2,
    name: "Jessica Taylor",
    gender: "Female",
    age: 18,
    phoneNumber: "(415) 555-1232",
    emergencyContact: "(415) 555-5672",
    insuranceType: "Blue Cross",
  },
  {
    id: 5,
    profile_picture: patient5,
    name: "Samantha Johnson",
    gender: "Female",
    age: 56,
    phoneNumber: "(415) 555-1235",
    emergencyContact: "(415) 555-5675",
    insuranceType: "Blue Cross",
  },
];
