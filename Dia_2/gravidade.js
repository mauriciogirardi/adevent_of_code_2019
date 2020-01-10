let numInput = require('./input')()

function intCode(arr, index = 0) {

    let opcode = arr[index]
   
    if(opcode === 99) {
        return arr[0]
    }

    let num1Index = arr[index + 1]
    let num2Index = arr[index + 2]
    let respIndex = arr[index + 3]

    if(opcode === 1) {

        arr[respIndex] = arr[num1Index] + arr[num2Index]
        index += 4
        return intCode(arr, index)

    }

    if(opcode === 2) {

        arr[respIndex] = arr[num1Index] * arr[num2Index]
        index += 4
        return intCode(arr, index)

    }

}

function setIntCode(input, pos1, pos2) {

    inputCopy = input.map(x => x)
    inputCopy[1] = pos1
    inputCopy[2] = pos2
    return intCode(inputCopy)

}


console.log(setIntCode(numInput, 12, 2))

for(let i = 0; i < 100; i++) {

    for(let j = 0; j < 100; j++) {
        if(setIntCode(numInput, i, j) == 19690720) {
            console.log(100 * i + j)
        }
    }

}



