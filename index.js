function takeANumber (katzDeliLine, person) {
  katzDeliLine.push(person)
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}.`
}
