import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
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

    // test('Loader is present when isLoading is true', () => {
    //     // Render the Contact component with isLoading set to true
    //     //const { getByTestId } = render(<Contact isLoading={true} phNumber="1234567890" />);
      
    //     // Use getByTestId to find the loader element by its data-testid attribute
    //     const loaderElement = screen.queryByTestId('loader');
      
    //     // Assert that the loader element is present in the rendered component
    //     expect(loaderElement).toBeInTheDocument();
    //   });
    

    it('renders the address finder button and the distance prompt', () =>{
        render(<Contact/>);
        const mapButton = screen.getByText("39042 donnerway fremont CA");
        expect(mapButton).toBeInTheDocument(); 
        fireEvent.click(mapButton);
        const prompt = screen.getByText("Distance: ");
        expect(prompt).toBeInTheDocument(); 
    })

    it('ending prompt is displayed', () => {
        render(<Contact/>);
        const text = screen.getByText("Click on the items to see the functions");
        expect(text).toBeInTheDocument();
    })



    
})