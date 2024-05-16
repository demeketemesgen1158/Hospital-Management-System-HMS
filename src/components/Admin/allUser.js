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
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Stack } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Profile from "../profile";

//Authorized users permission details, that will be fetched from database
const permissions = [
  { label: "Permission 1", id: "U-121", value: "permission1", allow: true },
  { label: "Permission 2", id: "U-121", value: "permission2", allow: false },
  { label: "Permission 3", id: "U-121", value: "permission3", allow: true },
  { label: "Permission 4", id: "U-121", value: "permission4", allow: true },
  { label: "Permission 5", id: "U-121", value: "permission5", allow: false },
  { label: "Permission 6", id: "U-121", value: "permission6", allow: true },

  { label: "Permission 1", id: "U-122", value: "permission1", allow: true },
  { label: "Permission 2", id: "U-122", value: "permission2", allow: false },
  { label: "Permission 3", id: "U-122", value: "permission3", allow: false },
  { label: "Permission 4", id: "U-122", value: "permission4", allow: true },
  { label: "Permission 5", id: "U-122", value: "permission5", allow: false },
  { label: "Permission 6", id: "U-122", value: "permission6", allow: false },

  { label: "Permission 1", id: "U-123", value: "permission1", allow: false },
  { label: "Permission 2", id: "U-123", value: "permission2", allow: false },
  { label: "Permission 3", id: "U-123", value: "permission3", allow: false },
  { label: "Permission 4", id: "U-123", value: "permission4", allow: true },
  { label: "Permission 5", id: "U-123", value: "permission5", allow: false },
  { label: "Permission 6", id: "U-123", value: "permission6", allow: false },

  { label: "Permission 1", id: "U-124", value: "permission1", allow: true },
  { label: "Permission 2", id: "U-124", value: "permission2", allow: false },
  { label: "Permission 3", id: "U-124", value: "permission3", allow: false },
  { label: "Permission 4", id: "U-124", value: "permission4", allow: false },
  { label: "Permission 5", id: "U-124", value: "permission5", allow: false },
  { label: "Permission 6", id: "U-124", value: "permission6", allow: true },

  { label: "Permission 1", id: "U-125", value: "permission1", allow: true },
  { label: "Permission 2", id: "U-125", value: "permission2", allow: false },
  { label: "Permission 3", id: "U-125", value: "permission3", allow: false },
  { label: "Permission 4", id: "U-125", value: "permission4", allow: true },
  { label: "Permission 5", id: "U-125", value: "permission5", allow: false },
  { label: "Permission 6", id: "U-125", value: "permission6", allow: true },
];

//List of columns
const headCells = [
  "User id",
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
  "User name",
  "Password",
];

//List of authorized user details that will be fetched from database
const rows = [
  {
    id: "U-121",
    fName: "Yesuf",
    lName: "Siraj",
    tel: "0912906891",
    age: "47",
    qualification: "General Practitioner",
    position: "OPD",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Addis Ababa",
    emergencyContact: "Gashaw",
    username: "user@gmail.com",
    password: "***********",
  },
  {
    id: "U-122",
    fName: "Geleta",
    lName: "Girum",
    tel: "0914906891",
    age: "47",
    qualification: "General Practitioner",
    position: "OPD",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Addis Ababa",
    emergencyContact: "Gashaw",
    username: "user@gmail.com",
    password: "***********",
  },
  {
    id: "U-123",
    fName: "Asfaw",
    lName: "Dejen",
    tel: "0913906891",
    age: "47",
    qualification: "General Practitioner",
    position: "OPD",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Addis Ababa",
    emergencyContact: "Gashaw",
    username: "user@gmail.com",
    password: "***********",
  },
  {
    id: "U-124",
    fName: "Sisay",
    lName: "Melaku",
    tel: "0912906891",
    age: "47",
    qualification: "General Practitioner",
    position: "OPD",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Addis Ababa",
    emergencyContact: "Gashaw",
    username: "user@gmail.com",
    password: "***********",
  },
  {
    id: "U-125",
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
    username: "user@gmail.com",
    password: "***********",
  },
  {
    id: "U-126",
    fName: "Yesuf",
    lName: "Siraj",
    tel: "0912906891",
    age: "47",
    qualification: "General Practitioner",
    position: "OPD",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Addis Ababa",
    emergencyContact: "Gashaw",
    username: "user@gmail.com",
    password: "***********",
  },
  {
    id: "U-127",
    fName: "Geleta",
    lName: "Girum",
    tel: "0914906891",
    age: "47",
    qualification: "General Practitioner",
    position: "OPD",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Addis Ababa",
    emergencyContact: "Gashaw",
    username: "user@gmail.com",
    password: "***********",
  },
  {
    id: "U-128",
    fName: "Asfaw",
    lName: "Dejen",
    tel: "0913906891",
    age: "47",
    qualification: "General Practitioner",
    position: "OPD",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Addis Ababa",
    emergencyContact: "Gashaw",
    username: "user@gmail.com",
    password: "***********",
  },
  {
    id: "U-129",
    fName: "Sisay",
    lName: "Melaku",
    tel: "0912906891",
    age: "47",
    qualification: "General Practitioner",
    position: "OPD",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Addis Ababa",
    emergencyContact: "Gashaw",
    username: "user@gmail.com",
    password: "***********",
  },
  {
    id: "U-130",
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
    username: "user@gmail.com",
    password: "***********",
  },
  {
    id: "U-131",
    fName: "Yesuf",
    lName: "Siraj",
    tel: "0912906891",
    age: "47",
    qualification: "General Practitioner",
    position: "OPD",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Addis Ababa",
    emergencyContact: "Gashaw",
    username: "user@gmail.com",
    password: "***********",
  },
  {
    id: "U-132",
    fName: "Geleta",
    lName: "Girum",
    tel: "0914906891",
    age: "47",
    qualification: "General Practitioner",
    position: "OPD",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Addis Ababa",
    emergencyContact: "Gashaw",
    username: "user@gmail.com",
    password: "***********",
  },
  {
    id: "U-133",
    fName: "Asfaw",
    lName: "Dejen",
    tel: "0913906891",
    age: "47",
    qualification: "General Practitioner",
    position: "OPD",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Addis Ababa",
    emergencyContact: "Gashaw",
    username: "user@gmail.com",
    password: "***********",
  },
  {
    id: "U-134",
    fName: "Sisay",
    lName: "Melaku",
    tel: "0912906891",
    age: "47",
    qualification: "General Practitioner",
    position: "OPD",
    country: "Ethiopia",
    state: "Addis Ababa",
    city: "Addis Ababa",
    emergencyContact: "Gashaw",
    username: "user@gmail.com",
    password: "***********",
  },
  {
    id: "U-135",
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
    username: "user@gmail.com",
    password: "***********",
  },
];

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
                {numSelected} user selected
              </Typography>
              <Tooltip title="Delete">
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Stack>
          ) : (
            <Typography color="inherit" variant="subtitle1" component="div">
              List of users
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
              onClick={handlePermission}
              sx={{ textTransform: "none" }}
            >
              Permissions
            </Button>
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
            Add user
          </Button>
        </Stack>
      </Stack>
    </Toolbar>
  );
}

