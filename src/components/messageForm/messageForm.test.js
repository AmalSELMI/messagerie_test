import * as React from "react";
import renderer from "react-test-renderer";
import { mount, shallow } from "enzyme";
import { ThemeProvider } from "@material-ui/styles";
import { QueryClient, QueryClientProvider } from "react-query";
import MessageForm from ".";
import theme from "../../theme";

const queryClient = new QueryClient();

describe("MessageForm", () => {
  let wrapper;
  let handleConfidentialityChange;
  let handleSubmit;

  beforeEach(() => {
    handleConfidentialityChange = jest.fn();
    handleSubmit = jest.fn();

    wrapper = mount(
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <MessageForm
            handleConfidentialityChange={handleConfidentialityChange}
            handleSubmit={handleSubmit}
          />
        </ThemeProvider>
      </QueryClientProvider>
    );
  });

  // it("should generate default input onChange", () => {
  //   console.log(wrapper.debug());
  //   wrapper.find("#message").at(4).simulate("change");
  //   expect(wrapper.text()).toEqual("");
  // });

  // it("should change the input value", () => {
  //   wrapper
  //     .find("#message")
  //     .at(5)
  //     .simulate("change", {
  //       target: {
  //         name: "message",
  //         value: "Hello",
  //       },
  //     });
  //   expect(wrapper.find("#message").at(5).placeholder()).toEqual("Hello");
  // });

  it("When i change the message confidentiality into private, it should be selected as private", () => {
    console.log(wrapper.debug());
    wrapper.find("#private").at(2).simulate("click");
    wrapper.find("#private").simulate("change");
    expect(wrapper.find("#private").at(2).prop("checked")).toBeTruthy();
  });

  // it("When i change the message confidentiality the handleConfidentialityChange function should be called", () => {
  //   wrapper.find("#private").at(0).simulate("click");
  //   wrapper.find("#private").simulate("change");

  //   expect(handleConfidentialityChange).toHaveBeenCalledTimes(1);
  // });

  // it("should call the handleSubmit function when clicking on the submit button", () => {
  //   wrapper.find("button").simulate("click");
  //   expect(handleSubmit).toHaveBeenCalledTimes(1);
  // });
});
