import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import {
  Divider,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const prescriptionColumns = [
  "Diagnosis reason",
  "Medication",
  "Dosage",
  "Frequency",
  "Price",
  "Instruction",
  "Availablity",
];

const MedicalHistory = [
  {
    date: "2024-01-05",
    patientName: "Hana Tekle",
    doctorName: "Dr. Henok Asrat",
    prescription: [
      {
        reason: "Typhoid",
        medication: "Medicine 1",
        dosage: "2 tablet",
        frequency: "3 per day",
        instruction: "After eating",
        availablity: "Instock",
        price: "350",
      },
      {
        reason: "Typhoid",
        medication: "Medicine 1",
        dosage: "2 tablet",
        frequency: "3 per day",
        instruction: "After eating",
        availablity: "Instock",
        price: "850",
      },
      {
        reason: "Typhoid",
        medication: "Medicine 1",
        dosage: "2 tablet",
        frequency: "3 per day",
        instruction: "After eating",
        availablity: "Instock",
        price: "450",
      },
      {
        reason: "Typhoid",
        medication: "Medicine 1",
        dosage: "2 tablet",
        frequency: "3 per day",
        instruction: "After eating",
        availablity: "Instock",
        price: "150",
      },
    ],
  },
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Prescription({ pId }) {
  let totalPrice = "";
  const [open, setOpen] = React.useState(true);

  {
    MedicalHistory[0].prescription.map(
      (presc) => (totalPrice = Number(totalPrice) + Number(presc.price))
    );
  }
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
        // onClose={handleClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Prescription</DialogTitle>
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
                  Patient id - {pId}
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
                <Box
                  sx={{
                    display: "flex",
                    flexFlow: "row wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography>Prescription</Typography>
                  <Typography variant="outlined" sx={{ fontSize: "0.85em" }}>
                    Total price - ETB {totalPrice}
                  </Typography>
                </Box>
                <TableContainer>
                  <TableHead>
                    <TableRow>
                      {prescriptionColumns.map((col) => (
                        <TableCell sx={{ textWrap: "nowrap" }}>{col}</TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {MedicalHistory[0].prescription.map((presc) => (
                      <TableRow>
                        <TableCell sx={{ fontSize: "0.85em" }}>
                          {presc.reason}
                        </TableCell>
                        <TableCell sx={{ fontSize: "0.85em" }}>
                          {presc.medication}
                        </TableCell>
                        <TableCell sx={{ fontSize: "0.85em" }}>
                          {presc.dosage}
                        </TableCell>
                        <TableCell sx={{ fontSize: "0.85em" }}>
                          {presc.frequency}
                        </TableCell>
                        <TableCell sx={{ fontSize: "0.85em" }}>
                          {presc.price}
                        </TableCell>
                        <TableCell sx={{ fontSize: "0.85em" }}>
                          {presc.instruction}
                        </TableCell>
                        <TableCell sx={{ fontSize: "0.85em" }}>
                          {presc.availablity}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </TableContainer>
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
