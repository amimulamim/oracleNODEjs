var express = require('express')
var app = express()
const port = 3000

var fs=require('fs');

var data=fs.readFileSync('words.json');
word=JSON.parse(data);
console.log(word);





var server = app.listen(port,lis);

function lis () {
  console.log(`Example app listening on port ${port}`);
}
app.use(express.static('website'));
app.get('/add/:wr/:sc',addwrd);
function addwrd(reque,res){
    var dt=reque.params;
    var wir=dt.wr;
    var scr=dt.sc;
    word[wir]=scr;

    var data=JSON.stringify(word,null,2);
    fs.writeFile('words.json',data,finished);

    function finished(){
        console.log("all set ... ");
    }

    var rep={
        msg:"thaks"
    };

    res.send(rep);
}
function sendf(requ,resp){

    var dt=requ.params;
    resp.send("I love"+dt.flower+" flow");

}
app.get('/all',sen);
function sen(req,res){
    res.send(word);
}
app.get('/fr', (req, res) => {
  res.send('Hello World!')
})


