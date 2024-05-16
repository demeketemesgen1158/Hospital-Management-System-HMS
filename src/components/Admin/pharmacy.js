import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Stack } from "@mui/material";

//List of columns
const headCells = [
  "No",
  "Medicine name",
  "Generic name",
  "Brand name",
  "Dosage strength",
  "Dosage form",
  "Route of administration",
  "Quantity",
  "Prescription status",
  "Indications",
  "Contradictions",
  "Precautions",
  "Side effects",
  "Interactions",
  "Storage conditions",
  "Expire date",
  "Manufacturer",
  "Batch number",
  "Price",
];

//List of medicine details, this will be fetched from database
const rows = [
  {
    id: "1",
    MedicineName: "Paracetamol",
    GenericName: "Acetaminophen",
    BrandName: "Tylenol",
    DosageStrength: "500 mg",
    DosageForm: "Tablet",
    RouteOfAdministration: "Oral",
    Quantity: "20 tablets",
    PrescriptionStatus: "OTC",
    Indications: ["Pain", "Fever"],
    Contraindications: ["Hypersensitivity to Paracetamol"],
    WarningsPrecautions: ["Do not exceed recommended dose"],
    SideEffects: ["Nausea", "Liver toxicity"],
    Interactions: ["Alcohol", "Warfarin"],
    StorageConditions: "Store below 25°C",
    ExpiryDate: "2025-06-30",
    Manufacturer: "Johnson & Johnson",
    BatchLotNumber: "ABC123",
    PricePerUnit: "$0.20",
  },
  {
    id: "2",
    MedicineName: "Amoxicillin",
    GenericName: "Amoxicillin",
    BrandName: "Amoxil",
    DosageStrength: "250 mg",
    DosageForm: "Capsule",
    RouteOfAdministration: "Oral",
    Quantity: "30 capsules",
    PrescriptionStatus: "Prescription",
    Indications: ["Bacterial Infections"],
    Contraindications: ["Hypersensitivity to Penicillins"],
    WarningsPrecautions: ["Take with food"],
    SideEffects: ["Diarrhea", "Rash"],
    Interactions: ["Methotrexate", "Warfarin"],
    StorageConditions: "Store below 30°C",
    ExpiryDate: "2024-12-31",
    Manufacturer: "Pfizer",
    BatchLotNumber: "XYZ456",
    PricePerUnit: "$0.50",
  },
  {
    id: "3",
    MedicineName: "Omeprazole",
    GenericName: "Omeprazole",
    BrandName: "Prilosec",
    DosageStrength: "20 mg",
    DosageForm: "Tablet",
    RouteOfAdministration: "Oral",
    Quantity: "14 tablets",
    PrescriptionStatus: "OTC",
    Indications: ["GERD", "Ulcers"],
    Contraindications: ["Hypersensitivity to Omeprazole"],
    WarningsPrecautions: ["Take before meals"],
    SideEffects: ["Headache", "Nausea"],
    Interactions: ["Clopidogrel", "Ketoconazole"],
    StorageConditions: "Store at room temperature",
    ExpiryDate: "2025-03-15",
    Manufacturer: "AstraZeneca",
    BatchLotNumber: "DEF789",
    PricePerUnit: "$0.80",
  },
  {
    id: "4",
    MedicineName: "Atorvastatin",
    GenericName: "Atorvastatin",
    BrandName: "Lipitor",
    DosageStrength: "40 mg",
    DosageForm: "Tablet",
    RouteOfAdministration: "Oral",
    Quantity: "30 tablets",
    PrescriptionStatus: "Prescription",
    Indications: ["Hyperlipidemia"],
    Contraindications: ["Liver disease", "Pregnancy"],
    WarningsPrecautions: ["Avoid grapefruit juice"],
    SideEffects: ["Muscle pain", "Liver toxicity"],
    Interactions: ["Gemfibrozil", "Warfarin"],
    StorageConditions: "Store below 25°C",
    ExpiryDate: "2025-02-28",
    Manufacturer: "Pfizer",
    BatchLotNumber: "GHI101",
    PricePerUnit: "$1.20",
  },
  {
    id: "5",
    MedicineName: "Paracetamol",
    GenericName: "Acetaminophen",
    BrandName: "Tylenol",
    DosageStrength: "500 mg",
    DosageForm: "Tablet",
    RouteOfAdministration: "Oral",
    Quantity: "20 tablets",
    PrescriptionStatus: "OTC",
    Indications: ["Pain", "Fever"],
    Contraindications: ["Hypersensitivity to Paracetamol"],
    WarningsPrecautions: ["Do not exceed recommended dose"],
    SideEffects: ["Nausea", "Liver toxicity"],
    Interactions: ["Alcohol", "Warfarin"],
    StorageConditions: "Store below 25°C",
    ExpiryDate: "2025-06-30",
    Manufacturer: "Johnson & Johnson",
    BatchLotNumber: "ABC123",
    PricePerUnit: "$0.20",
  },
  {
    id: "6",
    MedicineName: "Amoxicillin",
    GenericName: "Amoxicillin",
    BrandName: "Amoxil",
    DosageStrength: "250 mg",
    DosageForm: "Capsule",
    RouteOfAdministration: "Oral",
    Quantity: "30 capsules",
    PrescriptionStatus: "Prescription",
    Indications: ["Bacterial Infections"],
    Contraindications: ["Hypersensitivity to Penicillins"],
    WarningsPrecautions: ["Take with food"],
    SideEffects: ["Diarrhea", "Rash"],
    Interactions: ["Methotrexate", "Warfarin"],
    StorageConditions: "Store below 30°C",
    ExpiryDate: "2024-12-31",
    Manufacturer: "Pfizer",
    BatchLotNumber: "XYZ456",
    PricePerUnit: "$0.50",
  },
  {
    id: "7",
    MedicineName: "Omeprazole",
    GenericName: "Omeprazole",
    BrandName: "Prilosec",
    DosageStrength: "20 mg",
    DosageForm: "Tablet",
    RouteOfAdministration: "Oral",
    Quantity: "14 tablets",
    PrescriptionStatus: "OTC",
    Indications: ["GERD", "Ulcers"],
    Contraindications: ["Hypersensitivity to Omeprazole"],
    WarningsPrecautions: ["Take before meals"],
    SideEffects: ["Headache", "Nausea"],
    Interactions: ["Clopidogrel", "Ketoconazole"],
    StorageConditions: "Store at room temperature",
    ExpiryDate: "2025-03-15",
    Manufacturer: "AstraZeneca",
    BatchLotNumber: "DEF789",
    PricePerUnit: "$0.80",
  },
  {
    id: "8",
    MedicineName: "Atorvastatin",
    GenericName: "Atorvastatin",
    BrandName: "Lipitor",
    DosageStrength: "40 mg",
    DosageForm: "Tablet",
    RouteOfAdministration: "Oral",
    Quantity: "30 tablets",
    PrescriptionStatus: "Prescription",
    Indications: ["Hyperlipidemia"],
    Contraindications: ["Liver disease", "Pregnancy"],
    WarningsPrecautions: ["Avoid grapefruit juice"],
    SideEffects: ["Muscle pain", "Liver toxicity"],
    Interactions: ["Gemfibrozil", "Warfarin"],
    StorageConditions: "Store below 25°C",
    ExpiryDate: "2025-02-28",
    Manufacturer: "Pfizer",
    BatchLotNumber: "GHI101",
    PricePerUnit: "$1.20",
  },
  {
    id: "9",
    MedicineName: "Amoxicillin",
    GenericName: "Amoxicillin",
    BrandName: "Amoxil",
    DosageStrength: "250 mg",
    DosageForm: "Capsule",
    RouteOfAdministration: "Oral",
    Quantity: "30 capsules",
    PrescriptionStatus: "Prescription",
    Indications: ["Bacterial Infections"],
    Contraindications: ["Hypersensitivity to Penicillins"],
    WarningsPrecautions: ["Take with food"],
    SideEffects: ["Diarrhea", "Rash"],
    Interactions: ["Methotrexate", "Warfarin"],
    StorageConditions: "Store below 30°C",
    ExpiryDate: "2024-12-31",
    Manufacturer: "Pfizer",
    BatchLotNumber: "XYZ456",
    PricePerUnit: "$0.50",
  },
  {
    id: "10",
    MedicineName: "Omeprazole",
    GenericName: "Omeprazole",
    BrandName: "Prilosec",
    DosageStrength: "20 mg",
    DosageForm: "Tablet",
    RouteOfAdministration: "Oral",
    Quantity: "14 tablets",
    PrescriptionStatus: "OTC",
    Indications: ["GERD", "Ulcers"],
    Contraindications: ["Hypersensitivity to Omeprazole"],
    WarningsPrecautions: ["Take before meals"],
    SideEffects: ["Headache", "Nausea"],
    Interactions: ["Clopidogrel", "Ketoconazole"],
    StorageConditions: "Store at room temperature",
    ExpiryDate: "2025-03-15",
    Manufacturer: "AstraZeneca",
    BatchLotNumber: "DEF789",
    PricePerUnit: "$0.80",
  },
  {
    id: "11",
    MedicineName: "Atorvastatin",
    GenericName: "Atorvastatin",
    BrandName: "Lipitor",
    DosageStrength: "40 mg",
    DosageForm: "Tablet",
    RouteOfAdministration: "Oral",
    Quantity: "30 tablets",
    PrescriptionStatus: "Prescription",
    Indications: ["Hyperlipidemia"],
    Contraindications: ["Liver disease", "Pregnancy"],
    WarningsPrecautions: ["Avoid grapefruit juice"],
    SideEffects: ["Muscle pain", "Liver toxicity"],
    Interactions: ["Gemfibrozil", "Warfarin"],
    StorageConditions: "Store below 25°C",
    ExpiryDate: "2025-02-28",
    Manufacturer: "Pfizer",
    BatchLotNumber: "GHI101",
    PricePerUnit: "$1.20",
  },
  {
    id: "12",
    MedicineName: "Paracetamol",
    GenericName: "Acetaminophen",
    BrandName: "Tylenol",
    DosageStrength: "500 mg",
    DosageForm: "Tablet",
    RouteOfAdministration: "Oral",
    Quantity: "20 tablets",
    PrescriptionStatus: "OTC",
    Indications: ["Pain", "Fever"],
    Contraindications: ["Hypersensitivity to Paracetamol"],
    WarningsPrecautions: ["Do not exceed recommended dose"],
    SideEffects: ["Nausea", "Liver toxicity"],
    Interactions: ["Alcohol", "Warfarin"],
    StorageConditions: "Store below 25°C",
    ExpiryDate: "2025-06-30",
    Manufacturer: "Johnson & Johnson",
    BatchLotNumber: "ABC123",
    PricePerUnit: "$0.20",
  },
  {
    id: "13",
    MedicineName: "Amoxicillin",
    GenericName: "Amoxicillin",
    BrandName: "Amoxil",
    DosageStrength: "250 mg",
    DosageForm: "Capsule",
    RouteOfAdministration: "Oral",
    Quantity: "30 capsules",
    PrescriptionStatus: "Prescription",
    Indications: ["Bacterial Infections"],
    Contraindications: ["Hypersensitivity to Penicillins"],
    WarningsPrecautions: ["Take with food"],
    SideEffects: ["Diarrhea", "Rash"],
    Interactions: ["Methotrexate", "Warfarin"],
    StorageConditions: "Store below 30°C",
    ExpiryDate: "2024-12-31",
    Manufacturer: "Pfizer",
    BatchLotNumber: "XYZ456",
    PricePerUnit: "$0.50",
  },
  {
    id: "14",
    MedicineName: "Omeprazole",
    GenericName: "Omeprazole",
    BrandName: "Prilosec",
    DosageStrength: "20 mg",
    DosageForm: "Tablet",
    RouteOfAdministration: "Oral",
    Quantity: "14 tablets",
    PrescriptionStatus: "OTC",
    Indications: ["GERD", "Ulcers"],
    Contraindications: ["Hypersensitivity to Omeprazole"],
    WarningsPrecautions: ["Take before meals"],
    SideEffects: ["Headache", "Nausea"],
    Interactions: ["Clopidogrel", "Ketoconazole"],
    StorageConditions: "Store at room temperature",
    ExpiryDate: "2025-03-15",
    Manufacturer: "AstraZeneca",
    BatchLotNumber: "DEF789",
    PricePerUnit: "$0.80",
  },
  {
    id: "15",
    MedicineName: "Atorvastatin",
    GenericName: "Atorvastatin",
    BrandName: "Lipitor",
    DosageStrength: "40 mg",
    DosageForm: "Tablet",
    RouteOfAdministration: "Oral",
    Quantity: "30 tablets",
    PrescriptionStatus: "Prescription",
    Indications: ["Hyperlipidemia"],
    Contraindications: ["Liver disease", "Pregnancy"],
    WarningsPrecautions: ["Avoid grapefruit juice"],
    SideEffects: ["Muscle pain", "Liver toxicity"],
    Interactions: ["Gemfibrozil", "Warfarin"],
    StorageConditions: "Store below 25°C",
    ExpiryDate: "2025-02-28",
    Manufacturer: "Pfizer",
    BatchLotNumber: "GHI101",
    PricePerUnit: "$1.20",
  },
];

