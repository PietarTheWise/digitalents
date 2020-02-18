

// const area = 7.7;

// console.log(Math.floor(area));
// console.log(Math.random(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));


let template = [1, 3, 2, 5, 6]
const random = Math.random() * 10;


    
// const test = template.map(function(){ 
//     return Math.floor(random)
// });


const numbers = [1, -1, 2, 3, "Haribo", 2, 5, 6];

const filtered = numbers.filter(function(value){
    if(Number.isInteger(numbers)){
        return value;
    }
})

console.log(filtered);



// for(let i = 0; i < numbers.length; i++){
//     console.log(Number.isInteger(numbers[i]));

// }




// console.log(template);