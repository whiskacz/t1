import UserForm from "./UserForm";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
//import user from '@testing-library/user-event'

test("it shows 2-inputs and 1-button", () => {
    render(<UserForm />);

    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();


})