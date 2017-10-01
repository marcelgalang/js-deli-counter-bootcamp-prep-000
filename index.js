
var array = ['Joe']
console.log(array)
function addPerson(a, b) {
  a = [...a, b]
  console.log(a)
}


var katzDeli = [];
function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine = [...katzDeliLine, newPerson]
  var place = katzDeliLine.length - 1
  return "Welcome, " + katzDeliLine[place] + ". You are number " + (katzDeliLine.length) + " in line."
}
