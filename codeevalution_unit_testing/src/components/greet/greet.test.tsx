import { render, screen } from "@testing-library/react"
import { Greet } from "./Greet"

describe("Both Hellos Rendeering", () => {

    test.skip("Hello renders successfully", () => {
        render(<Greet />);
        const element = screen.getByText("Hello");
        expect(element).toBeInTheDocument();
    })
    test.skip("Hello and my name is sent as props renders successfully", () => {
        render(<Greet name="Nanda" />);
        const element = screen.getByText("Hello Nanda");
        expect(element).toBeInTheDocument();
    })
})