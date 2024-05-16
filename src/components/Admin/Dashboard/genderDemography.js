import { Paper, Typography } from "@mui/material";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

const data1 = [
  { label: "Male", value: 400 },
  { label: "Female", value: 300 },
];

const TOTAL = data1.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

export default function GenderDemography() {
  return (
    <Paper sx={{ width: "100%", pt: 3, pl: 2, pb: 1 }}>
      <Typography sx={{ fontSize: { xs: "1.2em", sm: "1.0em", md: "1.15em" } }}>
        Gender indicator
      </Typography>
      <PieChart
        margin={{ left: 73 }}
        colors={["blue", "pink"]}
        series={[
          {
            outerRadius: 67,
            data: data1,
            arcLabel: getArcLabel,
          },
        ]}
        height={300}
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
