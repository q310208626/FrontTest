let events = require("events");
var connCreateEmitter = new events.EventEmitter();
var dataProcessEmitter = new events.EventEmitter();
var disConnectEmitter = new events.EventEmitter();

connCreateEmitter.on('connCreate',function(requestData){
    console.log('connect create successfully!');
    dataProcessEmitter.emit('dataProcess',requestData);
});

dataProcessEmitter.on('dataProcess',function(requestData){
    console.log(requestData.name);
    console.log(requestData.age);
    console.log('data process finished!');
    disConnectEmitter.emit('disConnect');
});

disConnectEmitter.on('disConnect',function(){
    console.log('disconnect request');
});

var requestData = {name:'lin',age:25};
connCreateEmitter.emit('connCreate',requestData);