//Table head component
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

//Collective component to be exported
export default function AllUser({ searchedUser, handleSearchVisibility }) {
  const [selected, setSelected] = React.useState([]);
  const [openPermission, setPermission] = React.useState(false);
  const [openProfile, setOpenProfile] = React.useState(false);
  const [update, setUpdate] = React.useState(false);
  const [userId, setUserId] = React.useState("");

  //invoke a function to make the search bar component at admin component visible
  handleSearchVisibility();

  const FilteredRows = rows.filter((selectedRow) =>
    searchedUser !== ""
      ? selectedRow.fName
          .toLowerCase()
          .startsWith(searchedUser.toLowerCase()) ||
        selectedRow.id.toLowerCase().startsWith(searchedUser.toLowerCase()) ||
        selectedRow.tel.startsWith(searchedUser)
      : rows
  );

  const filteredPermissions = permissions.filter(
    (permission) => permission.id === userId
  );

  function handleUserid(uId) {
    setUserId(uId);
  }

  function handlePermission() {
    setPermission(true);
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

  //User permission display component
  function Permissions({ userId }) {
    const handlePermissionCancel = () => {
      setPermission(false);
    };

    const handlePermissionSave = () => {
      setPermission(false);
    };

    return (
      <Box>
        <Dialog
          open={openPermission}
          TransitionComponent={Transition}
          scroll="paper"
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">
            User id: {selected}
          </DialogTitle>
          <DialogContent>
            {filteredPermissions.map((permission) => (
              <Box>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox checked={permission.allow} size="small" />
                    }
                    label={permission.label}
                  />
                </FormGroup>
              </Box>
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={handlePermissionCancel}>Cancel</Button>
            <Button onClick={handlePermissionSave}>Save</Button>
          </DialogActions>
        </Dialog>
      </Box>
    );
  }

  //User profile view component
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
          Profile | User id: {selected}
        </DialogTitle>
        <DialogContent
          sx={{
            backgroundColor: "#f0faff",
          }}
        >
          <Profile uId={selected} />
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

  //Return collective component to be exported
  return (
    <Box sx={{ width: "100%" }}>
      <Permissions userId={userId} />
      <ProfileView />
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          handlePermission={handlePermission}
          handleProfile={handleProfile}
          update={update}
          handleUpdate={handleUpdate}
          userId={userId}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
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
                      handleUserid(row.id);
                    }}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
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
                    <TableCell
                      onClick={(e) => update && handleEditable(e)}
                      align="center"
                      sx={{ textWrap: "nowrap" }}
                    >
                      {row.username}
                    </TableCell>
                    <TableCell
                      onClick={(e) => update && handleEditable(e)}
                      align="center"
                      sx={{ textWrap: "nowrap" }}
                    >
                      {row.password}
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
                    No user found
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
