const array1 = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995, "React", 2013, "Java", 1995];

console.log(array1);
console.log(array1.length);
console.log(array1[6])
console.log(array1.toString());
console.log(array1.join('/'));

console.clear()
console.log(array1.unshift('IOS'));
console.log(array1);


console.clear()

const array2 = [
    ["HTML", 1993, "CSS", 1996],
    ["Bootstrap", 2011, "JS", 1995],
    ["React", 2013, "Java", 1995]
]

console.log(array2)
console.log(array2.length)
console.log(array2[2][1])
var arra3 = array2[1][2] = 'JavaScript'
console.log(array2)
delete array2[2][2];

console.log(array2)
