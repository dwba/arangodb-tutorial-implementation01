# arangodb-tutorial-implementation01
An attempt to implement part of a tutorial developed using an earlier version of Arangodb

This partial implementation of a tutorial illustrating CRUD on an ArangoDB
NoSQL database attempts to refactor the original tutorial to take into account later
releases of both ArangoDB and the javascript driver (arangojs) used.

The tutorial was found on the website of Ashish Patel at
http://www.ashishblog.com/getting-start-with-arangodb-using-nodejs-nodejs-ejs-arangojs/ 
with code provided at https://www.arangodb.com/download/ .

The code provided in the tutorial was based on ArangoDB version 2.8 whereas I have used
version 3.0.10 and the arangojs driver I used was 5.0.3 compared to an earlier version 
used by Ashish..

I created a simpleArangoDB database with a couple of documents in a User collection, 
as described in the tutorial.  It is not included in the repos because of the difficulty of 
pointing to it from the ArangoDB config files.

All the documents in the single collection are accessible in the arangosh ArangoDB shell 
but I have been unable to get the simplest list of users to display in the view of the 
tutorial GUI - probably javascript misunderstanding with promises or use of the cursor!

The code is liberally sprinkled with debug clues (Alerts for HTML and console.logs for js).

