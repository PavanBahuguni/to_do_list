# to_do_list
===================
to_do_list is a simple application where the user can add tasks to be done and remove tasks that are done.
It is based on MEAN(MongoDB, ExpressJS, AngularJS, nodeJS).

demo at https://mean-to-do-list.herokuapp.com/

#How to run:
1. Download and Install nodejs from https://nodejs.org/en/download/<br>

2. Clone this Project.</br>

3. Change current working directory to project directory and run the command.</br> 
      $ npm install
    <br/>This will install all the necessary modules.
    
5. Create a mongodb database and add the url in development.js. development.js should look something like this.
     <br/> {
	     <br/> "dbURL":"//dbuser:dbpassword@ds063946.mlab.com:63946/to-do-list"
  	   <br/>}<br/>
    Here i have used mlab which is a mongo as provider.
    
4. Open http://localhost:3000 to run the app.
