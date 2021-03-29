import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Box, Typography } from "@material-ui/core";
import styles from "./styles";

const MessageLine = ({ message = {} }) => {
  const classes = styles();

  return (
    <Box
      className={clsx(classes.root)}
      display="flex"
      flexDirection="row"
      id={message.id}
    >
      <Box
        className={
          message.private
            ? clsx(classes.messages, classes.medium, classes.private)
            : clsx(classes.messages, classes.medium, classes.public)
        }
      >
        <Typography align="center" color="textSecondary">
          {message.body}
        </Typography>
      </Box>
      <Box
        className={
          message.private
            ? clsx(classes.messages, classes.medium, classes.private)
            : clsx(classes.messages, classes.medium, classes.public)
        }
      >
        <Typography align="center" color="textSecondary">
          {message.private ? "privé" : "public"}
        </Typography>
      </Box>
    </Box>
  );
};

MessageLine.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    private: PropTypes.bool.isRequired,
  }).isRequired,
};

MessageLine.defaultProps = {};

export default MessageLine;
