module.exports=function(app, express, tasks){

	var router=express.Router();
	
	
	//GET route is used to fetch all the tasks from mongoDB and return the tasks in JSON format to the user.
	router.get('/rest/tasks', function(req, res){
		//Query mongoDB to fetch all the results
		tasks.find(function(err, all_tasks){
			//Check if there are any errors while running query
			if(err)
				res.send(err)
			//Return the tasks fetched from mongoDB in JSON format	
			res.json(all_tasks);
		});
	});
	

	//POST route is used to create new task which is sent and send back list of all tasks,
	router.post('/rest/tasks', function(req, res){
		//Create new task with the data recieved as part of POST request
		tasks.create({
			text:req.body.text,
			done:false
		}, function(err){
		if(err)
			res.send(err);
		});	
		tasks.find(function(err, allTasks) {
                if (err)
                    res.send(err)
                res.json(allTasks);
        });
	}); 
	
	//DELETE route to remove a task with a perticular from list.
	router.delete('/rest/task/:task_id',function(req, res){
		tasks.remove({
			_id:req.params.task_id,
		},function(err, task){
			if(err)
				res.send(err);
			tasks.find(function(err, allTasks){
				if(err)
					res.send(err);
				res.json(allTasks);
			});
		})
	});
	
	//Route to display the frontend page
	router.get('*', function(req, res){
		res.sendfile('./public/index.html');	
	});
		
		
	app.use('/', router);
}