const express = require('express');
const app = express();

const port = process.env.PORT || 8081;

app.use('/', require('./routes'));

app.listen(port, function () {
    console.log(`Listening on ${port}`);
});
