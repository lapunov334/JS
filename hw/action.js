function getRandom(min, max){
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
 
}

let randomArray;

function getRandomArray(){
    let array = []; 
    for(let i=0; i<10; i++){
    array[i]=getRandom(1,100); 
    }
    return array;
}

randomArray = getRandomArray();

console.log(randomArray);


function sredneeGeometr(a){
    let res = 1;
    a.forEach(item => res *= item);
    return Math.pow(res, 1/a.length);
}

let resault = sredneeGeometr(randomArray);

console.log(resault);

//----------------//

const NAMES = ['Лёня','Анатоль','Генчик','Федор','Петрусь','Кеша','Ванек','Игорек','Веня','Петя','Гриша','Коля','Михаил','Дима','Алеша','Саня','Женя','Лена'];

let users = [];
function RandomUsers(){
    for (let i=0; i<(NAMES.length/2)+5; i++)
    {
        let index = getRandom(0,NAMES.length - 1);
        let user = {
            id:(NAMES.length * 2 + i),
            name:NAMES[index],
            age:getRandom(10,100)
        }; 
        users.push(user);           
    }
    
}

RandomUsers();
console.log(users);


//-------------------//
let persent;
function Stariki(useri){
    let kolVo;
    kolVo = users.filter(useri => useri.age > 50);

    return kolVo.length*100/useri.length;
}
persent = Stariki(users);
console.log(Math.floor(persent * 10) / 10);


//---------------//

users.sort((a,b) =>  a.name.localeCompare(b.name));
console.log(users);

//--------------//

let arrName;

function arrayName(a){
    let arr = a.map(elem => elem.name);
    return arr;
}

arrName = arrayName(users);
console.log(arrName);

//-------------//

function deliteUsers(){
    let id = users[getRandom(0,users.length)];
    let index = users.indexOf(id);
    users.splice(index,1);
    console.log(id);
    console.log(index);
}

deliteUsers();
console.log(users);

//------------------//

function dateNow(){
    let date = new Date();
    let sec;
    return sec = date.getSeconds()
}
let second = dateNow();

function addUsers(){
    let user = {
        id:getRandom(0,50) + second,
        name:'Летчик',
        age:getRandom(10,100)
    }; 
    users.push(user);   
}

addUsers();
console.log(users);
