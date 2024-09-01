let obj = {
    title: 'JavaScript Complex',
    monthDuration: 5
}
console.log(obj)
function objectCopy (object) {
    let newObject = JSON.parse(JSON.stringify(object))
    console.log(newObject)
}

let objCopy = objectCopy(obj)

console.log(obj === objCopy)