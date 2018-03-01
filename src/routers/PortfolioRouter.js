import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import PortfolioHeader from '../components/PortfolioHeader';
import PortfolioDashBoardPage from '../components/PortfolioDashboardPage';
import PortfolioHomePage from '../components/PortfolioHomePage';
import IndividualPortfolioPage from '../components/IndividualPortfolioPage';
import NotFoundPage from '../components/NotFoundPage';
import PortfolioContact from '../components/PortfolioContact';

const PortfolioRouter = () => (
    <BrowserRouter>
      <div>
          <PortfolioHeader/>
          <Switch>
          <Route path="/" component={PortfolioDashBoardPage} exact={true}/>
          <Route path="/portfolio" component={PortfolioHomePage} exact={true}/>
          <Route path="/portfolio/:id" component={IndividualPortfolioPage} exact={true}/>
          <Route path="/contact" component={PortfolioContact} exact={true}/>
          <Route component={NotFoundPage} />
          </Switch>
      </div>
    </BrowserRouter>
);

export default PortfolioRouter;