import React from "react";
import {screen, render, fireEvent} from '@testing-library/react';
import { createMemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import Certifications from "../components/Certifications";

describe("Certification component", ()=> {
    it("should open a specific website when the 'Show Credential' button is clicked", () => {
        render(<Certifications />);
        const button = screen.getByText("Show Credential");
      
        // Click the button
        fireEvent.click(button);
      
        // Assert that window.open was called with the expected URL
        expect(window.open).toHaveBeenCalledWith(
          "https://www.coursera.org/account/accomplishments/certificate/HRFTJUXSQ7RZ",
          '_blank'
        );
      });


})