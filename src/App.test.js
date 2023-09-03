import { render, screen } from '@testing-library/react';
import App from './App';
import user from '@testing-library/user-event';

test('receiver a new user and show on the list', async () => {
    render(<App />)

    const nameInput = screen.getByRole('textbox', {
        name : /name/i
    });

    const emailInput = screen.getByRole('textbox', {
        name: /email/i
    });

    const button = screen.getByRole('button');

    user.click(nameInput)
    user.keyboard('pawko')
    user.click(emailInput)
    user.keyboard('pawko@pawko@.pl')
    user.click(button)

    const name = screen.getByRole('cell', { name: 'pawko'});
    const email = screen.getByRole('cell', { name: 'pawko@pawko.pl'});

    expect(name).toBeInTheDocument()
    expect(email).toBeInTheDocument()
})

