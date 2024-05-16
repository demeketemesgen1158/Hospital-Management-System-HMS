import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, Box, Divider, Paper, Stack, Typography } from "@mui/material";
import { ArrowRightIcon } from "@mui/x-date-pickers";

//list of contacts  to chat, will be fetched from database
const contacts = [
  {
    name: "Abreham",
    img: "https://scontent.fadd3-1.fna.fbcdn.net/v/t1.6435-9/122918211_2706949129546627_4556677502298408221_n.jpg?stp=dst-jpg_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=K_rAwo-MlJQAX_esG1O&_nc_ht=scontent.fadd3-1.fna&oh=00_AfCDh7NN18fovWi5ggo8kVbhJEXR7FPz74T6U51K7G9QMg&oe=660F6CD2",
  },
  {
    name: "Hana",
    img: "https://scontent.fadd3-1.fna.fbcdn.net/v/t1.6435-9/122918211_2706949129546627_4556677502298408221_n.jpg?stp=dst-jpg_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=K_rAwo-MlJQAX_esG1O&_nc_ht=scontent.fadd3-1.fna&oh=00_AfCDh7NN18fovWi5ggo8kVbhJEXR7FPz74T6U51K7G9QMg&oe=660F6CD2",
  },
  {
    name: "Aklilu",
    img: "https://scontent.fadd3-1.fna.fbcdn.net/v/t1.6435-9/122918211_2706949129546627_4556677502298408221_n.jpg?stp=dst-jpg_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=K_rAwo-MlJQAX_esG1O&_nc_ht=scontent.fadd3-1.fna&oh=00_AfCDh7NN18fovWi5ggo8kVbhJEXR7FPz74T6U51K7G9QMg&oe=660F6CD2",
  },
  {
    name: "Wondwosen",
    img: "https://scontent.fadd3-1.fna.fbcdn.net/v/t1.6435-9/122918211_2706949129546627_4556677502298408221_n.jpg?stp=dst-jpg_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=K_rAwo-MlJQAX_esG1O&_nc_ht=scontent.fadd3-1.fna&oh=00_AfCDh7NN18fovWi5ggo8kVbhJEXR7FPz74T6U51K7G9QMg&oe=660F6CD2",
  },
];

//list of messages fetched from database
const messages = [
  {
    name: "Hana",
    msgOut: "Hi Demeke",
    msgIn: "",
  },
  {
    name: "Abreham",
    img: "",
    msgOut: "Hi Demeke, how everything is going? ",
    msgIn: "Hi Abreham, everything is wonderful. What about you?",
  },
  {
    name: "Hana",
    msgOut: "How everything is going? ",
    msgIn: "Hi Hana, everything is wonderful. What about you?",
  },
  {
    name: "Wondwosen",
    msgOut: "Hi Demeke, how everything is going? ",
    msgIn: "Hi Wondwosen, everything is wonderful. What about you?",
  },
  {
    name: "Aklilu",
    msgOut: "Hi Demeke, how everything is going? ",
    msgIn: "Hi Aklilu, everything is wonderful. What about you?",
  },
  {
    name: "Wondwosen",
    msgOut: "Hi Demeke, how everything is going? ",
    msgIn: "Hi Wondwosen, everything is wonderful. What about you?",
  },
];

