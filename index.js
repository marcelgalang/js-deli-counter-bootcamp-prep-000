var katzDeli = [];
function takeANumber(katzDeliLine, b) {
  katzDeliLine = [...katzDeliLine, b]
  var length = katzDeliLine.length
  return "Welcome, " + b + ". You are number " + length + " in line."
}
