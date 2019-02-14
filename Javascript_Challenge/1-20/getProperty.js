function getProperty(obj, key) {
    // your code here
    return obj[key]
}

var obj = {
    key: 'value'
};
var output = getProperty(obj, 'key');
console.log(output); // --> 'value'