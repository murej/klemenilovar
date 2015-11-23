const {Link} = ReactRouter;

Item = React.createClass({

  propTypes: {
    caption: React.PropTypes.string,
    image: React.PropTypes.string.isRequired,
    size: React.PropTypes.number.isRequired,
    position: React.PropTypes.object.isRequired,
    isVisible: React.PropTypes.bool.isRequired
  },

  render() {

    var dimensions = {
      width: this.props.size+"vmin",
      height: this.props.size+"vmin",
      left: this.props.position.x+"vw",
      top: this.props.position.y+"vh"
    };

    var image = {
      backgroundImage: "url("+this.props.image+")"
    }

    return this.props.isVisible &&
      <li className="Item" style={dimensions} onClick={this.props.onNextItem}>
        <div className="Item-Content" style={image}></div>
      </li>
  }
});
