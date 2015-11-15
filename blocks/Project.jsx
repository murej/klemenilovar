const {Link} = ReactRouter;

Project = React.createClass({

  propTypes: {
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    size: React.PropTypes.number,
    position: React.PropTypes.object,
    items: React.PropTypes.array.isRequired
  },

  getDefaultProps() {
    return {
      size: 30,
      position: {
        x: 50,
        y: 50
      }
    };
  },

  getItems() {
    var items = this.props.items.map(function(item) {
      return (
        <Item
          key={item._id}
          caption={item.caption}
          image={item.url}
        />
      )
    });

    return items;
  },

  render() {
    return (
      <div className="Project">
        <h2>{this.props.title}</h2>
        <p><span ref="Project-CurrentItem">1</span>/{this.props.items.length}</p>
        <ul className="Project-Items">
          {this.getItems()}
        </ul>
      </div>
    );
  }
});
