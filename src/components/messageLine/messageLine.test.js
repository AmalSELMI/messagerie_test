import * as React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMount } from "@material-ui/core/test-utils";
import MessageLine from ".";
import theme from "../../theme";

describe("MessageLine", () => {
  let mount;
  const message = {
    id: "01",
    body: "what's up",
    private: false,
  };

  beforeEach(() => {
    mount = createMount();
  });
  afterEach(() => {
    mount.cleanUp();
  });

  it("renders MessageLine component with expected props", () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <MessageLine message={message} />
      </ThemeProvider>
    );

    expect(wrapper).toHaveLength(1);
    expect(wrapper.text()).toEqual("what's uppublic");
  });
});
