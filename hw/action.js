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


function SredneeGeometr(a){
    let res=1;
    a.forEach(item => res*=item);
    return Math.pow(res, 1/a.length);
}

let resault = SredneeGeometr(randomArray);

console.log(resault);

//----------------//

const NAMES = ['Лёня','Анатоль','Генчик','Федор','Петрусь','Кеша','Ванек','Игорек','Веня','Петя','Гриша','Коля','Михаил','Дима','Алеша','Саня','Женя','Лена'];

let users = [];
function RandomUsers(){
    for (let i=0; i<(NAMES.length/2)+5; i++)
    {
        let index = getRandom(0,NAMES.length - 1);
        let user = {
            id:(getRandom(0,50)+i),
            name:NAMES[index],
            age:getRandom(10,100)
        }; 
        users.push(user);           
    }
    
}

RandomUsers();
console.log(users);

let persent;

function Stariki(useri){
    let k=0;
    for(let i=0; i<(NAMES.length/2)+5; i++){
        if(useri[i].age>50){
            k++;
        }
    }
    return (k*100)/(NAMES.length/2+5);
}

persent = Stariki(users);
console.log(persent);

//---------------//

users.sort((a,b) =>  a.name.localeCompare(b.name));
console.log(users);

//--------------//

let arrName;

function arrayName(){
    let arr=[];
    for(let i=0; i<(NAMES.length/2)+5; i++){
        arr[i]= users[i].name;
    }
    return arr;
}

arrName = arrayName();
console.log(arrName);

//-------------//

function deliteUsers(){
    let id = users[getRandom(0,(NAMES.length/2+5))];
    let index = users.indexOf(id);
    users.splice(index,1);
    console.log(id);
    console.log(index);
}

deliteUsers();
console.log(users);

//------------------//

function addUsers(){
    let user = {
        id:(getRandom(0,50)+7),
        name:'Летчик',
        age:getRandom(10,100)
    }; 
    users.push(user);   
}

addUsers();
console.log(users);