import React from 'react';

const IndividualPortfolioPage = (props) => {
    return (
    <div>
       This page if for the item with id of {props.match.params.id}
    </div>
    );
};

export default IndividualPortfolioPage;