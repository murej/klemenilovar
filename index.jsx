if (Meteor.isClient) {
  // This code is executed on the client only

  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    React.render(<Routes />, document.getElementById("render-target"));
  });
}

Meteor.methods({
  // addNote(text) {
  //   Notes.insert({
  //     text: text,
  //     createdAt: new Date()
  //   });
  // }
});
