import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";
import { Paper, Typography } from "@mui/material";

const chartSetting = {
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-3px, 0)",
    },
  },
};
const dataset = [
  {
    neonatal: 41,
    age: "<7",
  },
  {
    pediatric: 30,
    age: "7-18",
  },
  {
    adult: 52,
    age: "18-65",
  },
  {
    geriatric: 90,
    age: ">65",
  },
];

const valueFormatter = (value) => `${value}mm`;

export default function AgeDemography() {
  return (
    <Paper sx={{ width: { xs: "101%", sm: "101%", md: 350 } }}>
      <Typography
        sx={{
          pl: 3,
          pt: 3,
          fontSize: { xs: "1.2em", sm: "1.0em", md: "1.05em" },
        }}
      >
        Age indicator
      </Typography>
      <BarChart
        skipAnimation={false}
        dataset={dataset}
        yAxis={[{ label: "Number of patients" }]}
        xAxis={[
          {
            label: "Age",
            scaleType: "band",
            dataKey: "age",
            tickPlacement: "middle",
            categoryGapRatio: 0.8,
            barGapRatio: -1,
          },
        ]}
        colors={["red", "orange", "blue", "purple "]}
        series={[
          {
            dataKey: "neonatal",
            label: "Neonatal",
            valueFormatter,
          },
          { dataKey: "pediatric", label: "Pediatric", valueFormatter },
          { dataKey: "adult", label: "Adult", valueFormatter },
          { dataKey: "geriatric", label: "Geriatric", valueFormatter },
        ]}
        slotProps={{
          legend: {
            padding: -1,
            itemMarkWidth: 10,
            itemMarkHeight: 10,
            labelStyle: { fontSize: "0.85em" },
          },
        }}
        {...chartSetting}
      />
    </Paper>
  );
}
