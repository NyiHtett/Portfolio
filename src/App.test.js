import React from "react";
import { screen, render} from "@testing-library/react";
import App from "./App";

test('render app component successfully', () => {
  render(
    <App/>
  );
  const homeLink = screen.getByText('Home');
  expect(homeLink).toBeInTheDocument();
});



