import React, { useState, useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
import MessageLine from "../../components/messageLine";
import MessageForm from "../../components/messageForm";
import { query } from "../../helpers/useApi";
import styles from "./styles";

const Messages = () => {
  const classes = styles();
  const [messages, setMessages] = useState(null);
  const { data, isLoading: messagesLoading } = query({
    key: "messages",
    path: "data",
    condition: true,
  });

  useEffect(() => {
    if (data) {
      setMessages(data);
    }
  }, [data]);

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
      <MessageForm messages={messages} setMessages={setMessages} />
    </Box>
  );
};

export default Messages;
