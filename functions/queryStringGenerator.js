// This is a function that will create Query strings that will pass to to the backend to call backend
// functions. These must be done by passing a query string via a post request to the backend endpoint.

import axios from 'axios'
const endPoint = 'localhost://8000'

/*
USAGE:

    - functionName: the name of the desired function you want to call.
        Available Functions:
            
        - addItem: Function to create items and store them into backend
            Params:
                - Item: Object of the following form:
                { id: String, name: String, price: Int, quantity: Int }
            
        - getAllItems: Function that will get all items that are in the database
            Params:
                - No parameters

        - getByName: Function to search through Items via its name
            Params:
                - Name: String

        - getByID: Function to search through Items via its ID
            Params:
                - id: String

        - deleteItem: Function to delete an item with a matching ID
            Params:
                - id: String
    
    - params: Object representing the parameters required for each function. Below represents the
    contents of each parameter object depending on the desired function call. 
        - addItem Params: 
            - Item: Object of the following form:
            { id: String, name: String, price: Int, quantity: Int }
            
        - getAllItems Params:
            - No Parameters, pass {}

        - getByName Params:
            - Name: String

        - getByID Params:
            - id: String

        - deleteItem Params:
            - id: String        
*/

function queryStringGenerator(functionName, params) {

    // Handling the issue if params is not passed in
    params = params || 0

    // Creating the start of the query string, which will be passed into the backend via a post request
    let queryStr = `{ "query": "{ `

    // Creating the string at the end of each GraphQL Post request, which makes GraphQL happy
    var strEnd = ` {id name price quantity} }" }`

    // Switch statement to determine what function the query string will be for
    switch(String(functionName)) {
        case "addItem":
            // Formatting params
            let { id, name, price, quantity} = params
            if (!id || !name || !price || !quantity) {
                throw "Incorrectly formatted params"
            }

            // Adding function header to query string & formatting it properly
            queryStr += `addItem(id:"${id}", name:"${name}", price:${price}, quantity:${quantity})`
            queryStr += strEnd
            
            console.log(queryStr)
            break;

        case "getAllItems":
            // Adding function header to query string & formatting it properly
            queryStr += `addItem(id:"${id}", name:"${name}", price:${price}, quantity:${quantity})`
            queryStr += strEnd
            
            console.log(queryStr)
            break;
            
        case "getByName":
            // Formatting params
            let { id, name, price, quantity} = params
            if (!id || !name || !price || !quantity) {
                throw "Incorrectly formatted params"
            }

            // Adding function header to query string & formatting it properly
            queryStr += `addItem(id:"${id}", name:"${name}", price:${price}, quantity:${quantity})`
            queryStr += strEnd
            
            console.log(queryStr)
            break;

        case "getByID":
            // Formatting params
            let { id, name, price, quantity} = params
            if (!id || !name || !price || !quantity) {
                throw "Incorrectly formatted params"
            }

            // Adding function header to query string & formatting it properly
            queryStr += `addItem(id:"${id}", name:"${name}", price:${price}, quantity:${quantity})`
            queryStr += strEnd
            
            console.log(queryStr)
            break;
            
        case "deleteItem":
            // Formatting params
            let { id, name, price, quantity} = params
            if (!id || !name || !price || !quantity) {
                throw "Incorrectly formatted params"
            }

            // Adding function header to query string & formatting it properly
            queryStr += `addItem(id:"${id}", name:"${name}", price:${price}, quantity:${quantity})`
            queryStr += strEnd
            
            console.log(queryStr)
            break;
        
        default:
            throw "Incorrectly called queryStringGenerator(), functionName not found"
    }

    /*
    // Making POST request with query string
    let resp = null
    axios.post(endPoint, queryStr)
        .then((response) => {
            console.log(response);
            resp = response
        }, (error) => {
            console.error(error)
        })
    */
    
}

let testParams = { id: "suck", name:"food", price:3, quantity:4 }
queryStringGenerator("addItem", testParams)
