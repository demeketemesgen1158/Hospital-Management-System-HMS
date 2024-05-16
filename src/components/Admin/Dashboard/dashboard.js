import { Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";

import PatientBalance from "./patientBalance";
import DischargeRate from "./dischargeRate";
import GenderDemography from "./genderDemography";
import AgeDemography from "./ageDemography";
import FinancialPerformance from "./finance";

export default function Dashboard() {
  return (
    <div
      style={{
        backgroundColor: "#f0faff",
        width: "100%",
        display: "flex",
        flexFlow: "row wrap",
        alignItems: "stretch",
        justifyContent: "space-between",
        gap: 21,
      }}
    >
      <Box sx={{ width: { xs: "100%", md: "60%" } }}>
        <PatientBalance />
      </Box>
      <Box sx={{ width: { xs: "100%", sm: "40%", md: "30%" } }}>
        <DischargeRate />
      </Box>
      <Box sx={{ width: { xs: "100%", sm: "50%", md: "40%" } }}>
        <GenderDemography />
      </Box>
      <Box>
        <AgeDemography />
      </Box>
      <Box sx={{ width: "100%" }}>
        <FinancialPerformance />
      </Box>
    </div>
  );
}
