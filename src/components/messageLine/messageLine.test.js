import * as React from "react";
import { mount } from "enzyme";
import { ThemeProvider } from "@material-ui/styles";
import MessageLine from ".";
import theme from "../../theme";

describe("MessageLine", () => {
  let wrapper;
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
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <MessageLine id={messages[0].id} message={messages[0]} />
        <MessageLine id={messages[1].id} message={messages[1]} />
      </ThemeProvider>
    );
  });

  it("Should render MessageLine with the right props", () => {
    expect(wrapper.text()).toEqual("what's uppublicheyprivé");
  });
});
