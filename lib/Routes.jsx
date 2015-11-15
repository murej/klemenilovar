const {
  Router,
  Route,
  Link
} = ReactRouter;

Routes = React.createClass({
  getInitialState() {
    return {};
  },

  getRoutes() {

    return (
      <Route component={App}>
        <Route path="/" component={HomePage} />
        <Route name="collection" path="/collection/:slug" component={CollectionPage} />
        <Route name="page" path="/:slug" component={Page} />
        <Route path="*" component={NotFoundPage}/>
      </Route>
    );
  },

  render() {
    return (
      <Router history={ReactRouter.history.useQueries(ReactRouter.history.createHistory)()}>
        {this.getRoutes()}
      </Router>
    );
  }
});
