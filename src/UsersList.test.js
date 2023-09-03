import { render, screen, within } from '@testing-library/react';
import UsersList from './UsersList';
import '@testing-library/jest-dom'

function renderComponent () { 
    const users = [
    {
        name: 'pawko',
        email: 'pawko@pawko.pl'
    },
    {
        name: 'marta',
        email: 'marta@marta.pl'
    }
]
render(<UsersList users={users} />)

return {
    users
}

}

test ('render one row per user', () => {

    const users = [
        {
            name: 'pawko',
            email: 'pawko@pawko.pl'
        },
        {
            name: 'marta',
            email: 'marta@marta.pl'
        }
    ]

    const { container } = render(<UsersList users={users} />)

    // 1st option
    const rows = within(screen.getByTestId('users')).getAllByRole('row');
    expect(rows).toHaveLength(2)

    //2nd option
    //eslint-disable-next-line
    const rows2 = container.querySelectorAll('tbody tr');
    expect(rows2).toHaveLength(2)
})

test ('render the email and name of each user', () => {
    
const { users } = renderComponent()

    for (let user of users) {
        const name = screen.getByRole('cell', {name: user.name})
        const email = screen.getByRole('cell', {name: user.email})

        expect(name).toBeInTheDocument()
        expect(email).toBeInTheDocument()
    }


})