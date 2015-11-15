const {Link} = ReactRouter;

Header = React.createClass({

  getInitialState() {
    return {
      // hideCompleted: false
    }
  },

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    Meteor.subscribe("pages");
    Meteor.subscribe("projects");
    Meteor.subscribe("pages");

    return {
      pages: Pages.find({ published: true }).fetch(),
      projects: Projects.find({}).fetch(),
      items: Items.find({}).fetch()
    }
  },

  render() {

    var loaded = !_.isEmpty(this.data.pages);

    var pages = loaded && this.data.pages.map(function(page) {
      return (
        <li key={page._id}>
          <Link to={`/${page.slug}`}>{page.name}</Link>
        </li>
      )
    });

    return (
      <div className="Header">
        <ul>
          {pages}
        </ul>
      </div>
    );
  }
});
