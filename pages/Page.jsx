Page = React.createClass({

  getInitialState() {
    return {
      // hideCompleted: false
    }
  },

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Pages collection and puts them on this.data.pages
  getMeteorData() {
    Meteor.subscribe("pages");

    return {
      page: Pages.find({ slug: this.props.params.slug }).fetch()
    }
  },

  render() {
    var loaded = !_.isEmpty(this.data.page);

    if(!loaded) {
      return false;
    }
    else {
      var page = this.data.page[0];
      var title = page.name;
      var content = { __html: window.marked(page.content) };
      var style = page.style;
    }

    return (
      <div className="Page" style={ style }>
        <h1>{title}</h1>
        <div className="Page-Content" dangerouslySetInnerHTML={content}></div>
      </div>
    );
  }
});
