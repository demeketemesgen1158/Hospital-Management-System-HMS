import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";

//user or staff profile details to be fetched from database
const profile = [
  {
    name: "Dr. Kaleb Sisay",
    gender: "Male",
    photo:
      "https://media.licdn.com/dms/image/D4D03AQHQ69yy6KPPyQ/profile-displayphoto-shrink_100_100/0/1702622155028?e=1713398400&v=beta&t=H1qSIOQzJ20pghNDwoZKAxNIZrcGKfRDRYrUkt9kPp0",
    tel: "+251-912906891",
    userName: "kaleb@gmail.com",
    profession: "General practitioner ",
    herePostion: "OPD",
    salary: "7500",
    languages: "English, Spanish, Amharic",
    empoyementDate: "2024/01/05",
    emergencyContactName: "Aselefech Akalu",
    emergencyContactPhone: "+251-988002241",
    training: [
      {
        startDate: "2010/01/02",
        endDate: "2013/02/07",
        organization: "Africa medical college",
        qualification: "Nursing",
      },
      {
        startDate: "2014/01/02",
        endDate: "2019/02/07",
        organization: "St. Paulos medical college",
        qualification: "General Doctor",
      },
    ],
    experience: [
      {
        startDate: "2019/01/02",
        endDate: "2020/02/07",
        organization: "St. Yared gereral hospital",
        postion: "OPD",
      },
      {
        startDate: "2021/01/02",
        endDate: "2024/02/07",
        organization: "St. Paulos specialized hospital",
        postion: "OPD",
      },
    ],
  },
];

export default function Profile({ employeeId }) {
  return (
    <Stack
      sx={{
        width: "100%",
        p: 3,
        gap: 5,
        backgroundColor: "#f0faff",
      }}
    >
      <Paper
        sx={{
          padding: 1,
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          gap: 1,
          color: "blue",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexFlow: "row wrap",
            alignItems: "center",
            gap: 1,
          }}
        >
          {profile.map((prof) => (
            <>
              <Box>
                <IconButton sx={{ p: 1 }}>
                  <Avatar
                    // sx={{ width: 100, height: "auto" }}
                    alt={prof.name}
                    src={prof.photo}
                  />
                </IconButton>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Typography variant="subtitle2">Name</Typography>
                <Typography variant="caption">{prof.name}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Typography variant="subtitle2">Gender</Typography>
                <Typography variant="caption">{prof.gender}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Typography variant="subtitle2">Tel</Typography>
                <Typography variant="caption">{prof.tel}</Typography>
              </Box>
            </>
          ))}
        </Stack>
      </Paper>
      <Stack sx={{ display: "flex", gap: 5 }}>
        <Stack
          sx={{
            pl: 3,
            display: "flex",
            flexFlow: "row wrap",
            alignItems: "center",
            gap: 4,
          }}
        >
          {profile.map((prof) => (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Typography variant="subtitle2">Profession</Typography>
                <Typography variant="caption">{prof.profession}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Typography variant="subtitle2">Position | Role</Typography>
                <Typography variant="caption">{prof.herePostion}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Typography variant="subtitle2">Salary</Typography>
                <Typography variant="caption">USD {prof.salary}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Typography variant="subtitle2">Languages</Typography>
                <Typography variant="caption">{prof.languages}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Typography variant="subtitle2">Employee Id</Typography>
                <Typography variant="caption">{employeeId}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Typography variant="subtitle2">User name</Typography>
                <Typography variant="caption">{prof.userName}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Typography variant="subtitle2">Date of Employment</Typography>
                <Typography variant="caption">{prof.empoyementDate}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Typography variant="subtitle2">Emergency contact</Typography>
                <Typography variant="caption">
                  {prof.emergencyContactName} | {prof.emergencyContactPhone}
                </Typography>
              </Box>
            </>
          ))}
        </Stack>
        <Divider />
        <Stack
          sx={{
            width: "100%",
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-between",
            gap: 7,
          }}
        >
          <Stack
            sx={{
              width: 300,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="subtitle2">
              Training and certification
            </Typography>
            <List>
              {profile[0].training.map((training) => (
                <ListItem
                  sx={{
                    display: "center",
                    flexFlow: "row wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <ListItemButton
                    sx={{ textWrap: "nowrap", fontSize: "0.85em", mb: -1 }}
                  >
                    {training.startDate} - {training.endDate}
                  </ListItemButton>
                  <ListItem>
                    <ListItemText>
                      {training.organization} - {training.qualification}
                    </ListItemText>
                  </ListItem>
                </ListItem>
              ))}
            </List>
          </Stack>
          <Stack
            sx={{
              width: 300,
              pb: 7,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="subtitle2">Work experiences</Typography>
            <List>
              {profile[0].experience.map((experience) => (
                <ListItem
                  sx={{
                    display: "center",
                    flexFlow: "row wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <ListItemButton
                    sx={{ fontSize: "0.85em", textWrap: "nowrap", mb: -1 }}
                  >
                    {experience.startDate} - {experience.endDate}
                  </ListItemButton>
                  <ListItem>
                    <ListItemText>
                      {experience.organization} - {experience.postion}
                    </ListItemText>
                  </ListItem>
                </ListItem>
              ))}
            </List>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
