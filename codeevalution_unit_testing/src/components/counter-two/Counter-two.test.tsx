import { CounterTwo } from "./Counter-two";
import { render, screen } from "@testing-library/react"
import user from "@testing-library/user-event";

describe("CounterTwo", () => {
    test("renders correctly", () => {
        render(<CounterTwo count={0} />);
        const textElement = screen.getByText("Counter Two");
        expect(textElement).toBeInTheDocument();
    });
    test("handlers are called", async () => {
        user.setup()
        //Mock functions
        const incrementHandler = jest.fn();
        const decrementHandler = jest.fn();
        render(<CounterTwo
            count={0}
            handleIncrement={incrementHandler}
            handleDecrement={decrementHandler}
        />
        )
        const decrementBtn = screen.getByRole("button", { name: 'Decrement' });
        const incrementBtn = screen.getByRole("button", { name: 'Increment' })
        await user.click(incrementBtn);
        await user.click(decrementBtn);
        expect(incrementHandler).toHaveBeenCalledTimes(1);
        expect(decrementHandler).toHaveBeenCalledTimes(1);
    });

})