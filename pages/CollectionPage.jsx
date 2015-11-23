CollectionPage = React.createClass({

  getInitialState() {
    return {
      // hideCompleted: false
    }
  },

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  getMeteorData() {
    Meteor.subscribe("collections");
    Meteor.subscribe("projects");

    var slug = this.props.params.slug;
    var collection = Collections.findOne({ slug: slug });
    var hasProjects = !_.isEmpty(collection);

    if(hasProjects) {
      var projects = Projects.find({ published: true, collections: collection.name }).fetch();
      projects.forEach(function(project) {
        project.items = project.items.split(", ").map(function(itemId) {
        });
      });
    }

    return {
      collection: collection,
      projects: projects
    }
  },

  getProjects() {
    var projects = this.data.projects.map(function(project) {
      return (
        <Project
          key={project._id}
          title={project.name}
          description={project.description}
          size={project.size}
          position={{x: project.position.x, y: project.position.y}}
          items={project.items}
        />
      )
    });

    return projects;
  },

  render() {

    var loaded = !_.isEmpty(this.data.projects);

    if(!loaded) {
      return false;
    }

    return (
      <div className="CollectionPage">
        {this.getProjects()}
      </div>
    );
  }
});
