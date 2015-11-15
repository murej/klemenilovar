HomePage = React.createClass({

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

    let query = {

    };

    return {
      page: Pages.find(query, {sort: {createdAt: -1}}).fetch(),
    }
  },

  render() {
    return (
      <div className="HomePage">
        Home Page
      </div>
    );
  }
});
