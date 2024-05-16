//inbuilt components
import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import { Link } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import ChatIcon from "@mui/icons-material/Chat";
import Badge from "@mui/material/Badge";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//custom components
import NotFound from "../notFound";
import NewPatient from "./newPatient";
import Profile from "../profile";
import Chat from "../chat";

const drawerWidth = 240;

//custom stylings
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "35ch",
      },
    },
  },
}));

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: 0,
  [theme.breakpoints.up("sm")]: {
    width: 0,
  },
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: "100%",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

//collective component to be exported
export default function Pharmacy() {
  const [open, setOpen] = React.useState(false);
  const [expand, setExpand] = React.useState(true);
  const [fromValue, setFromValue] = React.useState();
  const [toValue, setToValue] = React.useState();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [enableOverflow, setOverflow] = React.useState(false);
  const [patient, setPatient] = React.useState("");
  const [searchVisibility, setSearchVisibility] = React.useState(false);

  function handleSearchVisibility() {
    setSearchVisibility(true);
  }

  function handleSearch(e) {
    setPatient(e.target.value);
  }

  function handleOverflowEnable() {
    setOverflow(true);
  }

  function handleOverflowDisable() {
    setOverflow(false);
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        p: 1,
        display: "flex",
        marginTop: 9,
        width: open ? `calc(100% - ${drawerWidth}px)` : "100%",
      }}
    >
      <CssBaseline />
      {/* top nav bar */}
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{
              marginRight: 5,
              ...(open
                ? { display: "none" }
                : {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }),
            }}
          >
            <MenuIcon onClick={handleDrawerOpen} />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{
              marginRight: 5,
              ...(!open
                ? { display: "none" }
                : {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }),
            }}
          >
            <ArrowCircleLeftIcon
              sx={{ fontSize: "1.5em" }}
              onClick={handleDrawerClose}
            />
          </IconButton>
          <Box sx={{ marginLeft: -4 }}>
            <Button
              href="/"
              sx={{ color: "white", fontSize: "1.0em", fontWeight: "bold" }}
            >
              LOGO
            </Button>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
            }}
          >
            <Button
              href="/pharmacy/new-patient"
              sx={{
                my: 2,
                color: "white",
                display: { xs: "none", md: "flex" },
                textTransform: "none",
                textWrap: "none",
              }}
            >
              New patient
            </Button>
            {searchVisibility && (
              <Toolbar sx={{ display: { xs: "none", md: "flex" } }}>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Patient id, first name or phone number"
                    inputProps={{ "aria-label": "search" }}
                    onChange={handleSearch}
                  />
                </Search>
              </Toolbar>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignContent: "center",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Stack
              spacing={3}
              direction="row"
              sx={{ pt: 1, color: "action.active" }}
            >
              <Badge color="error" badgeContent={5}>
                <Link href="/pharmacy/chat">
                  <ChatIcon sx={{ color: "white" }} />
                </Link>
              </Badge>
              <Link
                sx={{
                  display: { xs: "flex", sm: "none", md: "flex" },
                }}
                underline="hover"
                color="white"
                href="/pharmacy/profile"
              >
                Pharmacist
              </Link>
            </Stack>
            <Tooltip title="open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Demeke T"
                  src="https://media.licdn.com/dms/image/D4D03AQHQ69yy6KPPyQ/profile-displayphoto-shrink_100_100/0/1702622155028?e=1713398400&v=beta&t=H1qSIOQzJ20pghNDwoZKAxNIZrcGKfRDRYrUkt9kPp0"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  href="/pharmacy/profile"
                  underline="hover"
                  textAlign="center"
                  color="inherit"
                >
                  My profile
                </Link>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  {
                    sessionStorage.clear();
                  }
                }}
              >
                <Link
                  href="/"
                  underline="hover"
                  textAlign="center"
                  color="inherit"
                >
                  Log out
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      {/* side nav bar */}
      <Drawer variant="permanent" open={open}>
        <Box
          sx={{
            p: 2,
            pt: 10,
            backgroundColor: "#f0faff",
            height: "180%",
            overflow: !enableOverflow && "hidden",
            opacity: open ? 1 : 0,
          }}
          onMouseEnter={handleOverflowEnable}
          onMouseLeave={handleOverflowDisable}
        >
          <Toolbar sx={{ ml: -4, display: { sm: "flex", md: "none" } }}>
            <ListItem key="search" disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  px: 2.5,
                }}
              >
                <Tooltip title="Search">
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <SearchIcon
                      onClick={() => {
                        setOpen(true);
                      }}
                    />
                  </ListItemIcon>
                </Tooltip>
                <Search>
                  <TextField
                    size="small"
                    id="standard-basic"
                    variant="standard"
                    placeholder="Search..."
                    onChange={handleSearch}
                  />
                </Search>
              </ListItemButton>
            </ListItem>
          </Toolbar>
          <Typography variant="h6">My patients</Typography>
          <List>
            <ListItem key="pharmacy" disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  px: 2.5,
                }}
              >
                <Link underline="none" href="/pharmacy/new-patient">
                  <Tooltip title="New patient">
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <CreateNewFolderIcon />
                    </ListItemIcon>
                  </Tooltip>
                </Link>
                <Link
                  underline="none"
                  href="/pharmacy/new-patient"
                  color="inherit"
                >
                  <ListItemText primary="New patient" />
                </Link>
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />

          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  px: 2.5,
                }}
                onClick={() => {
                  setOpen(true);
                  setExpand(!expand);
                }}
              >
                <Tooltip title="Filter by date">
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <FilterListIcon />
                  </ListItemIcon>
                </Tooltip>
                <ListItemText
                  primary="Filter by date"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
              <Box>
                {open && expand && (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Box
                      sx={{
                        width: 240,
                        pt: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "ceneter",
                        gap: 3,
                      }}
                    >
                      <DemoItem>
                        <MobileDatePicker
                          label="From"
                          Value={fromValue}
                          onChange={(newValue) =>
                            setFromValue(new Date(newValue))
                          }
                          slotProps={{ textField: { size: "small" } }}
                          sx={{ width: 160, backgroundColor: "#f8fdff" }}
                        />
                      </DemoItem>
                      <DemoItem>
                        <MobileDatePicker
                          label="To"
                          Value={toValue}
                          onChange={(newValue) =>
                            setToValue(new Date(newValue))
                          }
                          slotProps={{ textField: { size: "small" } }}
                          sx={{ width: 160, backgroundColor: "#f8fdff" }}
                        />
                      </DemoItem>
                    </Box>
                  </LocalizationProvider>
                )}
              </Box>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      {/* main body */}
      <Box
        sx={{
          display: { xs: open ? "none" : "flex", sm: "flex" },
          width: "100%",
          p: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <NewPatient
                  searchedPatient={patient}
                  handleSearchVisibility={handleSearchVisibility}
                />
              }
            />
            <Route
              path="/pharmacy/new-patient"
              element={
                <NewPatient
                  searchedPatient={patient}
                  handleSearchVisibility={handleSearchVisibility}
                />
              }
            />
            <Route path="/pharmacy/profile" element={<Profile />} />
            <Route path="/pharmacy/chat" element={<Chat />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </Box>
  );
}
