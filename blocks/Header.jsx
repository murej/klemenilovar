const {
  Router,
  Route,
  Link
} = ReactRouter;

Header = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    Meteor.subscribe("pages");
    Meteor.subscribe("collections");

    return {
      pages: Pages.find({ published: true }, {fields: {name: 1, slug: 1}}).fetch(),
      collections: Collections.find({ published: true }, {fields: {name: 1, slug: 1}}).fetch()
    }
  },

  getPages() {
    var pages = !_.isEmpty(this.data.pages) && this.data.pages.map(function(page) {

      return (
        <li key={page._id} className="Header-NavigationElement">
          <Link to={`/${page.slug}`} activeStyle={{ textDecoration: "line-through" }}>{page.name}</Link>
        </li>
      )
    });

    return pages;
  },

  getCollections() {
    var collections = !_.isEmpty(this.data.collections) && this.data.collections.map(function(collection) {
      return (
        <li key={collection._id} className="Header-NavigationElement">
          <Link to={`/collection/${collection.slug}`} activeStyle={{ textDecoration: "line-through" }}>{collection.name}</Link>
        </li>
      );
    });

    return collections;
  },

  // generateLogo() {
  //   var letters = ["k","l","e","m","e","n","i","l","o","v","a","r"];
  //   var logo = letters.map(function(letter, index) {
  //
  //     var angle = "0deg";
  //     var breakTag;
  //
  //     if(index > 0 && index < 7) {
  //       angle = (15 * (index+1)) + "deg";
  //     }
  //     else if(index >= 7 && index < 12 ) {
  //       angle = (90 - (15 * (index+1))) + "deg";
  //       breakTag = <br />;
  //     }
  //
  //     var style = {
  //       webkitTransform: "rotate("+angle+")",
  //       mozTransform: "rotate("+angle+")",
  //       transform: "rotate("+angle+")"
  //     }
  //     return <span key={index} style={style}>{breakTag}{letter}</span>;
  //   });
  //
  //   return logo;
  // },

  render() {
    var loaded = !_.isEmpty(this.data.pages);

    if(!loaded) {
      return false;
    }

    return (
      <div className="Header">
        <ul className="Header-Navigation">
          {this.getPages()}
          {this.getCollections()}
        </ul>
        <div className="Header-Logo">
          <Link to="/">
            <span className="Header-Logo-1">k</span>
            <span className="Header-Logo-2">l</span>
            <span className="Header-Logo-3">e</span>
            <span className="Header-Logo-4">m</span>
            <span className="Header-Logo-5">e</span>
            <span className="Header-Logo-6">n</span>
            <span className="Header-Logo-7">i</span><br />
            <span className="Header-Logo-8 under">l</span><br />
            <span className="Header-Logo-9 under">o</span><br />
            <span className="Header-Logo-10 under">v</span><br />
            <span className="Header-Logo-11 under">a</span><br />
            <span className="Header-Logo-12 under">r</span>
          </Link>
        </div>
      </div>
    );
  }
});
