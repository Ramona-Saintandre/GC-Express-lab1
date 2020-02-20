// require the Express module
const express = require("express");
const express = require("cartItems");
const cartItems = express.Router();

// creates an instance of an Express server this is referencing the const express
const app = express();

// define the port
const port = 8080;

//convert to json
app.use (express.json());

// request 

app.use('/', __dirname,cartItems);


// Endpoints 

// get json array of all items in the cart-items
//  status code 200

cartItems.get ('/cart-items', function (req,res){
    // req is declared but never used error message, need to find out what this means 
    // https://flaviocopes.com/express-request-parameters/
    console.log(reg.body);
    return res.json(cartList);
    res.send(cartItems);
    res.status(200);//ok
});

// get json response of :id
// status code 200 
cartItems.get('/cartItems.js:id', function (req,res){
    console.log(reg.body); //data being extracted from the URL
    return res.json(cart-items,id);
    res.send("get ID for item in the cart.." + req.params.id);
    res.status(200); //ok
});

// add a cart item to the array using the json body of the request , generate a unique id for that ID
// status code 201 
cartItems.post('/cartItems.js/:id', function (req,res){
    // missing something here 
    console.log(reg.body); //data being extracted from the URL      
Res.send("Add items to the cart ..")
res.status(201);
})


// update the cart in the that has a unique id, use JSON body as the new porperty
//  response 200

cartItems.put(" '/cartItems.js/:id", function (req,res){

    console.log(req.params.id);  //URL paramaters
    res.send("Update items in the cart ..")
    res.status(200);
})


// remove the item from the array that has the given id 
// response status 204
cartItems.delete('/cartItems.js/:id', function (req,res){
    // need to do a splice here to remove items from the array, I think 
   console.log(req.params.id);  //URL parameters 
    res.send ("Delete items from the cart .. ");
    res.status(204)
})



// update the cart item in the array that has the given id , use the JSON body 

// run the server
cartItems.listen(port, () => console.log(`Listening on port: ${port}.`));
console.log('Listening at http://localhost:8080/cart-items...');

