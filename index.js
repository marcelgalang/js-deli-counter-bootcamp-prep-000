
var array = ['Joe']
console.log(array)
function addPerson(katzDeli, b) {
  katzDeli = [...katzDeli, b]
  console.log("Welcome, " + b + ". You are number " + (katzDeli.length) + " in line.")
  console.log(katzDeli)
}

addPerson(array, 'Fred')

var katzDeli = [];
function takeANumber(katzDeliLine, b) {
  katzDeliLine = [...katzDeliLine, b]
  var length = katzDeliLine.length
  return "Welcome, " + b + ". You are number " + length + " in line."
}
