// Define a collection to hold our tasks
Projects = new Mongo.Collection("projects");
Items = new Mongo.Collection("items");

if (Meteor.isClient) {
  // This code is executed on the client only

  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    React.render(<App />, document.getElementById("render-target"));
  });
}

if (Meteor.isClient) {

}

Meteor.methods({
  // addNote(text) {
  //   Notes.insert({
  //     text: text,
  //     createdAt: new Date()
  //   });
  // }
});
