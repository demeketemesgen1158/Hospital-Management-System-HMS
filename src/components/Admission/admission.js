import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import { Stack } from "@mui/material";
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
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import TextField from "@mui/material/TextField";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import ChatIcon from "@mui/icons-material/Chat";
import Badge from "@mui/material/Badge";

import AllPatients from "./allPatient";
import AdmitPatient from "./admitPatient";
import Chat from "../chat";
import Profile from "../profile";
import NotFound from "../notFound";

const drawerWidth = 240;

//custom styling
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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "34ch",
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
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("xs")]: {
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
  flexShrink: 0,
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
export default function Admission() {
  const [open, setOpen] = React.useState(
    window.innerWidth > 600 ? true : false
  );
  const [expand, setExpand] = React.useState(false);
  const [fromValue, setFromValue] = React.useState();
  const [toValue, setToValue] = React.useState();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [enableOverflow, setOverflow] = React.useState(false);
  const [searchedPatient, setSearchedPatient] = React.useState("");
  const [searchVisibility, setSearchVisibility] = React.useState(false);

  function handleSearchVisibility() {
    setSearchVisibility(true);
  }

  function handleSearch(e) {
    setSearchedPatient(e.target.value);
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
        display: "flex",
        marginTop: 9,
        width: open ? `calc(100% - ${drawerWidth}px)` : "100%",
      }}
    >
      <CssBaseline />
      {/* Top nav bar */}
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
              href="/admission/admit"
              sx={{
                color: "white",
                display: { xs: "none", md: "flex" },
                textTransform: "none",
                textWrap: "none",
              }}
            >
              Admit patient
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
                <Link href="/admission/chat">
                  <ChatIcon sx={{ color: "white" }} />
                </Link>
              </Badge>
              <Link
                sx={{
                  display: { xs: "flex", sm: "none", md: "flex" },
                }}
                underline="hover"
                color="white"
                href="/admission/profile"
              >
                Admission
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
                  href="/admission/profile"
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
                  href=""
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
        <Toolbar />
        <Box
          sx={{
            pb: 3,
            backgroundColor: "#f0faff",
            height: "180%",
            overflow: !enableOverflow && "hidden",
          }}
          onMouseEnter={handleOverflowEnable}
          onMouseLeave={handleOverflowDisable}
        >
          <List>
            {[
              {
                label: (
                  <Search>
                    <TextField
                      size="small"
                      id="standard-basic"
                      variant="standard"
                      placeholder="Search..."
                      onChange={handleSearch}
                    />
                  </Search>
                ),
                icon: (
                  <SearchIcon
                    onClick={() => {
                      setOpen(true);
                    }}
                  />
                ),

                infoText: "Search patient",
              },
              {
                label: "All patients",
                icon: <HomeIcon />,
                link: "/admission/all-patients",
                infoText: "All patient",
              },
              {
                label: "Admit patient",
                icon: <CreateNewFolderIcon />,
                link: "/admission/admit",
                infoText: "New patient",
              },
              {
                label: "Chat",
                icon: (
                  <Badge sx={{ mt: 1 }} color="error" badgeContent={5}>
                    <Link href="/admission/chat">
                      <ChatIcon sx={{ color: "grey" }} />
                    </Link>
                  </Badge>
                ),
                link: "/admission/chat",
                infoText: "Chat",
              },
            ].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <Tooltip title={text.infoText}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      px: 2.5,
                    }}
                  >
                    <Link underline="none" href={text.link}>
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        {text.icon}
                      </ListItemIcon>
                    </Link>
                    <Link underline="none" href={text.link} color="inherit">
                      <ListItemText
                        primary={text.label}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </Link>
                  </ListItemButton>
                </Tooltip>
              </ListItem>
            ))}
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
          width: "100%",
          p: 2,
          display: { xs: open ? "none" : "flex", sm: "flex" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AdmitPatient />} />
            <Route path="/admission/admit" element={<AdmitPatient />} />
            <Route
              path="/admission/all-patients"
              element={
                <AllPatients
                  searched={searchedPatient}
                  handleSearchVisibility={handleSearchVisibility}
                />
              }
            />
            <Route
              path="/admission/"
              element={<AllPatients searched={searchedPatient} />}
            />
            <Route path="/admission/profile" element={<Profile />} />
            <Route path="/admission/chat" element={<Chat />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </Box>
  );
}
