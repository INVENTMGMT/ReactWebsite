// This is a function that will create Query strings that will pass to to the backend to call backend
// functions. These must be done by passing a query string via a post request to the backend endpoint.

import axios from 'axios'
const endPoint = 'http://localhost:3000/dev/graphql';

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
function backendFunction(functionName, params) {

    // Handling the issue if params is not passed in
    params = params || 0

    // Creating the start of the query Object, which will be passed into the backend via a post request
    let queryObj = {"query": null}
    let queryStr = "{ "

    // Creating the string at the end of each GraphQL Post request, which makes GraphQL happy
    var strEnd = ` {id name price quantity} }`

    // Switch statement to determine what function the query string will be for
    switch(String(functionName)) {
        case "addItem":
        {
            // Formatting params
            let { id, name, price, quantity} = params
            if (!id || !name || !price || !quantity) {
                throw "Incorrectly formatted params"
            }

            // Adding function header to query string & formatting it properly
            queryStr += `addItem(id:"${id}", name:"${name}", price:${price}, quantity:${quantity})`
            queryStr += strEnd
            
            // console.log(queryStr)
            break;
        }

        case "getAllItems":
        {   
            // Adding function header to query string & formatting it properly
            queryStr += `getAllItems `
            queryStr += strEnd
            
            // console.log(queryStr)
            break;
        }

        case "getByName":
        {
            // Formatting params
            let { name } = params
            if (!name) {
                throw "Incorrectly formatted params"
            }

            // Adding function header to query string & formatting it properly
            queryStr += `getByName(name:"${name}")`
            queryStr += strEnd
            
            // console.log(queryStr)
            break;
        }

        case "getByID":
        {
            // Formatting params
            let { id } = params
            if (!id) {
                throw "Incorrectly formatted params"
            }

            // Adding function header to query string & formatting it properly
            queryStr += `getByID(id:"${id}")`
            queryStr += strEnd
            
            // console.log(queryStr)
            break;
        }
            
        case "deleteItem":
        {
            // Formatting params
            let { id } = params
            if (!id) {
                throw "Incorrectly formatted params"
            }

            // Adding function header to query string & formatting it properly
            queryStr += `deleteItem(id:"${id}")`
            queryStr += strEnd
            
            // console.log(queryStr)
            break;
        }

        default:
            throw `Function Name "${functionName}" not found - Make sure function name is spelled correctly.`
    }

    // Finalizing Query Object with the Query String as its data, which specifies the 
    queryObj["query"] = queryStr
    
    // Making POST request with query string
    return axios.post(endPoint, queryObj)
        .then((response) => {
            // console.log(`\nThis is response.data: ${response.data}\n and: ${JSON.stringify(response.data)}\n\n `)
            return response.data["data"][functionName]
        }, (error) => {
            console.error(error)
        })
        .then((respObject) => {
            // console.log(respObject);
            // console.log(`This is resp: ${respObject}\n and: ${JSON.stringify(respObject)}`)
            return respObject;
        })
        .catch((error) => {
            console.error(error)
        })

    
}

var testParams;
var i;
// for ( i=0; i < 5; i++)
// {
//     testParams = { id: `succ${i}`, name:`succ${i}`, price:3, quantity:4 }
//     let resp = await backendFunction("getAllItems", testParams)
//     console.log(resp)
// }

i=3
testParams = { id: `succ${i}`, name:`succ${i}`, price:3, quantity:4 }
let resp = await backendFunction("getByName", testParams)
console.log(resp)

export default backendFunction


