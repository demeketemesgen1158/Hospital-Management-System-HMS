import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Stack } from "@mui/material";

//list of department
const departments = [
  "",
  "OPD",
  "Laboratory",
  "Diagnosis",
  "Finance",
  "Pharmacy",
];

//list of table head columns
const columns = [
  "No",
  "Patient ID",
  "Date",
  "First name",
  "Last name",
  "Age",
  "Gender",
  "Tel",
  "Email",
  "Country",
  "State",
  "City",
  "Emergency contact",
  "Insurance. Info.",
  "Admission fee",
  "Room number",
  "Status",
];

//list of patients detail stored to database
const NewRows = [
  {
    no: "1",
    patientId: "P121",
    date: "2024-01-21",
    fName: "Bisrat",
    lName: "Kiros",
    age: "47",
    tel: "0913906891",
    email: "kiros@gmail.com",
    gender: "Male",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Bole",
    emergencyContact: "Abraham",
    insuranceInfo: "Insured by Nile",
    admissionFee: 120,
    room: "Room - 17",
    status: "Pending",
  },
  {
    no: "2",
    patientId: "P122",
    date: "2024-01-21",
    fName: "Sifen",
    lName: "Kiros",
    age: "47",
    tel: "0913906891",
    email: "kiros@gmail.com",
    gender: "Male",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Bole",
    emergencyContact: "Abraham",
    insuranceInfo: "Insured by Nile",
    admissionFee: 120,
    room: "Room - 16",
    status: "Diagnosis",
  },
  {
    no: "3",
    patientId: "P123",
    date: "2024-01-21",
    fName: "Solomon",
    lName: "Kiros",
    age: "47",
    tel: "0988906891",
    email: "kiros@gmail.com",
    gender: "Male",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Bole",
    emergencyContact: "Abraham",
    insuranceInfo: "Insured by Nile",
    admissionFee: 120,
    room: "Room - 17",
    status: "Laboratory",
  },
  {
    no: "4",
    patientId: "P124",
    date: "2024-01-21",
    fName: "Senait",
    lName: "Kiros",
    age: "47",
    tel: "0914906891",
    email: "kiros@gmail.com",
    gender: "Male",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Bole",
    emergencyContact: "Abraham",
    insuranceInfo: "Insured by Nile",
    admissionFee: 120,
    room: "Room - 16",
    status: "Pharmacy",
  },
  {
    no: "5",
    patientId: "P125",
    date: "2024-01-21",
    fName: "Solomon",
    lName: "Kiros",
    age: "47",
    tel: "0912906891",
    email: "kiros@gmail.com",
    gender: "Male",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Bole",
    emergencyContact: "Abraham",
    insuranceInfo: "Insured by Nile",
    admissionFee: 120,
    room: "Room - 16",
    status: "Completed",
  },
  {
    no: "6",
    patientId: "P121",
    date: "2024-01-21",
    fName: "Bisrat",
    lName: "Kiros",
    age: "47",
    tel: "0913906891",
    email: "kiros@gmail.com",
    gender: "Male",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Bole",
    emergencyContact: "Abraham",
    insuranceInfo: "Insured by Nile",
    admissionFee: 120,
    room: "Room - 17",
    status: "Pending",
  },
  {
    no: "7",
    patientId: "P122",
    date: "2024-01-21",
    fName: "Sifen",
    lName: "Kiros",
    age: "47",
    tel: "0913906891",
    email: "kiros@gmail.com",
    gender: "Male",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Bole",
    emergencyContact: "Abraham",
    insuranceInfo: "Insured by Nile",
    admissionFee: 120,
    room: "Room - 16",
    status: "Diagnosis",
  },
  {
    no: "8",
    patientId: "P123",
    date: "2024-01-21",
    fName: "Solomon",
    lName: "Kiros",
    age: "47",
    tel: "0988906891",
    email: "kiros@gmail.com",
    gender: "Male",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Bole",
    emergencyContact: "Abraham",
    insuranceInfo: "Insured by Nile",
    admissionFee: 120,
    room: "Room - 17",
    status: "Laboratory",
  },
  {
    no: "9",
    patientId: "P124",
    date: "2024-01-21",
    fName: "Senait",
    lName: "Kiros",
    age: "47",
    tel: "0914906891",
    email: "kiros@gmail.com",
    gender: "Male",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Bole",
    emergencyContact: "Abraham",
    insuranceInfo: "Insured by Nile",
    admissionFee: 120,
    room: "Room - 16",
    status: "Pharmacy",
  },
  {
    no: "10",
    patientId: "P125",
    date: "2024-01-21",
    fName: "Solomon",
    lName: "Kiros",
    age: "47",
    tel: "0912906891",
    email: "kiros@gmail.com",
    gender: "Male",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Bole",
    emergencyContact: "Abraham",
    insuranceInfo: "Insured by Nile",
    admissionFee: 120,
    room: "Room - 16",
    status: "Completed",
  },
  {
    no: "11",
    patientId: "P121",
    date: "2024-01-21",
    fName: "Bisrat",
    lName: "Kiros",
    age: "47",
    tel: "0913906891",
    email: "kiros@gmail.com",
    gender: "Male",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Bole",
    emergencyContact: "Abraham",
    insuranceInfo: "Insured by Nile",
    admissionFee: 120,
    room: "Room - 17",
    status: "Pending",
  },
  {
    no: "12",
    patientId: "P122",
    date: "2024-01-21",
    fName: "Sifen",
    lName: "Kiros",
    age: "47",
    tel: "0913906891",
    email: "kiros@gmail.com",
    gender: "Male",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Bole",
    emergencyContact: "Abraham",
    insuranceInfo: "Insured by Nile",
    admissionFee: 120,
    room: "Room - 16",
    status: "Diagnosis",
  },
  {
    no: "13",
    patientId: "P123",
    date: "2024-01-21",
    fName: "Solomon",
    lName: "Kiros",
    age: "47",
    tel: "0988906891",
    email: "kiros@gmail.com",
    gender: "Male",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Bole",
    emergencyContact: "Abraham",
    insuranceInfo: "Insured by Nile",
    admissionFee: 120,
    room: "Room - 17",
    status: "Laboratory",
  },
  {
    no: "14",
    patientId: "P124",
    date: "2024-01-21",
    fName: "Senait",
    lName: "Kiros",
    age: "47",
    tel: "0914906891",
    email: "kiros@gmail.com",
    gender: "Male",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Bole",
    emergencyContact: "Abraham",
    insuranceInfo: "Insured by Nile",
    admissionFee: 120,
    room: "Room - 16",
    status: "Pharmacy",
  },
  {
    no: "15",
    patientId: "P125",
    date: "2024-01-21",
    fName: "Solomon",
    lName: "Kiros",
    age: "47",
    tel: "0912906891",
    email: "kiros@gmail.com",
    gender: "Male",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Bole",
    emergencyContact: "Abraham",
    insuranceInfo: "Insured by Nile",
    admissionFee: 120,
    room: "Room - 16",
    status: "Completed",
  },
];

