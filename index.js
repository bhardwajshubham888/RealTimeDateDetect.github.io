
// //////////////////////////  BY THAPA TECHNICAL CHANNNEL//////////////////


// //1----- length of the string\

// let String="SHUBHAM";
// let length=String.length;
// console.log(length);




// //2===== Escap charractor backslash 

// let name1="\nmy self 'shbham' sharma";
// let name2='\nMY SELF "SHUBHAM" SHARMA'
// let name3="\nMY SELF \"SHUBHAM\" SHARMA"
// console.log(name1+ " "+ name2+" "+ name3);




// //3-- string in the string -- seach return -1 id element is not found in thr

// stirng first string ka index dega nahi mila to -1 dega jo 
// let name4="my self is shubham sharma";
// let find=name4.search("sharma");
// console.log(find);
// let index=name4.indexOf("self");
// console.log(index);




//4------------- Extacting string part 

// let name1="my self shubham shamra";
// let returnNewString=name1.slice(3,-2);// give the value 0 to 6 yaha negative value de sakte hai yani last ke -2 char chor dega baki print 
// console.log(returnNewString);

// let name2=name1.substring(0,6); // isme negative value nahi de sakte 
// console.log(name2);



/////5-====== Replace String content

// let string="shubham shamra";
// let replacestring=string.replace('h','H'); // RETURN NEW STRING  DONT CHANGE PREV STRING
// console.log(replacestring);




/////6-====== EXTRACTING STRING CHARACTERS

// ///A== charat();
// let string="shubham";
// console.log(string.charAt([0]));

///B== charcodeat(); use uska ascii deta hai 
// let char="ABCD";
// console.log(char.charCodeAt([0]));


///C== accces [] by index property
// let string="shubham";
// console.log(string[0]);



//  D== UPPERCASE AND LOWECASE IN
//  let stirng1="shubham sharma"; 
//  console.log(stirng1.toUpperCase());
//  let stirng2="SHUBHAM SHARMA";
//  console.log(stirng2.toLocaleLowerCase());


// E== CONCATE STRING
// let fname="shubham";
// let lname="sharam"; 
// console.log(fname.concat(lname)); 

// F== CONCATE STRING
// let stirng="     shubham          ";
// let length=stirng.length;
// console.log(length);
// let newstring=stirng.trim();
// console.log(newstring+" "+newstring.length);


// / g== splipt in string (ise dekhna hoga) 
// let name="shubham";
// console.log(name);
// console.log(name.split(""));


// 7 ====================== DATE AND TIME ====================================

// let check = new Date(); // Date object
// console.log(check.toLocaleString()); // OR //  console.log(Date(). toLocaleString()); //to check the local time of india
// console.log(check.toString());// to check the global time
// console.log(Date.now());// will check the milisecond
// // print the particuler Month
// let mont=new Date(2022,1,3,20,33,10); // month 0 se start hota hai isme yani index 
// console.log(mont.toLocaleString());

// //A========== Date Method================================================
// let cuuDate=new Date();

// console.log(cuuDate.toLocaleString());
// console.log(cuuDate.getFullYear());
// console.log(cuuDate.getMonth());
// console.log(cuuDate.getDate());
// console.log(cuuDate.getDay()); // index start from zero sunday 0 ko aya  


//B========== TIME Method================================================

// let cuutTime=new Date();
// console.log(cuutTime.getHours());
// console.log(cuutTime.getMinutes());
// console.log(cuutTime.getSeconds());
// console.log(cuutTime.getMilliseconds());

//C  ==========    Sirf Time And Date   =====================================
//  let timeonly=new Date().toLocaleTimeString();
//  let dateonly=new Date().toLocaleDateString();
//  console.log(timeonly+" "+dateonly);


//D  ==========     Math. in java    =====================================
// console.log(Math.PI);
// console.log(Math.pow(2,3));
// console.log(Math.round(2.500));
// console.log(Math.sqrt(25));
// console.log(Math.floor(Math.random()*10));
// console.log(Math.max(1,2,3,4,5,6,7,8,));
// console.log(Math.min(1,2,3,4,5,6,7,8,));




// 8 ====================== DOM ====================================







// =================       HARSIT JAIN      =============================
// find the sqare root and return the squre root greter then 4

// let array=[64,25,4,49,9,121,0,36,81];
// let newarray=array.map((arrayvalue)=>{
//     return(Math.sqrt(arrayvalue));
// }).filter((newarray)=>{
//     return(newarray>6);
// })
// console.log(array);
// console.log(newarray);
// this is called chain method



