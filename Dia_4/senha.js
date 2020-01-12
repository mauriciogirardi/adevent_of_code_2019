// entrada de quebra-cabeça é 264793-803935.

let arr = []

for(let i = 264793; i <= 803935; i++) {

    let s = i.toString()
    let a = [...s]
    let cont = {}

    a.map((x) => cont[x] = (cont[x] || 0) + 1)

    if(s.length == 6 && Object.entries(cont).find(tuple => tuple[1] == 2) &&  s == a.sort().join``) {
        arr.push(s)
    }
}
console.log(arr.length)