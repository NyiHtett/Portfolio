import React from "react";
import {screen, render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Certifications from "../components/Certifications";

describe("Certification component", ()=> {
    it("technical support included", ()=> {
        render(<Certifications/>);
        const title1 = screen.getByText("Technical Support Fundamentals");
        expect(title1).toBeInTheDocument();
    })
})