const {
  Router,
  Route
} = ReactRouter;

Routes = React.createClass({
  getInitialState: function() {
    return {};
  },

  getRoutes: function() {
    return (
      <Route component={App}>
        <Route path="/" component={HomePage} />
        <Route path="collection/:collectionId" component={CollectionPage} />
        <Route path="about-contact" component={AboutContactPage} />
        <Route path="*" component={NotFoundPage}/>
      </Route>
    );
  },

  render: function() {
    return (
      <Router history={ReactRouter.history.useQueries(ReactRouter.history.createHistory)()}>
        {this.getRoutes()}
      </Router>
    );
  }
});
