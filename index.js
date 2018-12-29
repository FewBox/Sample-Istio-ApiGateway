const express = require('express');
var cors = require('cors');
const app = express();
const port = 80;

app.use(cors());

app.get('/', (req, res)=>{
    res.send({isSuccessful:true});
});

app.post('/api/signin', (req, res) => {
    if(req.header('token')=='fewbox'){
        res.send({isSuccessful:true, isValid:true});
    }
    else{
        res.send({isSuccessful:true, isValid:false, errorMessage:'Forbidden You don not have permission to access.', errorCode:403});
    }
});

app.listen(port, () => console.log(`App listening on port ${port}!`))