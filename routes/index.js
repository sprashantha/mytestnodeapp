var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
    title: 'Express',
    todos : [
      { description : "Buy eggs",
        due : new Date(new Date().getTime() + 24 * 60 * 60 * 1000), // 1 day from now
        done : false
      },
      { description : "Write next blog post",
        due : new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
        done : false
      },
      { description : "Build todo list app",
        due : new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
        done : true
      },
    ]
  });
};

module.exports = router;
