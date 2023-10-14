import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../components/About.js";

describe("about page is rendered", ()=> {
    it("computer science included", async ()=>{
        render(<About/>);
        await new Promise(resolve => setTimeout(resolve, 1000));
        const present = screen.getByText("Ohlone College");
        expect(present).toBeInTheDocument();
    })
})