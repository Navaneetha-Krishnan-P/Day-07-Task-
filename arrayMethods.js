var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
var req;
request.onload=function(){
    var req = JSON.parse(request.response)


// a) Get all the countries from Asia continent /region using Filter function

let a=req.filter((i)=>i.region=="Asia");
let b=a.map((ele)=>ele.name.common);
console.log(b)


// b) Get all the countries with a population of less than 2 lakhs using Filter function

let c=req.filter((i)=>i.population<200000)
let d=c.map((ele)=>ele.name.common)
console.log(d)


// c) Print the following details name, capital, flag, using forEach function

req.forEach((ele)=>console.log([`[Name]:${ele.name.common}, [Capital]:${ele.capital}, [Flag]:${ele.flag}`]))


// d) Print the total population of countries using reduce function

let p=req.reduce((acc,cv)=>acc+cv.population,0)
console.log(`Total Population = ${p}`)


// e) Print the country that uses US dollars as currency

let b=req.filter((ele)=>(ele.currencies && ele.currencies.USD))
let c=b.map((i)=>i.name.common)
console.log(c)
}



