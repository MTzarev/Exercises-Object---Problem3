function objectsProblem3(input){
let phoneBook = {};
for (let info of input){
    let [name, number] = info.split(` - `)
    //number = Number[number];
    if (name[info]!= undefined){
        phoneBook[name]=number
    }
    phoneBook[name]=number
}
for (let nameBook in phoneBook){
    console.log(`${nameBook}: ${phoneBook[nameBook]}`);
}


}
objectsProblem3(['Miroslav - 0895600123',
'Montana - 0895600124',
'New York - 0895600125',
'Washington - 0895600123',
`Las Vegas - 0895600122`, 
`Montana - 0895001002`]);