import React from "react";
import {Link} from 'react-router-dom';

const AddExpensePage = () => (
    <div>
        <h3>Check out the following things I've done:</h3>
        <p>
            <Link to="/portfolio/1">Portfolio 1</Link>
            <Link to="/portfolio/2">Portfolio 2</Link>
        </p>
    </div>
);

export default AddExpensePage;