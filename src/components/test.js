import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export default function GeneralPower() {
  return (
    <Box
      sx={{
        width: 700,
        display: "flex",
        // alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        p: 3,
        gap: 2,
      }}
    >
      <Paper
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          gap: 3,
          p: 3,
        }}
      >
        <Typography>For</Typography>
        <img
          src="https://generalpowerplc.com/wp-content/uploads/2019/08/PNG-1.png?189db0&189db0"
          style={{ maxWidth: 200 }}
        />
      </Paper>
      <Typography>Estimated development duration</Typography>
      <Paper sx={{ p: 3, width: "100%" }}>
        <Stepper orientation="vertical">
          <Step>
            <Box
              sx={{
                mb: 2,
                mt: 2,
                display: "flex",
                flexDirection: "row",
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  backgroundColor: "blue",
                  borderRadius: "50%",
                  width: 36,
                  height: 24,
                  color: "white",
                  textAlign: "center",
                }}
              >
                1
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 20,
                }}
              >
                <Box>
                  <Typography>Business analysis</Typography>
                  <Typography sx={{ fontSize: "0.75em" }}>
                    This encompasses analyzing the organizational framework,
                    operational procedures, all tasks, responsibilities, and
                    hierarchical structure within the company.
                  </Typography>
                </Box>
                <Typography> 15 days</Typography>
              </Box>
            </Box>
          </Step>
          <Step>
            <Box
              sx={{
                mb: 2,
                mt: 2,
                display: "flex",
                flexDirection: "row",
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  backgroundColor: "blue",
                  borderRadius: "50%",
                  width: 28,
                  height: 24,
                  color: "white",
                  textAlign: "center",
                }}
              >
                2
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 20,
                }}
              >
                <Box>
                  <Typography>Frontend development</Typography>
                  <Typography sx={{ fontSize: "0.75em" }}>
                    Frontend development entails crafting the visual components
                    that users engage with when utilizing the application.
                  </Typography>
                </Box>
                <Typography> 40 days</Typography>
              </Box>
            </Box>
          </Step>
          <Step>
            <Box
              sx={{
                mb: 2,
                mt: 2,
                display: "flex",
                flexDirection: "row",
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  backgroundColor: "blue",
                  borderRadius: "50%",
                  width: 25,
                  height: 24,
                  color: "white",
                  textAlign: "center",
                }}
              >
                3
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 20,
                }}
              >
                <Box>
                  <Typography>Backend development</Typography>
                  <Typography sx={{ fontSize: "0.75em" }}>
                    This entails creating the database, developing APIs, and
                    integrating them with the frontend.
                  </Typography>
                </Box>
                <Typography> 20 days</Typography>
              </Box>
            </Box>
          </Step>
          <Step>
            <Box
              sx={{
                mb: 2,
                mt: 2,
                display: "flex",
                flexDirection: "row",
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  backgroundColor: "blue",
                  borderRadius: "50%",
                  width: 35,
                  height: 24,
                  color: "white",
                  textAlign: "center",
                }}
              >
                4
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Box>
                  <Typography>Deployment and testing</Typography>
                  <Typography sx={{ fontSize: "0.75em" }}>
                    This involves deploying the application to production and
                    making it available to users, followed by testing its
                    functionality in a live operational environment.
                  </Typography>
                </Box>
                <Typography> 25 days</Typography>
              </Box>
            </Box>
          </Step>
        </Stepper>
        <Divider />
        <Typography
          sx={{
            p: 3,
            fontWeight: "bold",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          Total: 100 days
        </Typography>
      </Paper>
      <Paper
        sx={{
          p: 3,
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Typography>
          Estimated budget: <b>USD 3780</b>
        </Typography>
      </Paper>
      <Paper sx={{ p: 3, width: "100%" }}>
        <Typography>Key notes</Typography>
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>1</ListItemIcon>
              <Typography sx={{ fontSize: "0.85em", textAlign: "justify" }}>
                Regularly engaging in discussions with staff and presenting
                progress updates, as well as gathering feedback from them, is
                crucial throughout the development process.
              </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>2</ListItemIcon>
              <Typography sx={{ fontSize: "0.85em", textAlign: "justify" }}>
                This statement is likely derived from the features incorporated
                into our hospital management system project. Therefore, it's
                possible that there may be some variations in the actual
                implementation of the ERP system.
              </Typography>
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
}
