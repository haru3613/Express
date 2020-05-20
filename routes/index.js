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

// POST method
router.post('/api/courses', (req, res) => {
  let course = {
    id: courses.length + 1,  //沒有資料庫，先手動新增ID
    name: req.body.name     // 取得傳送來的name
  }
  courses.push(course); //加入課程陣列
  res.send(course);
});


module.exports = router;
