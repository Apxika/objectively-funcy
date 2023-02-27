// Your code here.

function getFirstName(obj) {
  return obj.firstName
}

function getLastName(obj) {
  return obj.lastName
}

function getFullName(obj) {
  let fullName = obj.firstName + " " + obj.lastName
  return fullName
}

function setFirstName(obj, name) {
  obj.firstName = name
  return obj.firstName
}

function setAge(obj, age) {
  obj.age = age
  return obj.age
}

function giveBirthday(obj) {
  if (obj.age === undefined) {
    obj.age = 1
  } else {
  obj.age = obj.age+1
  }
  return obj.age
} 

function marry(obj1, obj2) {
  obj1.married = true
  obj2.married = true
  obj1.spouseName = obj2.firstName + ' ' + obj2.lastName
  obj2.spouseName = obj1.firstName + ' ' + obj1.lastName
  return obj1, obj2
}

function divorce(obj1, obj2) {
  obj1.married = false
  obj2.married = false
  obj2.spouseName = false
  obj1.spouseName = false
  delete obj2.spouseName
  delete obj1.spouseName
  return obj1, obj2
}

// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
