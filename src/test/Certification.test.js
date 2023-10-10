import React from "react";
import {screen, render, fireEvent} from '@testing-library/react';
import { createMemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import Certifications from "../components/Certifications";

window.open = jest.fn(); 

describe("Certification component", ()=> {
    it("should open a specific website when the 'Show Credential' button is clicked", () => {
        render(<Certifications />);
        const button = screen.getByTestId("show-credential-button-1");
      
        // Click the button
        fireEvent.click(button);
      
        console.log(window.open); 
        // Assert that window.open was called with the expected URL
        expect(window.open).toHaveBeenCalledWith(
          "https://www.coursera.org/account/accomplishments/certificate/HRFTJUXSQ7RZ",
          '_blank'
        );
      });


})