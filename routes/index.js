var express = require('express');
var router = express.Router();


const courses = [
  {id:1, name:'course1'},
  {id:2, name:'course2'},
  {id:3, name:'course3'}
];

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/test', (req, res, next) => {
  res.send('This is my add router');
});

// Replace function to => 
// Test Restful API
router.get('/api/courses/:id', (req, res) => {
  let course = courses.find(
    courses => courses.id === parseInt(req.params.id)
      );
  if (!course) {
    res.status(404).send('The course with the given ID was not found');
    return ;
  }
  res.send(course);
});

// example: http://localhost:3000/api/posts/2018/5
router.get('/api/posts/:year/:month',(req, res) => {
  res.send(req.params);
});

// example: http://localhost:3000/api/posts?sortBy=name
router.get('/api/posts',(req, res) => {
  res.send(req.query);
});


module.exports = router;
