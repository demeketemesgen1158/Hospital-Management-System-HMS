import * as React from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

function FinancialSummary() {
  return (
    <Paper
      sx={{
        width: { xs: "100%", sm: "100%", md: "30%" },
        backgroundColor: "#fafdff",
      }}
    >
      <Box
        sx={{
          padding: 3,
          display: "flex",
          flexFlow: "row noWrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography>Revenue</Typography>
        <Typography sx={{ fontWeight: "bold", fontSize: "1.0em" }}>
          327.9K
        </Typography>
      </Box>
      <Divider variant="inset" />
      <Box
        sx={{
          padding: 3,
          display: "flex",
          flexFlow: "row noWrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography>Expense</Typography>
        <Typography sx={{ fontWeight: "bold", fontSize: "1.0em" }}>
          227.9K
        </Typography>
      </Box>
      <Divider variant="inset" />
      <Box
        sx={{
          padding: 3,
          display: "flex",
          flexFlow: "row noWrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography>Margin</Typography>
        <Typography sx={{ fontWeight: "bold", fontSize: "1.0em" }}>
          100.9K
        </Typography>
      </Box>
      <Divider variant="inset" />
    </Paper>
  );
}

function AccountingIndicator() {
  return (
    <Paper
      sx={{
        width: { xs: "100%", sm: "100%", md: "30%" },
        backgroundColor: "#fafdff",
      }}
    >
      <Typography sx={{ pl: 3, pt: 3 }} variant="subtitle2">
        Expense <b>Vs</b> Profit margin
      </Typography>
      <LineChart
        xAxis={[
          {
            label: "Amount of expenses",
            data: [1.5, 2, 3, 5, 8, 10, 11, 12, 13, 13.5, 14.5],
          },
        ]}
        yAxis={[
          {
            label: "Profit margin",
          },
        ]}
        series={[
          {
            data: [0, 1.5, 2.25, 2.75, 2.5, 4.5, 5.5, 6, 5.5, 6.5, 6.75],
            showMark: false,
          },
        ]}
        height={300}
      />
    </Paper>
  );
}

const data1 = [
  { label: "Expense", value: 300 },
  { label: "Profit", value: 400 },
];

const TOTAL = data1.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};
function FinancePercentage() {
  const [colorScheme, setColorScheme] = React.useState("Category10");
  return (
    <Paper
      sx={{
        padding: 2,
        width: { xs: "100%", sm: "100%", md: "30%" },
        backgroundColor: "#fafdff",
      }}
    >
      <Typography
        sx={{
          padding: 1,
          fontSize: { xs: "1.2em", sm: "1.0em", md: "1.15em" },
        }}
      >
        Percentage indicator
      </Typography>
      <PieChart
        width={270}
        height={250}
        series={[
          {
            outerRadius: 65,
            data: data1,
            arcLabel: getArcLabel,
          },
        ]}
        colors={["orange", "green"]}
        slotProps={{
          legend: {
            direction: "row",
            position: { vertical: "bottom", horizontal: "left" },
            padding: 3,
            itemMarkWidth: 10,
            itemMarkHeight: 10,
            labelStyle: { fontSize: "0.85em" },
          },
        }}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "white",
            fontSize: 13,
          },
        }}
      />
    </Paper>
  );
}

export default function FinancialPerformance() {
  return (
    <Paper
      sx={{
        padding: 3,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "1.2em", sm: "1.0em", md: "1.05em" },
        }}
      >
        Finacial performance
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexFlow: "row wrap",
          gap: 2,
          justifyContent: "space-between",
        }}
      >
        <FinancialSummary />
        <AccountingIndicator />
        <FinancePercentage />
      </Box>
    </Paper>
  );
}
