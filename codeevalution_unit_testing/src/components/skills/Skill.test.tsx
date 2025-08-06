import { logRoles, render, screen } from "@testing-library/react"
import Skill from "./Skill";

describe.skip("Skills Test", () => {
    const skills = ['html', 'css', 'js']
    test("skills list test", () => {
        render(<Skill skillName={skills} />)
        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument();
    })
    test("Skills list count testing ", () => {
        render(<Skill skillName={skills} />);
        const listElementCount = screen.getAllByRole("listitem");
        expect(listElementCount).toHaveLength(skills.length);
    })
    test("LoggedIn Button Renders", () => {
        render(<Skill skillName={skills} />)
        const logginButton = screen.getByRole('button', {
            name: 'Login'
        })
        expect(logginButton).toBeInTheDocument();
    })
    test("start learning bro button", () => {
        render(<Skill skillName={skills} />);
        const startLearningBtn = screen.queryByRole("button", {
            name: 'Start Learning bro'
        })
        expect(startLearningBtn).not.toBeInTheDocument();
    })
    test("start learning button for await check", async () => {
        const view = render(<Skill skillName={skills} />);
        logRoles(view.container);
        // screen.debug();
        const startLearningbtn = await screen.findByRole('button',
            {
                name: 'Start Learning bro',
            },
            {

                timeout: 2000,
            }
        )
        // screen.debug();
        expect(startLearningbtn).toBeInTheDocument();
    })
})