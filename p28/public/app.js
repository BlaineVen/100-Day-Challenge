
function myFunction1(){
    document.getElementById('something').innerHTML=Date()
}

function myFunction2(){
    let element = document.body;
    element.classList.toggle('dark-mode');
}

function myFunction3(){
    document.getElementById('');
}


function getRndInteger(min, max) {
   return Math.floor(Math.random() * 100)
}

app.get('/', (req, res) =>{
    res.send('This does nothing');
});
