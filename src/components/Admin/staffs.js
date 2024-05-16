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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Profile from "../profile";

//List of columns
const headCells = [
  "Employee id",
  "First name",
  "Last name",
  "Tel",
  "Age",
  "Qualification",
  "Postion",
  "Country",
  "State",
  "City",
  "Emergency contact",
];

//List of staff details, this will be fetched from database
const rows = [
  {
    id: "E-121",
    fName: "Hilina",
    lName: "Paulos",
    tel: "0912906891",
    age: "47",
    qualification: "General Practitioner",
    position: "OPD",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Addis Ababa",
    emergencyContact: "Gashaw",
    note: "",
  },
  {
    id: "E-122",
    fName: "Meron",
    lName: "Girum",
    tel: "0914906891",
    age: "47",
    qualification: "General Practitioner",
    position: "OPD",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Addis Ababa",
    emergencyContact: "Gashaw",
    note: "",
  },
  {
    id: "E-123",
    fName: "Aster",
    lName: "Dejen",
    tel: "0913906891",
    age: "47",
    qualification: "General Practitioner",
    position: "OPD",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Addis Ababa",
    emergencyContact: "Gashaw",
    note: "",
  },
  {
    id: "E-124",
    fName: "Gelila",
    lName: "Melaku",
    tel: "0912906891",
    age: "47",
    qualification: "General Practitioner",
    position: "OPD",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Addis Ababa",
    emergencyContact: "Gashaw",
    note: "",
  },
  {
    id: "E-125",
    fName: "Simret",
    lName: "Haile",
    tel: "0988906891",
    age: "47",
    qualification: "General Practitioner",
    position: "OPD",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Addis Ababa",
    emergencyContact: "Gashaw",
    note: "",
  },
  {
    id: "E-126",
    fName: "Hilina",
    lName: "Paulos",
    tel: "0912906891",
    age: "47",
    qualification: "General Practitioner",
    position: "OPD",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Addis Ababa",
    emergencyContact: "Gashaw",
    note: "",
  },
  {
    id: "E-127",
    fName: "Meron",
    lName: "Girum",
    tel: "0914906891",
    age: "47",
    qualification: "General Practitioner",
    position: "OPD",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Addis Ababa",
    emergencyContact: "Gashaw",
    note: "",
  },
  {
    id: "E-128",
    fName: "Aster",
    lName: "Dejen",
    tel: "0913906891",
    age: "47",
    qualification: "General Practitioner",
    position: "OPD",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Addis Ababa",
    emergencyContact: "Gashaw",
    note: "",
  },
  {
    id: "E-129",
    fName: "Gelila",
    lName: "Melaku",
    tel: "0912906891",
    age: "47",
    qualification: "General Practitioner",
    position: "OPD",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Addis Ababa",
    emergencyContact: "Gashaw",
    note: "",
  },
  {
    id: "E-130",
    fName: "Simret",
    lName: "Haile",
    tel: "0988906891",
    age: "47",
    qualification: "General Practitioner",
    position: "OPD",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Addis Ababa",
    emergencyContact: "Gashaw",
    note: "",
  },
  {
    id: "E-131",
    fName: "Hilina",
    lName: "Paulos",
    tel: "0912906891",
    age: "47",
    qualification: "General Practitioner",
    position: "OPD",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Addis Ababa",
    emergencyContact: "Gashaw",
    note: "",
  },
  {
    id: "E-132",
    fName: "Meron",
    lName: "Girum",
    tel: "0914906891",
    age: "47",
    qualification: "General Practitioner",
    position: "OPD",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Addis Ababa",
    emergencyContact: "Gashaw",
    note: "",
  },
  {
    id: "E-133",
    fName: "Aster",
    lName: "Dejen",
    tel: "0913906891",
    age: "47",
    qualification: "General Practitioner",
    position: "OPD",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Addis Ababa",
    emergencyContact: "Gashaw",
    note: "",
  },
  {
    id: "E-134",
    fName: "Gelila",
    lName: "Melaku",
    tel: "0912906891",
    age: "47",
    qualification: "General Practitioner",
    position: "OPD",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Addis Ababa",
    emergencyContact: "Gashaw",
    note: "",
  },
  {
    id: "E-135",
    fName: "Simret",
    lName: "Haile",
    tel: "0988906891",
    age: "47",
    qualification: "General Practitioner",
    position: "OPD",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Addis Ababa",
    emergencyContact: "Gashaw",
    note: "",
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

//Table head toolbar component
function EnhancedTableToolbar({
  numSelected,
  handlePermission,
  handleProfile,
  update,
  handleUpdate,
}) {
  return (
    <Toolbar>
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
          {numSelected > 0 ? (
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
                {numSelected} staff selected
              </Typography>
              <Tooltip title="Delete">
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Stack>
          ) : (
            <Typography color="inherit" variant="subtitle1" component="div">
              List of staffs
            </Typography>
          )}
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
              <Button
                disabled={numSelected === 1 ? false : true}
                onClick={handleUpdate}
                sx={{ textTransform: "none", textWrap: "nowrap" }}
              >
                Update row
              </Button>
            )}
            <Button
              disabled={numSelected === 1 ? false : true}
              onClick={handleProfile}
              sx={{ textTransform: "none" }}
            >
              Profile
            </Button>
          </Stack>
        </Stack>
        <Stack>
          <Button
            href="/admin/new-user"
            sx={{ textTransform: "none", textWrap: "nowrap" }}
          >
            Add staff
          </Button>
        </Stack>
      </Stack>
    </Toolbar>
  );
}