// =============================================================================================
// // this is called chain method
// let array=[64,25,4,49,9,121,0,36,81,];
// let newarray=array.map((arrayvalue)=>Math.sqrt(arrayvalue)).filter((newarray)=>newarray>10);
// debugger;
// console.log(array);
// console.log(newarray);


// let array=[1,2,3,4,5,6,7,8,9,10];
// let evensum=array.map((array)=>array).filter((array)=>array%2===0).reduce((accumulator,currvalue)=>accumulator+currvalue);
// console.log(evensum);

// let oddsum=array.map((array)=>array).filter((array)=>array%2!==0).reduce((accumulator,currvalue)=>accumulator+currvalue);
// console.log(oddsum);



// ==========================================================================================


// index of method in array to find the index of element

// let array=["A","B","C","D","E","F"];

// let lastindex=array.indexOf("F");// indox of AGR ELEMENT nahi present hai to -1 dega nahi to us element ka index dega

// if(lastindex!=-1){
//     array.splice(lastindex,0,"changevalue");
//     console.log(array);
// }
// else{
//     console.log(" not found");
//     console.log(array);
// }
// // let newarray=array.splice(lastindex,0,"G","H","I","J");
// // console.log(array);
// // console.log(newarray);// given thr blanck array
// infinite bhi hota hai jo pura  delt karne ke liye use kar sakte hai

// ================================================================================


// 1-splice  method in array for insert value
// let list1=["shubha","mala","suraj"];
// console.log(list1);
// list1.splice(2,0,"vijay","satay","nitin");
// console.log(list1);

// let list2=["shubha","mala","suraj","vijay","satay","nitin"];
// console.log(list2);
// list2.splice(3,1);
// console.log(list2);

// ===============================================================================

// // 1-fill  method in array for insert value

// let A=["shubha","mala","suraj"];// mala converte into vijay
// A.fill("vijay",1,2);
// console.log(A);


// =======================================================================

// // evey method in array vale return karega
// let product=[
//     {prod:"vivo",price:6000},
//     {prod:"mi",price:5000},
//     {prod:"tqb",price:12000},
//     {prod:"laptop",price:20000},
//     {prod:"washiingmachine",price:1500},
//     {prod:"phon",price:6000}
// ];

// let price=product.every((product)=>{
//     return(product.price<100000);
// })
// console.log(price);


// ============================================================

// find the method in array

// let user=[
//             {userid:1,producat:"sunny",price:3000},
//             {userid:2,producat:"shubham",price:100},
//             {userid:3,producat:"suraj",price:800},
//             {userid:4,producat:"mala",price:500},
//             {userid:5,producat:"mohit",price:20000},
//         ];

// let value=user.find((x)=>{
//     return(x.userid===2);
// })
//     console.log(value);
// // =============================================================================

// // sort method java script mai strinf samajh ke sort karta hai or capitical latter ka ascii kam hai
// let array=[11,33,44,5,67,1,2,3];

// array.sort((a,b)=>{
//     return a-b;
// });
// console.log(array);

// let flipkart=[
//         {producat:"laptio",price:3000},
//         {producat:"mobile",price:100},
//         {producat:"tablet",price:800},
//         {producat:"tablet",price:500},
//         {producat:"tablet",price:20000},
//         {producat:"tablet",price:6000},
//         {producat:"tablet",price:1000},
//         {producat:"tablet",price:9000},
//         {producat:"tablet",price:4000},
//     ];
//     flipkart.sort((a,b)=>b.price-a.price);
//     console.log(flipkart);

// let arrayString=["boy","cat","apple","fish","Apple","man"];
// arrayString.sort();
// console.log(arrayString);


// ===========================================================================

// reduce method  in array

// let flipkart=[
//     {producat:"mobile",price:10000},
//     {producat:"tablet",price:20000},
//     {producat:"laptio",price:30000}
// ];

// let sumofproduct=flipkart.reduce((prevalue,currvalue)=>{
//     return(prevalue+currvalue.price);
// },0);
// console.log("total price="+sumofproduct);


// ==================================================================

// // use of filter in array method it will return ture and false

// let array=[1,2,3,4,5,6,7,8,9,10];

// // print all the even number and odd  number in diffrent array
// let evenNumber=array.filter((array)=>{
// return(array%2==0);
// })
// console.log(evenNumber)


