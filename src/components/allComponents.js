// inbuilt components
import * as React from "react";
import { Button, Input, Typography } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

//custom components
import Box from "@mui/material/Box";
import Admin from "./Admin/admin";
import Opd from "./opd/opd";
import Pharmacy from "./pharmacy/pharmacy";
import Admission from "./Admission/admission";
import Bills from "./Bill/bills";
import Laboratory from "./laboratory/laboratory";
import Diagnosis from "./diagnosis/diagnosis";

//Collection of all components of the application to be xported to index.js
export default function AllComponents() {
  const [isAuth, setAuth] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const role = sessionStorage.getItem("role");
  const token = sessionStorage.getItem("token");

  return (
    <div className="App">
      {/* component to be displayed while a feature is rendering oir fetching data */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {/* rendering application based on the login credentials */}
      {token != null && token != "" ? (
        <>
          {role === "admin" && <Admin />}
          {role === "finance" && <Bills />}
          {role === "admission" && <Admission />}
          {role === "opd" && <Opd />}
          {role === "pharmacist" && <Pharmacy />}
          {role === "lab" && <Laboratory />}
          {role === "diagnosis" && <Diagnosis />}
        </>
      ) : (
        <LogIn />
      )}
    </div>
  );

  // login component
  function LogIn() {
    const [noEmpty, setEmpty] = React.useState(true);
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const inputObj = { username: username, password: password };

    function handleEmpty() {
      if (username.length > 0 && password.length > 0) {
        setEmpty(false);
      }
    }

    //hook to fetch user login data from and authenticate the user
    const FetchData = () => {
      setLoading(true);
      fetch("https://maflink.com/hospital/users.php", {
        body: JSON.stringify(inputObj),
        method: "POST",
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          sessionStorage.clear();
          sessionStorage.setItem("role", data[0].role);
          sessionStorage.setItem("token", data[0].token);
          console.log(data);
          console.log(sessionStorage.getItem("token"));
          setLoading(false);

          {
            data[0].auth === false ? setAuth(false) : setAuth(true);
          }
        });
    };

    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          flexDirection: "column",
          pt: 12,
          gap: 2,
        }}
      >
        <Typography variant="h6">Log in</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 4,
            mt: 3,
            "& .MuiTextField-root": { m: 1, width: "21ch" },
          }}
          noValidate
          autoComplete="off"
        >
          {isAuth === false &&
            username.length === 0 &&
            password.length === 0 && (
              <Typography sx={{ color: "red", height: 3, fontSize: "0.85em" }}>
                Incorrect user inputs
              </Typography>
            )}
          <Input
            variant="standard"
            id="username"
            placeholder="User name"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
              handleEmpty();
            }}
          />
          <Input
            type="password"
            placeholder="Password"
            variant="standard"
            id="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              handleEmpty();
            }}
          />
        </Box>
        <Box sx={{ padding: 5 }}>
          <Button disabled={noEmpty} onClick={FetchData} variant="outlined">
            Submit
          </Button>
        </Box>
      </Box>
    );
  }
}