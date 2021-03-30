import * as React from "react";
// import renderer from "react-test-renderer";
// import { mount, shallow } from "enzyme";
import { createMount } from "@material-ui/core/test-utils";
import { ThemeProvider } from "@material-ui/styles";
import { QueryClient, QueryClientProvider } from "react-query";
import MessageForm from ".";
import theme from "../../theme";

const queryClient = new QueryClient();

describe("MessageForm", () => {
  let wrapper;
  let onChange;
  let handleMessageChange;
  let handleSubmit;
  let setMessages;
  let mount;
  const messages = [];

  beforeEach(() => {
    onChange = jest.fn();
    handleMessageChange = jest.fn();
    handleSubmit = jest.fn();
    mount = createMount();
    setMessages = jest.fn();

    wrapper = mount(
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <MessageForm
            messages={messages}
            setMessages={setMessages}
            handleInputChange={onChange}
            handleMessageChange={handleMessageChange}
            handleSubmit={handleSubmit}
          />
        </ThemeProvider>
      </QueryClientProvider>
    );
  });

  afterEach(() => {
    mount.cleanUp();
  });

  it("should generate default input onChange", () => {
    expect(wrapper.find("textarea").at(0).text()).toEqual("");
  });

  it("should generate the default placeholder", () => {
    wrapper.find("textarea").at(0).simulate("change");
    expect(wrapper.find("textarea").at(0).props().placeholder).toEqual(
      "Votre message..."
    );
  });

  it("should update the text on input change", () => {
    wrapper
      .find("textarea")
      .at(0)
      .simulate("change", {
        target: {
          id: "message",
          value: "Hello",
        },
      });
    expect(wrapper.find("textarea").at(0).props().value).toEqual("Hello");
  });

  it("should have the default value for messageConfidentiality", () => {
    expect(
      wrapper.find("input[name='messageConfidentiality']").at(0).props().value
    ).toEqual("Public");

    expect(
      wrapper.find("input[name='messageConfidentiality']").at(0).props().checked
    ).toBeTruthy();
  });

  it("When i change the message confidentiality into private, it should be selected as private", () => {
    wrapper
      .find("input[name='messageConfidentiality']")
      .at(1)
      .simulate("change");

    expect(
      wrapper.find("input[name='messageConfidentiality']").at(1).props().checked
    ).toBeTruthy();
  });
});
