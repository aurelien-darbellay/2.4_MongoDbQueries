use('Sprint2Task4');
db.restaurants.find();
db.restaurants.find({},{borough: 1, cuisine: 1, restaurant_id: 1})
db.restaurants.find({},{_id: 0, borough: 1, cuisine: 1, restaurant_id: 1})
db.restaurants.find({},{_id: 0, borough: 1, address: {zipcode:1}, restaurant_id: 1})
db.restaurants.find({borough:'Bronx'});
db.restaurants.find({borough:'Bronx'}).limit(5);
db.restaurants.find({borough:'Bronx'}).skip(5).limit(5);
db.restaurants.find({'grades.score': {$gt:90}});
db.restaurants.find({grades: { $elemMatch : {score : {$gt:80,$lt:100}}}});
db.restaurants.find({'address.coord':{$lt: -95.754168}})
db.restaurants.find({$and :[{cuisine: {$nin:['American ','American']}},{'address.coord':{$lt: -65.754168}},{'grades.score': {$gt:70}}]});
db.restaurants.find({cuisine: {$nin:['American ','American']}, 'address.coord':{$lt: -65.754168},'grades.score': {$gt:70}});
db.restaurants.aggregate([{$match: {cuisine: {$nin:['American ','American']},borough: {$ne:'Brooklyn'},'grades.grade': 'A'}},{ $sort:{cuisine: -1}}]);
db.restaurants.find({name: /^Wil/},{_id: 0, name: 1, borough: 1,cuisine: 1, restaurant_id: 1});
db.restaurants.find({name: /ces$/},{_id: 0, name: 1, borough: 1,cuisine: 1, restaurant_id: 1});
db.restaurants.find({name: /Reg/},{_id: 0, name: 1, borough: 1,cuisine: 1, restaurant_id: 1});
db.restaurants.find({$and:[{borough:'Bronx'},{$or:[{cuisine:'American '},{cuisine: 'American'},{cuisine: 'Chinese'}]}]});
db.restaurants.find({$or:[{borough:'Staten Island'},{borough:'Queens'},{borough:'Bronx'},{borough:'Brooklyn'}]},{_id: 0, name: 1, borough: 1,cuisine: 1, restaurant_id: 1});
db.restaurants.find({borough:{$nin:['Staten Island','Queens','Bronx','Brooklyn']}},{_id: 0, name: 1, borough: 1,cuisine: 1, restaurant_id: 1});
db.restaurants.find({grades:{$not:{$elemMatch:{score:{$gt: 10}}}}},{_id: 0, name: 1, borough: 1,cuisine: 1, restaurant_id: 1});
db.restaurants.find({$or:[{$and:[{cuisine:/Fish/},{cuisine: {$nin:['American ','American','Chinese']}}]},{name: /^Wil/}]},{_id: 0, name: 1, borough: 1,cuisine: 1, restaurant_id: 1});
db.restaurants.find({grades:{$elemMatch:{grade: 'A', score: 11, date: ISODate("2014-08-11T00:00:00Z")}}},{_id: 0, name: 1, restaurant_id: 1,grades: 1});
db.restaurants.find({'grades.1.grade':'A','grades.1.score':9,'grades.1.date':ISODate("2014-08-11T00:00:00Z")},{_id: 0, name: 1, restaurant_id: 1,grades: 1});
db.restaurants.find({'address.coord.1':{$gt:42,$lte:52}},{_id: 0, name: 1, restaurant_id: 1,address: 1});
db.restaurants.find({}).sort({name: 1});
db.restaurants.find({}).sort({name: -1});
db.restaurants.aggregate([{$group: {_id: "$borough", cuisines: { $addToSet: "$cuisine" }}},{$sort:{_id:-1}},{$project: {_id: 0, borough:'$_id', cuisines:{$sortArray:{input: "$cuisines", sortBy: 1}}}}]);
db.restaurants.find({$or: [{ 'address.street': { $exists: false } },{ 'address.street': "" },{'address.street': undefined},{'address.street': null}]}, { _id: 0, address: 1 });
db.restaurants.find({'address.coord':{$type:'double'}}, {});
db.restaurants.find({grades: {$elemMatch: {score: {$mod: [7, 0]}}}}, {_id:0, restaurant_id:1, name: 1, grades:{score:1}});
db.restaurants.find({name: /mon/}, {_id:0, name: 1, borough:1, 'address.coord': 1});
db.restaurants.find({name: /^Mad/}, {_id:0, name: 1, borough:1, 'address.coord': 1,cuisine: 1});