// let oddNumber=array.filter((array)=>{
//     return(array%2!=0);
// })
// console.log(oddNumber);


// ============================================================================

// map  method in array it will return the value

// let array=[1,2,3,4,5];
// let newarray=array.map((array)=>{
//     return(array*array);
// })
// console.log(newarray);


// let onj=[
//     {name:"shubham",age:24},
//     {name:"suraj",age:29},
//     {name:"mala",age:59}
// ];


// let username=onj.map((onj)=>{
// return(onj.name);
// });
// console.log(username);

// let userage=onj.map((onj)=>{
// return(onj.age);
// })
// console.log(userage);

// ======================================================================


// // important array function 1-foreach loop

// let array=[1,2,3,4,5];

// array.forEach(function(array,index){
// console.log(" At index "+index+"value is "+ array);
// });

// const obj=[{name:"shubham",age:24},
// {name:"suraj",age:29},
// {name:"mala",age:59}
// ];

// obj.forEach((obj)=>{
// console.log(obj.name+" ");
// console.log(obj.age+" ");
// })

// for (const ele of obj) {
//     console.log(ele);
// }

// ===========         sets in Java script         =======================
// let array=[1,1,2,3,4,5,6,7];
// let createset=new Set(array);
// console.log(createset);

// // add element in set 
// createset.add(99);
// createset.add(11);
// createset.add('shubham');
// createset.add(array);
// console.log(createset);
// let Ele_Present=createset.has(11);// thid will check ele present or not 
// console.log(Ele_Present);

// // find the length of the set .length is present for set 
// let length =0;
// for(let ele of createset){
//     console.log(ele);
// }
// console.log(length);


// ===========  MAP data Structure in java         =============

// let createmap=new Map();
// // this is set value in map by using .set()
// createmap.set('name','shubham')
// createmap.set('age',24);
// createmap.set(24,'checknummberid');
// // console.log(createmap);

// this is way how to get particuler value 
// console.log(createmap.get('name'));
// console.log(createmap.get(24));

// this is way to get all the key of map 
// console.log(createmap.keys());

// this is way to get all key by for of loop
// for(let ele of createmap.keys()){
//     console.log(ele);
// }
// // this is way to gey the value of key as well as value
// for(let [key ,value] of createmap){
//     console.log(`key(${key})=value(${value})`);
// }

// //get the value of map in the form of array
// let createnewmap=new Map([
//     ['user1','shubham', 'age',24],
//     ['user2','suraj', 'age',29],
//     ['user3','mala', 'age',59],    
// ]);
// console.log(createnewmap);

// add value in map in the form of object

// let person1={name1:"shubham",age1:24};
// let person2={name2:"shubham",age2:24};

// let creatnewmap=new Map();

// // this is way to add extra information in by object in map
// creatnewmap.set(person1,{place:"lucknow",DOB:1997});
// creatnewmap.set(person2,{place:"lucknow",DOB:1997});
// console.log(creatnewmap);
// console.log(creatnewmap.get(person1));


// // ===========  Clone Of Object By Using Object,ass     ============

// let obj={name:'shuham',age:22,place:'lucknow'};
// let newobj=Object.assign({},obj);
// //OR let newobj={...obj}  second way to clone the obj new object will create in heap 
// obj.area="Alambagh";
// console.log(newobj);
// console.log(obj);


//===============    FUNCTIN INSIDE THE OBJECT         ===================== 

// function about(two,parameter){
//     console.log(this.name+"  welcome in lucknow  "+ this.age+" is your age  "+" and two  diffrent argument is  "+two,parameter);
// }


// let obj1={
//     name:"shubham",
//     age:24,
// }


// let obj2={
//     name:"suraj",
//     age:29,

// }


// let obj3={
//     name:"mala",
//     age:59,
// }


// this===  call() === method is used for call the object by argument in call 
//about.call(obj1);


// this===  apply() === method is used jab hum argument pass karna chaahe array mai tab istmaal karte hai 
//about.apply(obj2,["two","argument"]);


//bind() method is used for ye function retur karta hai 
// let returnfun=about.bind(obj3,"two","argument");
// returnfun();



//================      arrow function      =====================================

// arrow function ka this nahi hota hai wo apne ek level upper se leta  hai 
// let obj={
//     name:"shubham",
//     age:29,
//     about:()=>{
//         console.log(this);
//         console.log(this.name+" "+this.age);
//     }
// }
// obj.about();


//================      sort Syntex of Write Function in object     =====================================

