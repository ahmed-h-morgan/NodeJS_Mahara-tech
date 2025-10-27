const EventEmitter = require("events")
const myEventObj = new EventEmitter()
// myEventObj.on("eventName", function)    - add a listener to event eventName using on and a function to be executed when this event fired which is 
//      called event handler
// myEventObj.emit("eventName")     - fire / trigger the event by calling emit with the eventName
// we can add more than one en

myEventObj.on("lookup", () => {
    console.log("lookup event fired")
});

myEventObj.emit("lookup")
