import {  render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import ExtendedNav from "."
import React from 'react';


it("Extended Navigation Test",async () => {
    render(<BrowserRouter> <ExtendedNav/> </BrowserRouter>);
    const ExtendedElement = screen.getByText(/Explore by category/i);
    expect(ExtendedElement).toBeInTheDocument();
})