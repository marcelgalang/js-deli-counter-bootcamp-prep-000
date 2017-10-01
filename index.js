
var array = ['Joe']
console.log(array)
function addPerson(a, b) {
  a = [...a, b]
  console.log("Welcome, " + b + ". You are number " + (a.length) + " in line.")
  console.log(a)
}

addPerson(array, 'Fred')

var katzDeli = [];
function takeANumber(katzDeli, b) {
  katzDeli = [...katzDeli, b]
  var length = katzDeli.length
  return "Welcome, " + b + ". You are number " + length + " in line."
}