//Collective component to be exported
export default function Staffs({ searchedStaff, handleSearchVisibility }) {
  const [selected, setSelected] = React.useState([]);
  const [openProfile, setOpenProfile] = React.useState(false);
  const [update, setUpdate] = React.useState(false);
  const [userId, setUserId] = React.useState("E-121");

  //invoke a function to make the search bar component at admin component visible
  handleSearchVisibility();

  const FilteredRows = rows.filter((selectedRow) =>
    searchedStaff !== ""
      ? selectedRow.fName
          .toLowerCase()
          .startsWith(searchedStaff.toLowerCase()) ||
        selectedRow.id.toLowerCase().startsWith(searchedStaff.toLowerCase()) ||
        selectedRow.tel.startsWith(searchedStaff)
      : rows
  );

  function handleEmployeeId(employeId) {
    setUserId(employeId);
  }

  function handleProfile() {
    setOpenProfile(true);
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

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  function ProfileView() {
    const handleProfileClose = () => {
      setOpenProfile(false);
    };

    return (
      <Dialog
        open={openProfile}
        TransitionComponent={Transition}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle
          sx={{
            backgroundColor: "#f0faff",
          }}
        >
          Profile | Employee id: {selected}
        </DialogTitle>
        <DialogContent
          sx={{
            backgroundColor: "#f0faff",
          }}
        >
          <Profile employeId={selected} />
        </DialogContent>
        <DialogActions
          sx={{
            backgroundColor: "#f0faff",
          }}
        >
          <Button onClick={handleProfileClose}>Close</Button>
        </DialogActions>
      </Dialog>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <ProfileView />
      <Paper
        sx={{
          mb: 2,
        }}
      >
        <EnhancedTableToolbar
          numSelected={selected.length}
          handleProfile={handleProfile}
          update={update}
          handleUpdate={handleUpdate}
          userId={userId}
        />
        <TableContainer>
          <Table>
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
                      handleEmployeeId(row.id);
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
                    <TableCell align="center" sx={{ textWrap: "noWrap" }}>
                      {row.id}
                    </TableCell>
                    <TableCell
                      onClick={(e) => update && handleEditable(e)}
                      align="left"
                      sx={{ textWrap: "nowrap" }}
                    >
                      {row.fName}
                    </TableCell>
                    <TableCell
                      onClick={(e) => update && handleEditable(e)}
                      align="left"
                      sx={{ textWrap: "nowrap" }}
                    >
                      {row.lName}
                    </TableCell>
                    <TableCell
                      onClick={(e) => update && handleEditable(e)}
                      align="left"
                    >
                      {row.tel}
                    </TableCell>
                    <TableCell
                      onClick={(e) => update && handleEditable(e)}
                      align="right"
                    >
                      {row.age}
                    </TableCell>
                    <TableCell
                      onClick={(e) => update && handleEditable(e)}
                      align="left"
                      sx={{ textWrap: "nowrap" }}
                    >
                      {row.qualification}
                    </TableCell>
                    <TableCell
                      onClick={(e) => update && handleEditable(e)}
                      align="left"
                    >
                      {row.position}
                    </TableCell>
                    <TableCell
                      onClick={(e) => update && handleEditable(e)}
                      align="left"
                      sx={{ textWrap: "nowrap" }}
                    >
                      {row.country}
                    </TableCell>
                    <TableCell
                      onClick={(e) => update && handleEditable(e)}
                      align="left"
                      sx={{ textWrap: "nowrap" }}
                    >
                      {row.state}
                    </TableCell>
                    <TableCell
                      onClick={(e) => update && handleEditable(e)}
                      align="left"
                      sx={{ textWrap: "nowrap" }}
                    >
                      {row.city}
                    </TableCell>
                    <TableCell
                      onClick={(e) => update && handleEditable(e)}
                      align="center"
                      sx={{ textWrap: "nowrap" }}
                    >
                      {row.emergencyContact}
                    </TableCell>
                  </TableRow>
                );
              })}
              {FilteredRows.length === 0 && (
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell
                    sx={{
                      textWrap: "nowrap",
                    }}
                  >
                    No staff found
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
