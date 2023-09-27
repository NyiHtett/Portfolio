import React from "react";
import {screen, render, fireEvent, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Projects from "./components/Projects";

test("all project texts render successfully", ()=>{
    render(<Projects/>)
    expect(screen.getByText("Mapify")).toBeInTheDocument(); 
    expect(screen.getByText("Header & Slider")).toBeInTheDocument(); 
    expect(screen.getByText("Good Work Hub Flutter app")).toBeInTheDocument();
    expect(screen.getByText("Calculator")).toBeInTheDocument();
    expect(screen.getByText("Artistic Flowfolio")).toBeInTheDocument();
    expect(screen.getByText("BookShareHub")).toBeInTheDocument();
    expect(screen.getByText("AgeVerifyPro")).toBeInTheDocument();
});

test("correctly navigate to Mapify website", async () => {
    render(<Projects />);
    const button = screen.getByText('Go to the website', { selector: 'a[href="https://my-mapify.vercel.app/"]' });
  
    // Trigger the click event on the button
    fireEvent.click(button);
  
    // Use async/await with waitFor to wait for the navigation to complete
    await waitFor(() => {
      expect(window.location.href).toBe("https://my-mapify.vercel.app/");
    });
  });
// should open a project description when a project is clicked
// should navigate to the project website when "Go to the website" is clicked
// Assert that the window location has changed to the project's website URL