const shuffleItems  = (items) => {
    return items
     .map((item)=> ({sort: Math.random(), value:item}))
     .sort((item1, item2) => item1.sort - item2.sort)
     .map((a) => a.value);
}

console.log(shuffleItems(['kdk', 'd9sdi', 9, 8,3]));