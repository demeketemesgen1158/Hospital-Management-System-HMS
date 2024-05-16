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
import { Button, Stack, Tooltip } from "@mui/material";
import Receipt from "./receipt";

//list of table head columns
const columns = [
  <AddIcon sx={{ pl: 1 }} />,
  "Patient id",
  "First name",
  "Last name",
  "Tel",
  "Email",
];

//list of patient details to be fetched from database
const rows = [
  {
    patientId: "P121",
    fName: "Bekele",
    lName: "Sisay",
    tel: "0912906891",
    email: "bekele@gmail.com",
    history: [
      {
        date: "2020-01-05",
        admission_fee: [700, "paid", "001230"],
        laboratory_fee: [1500, "unpaid", "001231"],
        diagnosis_fee: [2500, "unpaid", "001232"],
        medicine_fee: [1000, "unpaid", "001233"],
      },
      {
        date: "2020-01-06",
        admission_fee: [500, "paid", "001235"],
        laboratory_fee: [1500, "paid", "001236"],
        diagnosis_fee: [2500, "paid", "001237"],
        medicine_fee: [2100, "paid", "001238"],
      },
    ],
  },
  {
    patientId: "P122",
    fName: "Arega",
    lName: "Teferi",
    tel: "0912906891",
    email: "arega@gmail.com",
    history: [
      {
        date: "2020-01-07",
        admission_fee: [500, "paid", "001239"],
        laboratory_fee: [1500, "paid", "001240"],
        diagnosis_fee: [2500, "unpaid", "001241"],
        medicine_fee: [1000, "unpaid", "001242"],
      },
      {
        date: "2020-01-08",
        admission_fee: [500, "paid", "001243"],
        laboratory_fee: [1500, "paid", "001244"],
        diagnosis_fee: [2500, "paid", "001245"],
        medicine_fee: [1000, "paid", "001246"],
      },
    ],
  },
  {
    patientId: "P123",
    fName: "Hana",
    lName: "Mesele",
    tel: "0913906891",
    email: "hana@gmail.com",
    history: [
      {
        date: "2020-01-09",
        admission_fee: [500, "paid", "001247"],
        laboratory_fee: [1500, "paid", "001248"],
        diagnosis_fee: [2500, "paid", "001249"],
        medicine_fee: [1000, "unpaid", "001250"],
      },
      {
        date: "2020-01-10",
        admission_fee: [500, "paid", "001251"],
        laboratory_fee: [1500, "paid", "001252"],
        diagnosis_fee: [2500, "paid", "001253"],
        medicine_fee: [1000, "paid", "001254"],
      },
    ],
  },
  {
    patientId: "P124",
    fName: "Minas",
    lName: "Kaleab",
    tel: "0988002241",
    email: "minas@gmail.com",
    history: [
      {
        date: "2020-01-11",
        admission_fee: [500, "paid", "001255"],
        laboratory_fee: [1500, "paid", "001256"],
        diagnosis_fee: [2500, "unpaid", "001257"],
        medicine_fee: [1000, "unpaid", "001258"],
      },
      {
        date: "2020-01-12",
        admission_fee: [500, "paid", "001259"],
        laboratory_fee: [1500, "paid", "001260"],
        diagnosis_fee: [2500, "paid", "001261"],
        medicine_fee: [1000, "paid", "001262"],
      },
    ],
  },
  {
    patientId: "P125",
    fName: "Martha",
    lName: "Sisay",
    tel: "0931871856",
    email: "martha@gmail.com",
    history: [
      {
        date: "2020-01-13",
        admission_fee: [500, "paid", "001263"],
        laboratory_fee: [1500, "paid", "001264"],
        diagnosis_fee: [2500, "unpaid", "001265"],
        medicine_fee: [1000, "unpaid", "001266"],
      },
      {
        date: "2020-01-14",
        admission_fee: [500, "paid", "001267"],
        laboratory_fee: [1500, "paid", "001268"],
        diagnosis_fee: [2500, "paid", "001269"],
        medicine_fee: [1000, "paid", "001270"],
      },
    ],
  },
  {
    patientId: "P125",
    fName: "Martha",
    lName: "Sisay",
    tel: "0931871856",
    email: "martha@gmail.com",
    history: [
      {
        date: "2020-01-13",
        admission_fee: [500, "paid", "001263"],
        laboratory_fee: [1500, "paid", "001264"],
        diagnosis_fee: [2500, "unpaid", "001265"],
        medicine_fee: [1000, "unpaid", "001266"],
      },
      {
        date: "2020-01-14",
        admission_fee: [500, "paid", "001267"],
        laboratory_fee: [1500, "paid", "001268"],
        diagnosis_fee: [2500, "paid", "001269"],
        medicine_fee: [1000, "paid", "001270"],
      },
    ],
  },
  {
    patientId: "P126",
    fName: "Martha",
    lName: "Sisay",
    tel: "0931871856",
    email: "martha@gmail.com",
    history: [
      {
        date: "2020-01-13",
        admission_fee: [500, "paid", "001263"],
        laboratory_fee: [1500, "paid", "001264"],
        diagnosis_fee: [2500, "unpaid", "001265"],
        medicine_fee: [1000, "unpaid", "001266"],
      },
      {
        date: "2020-01-14",
        admission_fee: [500, "paid", "001267"],
        laboratory_fee: [1500, "paid", "001268"],
        diagnosis_fee: [2500, "paid", "001269"],
        medicine_fee: [1000, "paid", "001270"],
      },
    ],
  },
  {
    patientId: "P127",
    fName: "Martha",
    lName: "Sisay",
    tel: "0931871856",
    email: "martha@gmail.com",
    history: [
      {
        date: "2020-01-13",
        admission_fee: [500, "paid", "001263"],
        laboratory_fee: [1500, "paid", "001264"],
        diagnosis_fee: [2500, "unpaid", "001265"],
        medicine_fee: [1000, "unpaid", "001266"],
      },
      {
        date: "2020-01-14",
        admission_fee: [500, "paid", "001267"],
        laboratory_fee: [1500, "paid", "001268"],
        diagnosis_fee: [2500, "paid", "001269"],
        medicine_fee: [1000, "paid", "001270"],
      },
    ],
  },
  {
    patientId: "P128",
    fName: "Bekele",
    lName: "Sisay",
    tel: "0912906891",
    email: "bekele@gmail.com",
    history: [
      {
        date: "2020-01-05",
        admission_fee: [700, "paid", "001230"],
        laboratory_fee: [1500, "unpaid", "001231"],
        diagnosis_fee: [2500, "unpaid", "001232"],
        medicine_fee: [1000, "unpaid", "001233"],
      },
      {
        date: "2020-01-06",
        admission_fee: [500, "paid", "001235"],
        laboratory_fee: [1500, "paid", "001236"],
        diagnosis_fee: [2500, "paid", "001237"],
        medicine_fee: [2100, "paid", "001238"],
      },
    ],
  },
  {
    patientId: "P129",
    fName: "Arega",
    lName: "Teferi",
    tel: "0912906891",
    email: "arega@gmail.com",
    history: [
      {
        date: "2020-01-07",
        admission_fee: [500, "paid", "001239"],
        laboratory_fee: [1500, "paid", "001240"],
        diagnosis_fee: [2500, "unpaid", "001241"],
        medicine_fee: [1000, "unpaid", "001242"],
      },
      {
        date: "2020-01-08",
        admission_fee: [500, "paid", "001243"],
        laboratory_fee: [1500, "paid", "001244"],
        diagnosis_fee: [2500, "paid", "001245"],
        medicine_fee: [1000, "paid", "001246"],
      },
    ],
  },
  {
    patientId: "P130",
    fName: "Hana",
    lName: "Mesele",
    tel: "0913906891",
    email: "hana@gmail.com",
    history: [
      {
        date: "2020-01-09",
        admission_fee: [500, "paid", "001247"],
        laboratory_fee: [1500, "paid", "001248"],
        diagnosis_fee: [2500, "paid", "001249"],
        medicine_fee: [1000, "unpaid", "001250"],
      },
      {
        date: "2020-01-10",
        admission_fee: [500, "paid", "001251"],
        laboratory_fee: [1500, "paid", "001252"],
        diagnosis_fee: [2500, "paid", "001253"],
        medicine_fee: [1000, "paid", "001254"],
      },
    ],
  },
  {
    patientId: "P131",
    fName: "Minas",
    lName: "Kaleab",
    tel: "0988002241",
    email: "minas@gmail.com",
    history: [
      {
        date: "2020-01-11",
        admission_fee: [500, "paid", "001255"],
        laboratory_fee: [1500, "paid", "001256"],
        diagnosis_fee: [2500, "unpaid", "001257"],
        medicine_fee: [1000, "unpaid", "001258"],
      },
      {
        date: "2020-01-12",
        admission_fee: [500, "paid", "001259"],
        laboratory_fee: [1500, "paid", "001260"],
        diagnosis_fee: [2500, "paid", "001261"],
        medicine_fee: [1000, "paid", "001262"],
      },
    ],
  },
  {
    patientId: "P132",
    fName: "Martha",
    lName: "Sisay",
    tel: "0931871856",
    email: "martha@gmail.com",
    history: [
      {
        date: "2020-01-13",
        admission_fee: [500, "paid", "001263"],
        laboratory_fee: [1500, "paid", "001264"],
        diagnosis_fee: [2500, "unpaid", "001265"],
        medicine_fee: [1000, "unpaid", "001266"],
      },
      {
        date: "2020-01-14",
        admission_fee: [500, "paid", "001267"],
        laboratory_fee: [1500, "paid", "001268"],
        diagnosis_fee: [2500, "paid", "001269"],
        medicine_fee: [1000, "paid", "001270"],
      },
    ],
  },
  {
    patientId: "P133",
    fName: "Martha",
    lName: "Sisay",
    tel: "0931871856",
    email: "martha@gmail.com",
    history: [
      {
        date: "2020-01-13",
        admission_fee: [500, "paid", "001263"],
        laboratory_fee: [1500, "paid", "001264"],
        diagnosis_fee: [2500, "unpaid", "001265"],
        medicine_fee: [1000, "unpaid", "001266"],
      },
      {
        date: "2020-01-14",
        admission_fee: [500, "paid", "001267"],
        laboratory_fee: [1500, "paid", "001268"],
        diagnosis_fee: [2500, "paid", "001269"],
        medicine_fee: [1000, "paid", "001270"],
      },
    ],
  },
  {
    patientId: "P134",
    fName: "Martha",
    lName: "Sisay",
    tel: "0931871856",
    email: "martha@gmail.com",
    history: [
      {
        date: "2020-01-13",
        admission_fee: [500, "paid", "001263"],
        laboratory_fee: [1500, "paid", "001264"],
        diagnosis_fee: [2500, "unpaid", "001265"],
        medicine_fee: [1000, "unpaid", "001266"],
      },
      {
        date: "2020-01-14",
        admission_fee: [500, "paid", "001267"],
        laboratory_fee: [1500, "paid", "001268"],
        diagnosis_fee: [2500, "paid", "001269"],
        medicine_fee: [1000, "paid", "001270"],
      },
    ],
  },
  {
    patientId: "P135",
    fName: "Martha",
    lName: "Sisay",
    tel: "0931871856",
    email: "martha@gmail.com",
    history: [
      {
        date: "2020-01-13",
        admission_fee: [500, "paid", "001263"],
        laboratory_fee: [1500, "paid", "001264"],
        diagnosis_fee: [2500, "unpaid", "001265"],
        medicine_fee: [1000, "unpaid", "001266"],
      },
      {
        date: "2020-01-14",
        admission_fee: [500, "paid", "001267"],
        laboratory_fee: [1500, "paid", "001268"],
        diagnosis_fee: [2500, "paid", "001269"],
        medicine_fee: [1000, "paid", "001270"],
      },
    ],
  },
];

