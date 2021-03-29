import React from "react";
import { Box, Typography } from "@material-ui/core";
import MessageLine from "../../components/messageLine";
import MessageForm from "../../components/messageForm";
import { query } from "../../helpers/useApi";
import styles from "./styles";

const Messages = () => {
  const classes = styles();

  const { data: messages, isLoading: messagesLoading } = query({
    key: "messages",
    path: "data",
    condition: true,
  });

  if (messagesLoading) {
    return (
      <Typography className={classes.title}>Messages are loading...</Typography>
    );
  }

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>
        Bienvenue dans la messagerie
      </Typography>
      {messages?.map((message) => (
        <MessageLine key={message.id} message={message} />
      ))}
      <MessageForm />
    </Box>
  );
};

export default Messages;
