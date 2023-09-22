import React from "react";
import { screen, render, fireEvent} from "@testing-library/react";
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

test('toggle switch changes state when clicked', ()=>{
  render(<App/>);
  const toggleSwitch = screen.getByRole('checkbox');
  expect(toggleSwitch).not.toBeChecked(); 
  fireEvent.click(toggleSwitch); 
  expect(toggleSwitch).toBeChecked(); 
  fireEvent.click(toggleSwitch); 
  expect(toggleSwitch).not.toBeChecked();
});

test('LinkedIn logo renders', ()=>{
  render(<App/>);
  const LinkedInLogo = screen.getByAltText("LinkedIn Logo");
  expect(LinkedInLogo).toBeInTheDocument(); 
  expect(LinkedInLogo).toHaveAttribute('src', 'Logo.png');  //src attribute is not the same with the file
  expect(LinkedInLogo).toHaveAttribute('width', '50');
});






