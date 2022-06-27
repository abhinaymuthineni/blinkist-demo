import { render , screen } from "@testing-library/react";
import Icons from "./icons";
import React from 'react';

it("Check for Avatar", async()=>{
    render(<Icons source={"../../../images/add.svg"}></Icons>);
    const MuiElement = screen.getByRole(/img/i);
    expect(MuiElement).toBeInTheDocument();
})