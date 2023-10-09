import React from "react";
import {screen, render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Certifications from "../components/Certifications";

describe("Certification component", ()=> {
    it("technical support included", ()=> {
        render(<Certifications/>);
        const title1 = screen.getByText("Technical Support Fundamentals");
        expect(title1).toBeInTheDocument();

        const googleLogo = screen.getByAltText("Google Logo");
        expect(googleLogo).toBeInTheDocument(); 

        const button = screen.getByText("Show Credential");
        expect(button).toBeInTheDocument();
    })


})