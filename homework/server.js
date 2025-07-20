const express = require('express') // bring in express
const app = express() // set up the server application

//Exercise 1
app.get('/greetings/:itemNumber', (req, res) => {
   res.send(`Hello there, ${req.params.itemNumber}`);
    
})

//Exercise 2
app.get('/roll/:itemNumber1', (req, res) => {
    console.log(req.params.itemNumber1)
    req.params.itemNumber1 = parseInt(req.params.itemNumber1, 10)
    if(req.params.itemNumber1 === req.params.itemNumber1){
        const random=Math.floor(Math.random() * (req.params.itemNumber1 + 1));
        res.send(`<h1>You rolled a  ${random}</h1>`);
    } else {
        res.send('You must specify a number');
    }
})
//Exercise 3
const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];
app.get('/collectibles/:index', (req, res) => {
    if(req.params.index>=collectibles.length){
    res.send('This item is not yet in stock. Check back soon!');
   }
   else{
    const item=collectibles[req.params.index];
    res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`);
   }
    
})
//Exercise 4
const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];
app.get('/shoes', (req,res)=>{
  const minPriceParam= req.query['min-price'];
  const maxPriceParam= req.query['max-price'];
  const typeParam= req.query.type;

  let results = shoes;

  if (minPriceParam !== undefined) {
    const min = Number(minPriceParam);
    if (min !== min) return res.send('min-price must be a number');
    results = results.filter(shoe => shoe.price >= min);
  }
  if (maxPriceParam !== undefined) {
    const max = Number(maxPriceParam);
    if (max !== max) return res.send('max-price must be a number');
    results = results.filter(shoe => shoe.price <= max);
  }
  if (typeParam) {
    results = results.filter(shoe => shoe.type === typeParam);
  }

  res.send(results);
});

app.listen(3000, () => {
    console.log('Everything is gravy...');
})