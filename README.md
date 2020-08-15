# awokenNode
### A basic Nodejs REST API with premade user,blog post, contact forms, and game session routes and models.
## :star:  Features
 custom config, or use as-is.
 
 Free and open source.
 
 Simple and clean.

# 🚀  To get started ->

 ```sh
$ git clone https://github.com/tjcharm/awokenNode.git
```

## To run on your local machine 
 Create a dotenv file typed ".env" without quotation, in the same folder as your server.js file.

 Include a database url (I used a free mongoDB Atlas Cluster) and assign the url to DATABASE_URL like this 
DATABASE_URL=yourUrlGoesHere.

 Include a PORT variable in the same syntax as above in the dotenv file, and assign it the port you wish to listen with on your local machine.
 
 Open your awoken node project in something like visual code studio, open a terminal, and run "npm run productionServer" or 
 "npm run devServer" for it to restart the server every change you make to the projects files.

 👍   Now just send your GET,POST,DELETE,PATCH requests to http://localhost:PORT <- The port number you choose, 5000 is a good choice. 

## To Host somewhere like Heroku
follow the instructions on your hosting site.

Once finished uploading to your hosting site, If not already done. Go to your apps settings, find "config vars",
and Set them as you set your DATABASE_URL. Except for PORT, instead of a port number, enter "process.env.port".

Now your rest api should be working just as it would locally. Except with a new web address, which is provided by your hosting platform, and your server should already be running..


## Release V1.0-alpha would be the ideal release for somebody looking to implement custom authentication and authorization for use in their own REST API. Simple to understand, and easy to change to your own liking before things get a little more challenging state to modify. 

## ❌  DO NOT USE THIS VERSION FOR PRODUCTION WITH PRIVATE INFORMATION. FUTURE VERSIONS WILL PROVIDE SAFE AUTHENTICATION FOR USERS AND THIS MESSAGE WILL BE REMOVED. ❌ 
