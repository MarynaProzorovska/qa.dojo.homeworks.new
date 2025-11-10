// Цикли

// for

for(let i = 0; i < 100; i++){
    console.log(i)
}

// while

let i = 0
while(i<10) {
    console.log(i)
    i++
}


// do while

do {
console.log(i)
i++
} while( i>10)


    // forEach
[1, 2, 3, 4, 5, 6, 7].forEach((value, index, arr) => {

})

//forOf
const arr = [1, 2, 3, 4, 5, 6, 7]
for(const el of arr) {
    console.log(el)
}


//forIn
obj = {
    a: 10
}
for(const key in obj) 



   // in array: index [0,1,2...]
   // in objectL key

   // for array -> for of
   // for object -> for in
//    const obj = {
//     name: "Borys"
//    }

//    const arr = ["Borys"]

//    console.log(obj.name)
//    console.log(arr[0])


//    const me = {
//     name: "Maryna",
//     'age': 28,
//     married: true,
//     diplomas: ["German philologist", "QA"],
//     study: () => console.log("I`m studying"),
//     getMyDiploma: () => student.diplomas
//    }


//shallow copy
-копіювання з використанням rest оператора
const catDog = {...cat}

//deep copy - через бібліотеку lodash