//table head toolbar component
function HeaderComponent() {
  const [department, setDepartment] = React.useState("");

  return (
    <Stack
      sx={{
        display: "flex",
        alignContent: "center",
        flexFlow: "row wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 1,
        position: "sticky",
        left: "0",
      }}
    >
      <Typography sx={{ textWrap: "none", fontSize: "1.1em" }}>
        List of patients
      </Typography>
      <Stack
        sx={{
          display: "flex",
          alignContent: "center",
          flexFlow: "row wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography>Refer to: </Typography>
        <FormControl sx={{ m: 1, minWidth: 130 }} size="small">
          <InputLabel id="demo-select-small-label">Department</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={department}
            label="Department"
            onChange={(e) => setDepartment(e.target.value)}
          >
            {departments.map((option) => (
              <MenuItem value={option.toLowerCase()}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </Stack>
  );
}

//table rows only component
function Row(props) {
  const { row } = props;
  const [rowSelected, setRowSelected] = React.useState(false);
  const [selectedPatient, setSelectedPatient] = React.useState("");

  function RowComp(id) {
    setRowSelected(!rowSelected);
    setSelectedPatient(id);
  }

  return (
    <React.Fragment>
      <TableRow
        onClick={() => RowComp(row.patientId)}
        sx={{
          "& > *": { borderBottom: "unset" },
          ...(rowSelected && { backgroundColor: "#f0faff" }),
        }}
      >
        <TableCell sx={{ textWrap: "nowrap" }} align="left">
          {row.no}
        </TableCell>
        <TableCell sx={{ textWrap: "nowrap" }} align="left">
          {row.patientId}
        </TableCell>
        <TableCell sx={{ textWrap: "nowrap" }} align="left">
          {row.date}
        </TableCell>
        <TableCell align="left">{row.fName}</TableCell>
        <TableCell align="left">{row.lName}</TableCell>
        <TableCell align="left">{row.age}</TableCell>
        <TableCell align="left">{row.gender}</TableCell>
        <TableCell align="left">{row.tel}</TableCell>
        <TableCell align="left">{row.email}</TableCell>
        <TableCell sx={{ textWrap: "nowrap" }} align="left">
          {row.country}
        </TableCell>
        <TableCell sx={{ textWrap: "nowrap" }} align="left">
          {row.state}
        </TableCell>
        <TableCell sx={{ textWrap: "nowrap" }} align="left">
          {row.city}
        </TableCell>
        <TableCell align="left">{row.emergencyContact}</TableCell>
        <TableCell sx={{ textWrap: "nowrap" }} align="left">
          {row.insuranceInfo}
        </TableCell>
        <TableCell sx={{ textWrap: "nowrap" }} align="center">
          {row.admissionFee}
        </TableCell>
        <TableCell align="left">{row.room}</TableCell>
        <TableCell sx={{ textWrap: "nowrap" }} align="left">
          {row.status}
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

//collective component to be exported
export default function AllPatients({ searched, handleSearchVisibility }) {
  //invoke a function to make the search bar component at admin component visible
  handleSearchVisibility();

  const FilteredRows = NewRows.filter((selectedRow) =>
    searched !== ""
      ? selectedRow.tel.startsWith(searched) ||
        selectedRow.fName
          .toLocaleLowerCase()
          .startsWith(searched.toLocaleLowerCase()) ||
        selectedRow.patientId
          .toLocaleLowerCase()
          .startsWith(searched.toLocaleLowerCase())
      : selectedRow.tel != ""
  );

  return (
    <TableContainer
      component={Paper}
      sx={{
        width: "100%",
        p: 3,
      }}
      elevation={1}
    >
      <HeaderComponent />
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell
                sx={{ fontWeight: "bold", textWrap: "nowrap", pl: 1 }}
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
            <Typography sx={{ textWrap: "nowrap", p: 1, fontSize: "0.95em" }}>
              No patient found
            </Typography>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
