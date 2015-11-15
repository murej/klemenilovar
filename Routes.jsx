const {
  Router,
  Route
} = ReactRouter;

Routes = React.createClass({
  getInitialState() {
    return {};
  },

  getRoutes() {
    return (
      <Route component={App}>
        <Route path="/" component={HomePage} />
        <Route path="collection/:collectionId" component={CollectionPage} />
        <Route path=":pageId" component={Page} />
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
