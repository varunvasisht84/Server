    const express = require('express');
    const app = express();
    const api = require('./api');

    app.listen(8000,
        ()=> console.log('started'));

    app.get('/person', (req, res) => {
        res.status(200).send({
            firstName: 'varun',
            email: 'varun.vasisht84@gmail.com'
        });
    });