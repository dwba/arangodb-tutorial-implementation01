/*
// ES2015-style
import arangojs, {Database, aql} from 'arangojs';
let db1 = arangojs(); // convenience short-hand
let db2 = new Database();
let {query, bindVars} = aql`RETURN ${Date.now()}`;

// or plain old Node-style
var arangojs = require('arangojs');
var db1 = arangojs();
var db2 = new arangojs.Database();
var aql = arangojs.aql(['RETURN ', ''], Date.now());
var query = aql.query;
var bindVars = aql.bindVars;

// Using a complex connection string with authentication
let host = process.env.ARANGODB_HOST;
let port = process.env.ARANGODB_PORT;
let database = process.env.ARANGODB_DB;
let username = process.env.ARANGODB_USERNAME;
let password = process.env.ARANGODB_PASSWORD;
let db = arangojs({
  url: `http://${username}:${password}@${host}:${port}`,
  databaseName: database

// Using a complex connection string with authentication
let host = process.env.ARANGODB_HOST;
let port = process.env.ARANGODB_PORT;
let database = process.env.ARANGODB_DB;
let username = process.env.ARANGODB_USERNAME;
let password = process.env.ARANGODB_PASSWORD;

let db = arangojs({
  url: `http://${username}:${password}@${host}:${port}`,
  databaseName: "nodeArangoWebAppDB"
});

// Using ArangoDB 2.8 compatibility mode
let db = arangojs({
  arangoVersion: 20800
});
*/

console.log("~~~ DataSvcs Entered ~~~"); 
var Database = require('arangojs');
var aqlQuery = require('arangojs').aql
//var aqlCursor = require('arangojs').cursor.all
var host = 'http://127.0.0.1:8529' //process.env.ARANGODB_HOST;
var port = 8529 //process.env.ARANGODB_PORT;
var database = process.env.ARANGODB_DB;
var username = 'root' //process.env.ARANGODB_USERNAME;
var password = 'bonar' //process.env.ARANGODB_PASSWORD;
console.log('DataSvcs - let host = ' + host);
console.log('DataSvcs - let port = ' + port);

var db = new Database({url:'http://&{username}:$password:@${host}:${port}',
                databaseName: 'nodeAWAdb'
                });

console.log('DataSvcs - created db instance for nodeAWAdb: ');
console.log('waiting for valid UI response - Home or Users')
console.log('...')

module.exports = 
{ 
 getAllUsers : function() 
    {
        console.log('DataSvcs - entered getAllUsers Function');
        return db.query(aqlQuery`FOR doc IN User RETURN doc`)
            .then ( console.log("1st promise then - returning cursor all from aqlQuery"),
                (cursor) => {return cursor}
                  )
                /*.then(
                      function (cursor) 
                      {
                        return cursor.all();
                      }
                     )*/
            .catch(
                    function (error) {
                        console.log("Error raised in getAllUsers");
                        console.log(error);  // error object with message
                    }
                  )
            .then( console.log("Final then in db.query - log doc"), 
                    (doc) => { console.log(doc) }
                );
    },
    addUser : function(user)
	{
		return db.database('nodeArangoWebAppDB')
			      .then(function (mydb) {return mydb.collection('User');})    
			      .then(function (collection) { return collection.save(user);});
	}	 
}