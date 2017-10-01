
var array = ['Joe']
console.log(array)
function addPerson(a, b) {
  a = [...a, b]
  console.log("Welcome, " + b + ". You are number " + (a.length) + " in line.")
  console.log(a)
}

addPerson(array, 'Fred')

var katzDeli = [];
function takeANumber(a, b) {
  a = [...a, b]
  return "Welcome, " + b + ". You are number " + (a.length) + " in line."
}
