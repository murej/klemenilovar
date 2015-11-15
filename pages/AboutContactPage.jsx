AboutContactPage = React.createClass({

  getInitialState() {
    return {
      // hideCompleted: false
    }
  },

  // This mixin makes the getMeteorData method work
  // mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks
  // getMeteorData() {
    // let query = {};
    //
    // return {
    //   projects: Projects.find(query, {sort: {createdAt: -1}}).fetch(),
    //   items: Items.find(query, {sort: {createdAt: -1}}).fetch()
    // }
  // },

  render() {
    return (
      <div className="AboutContactPage">
        About–Contact Page
      </div>
    );
  }
});
