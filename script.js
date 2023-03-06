/*ლექცია #4 - დავალება #1 - დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს n ცალ რიცხვს (n > 2). 
ფუნქციამ უნდა დააბრუნოს 2 ელემენტიანი მასივი, სადაც პირველი ელემენტია პირველი და მეორე პარამეტრის ჯამი,
ხოლო მეორე ელემენტი - მესამე ელემენტიდან დაწყებული ყველა დანარჩენის ნამრავლი.*/

let first = [];
let sum = 0;
const myFunction = (n1,n2,...numbers) => {
    sum = n1+n2

    let second = 1 ;
    for(let i of numbers){
        second *= i
    }
    first.push(sum , second)
    return first
}
console.log("დავალება #1: ", myFunction(5,5,5,5,10))



/*ლექცია #4 - დავალება #2 - დავუშვათ გვინდა ობიექტიდან წავიკითხოთ შემდეგი ველი:
user.banks[2].address.city. დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს user ობიექტს
და დააბრუნებს city-ს. გამოიყენეთ desctructuring-ი. თუ ასეთი ველი არ არსებობს  უდნა დაბრუნდეს undefined.*/


let user = {
    banks: [{ 
        address: { 
            city: "Tbilisi" ,
        }
    },
        { address: { 
            city: "Kutaisi" ,
        }
    },
        { address: { 
            city: "Batumi" , 
        }
    }]
} 

function obj(user) {
    const { banks: [,,{address:{city}}]} = user
    return city
}

console.log("დავალება #2: ", obj(user))




/*ლექცია #4 - დავალება #3 - დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს ნებისმიერ ობიექტს და დააბრუნებს 
იგივე მნივშნელობების მქონე ახალ (განსხვავებულ) ობიექტს. გაითვალისწინე, რომ თუ ობიექტში კიდევ სხვა ობიექტებია
იმათი ასლებიც უნდა შეიქმნას. გამოიყენეთ (...) ოპერატორი.*/ 

let user1 = {
    name: "Kakhi",
    lastName: "Varazashvili",
    age: 36,
    city: "Tbilisi"
}

let newObject = () => { 

let user2 = {
    country: "Georgia",
    address: "Saburtalo",
    ...user1
}
return user2
}
console.log("დავალება #3: ",  newObject(user1))