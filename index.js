
var array = ['Joe']
console.log(array)
function addPerson(katzDeli, b) {
  katzDeli = [...katzDeli, b]
  console.log("Welcome, " + b + ". You are number " + (katzDeli.length) + " in line.")
  console.log(katzDeli)
}

addPerson(array, 'Fred')

var katzDeli = [];
function takeANumber(katzDeli, b) {
  katzDeli = [...katzDeli, b]
  var length = katzDeli.length
  console.log(katzDeli)
  return "Welcome, " + b + ". You are number " + length + " in line."
}
