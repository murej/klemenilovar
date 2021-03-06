Meteor.publish("pages", function () {
  return Pages.find();
});
Meteor.publish("projects", function () {
  return Projects.find();
});
Meteor.publish("collections", function () {
  return Collections.find();
});
Meteor.publish("images", function () {
  return Images.find();
});

Images.allow({
  'insert': function () {
    return true;
  },
  'update': function () {
    return true;
  },
  'download': function() {
    return true;
  }
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

Houston.methods(Projects, {
  "Publish": function (item) {

    var slug = slugify(item.name);
    var createdAt = moment(item.createdAt).isValid() ? item.createdAt : new Date();

    var query = Projects.find({ slug: slug, published: true });
    var slugExists =
      (query.count() !== 0) &&
      !_.some(query.fetch(), function(el){ return el._id === item._id });

    if(slugExists) {
      throw new Error("Project with that name already exists. Please choose another one.");
    }
    else {
      Projects.update(item._id, {$set: {
        createdAt: createdAt,
        slug: slug,
        published: true
      }});

      var collectionNames = item.collections.split(", ").forEach(function(collectionName) {
        var slug = slugify(collectionName);
        var collectionExists = Collections.find({slug: slug}).count() !== 0;
        if(!collectionExists) {
          Collections.insert({
            name: collectionName,
            slug: slug,
            published: true
          });
        }
      });

      return item.name + " project has been published.";
    }
  },
  "Unpublish": function (item) {
    Projects.update(item._id, {$set: {
      published: false
    }});

    Meteor.call("checkCollectionPopulation", item);

    return item.name + " project unpublished.";
  }
});

Meteor.methods({
  checkCollectionPopulation(item) {
    var collections = item.collections && item.collections.split(", ");
    var hasCollections = !_.isEmpty(collections);
    var collectionNames = hasCollections && collections.forEach(function(collectionName) {
      var slug = slugify(collectionName);
      var hasProjects = Projects.find({published: true, collections: collectionName}).count() !== 0;
      if(!hasProjects) {
        Collections.remove({
          slug: slug
        });
      }
    });
  }
});
