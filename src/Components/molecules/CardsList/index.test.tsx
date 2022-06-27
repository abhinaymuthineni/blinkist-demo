import { render, screen } from "@testing-library/react"
import CardsList from "."
import React from 'react';

it("CardsList Test" ,async () => {
    render(<CardsList checkComplete={0} librarybu={true} />);
    const cardsListElement = screen.getByText(/No Books to Show/i);
    expect(cardsListElement).toBeInTheDocument();
})