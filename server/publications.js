Meteor.publish("pages", function () {
  return Pages.find();
});
Meteor.publish("projects", function () {
  return Projects.find();
});
Meteor.publish("items", function () {
  return Items.find();
});

Houston.methods(Pages, {
  "Publish": function (item) {

    var slug = slugify(item.name);
    var createdAt = moment(item.createdAt).isValid() ? item.createdAt : new Date();

    var query = Pages.find({ slug: slug, published: true });
    var slugExists =
      (query.count() !== 0) &&
      !_.some(query.fetch(), function(el){ return el._id === item._id });

    if(slugExists) {
      throw new Error("Page with that name already exists. Please choose another one.");
    }
    else {
      Pages.update(item._id, {$set: {
        createdAt: createdAt,
        slug: slugify(item.name),
        published: true
      }});
      return item.name + " page published successfully.";
    }
  },
  "Unpublish": function (item) {
    Pages.update(item._id, {$set: {
      published: false
    }});
  }
});
