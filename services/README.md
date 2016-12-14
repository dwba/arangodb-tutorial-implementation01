This partial implementation of a tutorial illustrating CRUD on an ArangoDB
database attempts to refactor the original tutorial to take into account later
releases of both ArangoDB and the javascript driver (arangojs) used.

The tutorial was found on the website of Ashish Patel at
http://www.ashishblog.com/getting-start-with-arangodb-using-nodejs-nodejs-ejs-arangojs/ 
with code provided at https://www.arangodb.com/download/ .

The code provided in the tutorial was based on ArangoDB version 2.8 whereas I have used
version 3.0.10 and the arangojs driver I used was 5.0.3 compared to an earlier version 
used by Ashis.

I created a simple arangoDB database with a couple of documents in a users collection, 
as described in the tutorial.

All the documents in the single collection are accessible in the arangosh ArangoDB shell 
but I have been unable to get the simplest list of users to display in the view of the 
tutorial GUI - probably javascript misunderstanding with promises or use of the cursor!

