// App component - represents the whole app
App = React.createClass({

  getInitialState() {
    return {
      takePicture: false
    }
  },

  checkSurpriseKey(event) {
    // if "k" pressed
    if(event.keyCode === 75) {
      this.setState({
        takePicture: true
      });
    }
  },

  render() {
    return (
      <div className="App" onKeyDown={this.checkSurpriseKey}>
        <Header />
        {this.state.takePicture && <TakePicture />}
        {this.props.children}
      </div>
    );
  },

  componentWillMount() {
    document.addEventListener("keydown", this.checkSurpriseKey, false);
  },

  componentWillUnmount() {
    document.removeEventListener("keydown", this.checkSurpriseKey, false);
  }
});
