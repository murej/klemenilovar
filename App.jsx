// App component - represents the whole app
App = React.createClass({

  getInitialState() {
    return {
      // hideCompleted: false
    }
  },

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    let query = {};

    return {
      projects: Projects.find(query, {sort: {createdAt: -1}}).fetch(),
      items: Items.find(query, {sort: {createdAt: -1}}).fetch()
    }
  },

  render() {
    return (
      <div className="container">
        <header>
           <form className="new-task" onSubmit={this.handleSubmit} >
             <input
               type="text"
               ref="textInput"
               placeholder="Type to add new tasks" />
           </form>
        </header>
      </div>
    );
  }
});
