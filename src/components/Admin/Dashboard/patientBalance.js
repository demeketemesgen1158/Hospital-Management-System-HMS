import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/material";

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
];

//list of latest admited patients that will be fetched from database instantly
const rows = [
  {
    no: "1",
    patientId: "P121",
    date: "2024-01-21",
    fName: "Bisrat",
    lName: "Kiros",
    age: "47",
    tel: "912906891",
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
    tel: "912906891",
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
    tel: "912906891",
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
];

export default function PatientBalance() {
  return (
    <Stack
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Paper
        sx={{
          padding: 2,
          mt: 1,
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: " column",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1.2em", sm: "1.0em", md: "1.15em" } }}
          >
            Admission
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            9223
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: " column",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography>Discharge</Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            8220
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: " column",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography>Inpatient</Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            1003
          </Typography>
        </Box>
      </Paper>
      <Typography
        sx={{
          pt: 3,
          pb: 1,
          fontSize: { xs: "1.2em", sm: "1.0em", md: "1.05em" },
        }}
      >
        Recently admitted
      </Typography>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell sx={{ textWrap: "nowrap" }}>{column}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.patientId}
                // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.no}</TableCell>
                <TableCell align="center">{row.patientId}</TableCell>
                <TableCell align="left" sx={{ textWrap: "nowrap" }}>
                  {row.date}
                </TableCell>
                <TableCell align="left">{row.fName}</TableCell>
                <TableCell align="left">{row.lName}</TableCell>
                <TableCell align="center">{row.age}</TableCell>
                <TableCell align="center">{row.gender}</TableCell>
                <TableCell align="left">{row.tel}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left" sx={{ textWrap: "nowrap" }}>
                  {row.country}
                </TableCell>
                <TableCell align="left" sx={{ textWrap: "nowrap" }}>
                  {row.state}
                </TableCell>
                <TableCell align="left" sx={{ textWrap: "nowrap" }}>
                  {row.city}
                </TableCell>
                <TableCell align="left" sx={{ textWrap: "nowrap" }}>
                  {row.emergencyContact}
                </TableCell>
                <TableCell align="left" sx={{ textWrap: "nowrap" }}>
                  {row.insuranceInfo}
                </TableCell>
                <TableCell align="center">{row.admissionFee}</TableCell>
                <TableCell align="center">{row.room}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
