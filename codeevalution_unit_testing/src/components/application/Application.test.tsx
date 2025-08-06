import { render, screen } from "@testing-library/react"
import Application from "./Form"


describe("Application run succesfully", () => {
    test.skip("Applicaton Test 1 ran well", () => {
        render(<Application />);
        const heading1 = screen.getByRole("heading", {
            // name: "Job application",
            level:1,
        })
        expect(heading1).toBeInTheDocument();
        const heading2 = screen.getByRole("heading", {
            // name: "Heading2",
            level:2,
        })
        expect(heading2).toBeInTheDocument();

        const nameElement = screen.getByRole("textbox", {    //getByRole
            name: "Name",
        });
        expect(nameElement).toBeInTheDocument();

        const nameElement2 = screen.getByLabelText('Name');
        expect(nameElement2).toBeInTheDocument();

        const nameElement3 = screen.getByPlaceholderText("FullName"); //getByPlaceholderText
        expect(nameElement3).toBeInTheDocument();

        const nameElement4 = screen.getByDisplayValue("nanda");
        expect(nameElement4).toBeInTheDocument();

        // normal getByText Method
        const paragraphElement = screen.getByText("All fields are mandatory");  //getByText
        expect(paragraphElement).toBeInTheDocument();

        //substring Match
        const paragraphSubstringMatch = screen.getByText(/world/);
        expect(paragraphSubstringMatch).toBeInTheDocument();
         //substring match ignore caseSensitive
        const paragraphSubstringig = screen.getByText(/Hello World/i);
        expect(paragraphSubstringig).toBeInTheDocument();

        const imageElement = screen.getByAltText("a person with laptop");
        expect(imageElement).toBeInTheDocument();

        const closeElement = screen.getByTitle("close");
        expect(closeElement).toBeInTheDocument();

        const customElement = screen.getByTestId("custom-div");
        expect(customElement).toBeInTheDocument();

        const bioElement = screen.getByRole("textbox", {
            name: "Bio",
        })
        expect(bioElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole("combobox");
        expect(jobLocationElement).toBeInTheDocument();

        const submitButtonElement = screen.getByRole("button");
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions, jest/valid-expect
        expect(submitButtonElement).toBeInTheDocument;

        const termElement2 = screen.getByLabelText("I agree to the terms and conditions");
        expect(termElement2).toBeInTheDocument();

    })
})