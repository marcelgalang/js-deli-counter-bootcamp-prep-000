
var array = ['Joe']
console.log(array)
function addPerson(a, b) {
  a = [...a, b]
  console.log("Welcome, " + b + ". You are number " + (a.length) + " in line.")
}

addPerson(array, 'Fred')

var katzDeli = [];
function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine = [...katzDeliLine, newPerson]
  var place = katzDeliLine.length - 1
  return "Welcome, " + katzDeliLine[place] + ". You are number " + (katzDeliLine.length) + " in line."
}
