const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
const winston = require('winston')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')

const connectDB = require('./server/database/connection')

const app = express()

// Secure HTTP Headers
app.use(helmet());

// Advanced CSP setup
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      "default-src": ["'self'"],
      "script-src": ["'self'", "https:"], // Allow only self and trusted sources
      "style-src": ["'self'", "https:", "'unsafe-inline'"],
      "img-src": ["'self'", "data:", "https:"],
      "font-src": ["'self'", "https:"],
      "object-src": ["'none'"],
      "upgrade-insecure-requests": [],
    },
  })
);

app.use(
  helmet.hsts({
    maxAge: 31536000, // 1 year in seconds
    includeSubDomains: true,
    preload: true
  })
);

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: 'security.log' }),
    new winston.transports.Console()
  ]
});

// Apply to all API routes
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

app.use('/api/', apiLimiter);

const corsOptions = {
  origin: ['http://localhost:3000'], // your frontend URL or trusted domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

dotenv.config()
const port = process.env.PORT || 3000

//log requests
app.use(morgan('tiny'))

//mongodb.connection
connectDB();


//parse requests to body-parser
app.use(bodyParser.urlencoded({extended:true}))

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
  console.log(`Example app listening at http://localhost:${port}`)
})
