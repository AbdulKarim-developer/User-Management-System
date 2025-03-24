const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const helmet = require('helmet');
const winston = require('winston');

const connectDB = require('./server/database/connection')

const app = express()

dotenv.config()
const port = process.env.PORT || 3000

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
      new winston.transports.Console(),  // Logs to console
      new winston.transports.File({ filename: 'security.log' })  // Logs to file
  ]
});

//log requests
app.use(morgan('tiny'))

//mongodb.connection
connectDB();


//parse requests to body-parser
app.use(bodyParser.urlencoded({extended:true}))

// Secure app with Helmet
app.use(helmet());

//set view engine
app.set("view engine","ejs")
//app.set("views",path.resolve(__dirname,'views/'))

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))



//load routers
app.use('/',require('./server/routes/router'))

app.listen(port, () => {
  logger.info(`Server started on http://localhost:${port}`);
  console.log(`Example app listening at http://localhost:${port}`);
})
















