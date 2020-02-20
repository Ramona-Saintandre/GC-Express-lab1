// require the Express module
const express = require("express");
const express = require("cart-items");

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
    return res.json(cartList);
    Response.send([]);
    res.status(200);//ok
});

// get json response of :id
// status code 200 
cartItems.get('/cart-items', function (req,res){
    return res.json(cart-items,id);
    Response.send()
    res.status(200); //ok
});

// add a cart item to the array using the json body of the request , generate a unique id for that ID
// status code 201 
cartItems.post()
return
Response.send
res.status(201)

// update the cart in the that has a unique id, use JSON body as the new porperty
//  response 200

cartItems.put()
return
Response.send
res.status(200)

// remove the item from the array that has the given id 
// response status 204
cartItems.delete()
return
Response
res.status(204)


// update the cart item in the array that has the given id , use the JSON body 

// run the server
cartItems.listen(port, () => console.log(`Listening on port: ${port}.`));
console.log('Listening at http://localhost:8080/cart-items...');

