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
