// This is a function that will create Query strings that will pass to to the backend to call backend
// functions. These must be done by passing a query string via a post request to the backend endpoint.

import axios from 'axios'
const endPoint = 'http://localhost:3000/dev/graphql';

/*
USAGE:
    PARAMETERS:
    - functionName: the name of the desired function you want to call.
        Options:  
        - addItem: Function to create items and store them into backend
            Params:
                - Object: Object representing an Item of the following form:
                { id: String, name: String, price: Int, quantity: Int }
            Returns:
                - Object: Object representing the added item with id, name, price, and quantity values
            
        - getAllItems: Function that will get all items that are in the database
            Params:
                - No parameters
            Returns:
                - Array of objects of each item in the list

        - getByName: Function to search through Items via its name
            Params:
                - Name: String
            Returns:
                - Object: Object representing the desired Item

        - getByID: Function to search through Items via its ID
            Params:
                - id: String
            Returns:
                - Object: Object representing the desired Item

        - deleteItem: Function to delete an item with a matching ID
            Params:
                - id: String
            Returns:
                - null: This needs to be updated but it is returning null at the moment
    
    - params: Object representing the parameters required for each function. Below represents the
    contents of each parameter object depending on the desired function call. 
        - addItem Params: 
            - Object: Object representing an Item of the following form:
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
    params = params || 0;

    // Creating the start of the query Object, which will be passed into the backend via a post request
    let queryObj = {"query": null};
    let queryStr = "{ ";

    // Creating the string at the end of each GraphQL Post request, which makes GraphQL happy
    var strEnd = ` {id name price quantity} }`;

    // Switch statement to determine what function the query string will be for
    switch(String(functionName)) {
        case "addItem":
        {
            // Formatting params
            let { id, name, price, quantity} = params;
            if (!id || !name || !price || !quantity) {
                throw Error("Incorrectly formatted params - AddItem");
            }

            // Adding function header to query string & formatting it properly
            queryStr += `addItem(id:"${id}", name:"${name}", price:${price}, quantity:${quantity})`;
            queryStr += strEnd;
            
            // console.log(queryStr)
            break;
        }

        case "getAllItems":
        {   
            // Adding function header to query string & formatting it properly
            queryStr += `getAllItems `;
            queryStr += strEnd;
            
            // console.log(queryStr)
            break;
        }

        case "getByName":
        {
            // Formatting params
            let { name } = params;
            if (!name) {
                throw Error("Incorrectly formatted params - getByName");
            }

            // Adding function header to query string & formatting it properly
            queryStr += `getByName(name:"${name}")`;
            queryStr += strEnd;
            
            // console.log(queryStr)
            break;
        }

        case "getByID":
        {
            // Formatting params
            let { id } = params;
            if (!id) {
                throw Error("Incorrectly formatted params - getByID");
            }

            // Adding function header to query string & formatting it properly
            queryStr += `getByID(id:"${id}")`;
            queryStr += strEnd;
            
            // console.log(queryStr)
            break;
        }
            
        case "deleteItem":
        {
            // Formatting params
            let { id } = params;
            if (!id) {
                throw Error("Incorrectly formatted params - deleteItem");
            }

            // Adding function header to query string & formatting it properly
            queryStr += `deleteItem(id:"${id}")`;
            queryStr += strEnd;
            
            // console.log(queryStr)
            break;
        }

        default:
            throw Error(`Function Name "${functionName}" not found - Make sure function name is spelled correctly.`);
    }

    // Finalizing Query Object with the Query String as its data, which specifies the 
    queryObj["query"] = queryStr;
    
    // Making POST request with query string
    return axios.post(endPoint, queryObj)

    
}

// let resp = await backendFunction("addItem", {id: "a", name:"pep", quantity: 3, price:2})
//backendFunction("getAllItems", {id: "a", name:"jackaie", quantity: 3, price:4})
//.then(resp => console.log(resp));

export default backendFunction;


