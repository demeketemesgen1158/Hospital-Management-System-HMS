import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import { Divider, Typography } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

//Collective component to be exported
export default function Receipt({
  date,
  receiptNumber,
  patientId,
  fName,
  lName,
  reason,
  amount,
}) {
  const [open, setOpen] = React.useState(true);
  const [print, setPrint] = React.useState(true);

  const handleCancel = () => {
    setOpen(false);
  };

  function handleOnPrint() {
    window.print();
  }

  const handlePrint = () => {
    setPrint(false);
  };

  React.useEffect(() => {
    !print && handleOnPrint();
  }, [print]);

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
        <DialogTitle
          id="scroll-dialog-title"
          sx={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-between",
          }}
        >
          <Typography>Receipt for payment</Typography>
          {!print && (
            <Button onClick={handleCancel}>
              <CloseIcon sx={{ color: "grey" }} />
            </Button>
          )}
        </DialogTitle>
        <DialogContent>
          <Stack sx={{ display: "flex", gap: 3 }}>
            <Divider />
            <Box
              sx={{
                backgroundColor: "whitesmoke",
                display: "flex",
                flexFlow: "row wrap",
                justifyItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ fontSize: "0.75em", p: 1, textWrap: "nowrap" }}>
                {date}
              </Typography>
              <Typography sx={{ fontSize: "0.75em", p: 1, textWrap: "nowrap" }}>
                Patient id - {patientId}
              </Typography>
              <Typography sx={{ fontSize: "0.75em", p: 1, textWrap: "nowrap" }}>
                FS. No - {receiptNumber}
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
                <Typography sx={{ fontSize: "0.75em", p: 1 }}>
                  {fName}&nbsp;{lName}
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2">Name of Doctor</Typography>
                <Typography sx={{ fontSize: "0.75em", p: 1 }}>
                  Dr. Abraham
                </Typography>
              </Box>
              <Box>
                <Typography>Payment for:</Typography>
                <Typography
                  sx={{
                    fontSize: "0.75em",
                    p: 1,
                    textAlign: "justify",
                  }}
                >
                  {reason}
                </Typography>
              </Box>
            </Stack>
            <Stack sx={{ display: "flex", flexFlow: "row wrap" }}>
              <Box>
                <Typography variant="subtitle2">Amount:</Typography>
                <Typography sx={{ fontSize: "0.75em" }}>
                  ETB {amount}
                </Typography>
              </Box>
            </Stack>
            <Stack
              sx={{
                display: "flex",
                flexFlow: "row wrap",
                justifyItems: "center",
                justifyContent: "flex-start",
                gap: 12,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  flexDirection: "column",
                }}
              >
                <Typography variant="subtitle2">Receiver name:</Typography>
                <Typography sx={{ fontSize: "0.75em" }}>Aster F</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography variant="subtitle2">Signiture: </Typography>
                <Typography sx={{ fontSize: "0.75em" }}>_______</Typography>
              </Box>
            </Stack>
            <Divider sx={{ pb: 2 }} />
          </Stack>
        </DialogContent>
        {print && (
          <DialogActions>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button onClick={handlePrint}>Print</Button>
          </DialogActions>
        )}
      </Dialog>
    </React.Fragment>
  );
}
