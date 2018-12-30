const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
const app = express();
const port = 80;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send({isSuccessful:true});
});

app.post('/api/signin', (req, res) => {
    console.log(req.body);
    if(req.body && req.body.username=='landpy' && req.body.password=='fewbox'){
        res.send({isSuccessful:true, isValid:true});
    }
    else{
        res.send({isSuccessful:true, isValid:false, errorMessage:'Forbidden You don not have permission to access.', errorCode:403});
    }
});

app.listen(port, () => console.log(`App listening on port ${port}!`));