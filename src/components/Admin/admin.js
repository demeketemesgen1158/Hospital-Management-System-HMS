//Imported inbuilt libraries
import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
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
import DoneAllIcon from "@mui/icons-material/DoneAll";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { Link } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import TextField from "@mui/material/TextField";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import GroupsIcon from "@mui/icons-material/Groups";
import ChatIcon from "@mui/icons-material/Chat";
import Badge from "@mui/material/Badge";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Imported custom libraries
import Profile from "../profile";
import AllPatients from "./allPatients";
import Dashboard from "./Dashboard/dashboard";
import NewUser from "./newUser";
import Staffs from "./staffs";
import Pharmacy from "./pharmacy";
import Chat from "../chat";
import AllUser from "./allUser";
import NotFound from "../notFound";
import UnderDevelopment from "../underDevelopment";
import NewStaff from "./newStaff";
import NewMedicine from "./newMedicine";

const drawerWidth = 240;

//Pages list that will appear on top nav and side nav respective to screen size
const topNavPages = [
  {
    label: "Dashboard",
    icon: <DashboardIcon />,
    link: "/admin",
    infoText: "Dashboard",
  },
  {
    label: "All users",
    icon: <GroupIcon />,
    link: "/admin/all-user",
    infoText: "All users",
  },
  {
    label: "Add user",
    icon: <PersonAddIcon />,
    link: "/admin/new-user",
    infoText: "Add user",
  },
  {
    label: "Add staff",
    icon: <PersonAddAltIcon />,
    link: "/admin/new-staff",
    infoText: "Add staff",
  },
];

//List of pages listed at drawer or side nav
const drawerElements = [
  {
    label: "All patients",
    icon: <DoneAllIcon />,
    link: "/admin/all-patients",
    infoText: "Patients",
  },
  {
    label: "Pharmacy",
    icon: <WarehouseIcon />,
    link: "/admin/pharmacy",
    infoText: "pharmacy",
  },
  {
    label: "Financial balance",
    icon: <MonetizationOnIcon />,
    link: "/admin/financial-balance",
    infoText: "Financial balance",
  },
  {
    label: "Staffs",
    icon: <GroupsIcon />,
    link: "/admin/staffs",
    infoText: "Staffs",
  },
  {
    label: "Chat",
    icon: (
      <Badge color="error" badgeContent={5}>
        <Link href="/admin/chat">
          <ChatIcon sx={{ color: "grey" }} />
        </Link>
      </Badge>
    ),
    link: "/admin/chat",
    infoText: "Chat",
  },
];

//Custom styling
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
        width: "20ch",
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
  width: 0,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
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

