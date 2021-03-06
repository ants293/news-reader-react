import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import React, { ReactElement } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ArticlesView from "../components/views/Articles/Articles.view";
import ArticleView from "../components/views/Articles/Article.view";
import NotFoundView from "../components/views/NotFound/NotFound.view";

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      classNames="slide-righttoleft"
      timeout={500}
    >
      <Switch location={location}>
        <Route exact path="/" component={ArticlesView} />
        <Route path="/article/:id" component={ArticleView} />
        <Route path="*" component={NotFoundView} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

export default function RootRouter(): ReactElement {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AnimatedSwitch />
    </BrowserRouter>
  );
}