//Component for table head
function EnhancedTableHead(props) {
  const { onSelectAllClick, numSelected, rowCount } = props;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell sx={{ fontWeight: "bold", textWrap: "nowrap" }}>
            {headCell}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

//Component for table toolbar
function EnhancedTableToolbar({ numSelected, update, handleUpdate }) {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Stack
        sx={{
          width: "100%",
          marginTop: 2,
          display: "flex",
          alignContent: "center",
          flexFlow: "row wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack>
          <Stack>
            {numSelected > 0 ? (
              <Stack
                sx={{
                  display: "flex",
                  alignContent: "center",
                  flexFlow: "row wrap",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Stack
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    flexFlow: "row nowrap",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Typography
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                    sx={{ textWrap: "nowrap" }}
                  >
                    {numSelected} selected
                  </Typography>
                  <Tooltip title="Delete">
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </Stack>
                {numSelected === 1 && (
                  <Stack
                    sx={{
                      display: "flex",
                      alignContent: "center",
                      flexFlow: "row wrap",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    {update ? (
                      <Button
                        onClick={handleUpdate}
                        sx={{ textTransform: "none", textWrap: "nowrap" }}
                      >
                        Save change
                      </Button>
                    ) : (
                      <>
                        <Button
                          onClick={handleUpdate}
                          sx={{ textTransform: "none", textWrap: "nowrap" }}
                        >
                          Update table
                        </Button>
                      </>
                    )}
                  </Stack>
                )}
              </Stack>
            ) : (
              <Stack
                sx={{
                  display: "flex",
                  alignContent: "center",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Typography color="inherit" variant="subtitle1" component="div">
                  List of medicines
                </Typography>
                {update && (
                  <Button sx={{ textTransform: "none" }}>Save changes</Button>
                )}
              </Stack>
            )}
          </Stack>
        </Stack>
        <Stack>
          <Button
            href="/admin/new-medicine"
            sx={{ textTransform: "none", textWrap: "nowrap" }}
          >
            Add medicine
          </Button>
        </Stack>
      </Stack>
    </Toolbar>
  );
}

//Collective component to be exported
export default function Pharmacy({ seachedMedicine, handleSearchVisibility }) {
  const [selected, setSelected] = React.useState([]);
  const [update, setUpdate] = React.useState(false);
  const [medicineId, setMedicineId] = React.useState("");

  //invoke a function to make the search bar component at admin component visible
  handleSearchVisibility();

  const FilteredRows = rows.filter((row) =>
    row.MedicineName.toLowerCase().startsWith(seachedMedicine.toLowerCase())
  );

  function handleMedicine(mId) {
    setMedicineId(mId);
  }

  function handleUpdate() {
    setUpdate(true);
  }

  function handleEditable(e) {
    e.target.contentEditable = true;
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = FilteredRows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          update={update}
          handleUpdate={handleUpdate}
          medicineId={medicineId}
        />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={FilteredRows.length}
            />
            <TableBody>
              {FilteredRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => {
                      handleClick(event, row.id);
                      handleMedicine(row.id);
                    }}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox color="primary" checked={isItemSelected} />
                    </TableCell>
                    <TableCell>{row.id}</TableCell>
                    <TableCell
                      onClick={(e) => update && handleEditable(e)}
                      align="left"
                      sx={{ textWrap: "nowrap" }}
                    >
                      {row.MedicineName}
                    </TableCell>
                    <TableCell
                      onClick={(e) => update && handleEditable(e)}
                      align="left"
                      sx={{ textWrap: "nowrap" }}
                    >
                      {row.GenericName}
                    </TableCell>
                    <TableCell
                      onClick={(e) => update && handleEditable(e)}
                      align="left"
                    >
                      {row.BrandName}
                    </TableCell>
                    <TableCell
                      onClick={(e) => update && handleEditable(e)}
                      align="center"
                    >
                      {row.DosageStrength}
                    </TableCell>
                    <TableCell
                      onClick={(e) => update && handleEditable(e)}
                      align="center"
                      sx={{ textWrap: "nowrap" }}
                    >
                      {row.DosageForm}
                    </TableCell>
                    <TableCell
                      onClick={(e) => update && handleEditable(e)}
                      align="center"
                    >
                      {row.RouteOfAdministration}
                    </TableCell>
                    <TableCell
                      onClick={(e) => update && handleEditable(e)}
                      align="center"
                      sx={{ textWrap: "nowrap" }}
                    >
                      {row.Quantity}
                    </TableCell>
                    <TableCell
                      onClick={(e) => update && handleEditable(e)}
                      align="center"
                      sx={{ textWrap: "nowrap" }}
                    >
                      {row.PrescriptionStatus}
                    </TableCell>
                    <TableCell
                      onClick={(e) => update && handleEditable(e)}
                      align="left"
                      sx={{ textWrap: "nowrap" }}
                    >
                      {row.Indications}
                    </TableCell>
                    <TableCell
                      onClick={(e) => update && handleEditable(e)}
                      align="left"
                      sx={{ textWrap: "nowrap" }}
                    >
                      {row.Contraindications}
                    </TableCell>
                    <TableCell
                      onClick={(e) => update && handleEditable(e)}
                      align="left"
                      sx={{ textWrap: "nowrap" }}
                    >
                      {row.WarningsPrecautions}
                    </TableCell>
                    <TableCell
                      onClick={(e) => update && handleEditable(e)}
                      align="left"
                      sx={{ textWrap: "nowrap" }}
                    >
                      {row.SideEffects}
                    </TableCell>
                    <TableCell
                      onClick={(e) => update && handleEditable(e)}
                      align="left"
                      sx={{ textWrap: "nowrap" }}
                    >
                      {row.Interactions}
                    </TableCell>
                    <TableCell
                      onClick={(e) => update && handleEditable(e)}
                      align="left"
                      sx={{ textWrap: "nowrap" }}
                    >
                      {row.StorageConditions}
                    </TableCell>
                    <TableCell
                      onClick={(e) => update && handleEditable(e)}
                      align="center"
                      sx={{ textWrap: "nowrap" }}
                    >
                      {row.ExpiryDate}
                    </TableCell>
                    <TableCell
                      onClick={(e) => update && handleEditable(e)}
                      align="center"
                      sx={{ textWrap: "nowrap" }}
                    >
                      {row.Manufacturer}
                    </TableCell>
                    <TableCell
                      onClick={(e) => update && handleEditable(e)}
                      align="center"
                      sx={{ textWrap: "nowrap" }}
                    >
                      {row.BatchLotNumber}
                    </TableCell>
                    <TableCell
                      onClick={(e) => update && handleEditable(e)}
                      align="center"
                      sx={{ textWrap: "nowrap" }}
                    >
                      {row.PricePerUnit}
                    </TableCell>
                  </TableRow>
                );
              })}
              {FilteredRows.length === 0 && (
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell
                    sx={{
                      textWrap: "nowrap",
                    }}
                  >
                    No medicine found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