//Collective component to be exported
export default function Admin() {
  const [open, setOpen] = React.useState(
    window.innerWidth > 600 ? true : false
  );
  const [expand, setExpand] = React.useState(false);
  const [fromValue, setFromValue] = React.useState();
  const [toValue, setToValue] = React.useState();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [enableOverflow, setOverflow] = React.useState(false);
  const [searchResult, setSearchResult] = React.useState("");
  const [searchVisibility, setSearchVisibility] = React.useState(false);

  function handleSearchVisibility() {
    setSearchVisibility(true);
  }

  function handleSearch(e) {
    setSearchResult(e.target.value);
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
        width: open
          ? `calc(100% - ${drawerWidth}px)`
          : { xs: "100%", sm: `calc(100% - 66px)` },
      }}
    >
      <CssBaseline />

      {/* Tp nav bar component */}
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
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
            <Box sx={{ marginLeft: -3, marginRight: 5 }}>
              <Button
                href="/"
                sx={{ color: "white", fontSize: "1.0em", fontWeight: "bold" }}
              >
                LOGO
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {topNavPages.map((page) => (
              <Button
                href={page.link}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textTransform: "none",
                  textWrap: "nowrap",
                }}
              >
                {page.label}
              </Button>
            ))}
            {searchVisibility && (
              <Toolbar
                sx={{
                  display: { sm: "none", md: "flex" },
                }}
              >
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
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
            <Stack spacing={4} direction="row" sx={{ color: "action.active" }}>
              <Badge color="error" badgeContent={5}>
                <Link href="/admin/chat">
                  <ChatIcon sx={{ color: "white" }} />
                </Link>
              </Badge>
              <Link underline="hover" color="white" href="/admin/profile">
                Admin
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
                  href="/admin/profile"
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

      {/* Side nav bar component */}
      <Drawer variant="permanent" open={open}>
        <Toolbar />
        <Box
          sx={{
            pb: 3,
            pt: 1,
            backgroundColor: "#f0faff",
            height: "180%",
            overflow: !enableOverflow && "hidden",
          }}
          onMouseEnter={handleOverflowEnable}
          onMouseLeave={handleOverflowDisable}
        >
          <List>
            <ListItem key="search" disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  px: 2.5,
                }}
              >
                <Link underline="none">
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
                </Link>
                <Link underline="none" color="inherit">
                  <Search>
                    <TextField
                      size="small"
                      id="standard-basic"
                      variant="standard"
                      placeholder="Search..."
                      onChange={handleSearch}
                    />
                  </Search>
                </Link>
              </ListItemButton>
            </ListItem>
            <Divider />
            {topNavPages.map((text, index) => (
              <ListItem
                key={index}
                disablePadding
                sx={{
                  display: { sm: "flex", md: "none" },
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    px: 2.5,
                  }}
                >
                  <Link underline="none" href={text.link}>
                    <Tooltip title={text.infoText}>
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        {text.icon}
                      </ListItemIcon>
                    </Tooltip>
                  </Link>
                  <Link underline="none" href={text.link} color="inherit">
                    <ListItemText
                      primary={text.label}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
            <Divider />
            {drawerElements.map((text, index) => (
              <ListItem key={index} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    px: 2.5,
                  }}
                >
                  <Link underline="none" href={text.link}>
                    <Tooltip title={text.infoText}>
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        {text.icon}
                      </ListItemIcon>
                    </Tooltip>
                  </Link>
                  <Link underline="none" href={text.link} color="inherit">
                    <ListItemText
                      primary={text.label}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </Link>
                </ListItemButton>
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
                      // components={["MobileDatePicker"]}
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
                          onChange={(newValue) => {
                            setFromValue(new Date(newValue));
                          }}
                          slotProps={{ textField: { size: "small" } }}
                          sx={{ width: 160, backgroundColor: "#f8fdff" }}
                        />
                      </DemoItem>
                      <DemoItem>
                        <MobileDatePicker
                          label="To"
                          Value={toValue}
                          onChange={(newValue) => {
                            setToValue(new Date(newValue));
                          }}
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

      {/* Main component with different routings */}
      <Box
        sx={{
          display: { xs: open ? "none" : "flex", sm: "flex" },
          width: "100%",
          p: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route
              path="/admin/all-patients"
              element={
                <AllPatients
                  searchedPatient={searchResult}
                  handleSearchVisibility={handleSearchVisibility}
                />
              }
            />
            <Route path="/admin/profile" element={<Profile />} />
            <Route path="/admin/new-user" element={<NewUser />} />
            <Route
              path="/admin/all-user"
              element={
                <AllUser
                  searchedUser={searchResult}
                  handleSearchVisibility={handleSearchVisibility}
                />
              }
            />
            <Route
              path="/admin/staffs"
              element={
                <Staffs
                  searchedStaff={searchResult}
                  handleSearchVisibility={handleSearchVisibility}
                />
              }
            />
            <Route path="/admin/new-staff" element={<NewStaff />} />
            <Route
              path="/admin/pharmacy"
              element={
                <Pharmacy
                  seachedMedicine={searchResult}
                  handleSearchVisibility={handleSearchVisibility}
                />
              }
            />
            <Route path="/admin/new-medicine" element={<NewMedicine />} />
            <Route path="/admin/chat" element={<Chat />} />
            <Route
              path="/admin/financial-balance"
              element={<UnderDevelopment />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </Box>
  );
}
