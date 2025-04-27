const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add users
 *  @method GET /add-user
 */
route.get('/add-user', services.add_user)

/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get('/update-user', services.update_user)


// API
route.post('/api/users', controller.create);
route.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    if (username !== 'admin' || password !== 'password') {
      logger.warn(`Failed login attempt from IP: ${req.ip}`);
      return res.status(401).send('Invalid credentials');
    }
  
    res.send('Login successful');
  });  
  const apiAuth = require('../middleware/auth');

route.post('/api/users', apiAuth, controller.create);
route.get('/api/users', apiAuth, controller.find);
route.put('/api/users/:id', apiAuth, controller.update);
route.delete('/api/users/:id', apiAuth, controller.delete);

route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);


module.exports = route