//collective component to be exported
export default function Chat() {
  const [contactView, setcontactView] = React.useState(
    window.innerWidth > 600 && true
  );
  const [contactName, setContactName] = React.useState("");
  const [photo, setPhoto] = React.useState("");
  const [searchContact, setSearchContact] = React.useState("");
  const [enableOverflowContact, setOverflowContact] = React.useState(false);
  const [enableOverflowMessage, setOverflowMessage] = React.useState(false);

  function handleOverflowEnableContact() {
    setOverflowContact(true);
  }

  function handleOverflowDisableContact() {
    setOverflowContact(false);
  }

  function handleOverflowEnableMessage() {
    setOverflowMessage(true);
  }

  function handleOverflowDisableMessage() {
    setOverflowMessage(false);
  }

  function handlecontactView() {
    setcontactView(true);
  }

  function handleClose() {
    setcontactView(false);
  }

  function handleContact(contact, profileImg) {
    setContactName(contact);
    setPhoto(profileImg);
  }

  function handleSearchContact(selected) {
    setSearchContact(selected);
  }

  const filteredMsg = messages.filter((msg) => msg.name === contactName);
  const filteredContact = contacts.filter((selectContact) =>
    selectContact.name.toLowerCase().startsWith(searchContact.toLowerCase())
  );

  //contacts component
  function Contacts() {
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexFlow: "row nowrap",
            justifyContent: "center",
          }}
        >
          {contactView && (
            <IconButton sx={{ mt: 1 }} onClick={handleClose}>
              <ArrowRightIcon />
            </IconButton>
          )}
          <TextField
            id="standard-basic"
            label="Search contact"
            variant="standard"
            onChange={(event) => handleSearchContact(event.target.value)}
          />
        </Box>
        <List
          sx={{
            p: 2,
            width: "100%",
            height: 0.55 * window.innerHeight,
            overflowY: !enableOverflowContact ? "hidden" : "scroll",
          }}
          onMouseEnter={handleOverflowEnableContact}
          onMouseLeave={handleOverflowDisableContact}
        >
          {(searchContact != "" ? filteredContact : contacts).map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  onClick={() => {
                    handleContact(text.name, text.img);
                    {
                      window.innerWidth < 600 && setcontactView(false);
                    }
                  }}
                >
                  <ListItemText primary={text.name} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Box>
    );
  }

  //component on head of chat(profile picture and contact name)
  function ChatHeader() {
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexFlow: "row noWrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexFlow: "row noWrap",
            gap: 2,
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <IconButton>
            {photo != "" && <Avatar alt="Demeke T" src={photo} />}
          </IconButton>
          <Typography>{contactName}</Typography>
        </Box>
        {!contactView && (
          <Button
            variant="outlined"
            sx={{ textTransform: "none" }}
            onClick={handlecontactView}
          >
            Contacts
          </Button>
        )}
      </Box>
    );
  }

  //Component to display messages at firtst render
  function MessagePreview() {
    return (
      <>
        {contacts.map((text) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              mb: 3,
            }}
            onClick={() => handleContact(text.name, text.img)}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ fontWeight: "bold" }} variant="subtitle2">
                {text.name}
              </Typography>
              <Typography sx={{ fontSize: "0.75em" }} variant="subtitle2">
                {messages.filter((msg) => msg.name === text.name)[0].msgOut}
              </Typography>
              <Divider />
            </Box>
          </Box>
        ))}
      </>
    );
  }

  //component to display main message
  function MessageView() {
    return (
      <Box>
        {filteredMsg.map((msg) => (
          <>
            {msg.msgOut != "" && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  mt: 3,
                }}
              >
                <Paper
                  sx={{
                    width: "60%",
                    backgroundColor: "green",
                    color: "white",
                    display: "flex",
                    flexFlow: "row noWrap",
                    alignItems: "center",
                    p: 1,
                  }}
                >
                  {/* <SendIcon
                    sx={{
                      color: "green",
                      fontSize: "2.5em",
                      marginLeft: -1,
                      transform: "rotate(180deg)",
                    }}
                  /> */}
                  <Typography>{msg.msgOut}</Typography>
                </Paper>
              </Box>
            )}
            {msg.msgIn != "" && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  mt: 3,
                }}
              >
                <Paper
                  sx={{
                    width: "60%",
                    backgroundColor: "orange",
                    p: 1,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    flexFlow: "row noWrap",
                  }}
                >
                  <Typography>{msg.msgIn}</Typography>
                  {/* <SendIcon
                    sx={{
                      color: "orange",
                      fontSize: "2.5em",
                      marginRight: -2,
                    }}
                  /> */}
                </Paper>
              </Box>
            )}
          </>
        ))}
      </Box>
    );
  }

  //component to write message
  function SendMessage() {
    return (
      <Box
        sx={{
          width: "100%",
          maxWidth: 500,
          padding: 3,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 3,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            sx={{
              width: "100%",
              borderRadius: 3,
              border: "none",
            }}
            multiline
            size="small"
            id="outlined-basic"
            variant="outlined"
            placeholder="Write your message ..."
          />
          <Button sx={{ width: "15%" }} variant="contained">
            Send
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Stack
      sx={{
        width: { xs: "100%", sm: 700 },
      }}
    >
      <Paper
        sx={{
          width: "100%",
          height: 0.84 * window.innerHeight,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "100%",
            padding: 1,
            display: "flex",
            flexFlow: "row nowrap",
          }}
        >
          <Box
            sx={{
              width: contactView ? "70%" : "100%",
              display: { xs: contactView && "none", sm: "flex" },
              flexDirection: "column",
            }}
          >
            {contactName != "" && <ChatHeader />}
            <Paper
              elevation={0}
              sx={{
                width: "100%",
                height: 0.55 * window.innerHeight,
                overflowY: !enableOverflowMessage ? "hidden" : "scroll",
                padding: 3,
              }}
              onMouseEnter={handleOverflowEnableMessage}
              onMouseLeave={handleOverflowDisableMessage}
            >
              {contactName != "" ? <MessageView /> : <MessagePreview />}
            </Paper>
          </Box>
          <Box
            sx={{
              width: {
                xs: contactView ? "100%" : "0%",
                sm: contactView ? 200 : "0%",
              },
            }}
          >
            {contactView && <Contacts />}
          </Box>
        </Box>
        <Box>{contactName != "" && <SendMessage />}</Box>
      </Paper>
    </Stack>
  );
}
