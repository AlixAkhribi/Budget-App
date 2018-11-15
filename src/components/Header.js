import React from 'React';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1> Expensify </h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense Page</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Page</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
)

export default Header