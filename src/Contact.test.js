import React from "react";
import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Contact from "./components/Contact";


describe('Contact component', () => {
    it('renders the phone number', () => {
        render(<Contact/>);
        const phoneNumberLink = screen.getByText("5103589824");
        expect(phoneNumberLink).toBeInTheDocument(); 
        expect(phoneNumberLink).toHaveAttribute('href', 'tel:5103589824');
    });

    it('renders the icloud email', ()=>{
        render(<Contact/>);
        const email = screen.getByText("nyihtet4dev@icloud.com");
        expect(email).toBeInTheDocument(); 
        expect(email).toHaveAttribute('href','mailto:nyihtet4dev@icloud.com');
    })
})