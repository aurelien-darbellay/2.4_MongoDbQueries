use('Sprint2Task4');
db.restaurants.find();
db.restaurants.find({},{_id: 1, borough: 1, cuisine: 1, restaurant_id: 1})
db.restaurants.find({},{_id: 0, borough: 1, cuisine: 1, restaurant_id: 1})
db.restaurants.find({},{_id: 0, borough: 1, address: {zipcode:1}, restaurant_id: 1})

