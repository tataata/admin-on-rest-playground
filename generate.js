// Generating fake data for tasks
//
// Video tutorial https://egghead.io/lessons/javascript-creating-demo-apis-with-json-server
//
// Keep in mind to run the json-server on alternative port, if default 3000 already in use
//  json-server --watch db.json --port 3004
//  * https://www.npmjs.com/package/json-server#add-custom-routes

module.exports = function(){
  var faker = require('faker');
  var _ = require('lodash');
  return {
    posts: _.times(12, function (n) {
      return {
        id: n,
        date: faker.date.past(),
        recepient: faker.name.findName(),
        address: faker.fake('{{address.streetAddress}}, {{address.city}}, {{address.country}}, {{address.zipCode}}'),
        status: faker.helpers.randomize(["created", "ongoing", "delivered"]),
        retailer: faker.company.companyName(),
      }
    })
  }
}