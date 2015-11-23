Pages = new Mongo.Collection("pages");
Projects = new Mongo.Collection("projects");
Collections = new Mongo.Collection("collections");

Images = new FS.Collection("images", {
  stores: [new FS.Store.GridFS("images", {})]
});
