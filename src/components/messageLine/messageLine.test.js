import * as React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { render, screen } from "@testing-library/react";
import MessageLine from ".";
import theme from "../../theme";

describe.only("MessageLine", () => {
  const messages = [
    {
      id: "01",
      body: "what's up",
      private: false,
    },
    {
      id: "02",
      body: "hey",
      private: true,
    },
  ];

  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <MessageLine id={messages[0].id} message={messages[0]} />
        <MessageLine id={messages[1].id} message={messages[1]} />
      </ThemeProvider>
    );
  });

  it("Should render MessageLine with the right props", () => {
    screen.findByText(messages[0].body);
    screen.findByText(messages[0].body);
  });
});
