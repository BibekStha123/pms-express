const express = require('express');
const mongo = require('./config/db');

// role middlewares
const adminAuth = require('./middleware/adminAuth');
const clientAuth = require('./middleware/clientAuth');

// routes
const frontend = require('./router/frontend');
const auth = require('./router/auth');
const collateral = require('./router/authenticate/client/collateral');
const users = require('./router/authenticate/admin/users');

const app = express();

// Body parser middleware
app.use(express.json());

app.use(
    express.urlencoded({
        extended: false
    })
);

app.use('/', frontend);
app.use('/api', auth);

// client routes
app.use('/api/client/collaterals', clientAuth.isLogin, collateral);

// admin routes
app.use('/api/admin/users', adminAuth.isAdmin, users);

const port = 3000;
app.listen(port, () => {
    console.log(`Running in port: ${port}`)
})