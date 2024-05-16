import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
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
import FilterListIcon from "@mui/icons-material/FilterList";
import ListItemText from "@mui/material/ListItemText";
import { alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Badge, Link } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import TextField from "@mui/material/TextField";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Chat from "../chat";
import Profile from "../profile";
import NotFound from "../notFound";
import UnderDevelopment from "../underDevelopment";
import NewBill from "./newBill";
import AllBill from "./allBill";
import Report from "./report";

const drawerWidth = 240;

//custom stylings of components
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

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

//collective component to be exported
export default function Bills() {
  const [open, setOpen] = React.useState(
    window.innerWidth > 600 ? true : false
  );
  const [expand, setExpand] = React.useState(false);
  const [fromValue, setFromValue] = React.useState();
  const [toValue, setToValue] = React.useState();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [enableOverflow, setOverflow] = React.useState(false);
  const [searchedPatient, setSearchedPatient] = React.useState("");
  const [print, setPrint] = React.useState(false);
  const [searchVisibility, setSearchVisibility] = React.useState(false);

  function handleSearchVisibility() {
    setSearchVisibility(true);
  }

  function handleOpenPrintOff() {
    setPrint(false);
    {
      window.innerWidth > 600 && setOpen(true);
    }
  }

  function handlePrint() {
    setOpen(false);
    setPrint(true);
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
        marginTop: !print ? 9 : 0,
        width: open ? `calc(100% - ${drawerWidth}px)` : "100%",
      }}
    >
      <CssBaseline />
      {!print && (
        <>
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
                  href="/bill/new-payment"
                  sx={{
                    my: 2,
                    color: "white",
                    display: { xs: "none", sm: "none", md: "flex" },
                    textTransform: "none",
                    textWrap: "nowrap",
                  }}
                >
                  New income
                </Button>
                {searchVisibility && (
                  <Toolbar
                    sx={{
                      display: { xs: "none", sm: "flex" },
                    }}
                  >
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
                    <Link href="/bill/chat">
                      <ChatIcon sx={{ color: "white" }} />
                    </Link>
                  </Badge>
                  <Link
                    sx={{
                      display: { xs: "flex", sm: "none", md: "flex" },
                    }}
                    underline="hover"
                    color="white"
                    href="/bill/profile"
                  >
                    Accountant
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
                      href="/bill/profile"
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
                pb: 7,
                backgroundColor: "#f0faff",
                height: "180%",
                overflowY: !enableOverflow && "hidden",
              }}
              onMouseEnter={handleOverflowEnable}
              onMouseLeave={handleOverflowDisable}
            >
              <Toolbar />
              <List>
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton>
                    <SearchIcon
                      onClick={() => {
                        setOpen(!open);
                      }}
                    />
                    <ListItem>
                      <Search>
                        <TextField
                          size="small"
                          id="standard-basic"
                          variant="standard"
                          placeholder="Search..."
                          onChange={handleSearch}
                        />
                      </Search>
                    </ListItem>
                  </ListItemButton>
                </ListItem>
              </List>
              <Box>
                <div>
                  <Accordion
                    sx={{
                      backgroundColor: "#f0faff",
                    }}
                  >
                    <AccordionSummary
                      sx={{
                        backgroundColor: "#f0faff",
                      }}
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                    >
                      <Typography>Incoming payments</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Link
                        color="black"
                        underline="hover"
                        href="/bill/new-payment"
                        sx={{
                          display: "block",
                          ml: 3,
                          mt: -1,
                          fontSize: "0.90em",
                        }}
                      >
                        New payment
                      </Link>
                      <Link
                        color="black"
                        underline="hover"
                        href="/bill/all-income"
                        sx={{
                          display: "block",
                          ml: 3,
                          pt: 2,
                          fontSize: "0.90em",
                        }}
                      >
                        All payment
                      </Link>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    sx={{
                      backgroundColor: "#f0faff",
                    }}
                  >
                    <AccordionSummary
                      sx={{
                        backgroundColor: "#f0faff",
                      }}
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                    >
                      <Typography>Outgoing payments</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Link
                        color="black"
                        underline="hover"
                        href="/bill/salary"
                        sx={{
                          display: "block",
                          ml: 3,
                          mt: -1,
                          fontSize: "0.90em",
                        }}
                      >
                        Salary
                      </Link>
                      <Link
                        color="black"
                        underline="hover"
                        href="/bill/purchases"
                        sx={{
                          display: "block",
                          ml: 3,
                          pt: 2,
                          fontSize: "0.90em",
                        }}
                      >
                        Purchases
                      </Link>
                      <Link
                        color="black"
                        underline="hover"
                        href="/bill/others"
                        sx={{
                          display: "block",
                          ml: 3,
                          pt: 2,
                          fontSize: "0.90em",
                        }}
                      >
                        Others
                      </Link>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <Divider />
                <List>
                  <ListItemButton>
                    <Link underline="none" href="/bill/report">
                      <Tooltip title="Report">
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          <SummarizeOutlinedIcon />
                        </ListItemIcon>
                      </Tooltip>
                    </Link>
                    <Link underline="none" href="/bill/report" color="inherit">
                      <ListItemText
                        primary="Report"
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </Link>
                  </ListItemButton>
                </List>
                <List>
                  <ListItemButton>
                    <Link underline="none" href="/bill/chat">
                      <Tooltip title="Chat">
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          <Badge color="error" badgeContent={5}>
                            <ChatIcon />
                          </Badge>
                        </ListItemIcon>
                      </Tooltip>
                    </Link>
                    <Link underline="none" href="/bill/chat" color="inherit">
                      <ListItemText
                        primary="Chat"
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </Link>
                  </ListItemButton>
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
                                onChange={
                                  (newValue) => setFromValue(new Date(newValue))
                                  // console.log(iDate);
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
            </Box>
          </Drawer>
        </>
      )}

      {/* Main component */}
      <Box
        sx={{
          width: "100%",
          p: { xs: 1, sm: 2 },
          display: { xs: open ? "none" : "flex", sm: "flex" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<NewBill searchedPatient={searchedPatient} />}
            />
            <Route
              path="/bill/new-payment"
              element={
                <NewBill
                  searchedPatient={searchedPatient}
                  handleSearchVisibility={handleSearchVisibility}
                />
              }
            />
            <Route
              path="/bill/all-income"
              element={
                <AllBill
                  searchedPatient={searchedPatient}
                  handleSearchVisibility={handleSearchVisibility}
                />
              }
            />
            <Route path="/bill/salary" element={<UnderDevelopment />} />
            <Route path="/bill/purchases" element={<UnderDevelopment />} />
            <Route path="/bill/other" element={<UnderDevelopment />} />
            <Route
              path="/bill/report"
              element={
                <Report
                  handlePrint={handlePrint}
                  handlePrintOff={handleOpenPrintOff}
                  print={print}
                />
              }
            />
            <Route path="/bill/profile" element={<Profile />} />
            <Route path="/bill/chat" element={<Chat />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </Box>
  );
}
