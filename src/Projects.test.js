import React from "react";
import {screen, render, fireEvent} from '@testing-library/react';
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

test("correctly navigate to Mapify website", ()=>{
    const button = screen.getByTitle('Go to the website', { selector: 'a[href="https://my-mapify.vercel.app/"]'});
    fireEvent.click(button); 
    expect(window.location.href).toBe("https://my-mapify.vercel.app/");
})

// should open a project description when a project is clicked
// should navigate to the project website when "Go to the website" is clicked
// Assert that the window location has changed to the project's website URL