//component for table rows only
function Row(props) {
  const { row } = props;
  const [expandRow, setExpandeRow] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState("");
  const [receipt, setReceipt] = React.useState(false);
  const [receiptNumber, setReceiptNumber] = React.useState("");
  const [patientId, setPatientId] = React.useState("");
  const [fName, setFname] = React.useState("");
  const [lName, setLname] = React.useState("");
  const [reason, setReason] = React.useState("Admission fee");
  const [amount, setAmount] = React.useState("");

  function handleReceipt(
    date,
    receiptNumber,
    patientId,
    fName,
    lName,
    reason,
    amount
  ) {
    setDate(date);
    setReceipt(!receipt);
    setReceiptNumber(receiptNumber);
    setPatientId(patientId);
    setFname(fName);
    setLname(lName);
    setReason(reason);
    setAmount(amount);
  }

  function RowComp() {
    setExpandeRow(!expandRow);
  }

  return (
    <React.Fragment>
      {receipt && (
        <Receipt
          date={date}
          receiptNumber={receiptNumber}
          patientId={patientId}
          fName={fName}
          lName={lName}
          reason={reason}
          amount={amount}
        />
      )}
      <TableRow
        hover
        onClick={RowComp}
        sx={{
          "& > *": { borderBottom: "unset" },
          ...(expandRow && { backgroundColor: "#d4e6f5" }),
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
        <TableCell align="center">{row.fName}</TableCell>
        <TableCell align="center">{row.lName}</TableCell>
        <TableCell align="center">{row.tel}</TableCell>
        <TableCell align="center">{row.email}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1, marginLeft: 3 }}>
              <Typography variant="subtitle2" gutterBottom component="div">
                Payment details (ETB)
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell
                      sx={{
                        textWrap: "nowrap",
                        fontSize: "0.95em",
                      }}
                    >
                      Admission fee
                    </TableCell>
                    <TableCell
                      sx={{
                        textWrap: "nowrap",
                        fontSize: "0.95em",
                      }}
                      align="right"
                    >
                      Laboratory fee
                    </TableCell>
                    <TableCell
                      sx={{
                        textWrap: "nowrap",
                        fontSize: "0.95em",
                      }}
                      align="right"
                    >
                      Diagnosis fee
                    </TableCell>
                    <TableCell
                      sx={{
                        textWrap: "nowrap",
                        fontSize: "0.95em",
                      }}
                      align="right"
                    >
                      Medicine costs
                    </TableCell>
                    <TableCell
                      sx={{
                        textWrap: "nowrap",
                        fontSize: "0.95em",
                      }}
                      align="right"
                    >
                      Total
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell
                        sx={{ textWrap: "nowrap", fontSize: "0.90em" }}
                        component="th"
                        scope="row"
                      >
                        {historyRow.date}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          textWrap: "nowrap",
                          fontSize: "0.90em",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          handleReceipt(
                            historyRow.date,
                            historyRow.admission_fee[2],
                            row.patientId,
                            row.fName,
                            row.lName,
                            "Admission fee",
                            historyRow.admission_fee[0]
                          )
                        }
                      >
                        {historyRow.admission_fee[1] !== "unpaid" ? (
                          historyRow.admission_fee[0]
                        ) : (
                          <Tooltip title="Click to  confirm payment">
                            <Button variant="outlined">
                              {historyRow.admission_fee[0]}
                            </Button>
                          </Tooltip>
                        )}
                      </TableCell>
                      <TableCell
                        sx={{
                          textWrap: "nowrap",
                          fontSize: "0.90em",
                          cursor: "pointer",
                        }}
                        align="center"
                        onClick={() =>
                          handleReceipt(
                            historyRow.date,
                            historyRow.laboratory_fee[2],
                            row.patientId,
                            row.fName,
                            row.lName,
                            "Laboratory tests fee",
                            historyRow.laboratory_fee[0]
                          )
                        }
                      >
                        {historyRow.laboratory_fee[1] !== "unpaid" ? (
                          historyRow.laboratory_fee[0]
                        ) : (
                          <Tooltip title="Click to  confirm payment">
                            <Button variant="outlined">
                              {historyRow.laboratory_fee[0]}
                            </Button>
                          </Tooltip>
                        )}
                      </TableCell>
                      <TableCell
                        sx={{
                          textWrap: "nowrap",
                          fontSize: "0.90em",
                          cursor: "pointer",
                        }}
                        align="center"
                        onClick={() =>
                          handleReceipt(
                            historyRow.date,
                            historyRow.diagnosis_fee[2],
                            row.patientId,
                            row.fName,
                            row.lName,
                            "Diagnosis fee",
                            historyRow.diagnosis_fee[0]
                          )
                        }
                      >
                        {historyRow.diagnosis_fee[1] !== "unpaid" ? (
                          historyRow.diagnosis_fee[0]
                        ) : (
                          <Tooltip title="Click to  confirm payment">
                            <Button variant="outlined">
                              {historyRow.diagnosis_fee[0]}
                            </Button>
                          </Tooltip>
                        )}
                      </TableCell>
                      <TableCell
                        sx={{
                          textWrap: "nowrap",
                          fontSize: "0.90em",
                          cursor: "pointer",
                        }}
                        align="center"
                        onClick={() =>
                          handleReceipt(
                            historyRow.date,
                            historyRow.medicine_fee[2],
                            row.patientId,
                            row.fName,
                            row.lName,
                            "Medicines cost",
                            historyRow.medicine_fee[0]
                          )
                        }
                      >
                        {historyRow.medicine_fee[1] !== "unpaid" ? (
                          historyRow.medicine_fee[0]
                        ) : (
                          <Tooltip title="Click to  confirm payment">
                            <Button variant="outlined">
                              {historyRow.medicine_fee[0]}
                            </Button>
                          </Tooltip>
                        )}
                      </TableCell>
                      <TableCell
                        sx={{ textWrap: "nowrap", fontSize: "0.90em" }}
                        align="center"
                      >
                        {historyRow.admission_fee[0] +
                          historyRow.laboratory_fee[0] +
                          historyRow.diagnosis_fee[0] +
                          historyRow.medicine_fee[0]}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

//collective component to be exported
export default function NewBill({ searchedPatient, handleSearchVisibility }) {
  //invoke a function to make the search bar component at admin component visible
  handleSearchVisibility();

  const FilteredRows = rows.filter((filtered) =>
    searchedPatient !== ""
      ? filtered.patientId
          .toLowerCase()
          .startsWith(searchedPatient.toLowerCase()) ||
        filtered.fName
          .toLowerCase()
          .startsWith(searchedPatient.toLowerCase()) ||
        filtered.tel.startsWith(searchedPatient)
      : rows
  );
  return (
    <TableContainer
      sx={{
        width: 1200,
      }}
      component={Paper}
      elevation={1}
    >
      <Typography variant="h6" sx={{ p: 3 }}>
        New payment
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
