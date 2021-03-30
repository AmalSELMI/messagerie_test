import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Divider,
  Box,
  Input,
  Paper,
  Button,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { QueryClient } from "react-query";
import uuid from "uuid";
import { mutation } from "../../helpers/useApi";
import styles from "./styles";

const MessageForm = ({ messages, setMessages }) => {
  const queryClient = new QueryClient({});
  const classes = styles();
  const [messageConfidentiality, setMessageConfidentiality] = useState(
    "Public"
  );
  const [message, setMessage] = useState("");

  const handleConfidentialityChange = (event) =>
    setMessageConfidentiality(event.target.value);

  const handleMessageChange = (event) => setMessage(event.target.value);

  const postMessageMutationSetup = mutation({
    path: "data",
    method: "POST",
    onMutate: () => {
      queryClient.invalidateQueries("messages");
    },
  });

  const handleSubmit = () => {
    postMessageMutationSetup.mutate({
      body: {
        id: uuid(),
        body: message,
        private: messageConfidentiality === "Private",
      },
    });
    setMessages([
      ...messages,
      {
        id: uuid(),
        body: message,
        private: messageConfidentiality === "Private",
      },
    ]);
  };

  useEffect(() => {
    const handleEvent = (event) => {
      const { keyCode } = event;
      // if enter.
      if (keyCode === 13) {
        handleSubmit();
      }
    };

    window.addEventListener("keyup", handleEvent);

    return () => {
      window.removeEventListener("keyup", handleEvent);
    };
  }, []);

  // I want to mention that as this is a technical test, i'm limited in development time (i had to respond quite fast to your request)
  // but i want to share my view of the improvements possible in this app.
  // The RadioGroup can be refactored into a generic and reusable component, (as well as a messageList container)
  // I could have set up a storybook
  // i woul've also added import aliases as well and pushed further the testing ..

  // That being said, i hope at least that this poc proves to you that i can set up a boilerplate (this is my own boilerplate)
  // and use it with a theme, a router, a context (even if it's useless in this specific case), use react hooks & 3rd party libraries, set up a fake api
  // and maybe discover my favorite data management library (react-query) :)

  return (
    <Box className={classes.root} display="flex">
      {/* --------------- Message Input ---------------------- */}
      <Paper className={classes.paper} elevation={0}>
        <Input
          id="message"
          className={classes.input}
          disableUnderline
          multiline
          rowsMax={5}
          onChange={handleMessageChange}
          value={message}
          placeholder="Votre message..."
        />
      </Paper>
      <Divider className={classes.divider} />
      {/* --------------- Message Confidentiality ---------------------- */}
      <FormControl component="fieldset">
        <Box className={classes.radios}>
          <RadioGroup
            value={messageConfidentiality}
            aria-label="messageConfidentiality"
            name="messageConfidentiality"
            onChange={handleConfidentialityChange}
          >
            <FormControlLabel
              id="public"
              value="Public"
              control={<Radio />}
              label="Public"
            />
            <FormControlLabel
              id="private"
              value="Private"
              control={<Radio />}
              label="Private"
            />
          </RadioGroup>
        </Box>
      </FormControl>
      <Divider className={classes.divider} />
      <Button
        onClick={handleSubmit}
        variant="contained"
        className={classes.button}
      >
        <SendIcon />
      </Button>
    </Box>
  );
};

MessageForm.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      private: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  setMessages: PropTypes.func.isRequired,
};

export default MessageForm;
