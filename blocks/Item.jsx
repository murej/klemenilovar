const {Link} = ReactRouter;

Item = React.createClass({

  propTypes: {
    caption: React.PropTypes.string,
    image: React.PropTypes.string.isRequired
  },

  render() {
    return (
      <li className="Item">
        <img src={this.props.image} alt={this.props.caption} />
      </li>
    );
  }
});
