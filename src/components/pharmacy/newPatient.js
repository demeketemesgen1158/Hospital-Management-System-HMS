import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import PreviewIcon from "@mui/icons-material/Preview";
import { Stack } from "@mui/material";
import Prescription from "./prescription";
import Button from "@mui/material/Button";

//list of departments
const options = [
  "",
  "Finance",
  "OPD",
  "Laboratory",
  "Diagnosis",
  "ICU",
  "Surgery",
  "Pharmacy",
];

//list of table head columns
const columns = [
  "Patient ID",
  "First name",
  "Last name",
  "Age",
  "Gender",
  "Phone Number",
  "Email",
  "Emergency contact",
  "Insurance. Info.",
  "Price",
  "Allergies",
  "Doctor's name",
  "Medical history",
  "Status",
];

//list of patient details to be fetched from database
const NewRows = [
  {
    patientId: "P121",
    fName: "Eden",
    lName: "Asrat",
    age: "27",
    gender: "Male",
    phoneNumber: "0913906891",
    email: "eden@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    price: "2000",
    allergies: "Sinus",
    doctorName: "Dr. Abraham D",
  },
  {
    patientId: "P122",
    fName: "Aster",
    lName: "Asrat",
    age: "27",
    gender: "Male",
    phoneNumber: "0988002241",
    email: "eden@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    price: "2000",
    allergies: "Sinus",
    doctorName: "Dr. Abraham D",
  },
  {
    patientId: "P123",
    fName: "Aselefech",
    lName: "Asrat",
    age: "27",
    gender: "Male",
    phoneNumber: "0912906891",
    email: "eden@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    price: "2000",
    allergies: "Sinus",
    doctorName: "Dr. Abraham D",
  },
  {
    patientId: "P124",
    fName: "Eden",
    lName: "Asrat",
    age: "27",
    gender: "Male",
    phoneNumber: "0912906891",
    email: "eden@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    price: "2000",
    allergies: "Sinus",
    doctorName: "Dr. Abraham D",
  },
  {
    patientId: "P125",
    fName: "Eden",
    lName: "Asrat",
    age: "27",
    gender: "Male",
    phoneNumber: "0913906891",
    email: "eden@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    price: "2000",
    allergies: "Sinus",
    doctorName: "Dr. Abraham D",
  },
  {
    patientId: "P126",
    fName: "Aster",
    lName: "Asrat",
    age: "27",
    gender: "Male",
    phoneNumber: "0988002241",
    email: "eden@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    price: "2000",
    allergies: "Sinus",
    doctorName: "Dr. Abraham D",
  },
  {
    patientId: "P127",
    fName: "Eden",
    lName: "Asrat",
    age: "27",
    gender: "Male",
    phoneNumber: "0912906891",
    email: "eden@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    price: "2000",
    allergies: "Sinus",
    doctorName: "Dr. Abraham D",
  },
  {
    patientId: "P128",
    fName: "Eden",
    lName: "Asrat",
    age: "27",
    gender: "Male",
    phoneNumber: "0913906891",
    email: "eden@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    price: "2000",
    allergies: "Sinus",
    doctorName: "Dr. Abraham D",
  },
  {
    patientId: "P129",
    fName: "Aster",
    lName: "Asrat",
    age: "27",
    gender: "Male",
    phoneNumber: "0988002241",
    email: "eden@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    price: "2000",
    allergies: "Sinus",
    doctorName: "Dr. Abraham D",
  },
  {
    patientId: "P130",
    fName: "Eden",
    lName: "Asrat",
    age: "27",
    gender: "Male",
    phoneNumber: "0912906891",
    email: "eden@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    price: "2000",
    allergies: "Sinus",
    doctorName: "Dr. Abraham D",
  },
  {
    patientId: "P131",
    fName: "Eden",
    lName: "Asrat",
    age: "27",
    gender: "Male",
    phoneNumber: "0913906891",
    email: "eden@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    price: "2000",
    allergies: "Sinus",
    doctorName: "Dr. Abraham D",
  },
  {
    patientId: "P132",
    fName: "Aster",
    lName: "Asrat",
    age: "27",
    gender: "Male",
    phoneNumber: "0988002241",
    email: "eden@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    price: "2000",
    allergies: "Sinus",
    doctorName: "Dr. Abraham D",
  },
  {
    patientId: "P133",
    fName: "Aselefech",
    lName: "Asrat",
    age: "27",
    gender: "Male",
    phoneNumber: "0912906891",
    email: "eden@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    price: "2000",
    allergies: "Sinus",
    doctorName: "Dr. Abraham D",
  },
  {
    patientId: "P134",
    fName: "Aselefech",
    lName: "Asrat",
    age: "27",
    gender: "Male",
    phoneNumber: "0912906891",
    email: "eden@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    price: "2000",
    allergies: "Sinus",
    doctorName: "Dr. Abraham D",
  },
  {
    patientId: "P135",
    fName: "Aselefech",
    lName: "Asrat",
    age: "27",
    gender: "Male",
    phoneNumber: "0912906891",
    email: "eden@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    price: "2000",
    allergies: "Sinus",
    doctorName: "Dr. Abraham D",
  },
];

