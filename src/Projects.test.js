import React from "react";
import {screen, render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Projects from "./components/Projects";

test("images all render successfully", ()=>{
    const image = screen.getByAltText("Card image cap"); 
    expect(image).toBeInTheDocument(); 
});