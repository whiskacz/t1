import UserForm from "./UserForm";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import user from '@testing-library/user-event'

test("it shows 2-inputs and 1-button", () => {
    render(<UserForm />);

    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();


})

test( "it calls onUserAdd when the form is submitted", () => {
    const mock = jest.fn()

    // try to render component
    render (<UserForm  handleAddUser={mock} />)

    //find two inputs
    const nameInput = screen.getByRole('textbox', {
        name: /name/i,
    })
    const emailInput = screen.getByRole('textbox', {
        name: /email/i
    })


    //simulate typing inn a name
    user.click(nameInput);
    user.keyboard('pawko');

    //simulate typing in an email
    user.click(emailInput);
    user.keyboard('pawko@pawko.pl')

    //find the button 
    const button = screen.getByRole('button')

    //simulate clicking the button 
    user.click(button)

    //Assertion to make sure 'handleAddUser' gets called with email/name
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({name:'pawko', email:'pawko@pawko.pl'})

})

test('checking empty inputs', async () => {
    render(<UserForm handleAddUser={() => {}} />)

    const nameInput = screen.getByRole('textbox', { name:/name/i})
    const emailInput = screen.getByRole('textbox', { name:/email/i})
    const button = screen.getByRole('button')

    user.click(nameInput);
    user.keyboard('pawko');
    
    user.click(emailInput);
    user.keyboard('pawko@pawko.pl');

    user.click(button)

    await (expect(nameInput).toHaveValue(''));
    await (expect(emailInput).toHaveValue(""))



})