    const express = require('express');
    const app = express();
    const api = require('./api');
    const cors = require('cors');
    app.use(cors());

    app.listen(8000,
        ()=> console.log('server started'));

    app.get('/person', (req, res) => {
        res.status(200).send({
            firstName: 'varun',
            email: 'varun.vasisht84@gmail.com'
        });
    });