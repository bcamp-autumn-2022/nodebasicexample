const dataFromDatabase=[
    {fname:'Lisa', lname:'Smith'},
    {fname:'Tim', lname:'Jones'},
    {fname:'Ann', lname:'Daniels'}
];
//console.log(dataFromDatabase);

const dataToList = dataFromDatabase.map(
    row => '<li>'+row.fname+' '+row.lname+'</li>'
);

const dataToTable=dataFromDatabase.map(
    row =>'<tr><td>'+row.fname+'</td><td>'+row.lname+'</td></tr>'
);

//console.log(dataToList);
console.log(dataToTable);