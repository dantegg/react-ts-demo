function sayHello(person: string) {
    return 'Hello,' + person
}

let user = 'Dante'

console.log(sayHello(user))

function alertName(): void {
    alert('My Name is Dante')
}

let unusable: void = undefined

let myFavoriteNumber: any = 'seven'
myFavoriteNumber = 8

let list: number[] = [1, 2, 3]
let list1: Array<number> = [1, 2, 3]

enum Color {Red, Green, Blue}
let c: Color = Color.Green

let someValue: any = "this is a string"
let strLength: number = (someValue as string).length

interface LabelledValue {
    label: string
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label)
}

let myObj = {size: 10, label: 'Size 10 Object'}
printLabel(myObj)

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSqure = {color: 'white', area: 100}
    if (config.color) {
        newSqure.color = config.color
    }

    if (config.width) {
        newSqure.area = config.width * config.width
    }

    return newSqure
}

let mySquare = createSquare({color: 'black'})

let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a
// ro[0] = 12 //error

interface SearchFunc {
    (source: string, subString: string): boolean
}

let mySearch: SearchFunc
mySearch = function(source: string, subString: string) {
    let result = source.search(subString)
    return result > -1
}

mySearch = function(src: string, sub: string) {
    let result = src.search(sub)
    return result > -1
}

mySearch = function(src, sub) {
    let result = src.search(sub)
    return result > -1
}