import backendFunction from './backendFunction.js';
import assert from "assert"

/*Testing Suite
 * I could not figure out how to correctly integrate a testing suite with promises, so i used native Promise-chaining to correctly test the backendFunction
*/

console.log("Test suite running...")


console.log("Creating objects...")

let params = {id:"id1", name:"object1", price:1, quantity:1}
backendFunction("addItem", params)
.then((resp) => {
    console.log("Created Item 1.")
    params = {id:"id2", name:"object2", price:2, quantity:2}
    return backendFunction("addItem", params)
})
.then((resp) => {
    console.log("Created Item 2.")
    params = {id:"id3", name:"object3", price:3, quantity:3}
    return backendFunction("addItem", params)
})
.then((resp) => {
    console.log("Created Item 3.")

    // Test 1 - getByName
    params = {name:"object2"}
    return backendFunction("getByName", params)
})
.then((resp) => {
    assert(resp[0]["id"] == "id2", "Test 1 failed.")
    assert(resp[0]["name"] == "object2", "Test 1 failed.")
    console.log("Test 1 Pass.")

    // Test 2 - getByName
    params = {name:"asbfjkasbf"}
    return backendFunction("getByName", params)
})
.then((resp) => {
    assert(resp[0] == undefined, "Test 2 failed.")
    assert(resp[0] == [][0], "Test 2 failed.")
    console.log("Test 2 Pass.")

    // Test 3 - getByID
    params = {id:"id3"}
    return backendFunction("getByID", params)
})
.then((resp) => {
    assert(resp["id"] == "id3", "Test 3 failed.")
    assert(resp["name"] == "object3", "Test 3 failed.")
    console.log("Test 3 Pass.")

    // Test 4 - getByID
    params = {id:"iasmndkas"}
    return backendFunction("getByID", params)
})
.then((resp) => {
    assert(resp == undefined, "Test 4 failed.")
    assert(resp == [][0], "Test 4 failed.")
    console.log("Test 4 Pass.")

    // Test 5 - getAllItems
    params = {}
    return backendFunction("getAllItems", params)
})
.then((resp) => {
    assert((resp.length) >= 3, "Test 5 failed.")
    console.log("Test 5 Pass.")

    // Deleting Items.
    params = {id:"id1"}
    return backendFunction("deleteItem", params)
})
.then((resp) => {
    console.log("Deleted Item 1.")

    params = {id:"id2"}
    return backendFunction("deleteItem", params)
})
.then((resp) => {
    console.log("Deleted item 2.")

    params = {id:"id3"}
    return backendFunction("deleteItem", params)
})
.then((resp) => {
    console.log("Deleted Item 3.")

    console.log("Finished with testing suite.")
})
.catch((error) => {
    console.error(error)
})

