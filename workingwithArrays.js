// well, remember methods are simply functions,that we can call on objects.so basically functions are attached to objects.so if have array methods that means arrays themselves are also objects.And so these array methods are also functions attached to all arrays that we create JS.
let arr = ['a','b','c','d','e'];

console.log(arr.slice(2));//'c','d','e'
console.log(arr.slice(2,4));//'c','d'
//so with slice method,we can extract any part of array without changing the original array.
console.log(arr.slice(-1));//'e'
console.log(arr.slice(-2));//'d','e'
console.log(arr.slice(1,-2));//'b','c'
console.log(arr.slice());//'a','b','c','d','e' // a shallow copy also using spread operator u can achieve this
console.log(...arr);//'a','b','c','d','e' 
//The only time you really need to use the slice method here
// is when you want to chain multiple methods together,
// so calling one after the other.
//----------------------------------------------------------
//splice
// so it is actually same as slice,but the only difference is splice method mutates the array as slice method dont.
//splice is for removing elements 
arr.splice(-1)
console.log(arr); // it removes last element as gives 'a','b','c','d'
arr.splice(1,2)
console.log(arr);//it removes elements with 1 and 2 and gives 'a','d'
//-------------------------------------------------------------------------------
//reverese
arr.reverse // reverse also mutates the original array
console.log(arr);
//-------------------------------------------------------------------------------------------
//concat
arr1=['a','b','c','d','e'];
arr2=['f','g','h','i','j'];
const letters = arr1.concat(arr2);
console.log(letters);//a,b,c,d,e,f,g,h,i,j
// here also the original array is immutable
//we can also achive this concat using spread operator like
console.log(...arr1,...arr2);
//join
console.log(letters.join('-'));
console.log(arr[0]);
console.log(arr.at[0]);
console.log(arr[arr.length-1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
//this at method also works on strings

//------------------------------------------------------------
//ForEach method
//but before foreach(),lets just write it in nml way 
const transactions = [200,300,-400,500,-600,700,-800,900];
for(const transac of transactions){
    if(transac>0){
        console.log(`you deposited ${transac}`);
    }
    else{
        console.log(`you withdraw ${Math.abs(transac)}`);
    }
}
//so now below using for each we get same result
//---foreach---
transactions.forEach(function(transac){
    if(transac>0){
        console.log(`you deposited ${transac}`);
    }
    else{
        console.log(`you withdraw ${Math.abs(transac)}`);
    }
});
//here function(transac) is a call back function for every loop iteration,it takes the current elemnt as an argument so for that we place an element in which we want to pass.

transactions.forEach(function(transac,index,array){ // here first parameter always needs to be current element and 2nd is index value of elements and 3rd should always be the entire array that we are looping
    if(transac>0){
        console.log(`transaction ${index+1}:you deposited ${transactions}`);
    }
    else{
        console.log(`transaction ${index+1}:you with drawn ${Math.abs(transactions)}`);
    }
});

// the same above program in nml for loop

for(const [i,transac] of transactions.entries()){ // here 1st parameter must be index value and 2nd parameter must be curent element.
    if(transac>0){
        console.log(`transaction ${i+1}:you deposited ${transactions}`);
    }
    else{
        console.log(`transaction ${i+1}:you with drawn ${Math.abs(transactions)}`);
    }
}

// in foreach() u cannot use continue or break statements at all,but if you want those continue and break then follow for of loop

//-------------------------------------------------------------------------------------------------------

// foreach with maps and sets
//map
const currencies = new Map([
    ['USD','United States doolar'],
    ['EUR','Europe'],
    ['GBP','Pound Sterling'],
    ['INR','India'],
]);

currencies.forEach(function(value,key,map){ // here in three paramenters,1st is value,2nd is key and 3rd is whole map
 console.log(`${key}:${value}`);
});
//set
const currenciesSet = new Set(['USD','EUR','INR','GBP']);
console.log(currenciesSet);
// currenciesSet.forEach(function(value,key,map){
    //there is no value that would make sense for a key as we dont have keys here,so we can remove it but if we remove it then this forEach is differnt from other foreach
    // so we can change the value of key to something else like _ , so that it is throwaway var i.e; a variable which is unnecessary
    currenciesSet.forEach(function(value,_,map){
    console.log(`${value}`);
});
//coding challenge 1
const checkDogs = function(dogsJulia,dogsKate){
    const dogsJuliaCorrectedData= dogsJulia.slice();
    dogsJuliaCorrectedData.splice(0,1);
    dogsJuliaCorrectedData.splice(-2);
    console.log(dogsJuliaCorrectedData);
    const dogs = dogsJuliaCorrectedData.concat(dogsKate);
    dogs.forEach(function(dog,i){
        if(dog>=3){
            console.log("its an adult");
        }
        else{
            console.log("its a puppy");
        }
    });


};

checkDogs([3,5,2,12,7],[4,1,15,8,3]);

//--------------------------------------------------------------------------------

//map,filter,reduce
//map
//suppose there is an array[1,5,4,6,2]
// in map function current array * 2 is a condition then it returns a new array
//[2,10,8,12,4] --->gives a new array
//filter
// current elements >2 then the resultung array is [5,4,6]
// a new aray
//reduce
// aacumulator+current elements-->in the same array it will add all elements and gives result.
const movements=[200,300,-100,6000,-10];
const eurToUSD =1.1;
const movementsUSD = movements.map(function(mov){
    return mov*eurToUSD;
}) ;

const movementsUSDfor= [];
for(const mov of movements) movementsUSDfor.push(mov*eurToUSD);
console.log(movementsUSDfor);

const movementss = movements.map(mov=> mov*eurToUSD);
console.log(movementss);


const m = movements.map((mov,i)=>`movement ${i+1}: you ${mov>0?'deposited':'withdraw'} ${Math.abs(mov)}`);
console.log(m);

const user= 'Sai Pooja Reddy';
const useranme=function(us){

 return us.toLowerCase().split(' ').map(name => {
     return name[0];
}).join('');
};
console.log(useranme(user));




//--------------------------map()
const account1 = {
    owner:'Sai pooja',
    movements:[200,300,-100,6000,-10],
    interestRate:0.7,
    PIN:1111,
};

const account2 = {
    owner:'Sai P',
    movements:[200,7000,-100,600,-200],
    interestRate:0.8,
    PIN:1113,
};

const account3 = {
    owner:'Reddy',
    movements:[200,3000,-100,60,-10],
    interestRate:0.9,
    PIN:2228,
};

const account4 = {
    owner:'Sai pooja Reddy',
    movements:[200,-100,200,6000,-100],
    interestRate:1.0,
    PIN:2211,
};
const accounts = [account1, account2, account3, account4];

const createUsernames = function(accs){
    accs.forEach(function(acc){
        acc.username = acc.owner.toLowerCase().split(' ').map(name=>name[0]).join('');
    });
};
createUsernames(accounts);
console.log(accounts);

const deposit = function(depo){
    depo.forEach(function(d){
        d.de=d.movements.filter(function(mov){
            return mov >0;
        });
    });
};
deposit(accounts);
console.log(accounts);

const withdrawls = function(withdrew){
    withdrew.forEach(function(wd){
        wd.withdraw=wd.movements.filter(function(mov){
            return mov<0;
        });
    });
};
withdrawls(accounts);
console.log(accounts);

// reduce
const balance = movements.reduce(function(acc,cur,i,arr){
    return acc+cur;
},0);
console.log(balance);

const bal = function(accBal){
    accBal.forEach(function(amount){
        amount.balancee=amount.movements.reduce(function(acc,cur,i,arr){
            return acc+cur;
        },0);
    });
};
bal(accounts);
console.log(accounts);

const bbal= function(acbal){
    acbal.forEach(function(am){
        const c=am.movements.reduce((acc,mov)=>acc+mov,0);
    });
};
bbal(accounts);
console.log(accounts);

// coding challenge

// const dogAge=[5,2,4,1,15,8,3];

// const dAge = function(dogAge){
//     const ages=dogAge.map(function(compare){
//         let humanAge=0;
//         if(compare>2){
//             humanAge= 16+compare*4;
            
//         }
//         else{
//             humanAge=2*compare;
//         }
//         console.log(` dog age is ${compare},so human age was${humanAge}`);
// return humanAge;
// // const avg = ages.reduce((acc,age)=>acc+age,0)/humanAge.length;
// // console.log(avg);
//     });
//     const avg = ages.reduce((acc,age)=>acc+age,0)/ages.length;
//     console.log(avg);
  
// };


// dAge(dogAge);

// calculate display summary

const calDisplaySummary = function(movements){
    const incomes=movements
    .filter(mov=>mov>0)
    .reduce((acc,mov)=>acc+mov,0);
    labelsumIn.textContent=`${incomes}💶` ;

    const outcomes=movements
    .filter(mov=>mov<0)
    .reduce((acc,mov)=>acc+mov,0);
    labelSumOut.textContent=`${Math.abs(outcomes)}💶`;

    const interest = movements
    .filter(mov=>mov>0)
    .map(deposit => (deposit * 1.2)/100)
    .filter((int,i,arr)=>{
        console.log(arr);
        return int>1;
    })
    .reduce((acc,mov)=>acc+mov,0);
    labelSumInterest.textContent=`${interest}💶`;
};

//coding challenge 3

const dogAge=[5,2,4,1,15,8,3];

const avgAge =ages=>ages.map(age=>(age<=2?2*age:16+age*4))
.filter(age=>(age>=18))
.reduce((acc,age,i,arr)=>acc+age/arr.length,0);

// const dAge = function(dogAge){
//     const ages=dogAge.map(function(compare){
//         let humanAge=0;
//         if(compare>2){
//             humanAge= 16+compare*4;
            
//         }
//         else{
//             humanAge=2*compare;
//         }
//         console.log(` dog age is ${compare},so human age was${humanAge}`);
// return humanAge;
// // const avg = ages.reduce((acc,age)=>acc+age,0)/humanAge.length;
// // console.log(avg);
//     });
//     const avg = ages.reduce((acc,age)=>acc+age,0)/ages.length;
//     console.log(avg);
  
// };


// dAge(dogAge);

/// filter method and find method differences

// filter method will give results of all the matching elements,while find method gives only one element of the matched element.
// and also filter method gives the results in new array will find method will return as element and not in array.

// find method==> so usually the goal of the find method is to just find exactly one element, and therefore we usually set up a condition where only one element can 
//satisfy the condition.


// login
 const currentAcc = accounts.find(
    acc=>acc.useranme===(inputLoginUsername.value)
 );
 if(currentAcc?.PIN===Number(inputLoginPIN.value){
    labelWelcome.textContent=`Welcome Back ${currentAcc.owner.split(' ')[0]}`;
    containerApp.style.opacity=100;

    calDisplaySummary(currentAcc.movements);


 });

 //some and every
  console.log(movements.includes(-130));
  //its just an equality method

  console.log(movements.some(mov=> mov===-130));

  const anyDeposits= movements.some(mov=>mov>0);
  console.log(anyDeposits);
  //here it checks any value greater then given value(a condition)

  //every
  console.log(account4.movements.every(mov=>mov>0));
  //here it returns true only if it satisfies the condition like every element should satidy the condition.


  //seperate callback --->we can just just any condition here and use it for all the methods

  const deposit = mov=>mov>0;
  console.log(movements.some(deposit));
  console.log(movements.every(deposit));

  // flat and flatmap
  // flat
  const arr = [[1,2,3],[4,5,6],7,8];
  console.log(arr.flat());
  //flat method goes into only one level deep by default and removes array and gives result.
  const arrDeep = [[[1,2],3],[[4,5],6]];
  // for above arrDeep the reult would be like [[1,2],3,[4,5],6],it can only clear one level of array not the nested arrays 

  // so you need to mention there,to the level which you want to clear
  const arrDeep1 = [[[1,2],3],[[4,5],6]];
  console.log(arrDeep1.flat(2));
  // this will give the result like-->[1,2,3,4,5,6], by clearing 2 levels of arrays


  //actually the above shown example is pretty simple but no use so lets deal it with bank project
  //suppose bank itself wants to calculate the overall balnce of all the movements,then we can use this,
  //as inside accounts array you have movements and again all those individual movement arrays should be placed in single array

  const accountMovements= accounts.map(acc=>acc.movements);//this will give individual arrays with movements of account1,account2 so on soforth
  const alMovements = accountMovements.flat();
  console.log(alMovements);//all movements in one single array
  const overallBal=alMovements.reduce((acc,mov)=>acc+mov,0);
  console.log(overallBal);


//flatmap-->combinining the functionalities of both flat and flatmap
// but for flatmap it goes only one level deep to clear arrays, but if you want more than 1 then you must select flat method only
//also flatmap method should contain the same callBack function as map method
const accountMovements1= accounts.flatMap(acc=>acc.movements).reduce((acc,mov)=>acc+mov,0);
  console.log(accountMovements1);

  // sorting arrays

  const s= ['a','c','d','b'];
  console.log(s.sort());
  // the above wil give results like a,b,c,d

  const s1=[-350,-100,300,25,75];
  console.log(s1.sort());
  //now this will sort the numbers as [-100,-350,25,300,75]-->which is wrong as it sorted based on numerical order like 2,3,and 7 but the order should be like
  //25,75,300
//   for that
s1.sort((a,b)=>
{
    if(a>b) return 1;
    if(b>a) return -1;
});
console.log(s1);
//will give the exact results as needed [-350,-100,25,75,300]

s1.sort((a,b)=>a-b);
console.log(S1);

const x = Array.from({length: 7},()=>1);
console.log(x);

const xy=Array.from({length:7},(_,i)=>i+1);
console.log(xy);

