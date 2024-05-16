import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Divider, Typography } from "@mui/material";

//list of medical details of patients to be fetched from database
const MedicalHistory = [
  {
    date: "2024-01-05",
    patientName: "Hana Tekle",
    doctorName: "Dr. Henok Asrat",
    symptoms: "",
    diagnosis: [
      { test: "", result: " " },
      { test: "", result: " " },
      { test: "", result: " " },
      { test: "", result: " " },
      { test: "", result: " " },
      { test: "", result: " " },
    ],
    prescription: "",
  },
  {
    date: "2024-01-06",
    patientName: "Hana Tekle",
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
    date: "2024-01-07",
    patientName: "Hana Tekle",
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
    date: "2024-01-08",
    patientName: "Hana Tekle",
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MedicalDetail({ patientId }) {
  const [open, setOpen] = React.useState(true);

  const handleCancel = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Medical history</DialogTitle>
        <DialogContent>
          {MedicalHistory.map((detailHistory) => (
            <Stack sx={{ display: "flex", gap: 3 }}>
              <Divider sx={{ pb: 2 }} />
              <Box
                sx={{
                  backgroundColor: "whitesmoke",
                  display: "flex",
                  flexFlow: "row nowrap",
                  justifyItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontSize: "0.75em", p: 1 }}>
                  {detailHistory.date}
                </Typography>
                <Typography sx={{ fontSize: "0.75em", p: 1 }}>
                  Patient id - {patientId}
                </Typography>
              </Box>
              <Stack
                sx={{
                  minWidth: "25%",
                  display: "flex",
                  flexFlow: "row noWrap",
                  justifyItems: "center",
                  justifyContent: "space-between",
                  gap: 5,
                }}
              >
                <Box>
                  <Typography variant="subtitle2">Patient name</Typography>
                  <Typography sx={{ fontSize: "0.75em" }}>
                    {detailHistory.patientName}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle2">Name of Doctor</Typography>
                  <Typography sx={{ fontSize: "0.75em" }}>
                    {detailHistory.doctorName}
                  </Typography>
                </Box>
              </Stack>
              <Stack>
                <Typography>Symptoms</Typography>
                <Typography
                  onClick={(e) =>
                    detailHistory.symptoms.length === 0 &&
                    (e.target.contentEditable = true)
                  }
                  sx={{
                    fontSize: "0.85em",
                    p: 1,
                    textAlign: "justify",
                    backgroundColor:
                      detailHistory.symptoms.length === 0 && "whitesmoke",
                  }}
                >
                  {detailHistory.symptoms}
                </Typography>
              </Stack>
              <Stack>
                <Typography>Laboratory test & diagnosis result</Typography>
                <Box
                  sx={{
                    p: 1,
                    display: "flex",
                    flexFlow: "row wrap",
                    justifyItems: "center",
                    justifyContent: "flex-start",
                    gap: 1,
                  }}
                >
                  {detailHistory.diagnosis.map((diagnosisList) => (
                    <>
                      <Stack
                        sx={{
                          fontSize: "0.85em",
                          display: "flex",
                          flexFlow: "row noWrap",
                          gap: 1,
                        }}
                      >
                        <Typography
                          onClick={(e) =>
                            diagnosisList.test.length === 0 &&
                            (e.target.contentEditable = true)
                          }
                          sx={{
                            fontSize: "0.95em",
                            minWidth: 30,
                            backgroundColor:
                              diagnosisList.test.length === 0 && "whitesmoke",
                          }}
                        >
                          {diagnosisList.test}
                        </Typography>
                        <Typography sx={{ ml: 1, mr: 1, fontSize: "0.95em" }}>
                          -
                        </Typography>
                        <Typography
                          onClick={(e) =>
                            diagnosisList.test.length === 0 &&
                            (e.target.contentEditable = true)
                          }
                          sx={{
                            fontSize: "0.95em",
                            minWidth: 30,
                            backgroundColor:
                              diagnosisList.test.length === 0 && "whitesmoke",
                          }}
                        >
                          {diagnosisList.result}
                        </Typography>
                      </Stack>
                      <Divider orientation="vertical" flexItem />
                    </>
                  ))}
                </Box>
              </Stack>
              <Stack>
                <Typography>Prescription</Typography>
                <Typography
                  onClick={(e) =>
                    detailHistory.prescription.length === 0 &&
                    (e.target.contentEditable = true)
                  }
                  sx={{
                    mb: 5,
                    fontSize: "0.85em",
                    p: 1,
                    textAlign: "justify",
                    backgroundColor:
                      detailHistory.prescription.length === 0 && "whitesmoke",
                  }}
                >
                  {detailHistory.prescription}
                </Typography>
              </Stack>
              <Divider sx={{ pb: 2 }} />
            </Stack>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
