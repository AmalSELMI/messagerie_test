import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Box, Typography } from "@material-ui/core";
import styles from "./styles";

const MessageLine = ({ message = {} }) => {
  const classes = styles();
  const boxClass = clsx(
    classes.messages,
    classes.medium,
    message.private ? classes.private : classes.public
  );
  return (
    <Box className={clsx(classes.root)} display="flex" flexDirection="row">
      <Box className={boxClass}>
        <Typography align="center" color="textSecondary">
          {message.body}
        </Typography>
      </Box>
      <Box className={boxClass}>
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
