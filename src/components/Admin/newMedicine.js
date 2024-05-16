import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

import UseFetch from "../../hooks/useFetch";

const staffs = [
  { name: "Abel" },
  { name: "Hana" },
  { name: "Aron" },
  { name: "Samuel" },
  { name: "Fana" },
  { name: "Girum" },
  { name: "Henok" },
];

export default function NewMedicine() {
  const [medicineName, setMedicineName] = React.useState("");
  const [genericName, setGenericName] = React.useState("");
  const [brandName, setBrandName] = React.useState("");
  const [dosageStrength, setDosageStrength] = React.useState("");
  const [DosageForm, setDosageForm] = React.useState("");
  const [routeOfAdministration, setRouteOfAdministration] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [prescription, setPrescription] = React.useState("");
  const [indications, setIndications] = React.useState("");
  const [contradiction, setContradiction] = React.useState("");
  const [precaution, setPrecaution] = React.useState("");
  const [sideEffect, setSideEffect] = React.useState("");
  const [interaction, setInteraction] = React.useState("");
  const [storage, setStorage] = React.useState("");
  const [expire, setExpire] = React.useState("");
  const [manufacturer, setManufacturer] = React.useState("");
  const [batchNumber, setBatchNumber] = React.useState("");
  const [pricePerUnit, setPricePerUnit] = React.useState("");

  const handleSubmit = UseFetch();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 1000,
        }}
      >
        <Paper
          elevation={6}
          sx={{
            padding: 3,
            gap: 2,
          }}
        >
          <Typography variant="h6">Add medicine</Typography>
          <FormGroup
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexFlow: "row wrap",
                gap: 3,
                "& .MuiTextField-root": { m: 1, width: "21ch" },
              }}
            >
              <FormControl>
                <InputLabel>Medicine name</InputLabel>
                <Input
                  onChange={(e) => setMedicineName(e.target.value)}
                  id="medicineName"
                />
              </FormControl>
              <FormControl>
                <InputLabel>Generic name</InputLabel>
                <Input
                  onChange={(e) => setGenericName(e.target.value)}
                  id="genericName"
                />
              </FormControl>
              <FormControl>
                <InputLabel>Brand name</InputLabel>
                <Input
                  onChange={(e) => setBrandName(e.target.value)}
                  id="brandName"
                />
              </FormControl>
              <FormControl>
                <InputLabel> Dosage strength</InputLabel>
                <Input
                  onChange={(e) => setDosageStrength(e.target.value)}
                  id="dosageStrength"
                />
              </FormControl>
              <FormControl>
                <InputLabel> Dosage form</InputLabel>
                <Input
                  onChange={(e) => setDosageForm(e.target.value)}
                  id="doasageForm"
                />
              </FormControl>
              <FormControl>
                <InputLabel>Route of administration </InputLabel>
                <Input
                  onChange={(e) => setRouteOfAdministration(e.target.value)}
                  id="adminRoute"
                />
              </FormControl>
              <FormControl>
                <InputLabel> Quantity</InputLabel>
                <Input onChange={(e) => setQuantity(e.target.value)} id="qty" />
              </FormControl>
              <FormControl>
                <InputLabel>Prescription status </InputLabel>
                <Input
                  onChange={(e) => setRouteOfAdministration(e.target.value)}
                  id="prescriptionStatus"
                />
              </FormControl>
              <FormControl>
                <InputLabel>Indications</InputLabel>
                <Input
                  onChange={(e) => setIndications(e.target.value)}
                  id="indications"
                />
              </FormControl>
              <FormControl>
                <InputLabel>Contradictions</InputLabel>
                <Input
                  onChange={(e) => setContradiction(e.target.value)}
                  id="contradiction"
                  type="text"
                />
              </FormControl>
              <FormControl>
                <InputLabel>Precautions</InputLabel>
                <Input
                  onChange={(e) => setPrecaution(e.target.value)}
                  id="precaution"
                  type="text"
                />
              </FormControl>
              <FormControl>
                <InputLabel>Side effects</InputLabel>
                <Input
                  onChange={(e) => setSideEffect(e.target.value)}
                  id="sideEffect"
                  type="text"
                />
              </FormControl>
              <FormControl>
                <InputLabel>Interactions</InputLabel>
                <Input
                  onChange={(e) => setInteraction(e.target.value)}
                  id="interaction"
                  type="text"
                />
              </FormControl>
              <FormControl>
                <InputLabel>Storage conditions</InputLabel>
                <Input
                  onChange={(e) => setStorage(e.target.value)}
                  id="storageConditions"
                  type="text"
                />
              </FormControl>
              <FormControl>
                <InputLabel>Manufacturer</InputLabel>
                <Input
                  onChange={(e) => setManufacturer(e.target.value)}
                  id="manufacturer"
                  type="text"
                />
              </FormControl>
              <FormControl>
                <InputLabel>Batch number</InputLabel>
                <Input
                  onChange={(e) => setBatchNumber(e.target.value)}
                  id="batchNumber"
                  type="text"
                />
              </FormControl>
              <FormControl>
                <InputLabel>Price per unit</InputLabel>
                <Input
                  onChange={(e) => setPricePerUnit(e.target.value)}
                  id="pricePerUnit"
                  type="text"
                />
              </FormControl>
              <FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoItem>
                    <MobileDatePicker
                      label="Expire date"
                      Value={expire}
                      onChange={(newValue) => {
                        setExpire(new Date(newValue));
                      }}
                      slotProps={{ textField: { size: "small" } }}
                    />
                  </DemoItem>
                </LocalizationProvider>
              </FormControl>
            </Box>
            <Button onClick={handleSubmit} sx={{ width: 120 }}>
              Submit
            </Button>
          </FormGroup>
        </Paper>
      </Box>
    </>
  );
}