// let obj={
//     name:"shubham",
//     age:29,
//     about(){
//         console.log(" this is short way of write function");
//     }
// }
// obj.about()


//================ OBJECT ORIENTED PROGRAMING CONCEPT =============================
// this is way to write to long way now how to write in short by funtion or object

// let shubham={
//     fname:"shubham",
//     lname:"sharma",
//     age:24,
//     email:"bhardwahshubham198@gmail.com",
//     phonNumber:8887646549,
//     add:"563k/9 shyam nagar alambagh lucknow",
//     voting:function(){
//         return(this.age>18);
//     },
//     votinglist:function(){
//         return(`voter name is  ${this.fname} and  age is ${this.age}`);
//     }
// }


// let suraj={
//     fname:"suraj",
//     lname:"sharma",
//     age:29,
//     email:"surajspicy1994@gmail.com",
//     phonNumbe:6306426103,
//     add:"563k/9 shyam nagar alambagh lucknow",
//     voting:function(){
//         return(this.age>18);
//     },
//     votinglist:function(){
//         return(`voter name  ${this.fname} and  age is ${this.age}`);
//     }
// }


// let mom={
//     fname:"mala",
//     lname:"devi",
//     age:59,
//     email:"maladevi@gmial.com",
//     phonNumber:6394198112,
//     add:"563k/9 shyam nagar alambagh lucknow",
//     voting:function(){
//         return(this.age>18);
//     },
//     votinglist:function(){
//      return(`voter name  ${this.fname} and  age is ${this.age}`);
//     }
// }


// let ankit={
//     fname:"ankit",
//     lname:"kumar",
//     age:25,
//     email:"",
//     phonNumber:9571215689,
//     add:"563k/9 shyam nagar alambagh lucknow",
//     voting:function(){
//         return(this.age>18);
//     },
//     votinglist:function(){
//      return(`voter name  ${this.fname} and  age is ${this.age}\n`);
//     }
// }


// console.log(shubham);
// console.log(shubham.voting());
// console.log(shubham.votinglist());

// console.log(suraj);
// console.log(suraj.voting());
// console.log(suraj.votinglist());

// console.log(mom);
// console.log(mom.voting());
// console.log(mom.votinglist());

// console.log(ankit);
// console.log(ankit.voting());
// console.log(ankit.votinglist());


//A =============== Short Way To Write The  =========================================

// function votinglist(fname, lname, age, add, phonnumber, email,) {
//     let userInfo = {};
//     userInfo.fname = fname;
//     userInfo.lname = lname;
//     userInfo.age = age;
//     userInfo.add = add;
//     userInfo.email = email;
//     userInfo.phonnumber = phonnumber; 
//     userInfo.print = function () {
//         return (`voter name is ${this.fname} and age is ${this.age}`);
//     };
//     userInfo.agecheck = function () {
//         return (this.age > 18);
//     }
//     return (userInfo);
// }

// const shubham = votinglist("shubham", "sharma", 24, "563k/9 alambgh lucknow", 8887646549, "bhardwajshubham198@gmail.com");
// const suraj = votinglist("suraj", "sharma", 29, "563k/9 alambgh lucknow", 6306426103, "surajsspicy1994@gmail.com");
// const mom = votinglist("mala", "devi", 59, "563k/9 alambgh lucknow", 6394198112, "maladevi@gmail.com");
// const ankit = votinglist("ankit", "kumar", 25, "Rajasthan", 9571215689, "ankitkumar@gmail.com");

// console.log(shubham);
// console.log(shubham.print());
// console.log(shubham.agecheck());


// console.log(suraj);
// console.log(suraj.print());
// console.log(suraj.agecheck());

// console.log(mom);
// console.log(mom.print());
// console.log(mom.agecheck());

// console.log(ankit);
// console.log(ankit.print());
// console.log(ankit.agecheck());



//A =============== Short Way To Write The  =========================================

// let userlist = {
//     print:function(){
//         return (`voting person name is =${this.fname} age is= ${this.age}`);
//     },
//     votingage:function(){
//         return (this.age > 18);
//     }
// }
// // function votingliat(fname, lname, age, add, email, phonNumbe) {
//     let listinfo = Object.create(userlist);
//     console.log(listinfo.__proto__);
//     listinfo.fname = fname;
//     listinfo.lname = lname;
//     listinfo.age = age;
//     listinfo.add = add;
//     listinfo.emial = email;
//     listinfo.phonNumbe = phonNumbe;
//     return listinfo;
// }
// const shubham=votingliat("shubham","sharma",24,"lucknow","bhardwajshubham",888);
// console.log(shubham);
// console.log(`${shubham.print()}\nEligible for vote=${shubham.votingage()}`);

