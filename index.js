const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.post('/', (req, res) => {
    let Hnum = new Number(req.body.Height);
    let Wnum = new Number (req.body.Weight);

    let result = parseFloat (Wnum / ((Hnum/100) * (Hnum/100)));
    result = result.toFixed(2);

    if (result < 18.4) {
        res.send(`Your BMI is ${result} You are Undeweight`);
    }else if (result >= 18.5 && result <= 24.9) {
        res.send(`Your BMI is ${result} You are Normal`);
    }else if (result >= 25.0 && result <= 39.9) {
        res.send(`Your BMI is ${result} You are Overweight`);
    }else if (result > 39.9) {
        res.send(`Your BMI is ${result} You are Obese`);
    }
});

app.listen(8080,() =>{
    console.log("Server is connected")
})