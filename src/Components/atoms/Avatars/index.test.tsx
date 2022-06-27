import { render , screen  } from "@testing-library/react"
import Avatars from ".";
import React from 'react';

it("Check for Avatars", async()=>{
    render(<Avatars chars="S"/>);
    const MuiElement = screen.getByText(/S/i);
    expect(MuiElement).toBeInTheDocument();
})

it("Check for Avatar", async()=>{
    render(<Avatars chars="Y"/>);
    const MuiElement = screen.getByText(/Y/i);
    expect(MuiElement).toBeInTheDocument();
})

it("Check for Avatarss", async()=>{
    render(<Avatars chars="B"/>);
    const MuiElement = screen.getByText(/B/i);
    expect(MuiElement).toBeInTheDocument();
})
