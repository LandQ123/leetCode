function sub(str) {
    let arr = []
    let match = (str) => {
        let j = str.match(/^(1+|0+)/)[0]
        console.log(j)
    }
    match()
}
let string = "110001011"
sub(string)
