import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The RestaurantCollection. It encapsulates state and variable values for stuff.
 */
class RestaurantCollection {
  constructor() {
    // The name of this collection.
    this.name = 'RestaurantCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      restaurant: String,
      tags: String,
      owner: String,
      days: String,
      times: String,
      logo: String,
      specials: String,
      menuitems: String,
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the RestaurantCollection.
 * @type {RestaurantCollection}
 */
export const Restaurant = new RestaurantCollection();