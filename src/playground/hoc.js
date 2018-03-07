import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


//Higher Order Component -> component that renders another component
// Reuse Code
// Render Hijacking
// Props manipulation
// Abstract state

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>This is private info, please don't share.</p>
            <WrappedComponent {...props} />
        </div> 
    );
};

// Returns higher order component
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {!props.isAuthenticated ? <p>Please login to see info</p> : <WrappedComponent {...props} />}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo info="This is a detail." />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} />, document.getElementById('app'));