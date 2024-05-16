import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { Tooltip } from "@mui/material";

//report details to be fetched from database
const reports = [
  {
    patieentId: "P121",
    date: "2024-01-05",
    admissionFee: "5",
    laboratoryFee: "75",
    diagnosisFee: "85",
    medicineCost: "65",
  },
  {
    patieentId: "P122",
    date: "2024-01-05",
    admissionFee: "5",
    laboratoryFee: "65",
    diagnosisFee: "85",
    medicineCost: "25",
  },
  {
    patieentId: "P123",
    date: "2024-01-05",
    admissionFee: "5",
    laboratoryFee: "35",
    diagnosisFee: "75",
    medicineCost: "55",
  },
];

let admissionFeeTotal = 0;
let laboratoryFeeTotal = 0;
let diagnosisFeeTotal = 0;
let medicineCostTotal = 0;

//collective component to be exported
export default function Report({ handlePrint, handlePrintOff, print }) {
  const [enableOverflow, setOverflow] = React.useState(false);

  function handleOverflowEnable() {
    setOverflow(true);
  }

  function handleOverflowDisable() {
    setOverflow(false);
  }

  React.useEffect(() => {
    print && window.print();
  }, [print]);

  //filter and map admission fees
  reports.map(
    (report) =>
      (admissionFeeTotal = admissionFeeTotal + Number(report.admissionFee))
  );

  //filter and map laboratory fees
  reports.map(
    (report) =>
      (laboratoryFeeTotal = laboratoryFeeTotal + Number(report.laboratoryFee))
  );

  //filter and map diagnosis fees
  reports.map(
    (report) =>
      (diagnosisFeeTotal = diagnosisFeeTotal + Number(report.diagnosisFee))
  );

  //filter and map medicine costs
  reports.map(
    (report) =>
      (medicineCostTotal = medicineCostTotal + Number(report.medicineCost))
  );

  return (
    <Stack
      sx={{
        mt: 1,
        width: 800,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        elevation={!print ? 1 : 0}
        sx={{
          height: !print && 0.84 * window.innerHeight,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 1,
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            overflowY: {
              xs: "scroll",
              sm: !print && enableOverflow ? "scroll" : "hidden",
            },
          }}
          onMouseEnter={handleOverflowEnable}
          onMouseLeave={handleOverflowDisable}
        >
          <Box
            sx={{
              p: 2,
              display: "flex",
              flexFlow: "row wrap",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "whitesmoke",
            }}
          >
            <Typography>LOGO</Typography>
            {print && (
              <Tooltip title="Cancel presentation">
                <Button>
                  <CloseIcon onClick={handlePrintOff} sx={{ color: "grey" }} />
                </Button>
              </Tooltip>
            )}
            <Typography sx={{ textWrap: "nowrap" }}>Income report </Typography>
          </Box>
          {reports.map((report) => (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexFlow: "row wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontSize: "0.85em", textWrap: "nowrap" }}>
                  Patient id: {report.patieentId}
                </Typography>
                <Typography sx={{ fontSize: "0.85em", textWrap: "nowrap" }}>
                  Date: {report.date}
                </Typography>
              </Box>
              <Divider sx={{ mt: -2 }}>
                <Chip
                  sx={{ p: 1 }}
                  variant="outlined"
                  label="Payments"
                  size="small"
                />
              </Divider>
              <Box
                sx={{
                  display: "flex",
                  flexFlow: "row wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <Typography variant="subtitle2" sx={{ textWrap: "nowrap" }}>
                    Admission fee
                  </Typography>
                  <Typography sx={{ fontSize: "0.80em" }}>
                    USD {report.admissionFee}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <Typography variant="subtitle2" sx={{ textWrap: "nowrap" }}>
                    Laboratory fee
                  </Typography>
                  <Typography sx={{ fontSize: "0.80em" }}>
                    USD {report.laboratoryFee}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <Typography variant="subtitle2" sx={{ textWrap: "nowrap" }}>
                    Diagnosis fee
                  </Typography>
                  <Typography sx={{ fontSize: "0.80em" }}>
                    USD {report.diagnosisFee}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <Typography variant="subtitle2" sx={{ textWrap: "nowrap" }}>
                    Medicine costs
                  </Typography>
                  <Typography sx={{ fontSize: "0.80em" }}>
                    USD {report.medicineCost}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontSize: "0.80em" }}>
                  Total fee - &nbsp;
                </Typography>
                <Typography variant="subtitle2">
                  USD &nbsp;
                  {Number(report.admissionFee) +
                    Number(report.laboratoryFee) +
                    Number(report.diagnosisFee) +
                    Number(report.medicineCost)}
                </Typography>
              </Box>
              <Divider sx={{ pt: 3 }} />
            </>
          ))}
          <Stack>
            <Divider textAlign="left">
              <Chip
                variant="outlined"
                sx={{ p: 1 }}
                label="Summary"
                size="small"
              />
            </Divider>
            <Stack
              sx={{
                p: 2,
                display: "flex",
                flexFlow: "row wrap",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Box>
                <Box
                  sx={{
                    width: 210,
                    display: "flex",
                    flexFlow: "row nowrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={{ fontSize: "0.9em" }}>
                    Admission fee:
                  </Typography>
                  <Typography sx={{ fontSize: "0.9em" }}>
                    USD {admissionFeeTotal}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: 210,
                    display: "flex",
                    flexFlow: "row nowrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={{ fontSize: "0.9em" }}>
                    Laboratory fee:
                  </Typography>
                  <Typography sx={{ fontSize: "0.9em" }}>
                    USD {laboratoryFeeTotal}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: 210,
                    display: "flex",
                    flexFlow: "row nowrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={{ fontSize: "0.9em" }}>
                    Diagnosis fee:
                  </Typography>
                  <Typography sx={{ fontSize: "0.9em" }}>
                    USD {diagnosisFeeTotal}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: 210,
                    display: "flex",
                    flexFlow: "row nowrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={{ fontSize: "0.9em" }}>
                    Medicine fee:
                  </Typography>
                  <Typography sx={{ fontSize: "0.9em" }}>
                    USD {medicineCostTotal}
                  </Typography>
                </Box>
              </Box>
              <Divider orientation="vertical" />
              <Box sx={{ display: "flex", flexFlow: "row wrap" }}>
                <Typography sx={{ fontSize: "0.9em" }}>
                  Total: USD&nbsp;
                  {admissionFeeTotal +
                    laboratoryFeeTotal +
                    diagnosisFeeTotal +
                    medicineCostTotal}
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </CardContent>
        {!print && (
          <Button
            onClick={() => {
              handlePrint();
            }}
            variant="contained"
          >
            Print
          </Button>
        )}
      </Card>
    </Stack>
  );
}
