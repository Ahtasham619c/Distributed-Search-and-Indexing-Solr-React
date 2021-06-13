**DISTRIBUTED INDEXING AND SEARCHING**


SOLR INSTALLATION:
1. Go to https://solr.apache.org/downloads.html and download the latest Binary release
  (zip file). Download the zip file using any Mirror link. 
2. Extract the release to the C:/ drive. Copy the path of the bin directory
   (should be similar to C:\solr-8.8.2\bin depending on the version of Solr).
3. Open a command prompt window and navigate to the bin directory using the path copied previously, using the cd command. 
4. Start Solr using the solr start command. 
5. Enter localhost:8983 in the browser URL bar and it’ll redirect to the Solr Admin Dashboard if everything works correctly.


CREATING SHARDS AND INDEXING:
1. Start Solr in SolrCloud mode using the solr start -c command.
2. Launch a new Solr server and connect it to the embedded Zookeeper instance using the
   solr start -c -p 8984 -z localhost:9983 command.
3. Navigate to the Solr Admin Panel by entering localhost:8983 in the browser URL bar.
4. Create a new collection by going to Collections->Add collection. Choose a name for the collection.
   Set the config set to _default, numShards to 2, replicationFactor to 2 and maxShards to 2.
5. Go to Documents, set the Document Type to CSV, copy and paste the data from the netflix_titles.csv file
   (located inside the dataset folder), then click on Submit Document.


CONFIGURING FRONT-END:
1. Download and install node.js from https://nodejs.org/en/download/
2. cd into the solr-frontend folder and run the npm install command.
3. Run the application using the npm start command which will launch the application in a new browser window. 
4. The application will now be up and running. Search for any movie/series by selecting the search field (Title, Year,Director) 
   and entering the respective keywords.

