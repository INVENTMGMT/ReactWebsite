// This is a function that will create Query strings that will pass to to the backend to call backend
// functions. These must be done by passing a query string via a post request to the backend endpoint.

/*
USAGE:

    functionName: the name of the desired function you want to call.
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

*/

function queryStringGenerator(functionName, params) {
    // Switch statement to determine what function the query string will be for
    switch(str(functionName)) {
        case "addItem":
            console.log("add")
            break;

        case "getAllItems":
            console.log("getAll")
            break;
            
        case "getByName":
            console.log("getName")
            break;

        case "getByID":
            console.log("getId")
            break;
            
        case "deleteItem":
            console.log("del")
            break;
        
        default:
            throw "Incorrectly called queryStringGenerator(), functionName not found"
    }
}

queryStringGenerator("getByID")