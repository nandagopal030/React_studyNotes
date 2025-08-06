import { Greet } from "./Greet"
import { render, screen } from "@testing-library/react";

describe("Greet", () => {
    test.skip("name passes successfully", () => {
        render(<Greet />);
        const elementName = screen.getByText("Hello");
        expect(elementName).toBeInTheDocument();
    });
    describe("nested", () => {
        test.skip("name passed with props successfully", () => {
            render(<Greet name="Nanda" />);
            const elementName = screen.getByText("Hello Nanda");
            expect(elementName).toBeInTheDocument();
        });
    })
})