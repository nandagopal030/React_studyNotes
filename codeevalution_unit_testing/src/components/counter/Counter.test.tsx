import { render, screen } from "@testing-library/react"
import Counter from "./Counter";
import user from "@testing-library/user-event";
import { debug } from "console";
import userEvent from "@testing-library/user-event";



describe("Counter fucntion renders", () => {
    test("counter elelmets rendered", () => {
        render(<Counter />);
        const counterBtn = screen.getByRole("button", {
            name: 'Increment'
        })
        expect(counterBtn).toBeInTheDocument();
    })
    test("initial state count is 0", () => {
        render(<Counter />);
        const statevariable = screen.getByRole('heading');
        expect(statevariable).toHaveTextContent('0');
    })
    test("butt0n incrementation rendering by useState()", async () => {
        user.setup();
        render(<Counter />);
        const incrementBtn = screen.getByRole('button', {
            name: 'Increment'
        });
        await userEvent.click(incrementBtn);
        const paraElement = screen.getByRole('heading');
        expect(paraElement).toHaveTextContent('1');
    })
    test("user amount is enterd 10 and the amount is rendered and clicked set button",async () => {
        user.setup();
        render(<Counter />);
        const amountInput = screen.getByRole('textbox');
        await user.type(amountInput, '10');   //utility api for typying a input element
        expect(amountInput).toHaveValue('10');
        const setButton = screen.getByRole("button", {
            name:'set'
        })
        await user.click(setButton);
        const countHeading = screen.getByRole("heading");
        expect(countHeading).toHaveTextContent('10');
    })
    test("Elements are focused in right order",async ()=>{
        user.setup();
        render(<Counter />);

        const amountInput = screen.getByRole("textbox");
        const incrementBtn = screen.getByRole("button",{
            name:'Increment'
        })
        const setBtn = screen.getByRole("button",{
            name:'set'
        })
        await user.tab();  //convienence API 
        expect(incrementBtn).toHaveFocus();
        await user.tab();
        expect(amountInput).toHaveFocus();
        await user.tab();
        expect(setBtn).toHaveFocus();
    })
})