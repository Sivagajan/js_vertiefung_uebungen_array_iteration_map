console.log('Lev1_2')

let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]

let upperDrinks = getraenke.map((item) => {
    return item.toUpperCase()
})
console.log(getraenke)
console.log(upperDrinks)

console.log('Lev1_3')

let array =[18,16,80,51,47,38,95,42,68,61,
            34,51,20,17,56,31,100,6,5,30,74,
            97,28,99,91,27,73,12,92,6,27,71,
            26,15,78]

console.log(array)

let newArray = array.map((item) => {
    return item *= 2 
}).sort()

console.log(newArray)


console.log('Lev1_4')

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

let celsius = fahrenheit.map((item) =>{
    item = (item-32)/1.8000
    
    return Math.floor(item)
})

console.log(celsius)