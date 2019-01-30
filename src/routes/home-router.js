const Router = require('koa-router');
const home = require('../controllers/home-controller')();

const router = new Router({
  prefix: '/home'
});

router.get('/', home.get);
router.post('/', home.create);

module.exports = router;
