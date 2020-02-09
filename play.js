const fetchData=()=>{
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Done');
        }, 2000);
    })
    return promise;
}


setTimeout(()=>{
    fetchData()
    .then(text=>{
        console.log(text);
        return fetchData();
    })
    .then(text=>{
        console.log('Another '+text);
    })
}, 2000);





// console.log("Hello");
// // let name = "Global";
// const person = {
//     name: "Local",
//     age: 20,
//     greet(){
//         console.log("test for name " +this.name);
//     }
// };
// // console.log("Hello");
// // person.greet();

// const hobbies = ['Sports', 'Cooking']
// console.log(hobbies.map(hobby=>"Hobbies: "+hobby));
// console.log(hobbies);
// // for (let hobby of hobbies){
// //     console.log(hobby)
// // }
// //destructuring
// let {name, age} = person;

// let [hobby1, hobby2] = hobbies


// console.log(name, age)

// console.log(hobby1, hobby2)
