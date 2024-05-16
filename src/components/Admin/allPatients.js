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
import PreviewIcon from "@mui/icons-material/Preview";
import AddIcon from "@mui/icons-material/Add";
import { Stack } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MedicalDetail from "./medicalDetail";

const options = [
  "",
  "OPD",
  "Laboratory",
  "Diagnosis",
  "ICU",
  "Surgery",
  "Pharmacy",
];

//List of table  columns head
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

//List of patient history table  columns head
const historyColumns = [
  "Date",
  "Age",
  "Address",
  "Medication",
  "Allergies",
  "Notes",
];

//List of Patient details, it will be fetched from database
const AllRows = [
  {
    patientId: "P121",
    fName: "Solomon",
    lName: "Jemal",
    birthDate: "1995-01-01",
    gender: "Male",
    tel: "0913906891",
    email: "Sifen@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    lastVisitedDate: "2024-01-05",
    history: [
      {
        date: "2024-01-05",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2024-01-06",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2024-01-07",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
    ],
  },
  {
    patientId: "P122",
    fName: "Feven",
    lName: "Asrat",
    birthDate: "1995-01-01",
    gender: "Female",
    tel: "0913906891",
    email: "eden@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    lastVisitedDate: "2024-01-05",
    history: [
      {
        date: "2024-01-05",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2024-01-06",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2024-01-07",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
    ],
  },
  {
    patientId: "P123",
    fName: "Eden",
    lName: "Tekle",
    birthDate: "1995-01-01",
    gender: "Female",
    tel: "0912906891",
    email: "eden@gmail.com",
    emergencyContact: "Solomon T",
    insuranceInfo: "Insured by Nile Insurance",
    lastVisitedDate: "2024-01-05",
    history: [
      {
        date: "2024-01-05",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2024-01-06",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2024-01-07",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
    ],
  },
  {
    patientId: "P124",
    fName: "Melaku",
    lName: "Asefa",
    birthDate: "1995-01-01",
    gender: "Male",
    tel: "0912906891",
    email: "Melat@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    lastVisitedDate: "2024-01-05",
    history: [
      {
        date: "2024-01-05",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2024-01-06",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2024-01-07",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
    ],
  },
  {
    patientId: "P125",
    fName: "Kibret",
    lName: "Asrat",
    birthDate: "1995-01-14",
    gender: "Male",
    tel: "0988002241",
    email: "eden@gmail.com",
    emergencyContact: "Kibret Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    lastVisitedDate: "2024-01-05",
    history: [
      {
        date: "2024-01-05",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2024-01-06",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2024-01-07",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
    ],
  },
  {
    patientId: "P126",
    fName: "Edom",
    lName: "Asrat",
    birthDate: "1995-01-01",
    gender: "Female",
    tel: "0912906891",
    email: "edom@gmail.com",
    emergencyContact: "Asrat Kidus",
    insuranceInfo: "Insured by Nile Insurance",
    lastVisitedDate: "2024-01-05",
    history: [
      {
        date: "2024-01-05",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2024-01-06",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2024-01-07",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
    ],
  },
  {
    patientId: "P127",
    fName: "Paulos",
    lName: "Asrat",
    birthDate: "1995-01-01",
    gender: "Male",
    tel: "0931871856",
    email: "Senait@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    lastVisitedDate: "2024-01-05",
    history: [
      {
        date: "2024-01-05",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2024-01-06",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2024-01-07",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
    ],
  },
  {
    patientId: "P128",
    fName: "Eden",
    lName: "Tekle",
    birthDate: "1995-01-01",
    gender: "Female",
    tel: "0912906891",
    email: "eden@gmail.com",
    emergencyContact: "Solomon T",
    insuranceInfo: "Insured by Nile Insurance",
    lastVisitedDate: "2024-01-05",
    history: [
      {
        date: "2024-01-05",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2024-01-06",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2024-01-07",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
    ],
  },
  {
    patientId: "P129",
    fName: "Melat",
    lName: "Asefa",
    birthDate: "1995-01-01",
    gender: "Female",
    tel: "0912906891",
    email: "Melat@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    lastVisitedDate: "2024-01-05",
    history: [
      {
        date: "2024-01-05",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2024-01-06",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2024-01-07",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
    ],
  },
  {
    patientId: "P130",
    fName: "Eden",
    lName: "Asrat",
    birthDate: "1995-01-14",
    gender: "Female",
    tel: "0988002241",
    email: "eden@gmail.com",
    emergencyContact: "Kibret Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    lastVisitedDate: "2024-01-05",
    history: [
      {
        date: "2024-01-05",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2024-01-06",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2024-01-07",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
    ],
  },
  {
    patientId: "P131",
    fName: "Ahmed",
    lName: "Asrat",
    birthDate: "1995-01-01",
    gender: "Male",
    tel: "0912906891",
    email: "edom@gmail.com",
    emergencyContact: "Asrat Kidus",
    insuranceInfo: "Insured by Nile Insurance",
    lastVisitedDate: "2024-01-05",
    history: [
      {
        date: "2024-01-05",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2024-01-06",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2024-01-07",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
    ],
  },
  {
    patientId: "P132",
    fName: "Senait",
    lName: "Asrat",
    birthDate: "1995-01-01",
    gender: "Female",
    tel: "0931871856",
    email: "Senait@gmail.com",
    emergencyContact: "Asrat Tamrat",
    insuranceInfo: "Insured by Nile Insurance",
    lastVisitedDate: "2024-01-05",
    history: [
      {
        date: "2024-01-05",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2024-01-06",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
      {
        date: "2024-01-07",
        age: "31",
        address: "Addis Ababa",
        medication: "Pregnant",
        allergies: "Sinus",
        notes: "",
      },
    ],
  },
];

//Component for table head toolbar
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
        p: 3,
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
            {options.map((option) => (
              <MenuItem value={option.toLowerCase()}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </Stack>
  );
}

//Component for table rows only
function Row(props) {
  const { row } = props;
  const [expand, setExpand] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [detail, setDetail] = React.useState(false);
  const [selected, setSelected] = React.useState(false);
  const [selectedPatient, setSelectedPatient] = React.useState("");

  function RowComp() {
    setExpand(!expand);
    setSelected(!selected);
  }

  function handleDetail(id) {
    setDetail(!detail);
    setSelectedPatient(id);
  }
  return (
    <React.Fragment>
      <TableRow
        hover
        onClick={() => RowComp()}
        sx={{
          "& > *": { borderBottom: "unset" },
          ...(selected && { backgroundColor: "whitesmoke" }),
        }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {
              setOpen(!open);
              RowComp();
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
        <TableCell align="left">{row.tel}</TableCell>
        <TableCell align="left">{row.email}</TableCell>
        <TableCell align="left">{row.emergencyContact}</TableCell>
        <TableCell sx={{ textWrap: "nowrap" }} align="left">
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
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.age}</TableCell>
                      <TableCell align="left">{historyRow.address}</TableCell>
                      <TableCell align="left">
                        {historyRow.medication}
                      </TableCell>
                      <TableCell align="left">{historyRow.allergies}</TableCell>
                      <TableCell align="left">{historyRow.notes}</TableCell>
                      <TableCell align="center">
                        <IconButton onClick={() => handleDetail(row.patientId)}>
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
      {detail && <MedicalDetail patientId={selectedPatient} />}
    </React.Fragment>
  );
}

//Collective component to be exported
export default function AllPatients({
  searchedPatient,
  handleSearchVisibility,
}) {
  //invoke a function to make the search bar component at admin component visible
  handleSearchVisibility();

  const FilteredRows = AllRows.filter((selectedRow) =>
    searchedPatient !== ""
      ? selectedRow.fName
          .toLowerCase()
          .startsWith(searchedPatient.toLowerCase()) ||
        selectedRow.tel.startsWith(searchedPatient) ||
        selectedRow.patientId
          .toLowerCase()
          .startsWith(searchedPatient.toLowerCase())
      : AllRows
  );
  return (
    <Box sx={{ width: "100%" }}>
      <TableContainer
        component={Paper}
        sx={{ width: "100%", backgroundColor: "white" }}
        elevation={1}
      >
        <HeaderComponent />
        <Table size="small">
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

            {/* Placeholder if no data found */}
            {FilteredRows.length === 0 && (
              <Typography sx={{ textWrap: "nowrap", p: 3, fontSize: "0.95em" }}>
                No patient found
              </Typography>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
