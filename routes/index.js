const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index.html', {
    title : 'My First Nunjucks Page',
    items : [
      { name : 'he' },
      { name : 'lo' },
      { name : 'item #3' },
      { name : 'item #4' },
    ]
  });
});

module.exports = router;
