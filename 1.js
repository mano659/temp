/* Filter the json array with key as 'type' and value as 'external'. [{'id':1, 'type': 'external'}, {'id':2}, {'id':3, type: 'internal'}] */

//Given JSON Array
const input = [{'id':1, 'type': 'external'},
                 {'id':2},
                 {'id':3, type: 'internal'}];

function filterJSON(jsonArr){
    const resultArr = jsonArr.filter(function(jsonObj){
        return jsonObj['type'] == 'external';
    });

    return resultArr;
}

//Filtering
console.log(filterJSON(input));
