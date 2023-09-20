import React from "react";
import { screen, render} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from "./App";


test('render home link', () => {

  render(
    <App/>
  );

  const homeLink = screen.getByText('Home');
  expect(homeLink).toBeInTheDocument();
});

test('render project link', ()=>{
  render(
    <App/>
  );
  const projectLink = screen.getByText('Projects');
  expect(projectLink).toBeInTheDocument(); 
});

test('render about link', () => {
  render(<App/>);

  const aboutLink = screen.getByText("About");
  expect(aboutLink).toBeInTheDocument();
});

test('render certificate link', () => {
  render(<App/>);

  const certificateLink = screen.getByText("Certifications");
  expect(certificateLink).toBeInTheDocument(); 
});

test('render contact link', () => {
  render(<App/>);

  const contactLink = screen.getByText("Contact");
  expect(contactLink).toBeInTheDocument();
});








