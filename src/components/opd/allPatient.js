import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AddIcon from "@mui/icons-material/Add";
import PreviewIcon from "@mui/icons-material/Preview";
import { Stack } from "@mui/material";
import MedicalDetail from "../medicalDetail";

//list of departments
const options = [
  "",
  "OPD",
  "Laboratory",
  "Diagnosis",
  "ICU",
  "Surgery",
  "Pharmacy",
];

//list of table head columns
const columns = [
  <AddIcon sx={{ pl: 1 }} />,
  "Patient ID",
  "First name",
  "Last name",
  "Date of birth",
  "Gender",
  "Phone Number",
  "Email",
  "Emergency contact",
  "Ins. Info.",
  "Last visited date",
  "Medical history",
];

//list of collapsible table head
const historyColumns = [
  "Date",
  "Age",
  "Address",
  "Medication",
  "Allergies",
  "Notes",
];

//list of all patients details to be fetched from database
const AllRows = [
  {
    patientId: "P121",
    fName: "Eden",
    lName: "Asrat",
    birthDate: "1995-01-01",
    gender: "Female",
    phoneNumber: "0912906891",
    email: "eden@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    lastVisitedDate: "2024-01-03",
    history: [
      {
        date: "2020-01-05",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2020-01-06",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2020-01-07",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
    ],
    doctorName: "Dr. Henok Asrat",
    symptoms:
      "Fever typically include a sustained high fever, headache, weakness, abdominal pain, constipation or diarrhea, and sometimes a rash. Other symptoms can include loss of appetite, muscle aches, and confusion. If you suspect you have typhoid fever, it's important to see a healthcare professional for proper diagnosis and treatment.",
    diagnosis: [
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
    ],
    prescription: "Ciprofloxacin, Azithromycin",
  },
  {
    patientId: "P122",
    fName: "Eden",
    lName: "Asrat",
    birthDate: "1995-01-01",
    gender: "Female",
    phoneNumber: "0988002241",
    email: "eden@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    lastVisitedDate: "2024-01-03",
    history: [
      {
        date: "2020-01-05",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2020-01-06",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2020-01-07",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
    ],
    doctorName: "Dr. Henok Asrat",
    symptoms:
      "Fever typically include a sustained high fever, headache, weakness, abdominal pain, constipation or diarrhea, and sometimes a rash. Other symptoms can include loss of appetite, muscle aches, and confusion. If you suspect you have typhoid fever, it's important to see a healthcare professional for proper diagnosis and treatment.",
    diagnosis: [
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
    ],
    prescription: "Ciprofloxacin, Azithromycin",
  },
  {
    patientId: "P123",
    fName: "Heaven",
    lName: "Asrat",
    birthDate: "1995-01-01",
    gender: "Female",
    phoneNumber: "0912906891",
    email: "eden@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    lastVisitedDate: "2024-01-03",
    history: [
      {
        date: "2020-01-06",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2020-01-07",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
    ],
    doctorName: "Dr. Henok Asrat",
    symptoms:
      "Fever typically include a sustained high fever, headache, weakness, abdominal pain, constipation or diarrhea, and sometimes a rash. Other symptoms can include loss of appetite, muscle aches, and confusion. If you suspect you have typhoid fever, it's important to see a healthcare professional for proper diagnosis and treatment.",
    diagnosis: [
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
    ],
    prescription: "Ciprofloxacin, Azithromycin",
  },
  {
    patientId: "P124",
    fName: "Eden",
    lName: "Asrat",
    birthDate: "1995-01-01",
    gender: "Female",
    phoneNumber: "0912906891",
    email: "eden@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    lastVisitedDate: "2024-01-03",
    history: [
      {
        date: "2020-01-05",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2020-01-06",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2020-01-07",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
    ],
    doctorName: "Dr. Henok Asrat",
    symptoms:
      "Fever typically include a sustained high fever, headache, weakness, abdominal pain, constipation or diarrhea, and sometimes a rash. Other symptoms can include loss of appetite, muscle aches, and confusion. If you suspect you have typhoid fever, it's important to see a healthcare professional for proper diagnosis and treatment.",
    diagnosis: [
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
    ],
    prescription: "Ciprofloxacin, Azithromycin",
  },
  {
    patientId: "P125",
    fName: "Eden",
    lName: "Asrat",
    birthDate: "1995-01-01",
    gender: "Female",
    phoneNumber: "0988002241",
    email: "eden@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    lastVisitedDate: "2024-01-03",
    history: [
      {
        date: "2020-01-05",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2020-01-06",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2020-01-07",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
    ],
    doctorName: "Dr. Henok Asrat",
    symptoms:
      "Fever typically include a sustained high fever, headache, weakness, abdominal pain, constipation or diarrhea, and sometimes a rash. Other symptoms can include loss of appetite, muscle aches, and confusion. If you suspect you have typhoid fever, it's important to see a healthcare professional for proper diagnosis and treatment.",
    diagnosis: [
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
    ],
    prescription: "Ciprofloxacin, Azithromycin",
  },
  {
    patientId: "P126",
    fName: "Heaven",
    lName: "Asrat",
    birthDate: "1995-01-01",
    gender: "Female",
    phoneNumber: "0912906891",
    email: "eden@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    lastVisitedDate: "2024-01-03",
    history: [
      {
        date: "2020-01-06",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2020-01-07",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
    ],
    doctorName: "Dr. Henok Asrat",
    symptoms:
      "Fever typically include a sustained high fever, headache, weakness, abdominal pain, constipation or diarrhea, and sometimes a rash. Other symptoms can include loss of appetite, muscle aches, and confusion. If you suspect you have typhoid fever, it's important to see a healthcare professional for proper diagnosis and treatment.",
    diagnosis: [
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
    ],
    prescription: "Ciprofloxacin, Azithromycin",
  },
  {
    patientId: "P127",
    fName: "Eden",
    lName: "Asrat",
    birthDate: "1995-01-01",
    gender: "Female",
    phoneNumber: "0912906891",
    email: "eden@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    lastVisitedDate: "2024-01-03",
    history: [
      {
        date: "2020-01-05",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2020-01-06",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2020-01-07",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
    ],
    doctorName: "Dr. Henok Asrat",
    symptoms:
      "Fever typically include a sustained high fever, headache, weakness, abdominal pain, constipation or diarrhea, and sometimes a rash. Other symptoms can include loss of appetite, muscle aches, and confusion. If you suspect you have typhoid fever, it's important to see a healthcare professional for proper diagnosis and treatment.",
    diagnosis: [
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
    ],
    prescription: "Ciprofloxacin, Azithromycin",
  },
  {
    patientId: "P128",
    fName: "Eden",
    lName: "Asrat",
    birthDate: "1995-01-01",
    gender: "Female",
    phoneNumber: "0988002241",
    email: "eden@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    lastVisitedDate: "2024-01-03",
    history: [
      {
        date: "2020-01-05",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2020-01-06",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2020-01-07",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
    ],
    doctorName: "Dr. Henok Asrat",
    symptoms:
      "Fever typically include a sustained high fever, headache, weakness, abdominal pain, constipation or diarrhea, and sometimes a rash. Other symptoms can include loss of appetite, muscle aches, and confusion. If you suspect you have typhoid fever, it's important to see a healthcare professional for proper diagnosis and treatment.",
    diagnosis: [
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
    ],
    prescription: "Ciprofloxacin, Azithromycin",
  },
  {
    patientId: "P129",
    fName: "Heaven",
    lName: "Asrat",
    birthDate: "1995-01-01",
    gender: "Female",
    phoneNumber: "0912906891",
    email: "eden@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    lastVisitedDate: "2024-01-03",
    history: [
      {
        date: "2020-01-06",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2020-01-07",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
    ],
    doctorName: "Dr. Henok Asrat",
    symptoms:
      "Fever typically include a sustained high fever, headache, weakness, abdominal pain, constipation or diarrhea, and sometimes a rash. Other symptoms can include loss of appetite, muscle aches, and confusion. If you suspect you have typhoid fever, it's important to see a healthcare professional for proper diagnosis and treatment.",
    diagnosis: [
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
    ],
    prescription: "Ciprofloxacin, Azithromycin",
  },
  {
    patientId: "P130",
    fName: "Eden",
    lName: "Asrat",
    birthDate: "1995-01-01",
    gender: "Female",
    phoneNumber: "0912906891",
    email: "eden@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    lastVisitedDate: "2024-01-03",
    history: [
      {
        date: "2020-01-05",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2020-01-06",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2020-01-07",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
    ],
    doctorName: "Dr. Henok Asrat",
    symptoms:
      "Fever typically include a sustained high fever, headache, weakness, abdominal pain, constipation or diarrhea, and sometimes a rash. Other symptoms can include loss of appetite, muscle aches, and confusion. If you suspect you have typhoid fever, it's important to see a healthcare professional for proper diagnosis and treatment.",
    diagnosis: [
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
    ],
    prescription: "Ciprofloxacin, Azithromycin",
  },
  {
    patientId: "P131",
    fName: "Eden",
    lName: "Asrat",
    birthDate: "1995-01-01",
    gender: "Female",
    phoneNumber: "0988002241",
    email: "eden@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    lastVisitedDate: "2024-01-03",
    history: [
      {
        date: "2020-01-05",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2020-01-06",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2020-01-07",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
    ],
    doctorName: "Dr. Henok Asrat",
    symptoms:
      "Fever typically include a sustained high fever, headache, weakness, abdominal pain, constipation or diarrhea, and sometimes a rash. Other symptoms can include loss of appetite, muscle aches, and confusion. If you suspect you have typhoid fever, it's important to see a healthcare professional for proper diagnosis and treatment.",
    diagnosis: [
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
    ],
    prescription: "Ciprofloxacin, Azithromycin",
  },
  {
    patientId: "P132",
    fName: "Eden",
    lName: "Asrat",
    birthDate: "1995-01-01",
    gender: "Female",
    phoneNumber: "0988002241",
    email: "eden@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    lastVisitedDate: "2024-01-03",
    history: [
      {
        date: "2020-01-05",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2020-01-06",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2020-01-07",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
    ],
    doctorName: "Dr. Henok Asrat",
    symptoms:
      "Fever typically include a sustained high fever, headache, weakness, abdominal pain, constipation or diarrhea, and sometimes a rash. Other symptoms can include loss of appetite, muscle aches, and confusion. If you suspect you have typhoid fever, it's important to see a healthcare professional for proper diagnosis and treatment.",
    diagnosis: [
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
    ],
    prescription: "Ciprofloxacin, Azithromycin",
  },
  {
    patientId: "P133",
    fName: "Heaven",
    lName: "Asrat",
    birthDate: "1995-01-01",
    gender: "Female",
    phoneNumber: "0912906891",
    email: "eden@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    lastVisitedDate: "2024-01-03",
    history: [
      {
        date: "2020-01-06",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2020-01-07",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
    ],
    doctorName: "Dr. Henok Asrat",
    symptoms:
      "Fever typically include a sustained high fever, headache, weakness, abdominal pain, constipation or diarrhea, and sometimes a rash. Other symptoms can include loss of appetite, muscle aches, and confusion. If you suspect you have typhoid fever, it's important to see a healthcare professional for proper diagnosis and treatment.",
    diagnosis: [
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
    ],
    prescription: "Ciprofloxacin, Azithromycin",
  },
  {
    patientId: "P134",
    fName: "Eden",
    lName: "Asrat",
    birthDate: "1995-01-01",
    gender: "Female",
    phoneNumber: "0912906891",
    email: "eden@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    lastVisitedDate: "2024-01-03",
    history: [
      {
        date: "2020-01-05",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2020-01-06",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2020-01-07",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
    ],
    doctorName: "Dr. Henok Asrat",
    symptoms:
      "Fever typically include a sustained high fever, headache, weakness, abdominal pain, constipation or diarrhea, and sometimes a rash. Other symptoms can include loss of appetite, muscle aches, and confusion. If you suspect you have typhoid fever, it's important to see a healthcare professional for proper diagnosis and treatment.",
    diagnosis: [
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
    ],
    prescription: "Ciprofloxacin, Azithromycin",
  },
  {
    patientId: "P135",
    fName: "Eden",
    lName: "Asrat",
    birthDate: "1995-01-01",
    gender: "Female",
    phoneNumber: "0988002241",
    email: "eden@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    lastVisitedDate: "2024-01-03",
    history: [
      {
        date: "2020-01-05",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2020-01-06",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2020-01-07",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
    ],
    doctorName: "Dr. Henok Asrat",
    symptoms:
      "Fever typically include a sustained high fever, headache, weakness, abdominal pain, constipation or diarrhea, and sometimes a rash. Other symptoms can include loss of appetite, muscle aches, and confusion. If you suspect you have typhoid fever, it's important to see a healthcare professional for proper diagnosis and treatment.",
    diagnosis: [
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
      { test: "CBC", result: "result 1" },
    ],
    prescription: "Ciprofloxacin, Azithromycin",
  },
];

//component specifically for table rows
function Row(props) {
  const { row } = props;
  const [expand, setExpand] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [detail, setDetail] = React.useState(false);
  const [selectedPatient, setSelectedPatient] = React.useState("");

  function RowComp(id) {
    setExpand(!expand);
    setSelectedPatient(id);
  }

  function handleDetail(id) {
    setDetail(!detail);
    setSelectedPatient(id);
  }
  return (
    <React.Fragment>
      <TableRow
        hover
        onClick={() => RowComp(row.patientId)}
        sx={{
          "& > *": { borderBottom: "unset" },
          ...(expand && { backgroundColor: "whitesmoke" }),
        }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {
              setOpen(!open);
              RowComp(row.patientId);
            }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="left" component="th" scope="row">
          {row.patientId}
        </TableCell>
        <TableCell align="left">{row.fName}</TableCell>
        <TableCell align="left">{row.lName}</TableCell>
        <TableCell align="left">{row.birthDate}</TableCell>
        <TableCell align="left">{row.gender}</TableCell>
        <TableCell align="left">{row.phoneNumber}</TableCell>
        <TableCell align="left">{row.email}</TableCell>
        <TableCell align="left">{row.emergencyContact}</TableCell>
        <TableCell sx={{ pl: 5, textWrap: "nowrap" }} align="left">
          {row.insuranceInfo}
        </TableCell>
        <TableCell align="left">{row.lastVisitedDate}</TableCell>
        <TableCell align="center">
          <IconButton onClick={() => handleDetail(row.patientId)}>
            <PreviewIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow sx={{ backgroundColor: "white" }}>
        <TableCell
          style={{
            position: "sticky",
            left: 0,
            paddingBottom: 0,
            paddingTop: 0,
          }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1, marginLeft: 3 }}>
              <Typography variant="subtitle2" gutterBottom component="div">
                Medical details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    {historyColumns.map((col) => (
                      <TableCell sx={{ fontWeight: "bold" }} align="left">
                        {col}
                      </TableCell>
                    ))}
                    <TableCell sx={{ fontWeight: "bold" }} align="left">
                      Medical history
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow hover key={historyRow.date}>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ textWrap: "nowrap" }}
                      >
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.age}</TableCell>
                      <TableCell align="left" sx={{ textWrap: "nowrap" }}>
                        {historyRow.address}
                      </TableCell>
                      <TableCell align="left" sx={{ textWrap: "nowrap" }}>
                        {historyRow.medication}
                      </TableCell>
                      <TableCell align="left" sx={{ textWrap: "nowrap" }}>
                        {historyRow.allergies}
                      </TableCell>
                      <TableCell align="left" sx={{ textWrap: "nowrap" }}>
                        {historyRow.notes}
                      </TableCell>
                      <TableCell align="center">
                        <IconButton
                          onClick={() =>
                            handleDetail(row.patientId, historyRow.date)
                          }
                        >
                          <PreviewIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      {detail && <MedicalDetail patientId={row.patientId} />}
    </React.Fragment>
  );
}

//collective component to be exported
export default function AllPatients({
  searchedPatient,
  handleSearchVisibility,
}) {
  //invoke a function to make the search bar component at admin component visible
  handleSearchVisibility();

  const FilteredRows = AllRows.filter((selectedRow) =>
    searchedPatient !== ""
      ? selectedRow.patientId
          .toLowerCase()
          .startsWith(searchedPatient.toLowerCase()) ||
        selectedRow.fName
          .toLowerCase()
          .startsWith(searchedPatient.toLowerCase()) ||
        selectedRow.phoneNumber.startsWith(searchedPatient.toLowerCase())
      : AllRows
  );
  return (
    <TableContainer
      component={Paper}
      sx={{ width: "100%", backgroundColor: "white" }}
      elevation={1}
    >
      <Typography
        variant="h6"
        sx={{ p: 3, position: "sticky", left: 0, textWrap: "none" }}
      >
        All patients
      </Typography>
      <Table size="small" aria-label="collapsible table">
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell
                sx={{ fontWeight: "bold", textWrap: "nowrap" }}
                align="left"
              >
                {col}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {FilteredRows.map((row) => (
            <Row key={row.patientId} row={row} />
          ))}
          {FilteredRows.length === 0 && (
            <Typography sx={{ textWrap: "nowrap", p: 3, fontSize: "0.95em" }}>
              No patient found
            </Typography>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
