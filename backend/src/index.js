const express  = require('express');
const app      = express();
const mongoose = require('mongoose');
const routes   = require('./routes')
const cors     = require('cors');

mongoose.connect('mongodb+srv://jonatan:1020304050@cluster0-rqvo1.mongodb.net/dev_app?retryWrites=true&w=majority',{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

app.use(cors())
app.use(express.json());
app.use(routes)



app.listen(333);

