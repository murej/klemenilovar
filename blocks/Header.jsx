const {Link} = ReactRouter;

Header = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    Meteor.subscribe("pages");
    Meteor.subscribe("collections");

    return {
      pages: Pages.find({ published: true }, {fields: {name: 1, slug: 1}}).fetch(),
      collections: Collections.find({}).fetch()
    }
  },

  getPages() {
    var pages = this.data.pages.map(function(page) {
      return (
        <li key={page._id}>
          <Link to={`/${page.slug}`}>{page.name}</Link>
        </li>
      )
    });

    return pages;
  },

  getCollections() {
    var collections = this.data.collections.map(function(collection) {
      return (
        <li key={collection._id}>
          <Link to={`/collection/${collection.slug}`}>{collection.name}</Link>
        </li>
      );
    });

    return collections;
  },

  render() {
    var loaded = !_.isEmpty(this.data.pages);

    if(!loaded) {
      return false;
    }

    return (
      <div className="Header">
        <ul>
          {this.getPages()}
          {this.getCollections()}
        </ul>
      </div>
    );
  }
});