// B=============== More Short Way To Write The  =================================

//  function votinglist(fname, lname, age, add, email, phonNumbe){
//     let listinfo=Object.create(votinglist.__proto__);
//         listinfo.fname = fname;
//         listinfo.lname = lname;
//         listinfo.age = age;
//         listinfo.add = add;
//         listinfo.emial = email;
//         listinfo.phonNumbe = phonNumbe;
//         return listinfo;
// }

// votinglist.__proto__.print=function(){
//     return (`voting person name is =${this.fname} age is= ${this.age}`);
// }
// votinglist.__proto__.votingage=function(){
//     return (this.age > 18);
// }


// const shubham=votinglist("shubham","sharma",24,"lucknow","bhardwajshubham",888);
// console.log(shubham);
// console.log(`${shubham.print()}\nEligible for vote=${shubham.votingage()}`);
// console.log(votinglist.__proto__); // ye ek object de rha hai hame alg se object bnane ki jarurat nhai hai


// =============== Function Property name()  =======================================

// function property4(){
//     return("hellow world");
//  }

// console.log(property4.name);
// property4.myownpro="this is new term add in the function";
// console.log(property4.myownpro);


// // =============== __proto__  ==================================================

// let obj1={key1:"value1",
//           key2:" value2"};
//  let obj2=Object.create(obj1);// obj2 mai obj1 ki sare property a agyi hai agr user obj2 mai nahi mili to woo obj1 mia jayega 
// console.log(obj2.key1);

// // =============== prototype  ==================================================

























// ========================DOM(docoment Object Modal)====================================
// console.log(document.getElementById("heading"));== only work for id


// const mainheading=document.querySelector("#heading");==single id or class and element 


// const bodypart=document.querySelector("body"); check out about body part
// console.log(bodypart);


// 1=== CHANGE TO TEXT CONTENT 
// function changeText(){
// let headingtext=document.getElementById("heading");
// headingtext.textContent="Hellowww Gyusssssss Welcome On My Page";
// headingtext.style.backgroundColor="white";
// headingtext.style.color="black";
// headingtext.style.alignContent="center";
// console.log(headingtext);
// }

// // =========================  get and set attribute value===============================
// let attri_value=document.querySelector("h1");
// console.log(attri_value.getAttribute("id"));
// attri_value.setAttribute("id","class");
// console.log(attri_value.getAttribute("id"));


// let homepage=document.querySelector("a");
// console.log(homepage.getAttribute("href"));
// homepage.setAttribute("href","https://www.youtube.com/channel/UCxeNhGEdNgmEheAg3MpDtlw");
// console.log(homepage.getAttribute("href"));




// =========================     Get Multiple Item      ==========================


// how to select multiple item 
// const navitem = document.getElementsByTagName("a");// html collection


// const navitem = document.querySelectorAll("a");// node list provide just like html collection
// console.log(navitem);
// console.log( typeof navitem); // type of will object for both


// we can apply for loop for both html coll and noode list
// for (let i = 0; i < navitem.length; i++) {
//     // console.log(navitem[i]);
//     let newvalue = navitem[i];
//     newvalue.style.background = "#fff";
//     newvalue.style.color = "white";
// }


// =========================   inner html      ==========================

// let innercont = document.querySelector(".navbarsystem");
// console.log(innercont.innerHTML);
// innercont.innerHTML = innercont.innerHTML + "<button class=\"btn\">Learn More</button>";
// console.log(innercont.innerHTML);



// / =========================   DOM TREE      ==================================

// let rootnode=document.getRootNode();// rootNode will be docoment
// console.log((rootnode)); 

// let childofRootNode=rootnode.childNodes;
// console.log(childofRootNode);

// let childeofhtml=document.childNodes[1];
// console.log(childeofhtml); 

// let parrentOfnode=childeofhtml.parentNode;
// console.log(parrentOfnode);



// / =========================   classs,delete,by java Script ==================================

// let removeClass=document.querySelector("div"); // get and store tag value
// console.log(removeClass);

// removeClass.classList.remove("navbarsystem"); // class remove by this 
// console.log(removeClass);
 
// let ans=removeClass.classList.contains("navbarsystem"); // class remove or not check
// console.log(ans);


   
    












