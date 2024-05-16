import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import UseFetch from "../../hooks/useFetch";

//list of staffs to be fetched from database
const staffs = [
  { name: "Abel" },
  { name: "Hana" },
  { name: "Aron" },
  { name: "Samuel" },
  { name: "Fana" },
  { name: "Girum" },
  { name: "Henok" },
];

const staffsList = {
  options: staffs,
  getOptionLabel: (option) => option.name,
};

//list of roles available at the organization to be fetched from database
const roles = [
  { position: "Admin" },
  { position: "Admission" },
  { position: "Accountant" },
  { position: "OPD" },
  { position: "Pharmacist" },
  { position: "Lab" },
  { position: "Diagnosis" },
];

const listOfRoles = {
  options: roles,
  getOptionLabel: (option) => option.position,
};

// List of permissions to be fetched from database
const permissionsList = [
  { label: "Permission 1", value: "permission1", allow: true },
  { label: "Permission 2", value: "permission2", allow: true },
  { label: "Permission 3", vale: "permission3", allow: true },
  { label: "Permission 4", vale: "permission4", allow: true },
  { label: "Permission 5", vale: "permission5", allow: true },
  { label: "Permission 6", vale: "permission6", allow: true },
];

//file upload component to upload profile picture of user
function InputFileUpload() {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(10%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <Button
      component="label"
      role={undefined}
      variant="outlined"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
      sx={{ color: "black", textTransform: "none", borderColor: "gray" }}
    >
      Upload photo
      <VisuallyHiddenInput type="file" />
    </Button>
  );
}

//collective component to be exported
export default function NewUser() {
  const [role, setRole] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [permissions, setPermissions] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleSubmit = UseFetch();

  function handlePermission() {
    setPermissions({});
    setOpen(true);
  }

  //component to handle permission of users
  function Permissions() {
    const Transition = React.forwardRef(function Transition(props, ref) {
      return <Slide direction="up" ref={ref} {...props} />;
    });

    const handleCancel = () => {
      setOpen(false);
    };

    const handleSave = () => {
      setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
      if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
          descriptionElement.focus();
        }
      }
    }, [open]);

    return (
      <Box>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          scroll="paper"
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">Permissions</DialogTitle>
          <DialogContent>
            {permissionsList.map((permission) => (
              <Box>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label={permission.label}
                  />
                </FormGroup>
              </Box>
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button onClick={handleSave}>Save</Button>
          </DialogActions>
        </Dialog>
      </Box>
    );
  }

  return (
    <>
      <Permissions />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 1000,
        }}
      >
        <Paper
          elevation={1}
          sx={{
            padding: 3,
            gap: 2,
          }}
        >
          <Typography variant="h6">Add user</Typography>
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
                <Autocomplete
                  {...staffsList}
                  id="name"
                  value={name}
                  onChange={(event, newValue) => {
                    setName(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select name"
                      variant="standard"
                    />
                  )}
                />
              </FormControl>
              <FormControl>
                <Autocomplete
                  {...listOfRoles}
                  id="role"
                  value={role}
                  onChange={(event, newValue) => {
                    setRole(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="Role" variant="standard" />
                  )}
                />
              </FormControl>
              <FormControl>
                <InputLabel>User name</InputLabel>
                <Input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  id="userName"
                />
              </FormControl>
              <FormControl>
                <InputLabel>Password</InputLabel>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  type="password"
                />
              </FormControl>
              <FormControl>
                <InputLabel>Re-enter password</InputLabel>
                <Input id="rePassword" type="password" />
              </FormControl>
              <Button
                on
                onClick={handlePermission}
                sx={{ textTransform: "none" }}
              >
                Add permissions
              </Button>
              <FormControl>
                <InputFileUpload />
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
