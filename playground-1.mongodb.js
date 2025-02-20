use('Sprint2Task4');
db.restaurants.find();
db.restaurants.find({},{_id: 1, borough: 1, cuisine: 1, restaurant_id: 1})
db.restaurants.find({},{_id: 0, borough: 1, cuisine: 1, restaurant_id: 1})
db.restaurants.find({},{_id: 0, borough: 1, address: {zipcode:1}, restaurant_id: 1})
db.restaurants.find({borough:'Bronx'});
db.restaurants.find({borough:'Bronx'}).skip(5).limit(5);
db.restaurants.find({'grades.score': {$gt:90}});
db.restaurants.find({grades: { $elemMatch : {score : {$gt:80,$lt:100}}}});
db.restaurants.find({'address.coord':{$lt: -95.754168}})
db.restaurants.find({$and :[{cuisine: {$nin:['American ','American']}},{'address.coord':{$lt: -65.754168}},{'grades.score': {$gt:70}}]});
db.restaurants.find({cuisine: {$nin:['American ','American']}, 'address.coord':{$lt: -65.754168},'grades.score': {$gt:70}})

