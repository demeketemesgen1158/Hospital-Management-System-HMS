import { LineChart } from "@mui/x-charts/LineChart";
import { Paper, Typography } from "@mui/material";

export default function DischargeRate() {
  return (
    <Paper sx={{ width: "100%" }}>
      <Typography
        sx={{ p: 2, fontSize: { xs: "1.2em", sm: "1.0em", md: "1.15em" } }}
      >
        Discharge rate
      </Typography>
      <LineChart
        sx={{
          "& .MuiChartsAxis-left .MuiChartsAxis-line": {
            stroke: "#00000FF",
            strokeWidth: 0.4,
            fill: "#0000FF",
          },
          "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel": {
            fontFamily: "Roboto",
          },
        }}
        xAxis={[
          {
            label: "Number of patients",
            data: [0, 2, 3, 5, 8, 10],
          },
        ]}
        yAxis={[
          {
            label: "Duration (days)",
          },
        ]}
        series={[
          {
            data: [0, 4.5, 4.75, 4.5, 5, 4.75],
            showMark: false,
          },
        ]}
        height={300}
      />
    </Paper>
  );
}
