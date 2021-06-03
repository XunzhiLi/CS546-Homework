const geo = require("./geometry")
const ut = require("./utilities")

// function volumeOfRectangularPrism:
try {
    console.log(geo.volumeOfRectangularPrism(2,1,3))
} catch (error) {
    console.log(error)
   
}

try {
    console.log(geo.volumeOfRectangularPrism(1,1))
} catch (error) {
    console.log(error)
   
}

try {
    console.log(geo.volumeOfRectangularPrism(-1,1,3))
} catch (error) {
    console.log(error)
   
}

try {
    console.log(geo.volumeOfRectangularPrism(1,2,3))
} catch (error) {
    console.log(error)
   
}

try {
    console.log(geo.volumeOfRectangularPrism('lee',1,3))
} catch (error) {
    console.log(error)
   
}



console.log('-------------------------------------------------')



// function surfaceAreaOfRectangularPrism

try {
    console.log(geo.surfaceAreaOfRectangularPrism(2,1,3))
} catch (error) {
    console.log(error)
   
}

try {
    console.log(geo.surfaceAreaOfRectangularPrism(1,1))
} catch (error) {
    console.log(error)
   
}

try {
    console.log(geo.surfaceAreaOfRectangularPrism(-1,1,3))
} catch (error) {
    console.log(error)
   
}

try {
    console.log(geo.surfaceAreaOfRectangularPrism(1,2,3))
} catch (error) {
    console.log(error)
   
}

try {
    console.log(geo.surfaceAreaOfRectangularPrism('lee',1,3))
} catch (error) {
    console.log(error)
   
}

console.log('-------------------------------------------------')

//function volumeOfSphere


try {
    console.log(geo.volumeOfSphere(0))
} catch (error) {
    console.log(error)  
}

try {
    console.log(geo.volumeOfSphere())
} catch (error) {
    console.log(error)  
}

try {
    console.log(geo.volumeOfSphere('lee'))
} catch (error) {
    console.log(error)  
}

try {
    console.log(geo.volumeOfSphere(2))
} catch (error) {
    console.log(error)  
}

try {
    console.log(geo.volumeOfSphere(1))
} catch (error) {
    console.log(error)  
}

console.log('-------------------------------------------------')

//function surfaceAreaOfSphere

try {
    console.log(geo.surfaceAreaOfSphere(0))
} catch (error) {
    console.log(error)  
}

try {
    console.log(geo.surfaceAreaOfSphere())
} catch (error) {
    console.log(error)  
}

try {
    console.log(geo.surfaceAreaOfSphere('lee'))
} catch (error) {
    console.log(error)  
}

try {
    console.log(geo.surfaceAreaOfSphere(2))
} catch (error) {
    console.log(error)  
}

try {
    console.log(geo.surfaceAreaOfSphere(1))
} catch (error) {
    console.log(error)  
}


console.log('-------------------------------------------------')
// function deepEquality

const first = {a: 2, b: 3}
const second = {a: 2, b: 4}
const third = {a: 2, b: 3}
const fourth ={a: 1,b :2,c: 3}
const fifth ='lee'
const sixth = {}
const seventh ={a :2,c:2}
try {
    console.log(ut.deepEquality(first,fifth))
} catch (error) {
    console.log(error) 
}

try {
    console.log(ut.deepEquality(first,second))
} catch (error) {
    console.log(error) 
}

try {
    console.log(ut.deepEquality(first,third))
} catch (error) {
    console.log(error) 
}

try {
    console.log(ut.deepEquality(first,fourth))
} catch (error) {
    console.log(error) 
}

try {
    console.log(ut.deepEquality(first,sixth))
} catch (error) {
    console.log(error)  
}

try {
    console.log(ut.deepEquality(first,seventh))
} catch (error) {
    console.log(error)  
}


console.log('-------------------------------------------------')
// function uniqueElements

try {
    console.log(ut.uniqueElements([1,2,3,4,2,3,4]))
} catch (error) {
    console.log(error)
}

try {
    console.log(ut.uniqueElements('lee'))
} catch (error) {
    console.log(error)
}

try {
    console.log(ut.uniqueElements({name:'lee'}))
} catch (error) {
    console.log(error)
}
try {
    console.log(ut.uniqueElements())
} catch (error) {
    console.log(error)
}

try {
    console.log(ut.uniqueElements(['a','b','c','c']))
} catch (error) {
    console.log(error)
}

console.log('-------------------------------------------------')
// function countOfEachCharacterInString

try {
    console.log(ut.countOfEachCharacterInString('Hello, the pie is in the oven'))
} catch (error) {
    console.log(error)
}

try {
    console.log(ut.countOfEachCharacterInString())
} catch (error) {
    console.log(error)
}

try {
    console.log(ut.countOfEachCharacterInString(123))
} catch (error) {
    console.log(error)
}

try {
    console.log(ut.countOfEachCharacterInString('i feel so good today'))
} catch (error) {
    console.log(error)
}

try {
    console.log(ut.countOfEachCharacterInString('hello world'))
} catch (error) {
    console.log(error)
}





