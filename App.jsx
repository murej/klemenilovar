// App component - represents the whole app
App = React.createClass({
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
      </div>
    );
  }
});