//table head toolbar component
function HeaderComponent() {
  const [department, setDepartment] = React.useState(options[0]);

  return (
    <Stack
      sx={{
        display: "flex",
        alignContent: "center",
        flexFlow: "row wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 3,
        position: "sticky",
        left: "0",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          alignContent: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Typography sx={{ textWrap: "none", fontSize: "1.1em" }}>
          New patients
        </Typography>
      </Stack>
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
            {options.map((option) => (
              <MenuItem value={option.toLowerCase()}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </Stack>
  );
}

//component specifically for table rows
function Row(props) {
  const { row } = props;
  const [expand, setExpand] = React.useState(false);
  const [detail, setDetail] = React.useState(false);
  const [selectedPatient, setSelectedPatient] = React.useState("");
  const [medicationdate, setMedicationdate] = React.useState("");

  function RowComp(id) {
    setExpand(!expand);
    setSelectedPatient(id);
  }

  function handleDetail(pId, medDate) {
    setDetail(!detail);
    setSelectedPatient(pId);
    setMedicationdate(medDate);
  }
  return (
    <React.Fragment>
      {detail && <Prescription pId={selectedPatient} mDate={medicationdate} />}
      <TableRow
        onClick={() => RowComp(row.patientId)}
        sx={{
          "& > *": { borderBottom: "unset" },
          ...(expand && { backgroundColor: "#f0faff" }),
        }}
      >
        <TableCell sx={{ textWrap: "nowrap" }} align="left">
          {row.patientId}
        </TableCell>
        <TableCell align="left">{row.fName}</TableCell>
        <TableCell align="left">{row.lName}</TableCell>
        <TableCell align="left">{row.age}</TableCell>
        <TableCell align="left">{row.gender}</TableCell>
        <TableCell align="left">{row.phoneNumber}</TableCell>
        <TableCell align="left">{row.email}</TableCell>
        <TableCell align="left">{row.emergencyContact}</TableCell>
        <TableCell sx={{ textWrap: "nowrap" }} align="left">
          {row.insuranceInfo}
        </TableCell>
        <TableCell align="left">{row.price}</TableCell>
        <TableCell sx={{ textWrap: "nowrap" }} align="left">
          {row.allergies}
        </TableCell>
        <TableCell sx={{ textWrap: "nowrap" }} align="left">
          {row.doctorName}
        </TableCell>
        <TableCell align="center">
          <IconButton onClick={() => handleDetail(row.patientId)}>
            <PreviewIcon />
          </IconButton>
        </TableCell>
        <TableCell align="left">
          <Button variant="outlined" sx={{ textTransform: "none" }}>
            Complete
          </Button>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

//collective component to be exported
export default function NewPatient({
  searchedPatient,
  handleSearchVisibility,
}) {
  //invoke a function to make the search bar component at admin component visible
  handleSearchVisibility();

  const FilteredRows = NewRows.filter((selectedRow) =>
    searchedPatient !== ""
      ? selectedRow.phoneNumber.startsWith(searchedPatient) ||
        selectedRow.patientId
          .toLowerCase()
          .startsWith(searchedPatient.toLowerCase()) ||
        selectedRow.fName
          .toLowerCase()
          .startsWith(searchedPatient.toLowerCase())
      : NewRows
  );

  return (
    <TableContainer
      component={Paper}
      sx={{ width: "100%", padding: 3, backgroundColor: "white" }}
      elevation={1}
    >
      <HeaderComponent />
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
