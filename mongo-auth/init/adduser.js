db.createUser({user: 'geonames', pwd: 'secret', roles: [{role: 'readWrite', db: 'geonames'}]});
db.createUser({user: 'john', pwd: 'secret', roles: [{role: 'readWrite', db: 'geonames'}]});