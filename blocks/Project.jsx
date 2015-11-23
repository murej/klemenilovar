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

  getInitialState() {
    return {
      imageIndex: 0
    }
  },

  getItems() {
    var size = this.props.size;
    var position = this.props.position;
    var showNextItem = this.showNextItem;
    var currentIndex = this.state.imageIndex;
    var items = this.props.items.map(function(item, index) {

      var isVisible = index === currentIndex;

      return (
        <Item
          key={item._id}
          caption={item.caption}
          image={item.url()}
          size={size}
          position={position}
          onNextItem={showNextItem}
          isVisible={isVisible}
        />
      )
    });

    return items;
  },

  render() {

    var sideStyle = {
      top: this.props.position.y+"vh"
    }

    return (
      <div className="Project">
        <div className="Project-Side" style={sideStyle}>
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
          <p><span ref="Project-CurrentItem">{this.state.imageIndex+1}</span>/{this.props.items.length}</p>
        </div>
        <ul className="Project-Items">
          {this.getItems()}
        </ul>
      </div>
    );
  },

  showNextItem() {
    this.setState(function(prevState, currentProps) {

      var itemLenght = this.props.items.length;
      var hasReachedEnd = prevState.imageIndex === itemLenght - 1;
      var newImageIndex = hasReachedEnd ? 0 : prevState.imageIndex + 1;

      return { imageIndex: newImageIndex };
    });
  }
});
