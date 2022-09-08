function Artist(name, skill, profession){}

var artistsObject = {}
function Artist(name, skill, profession){
    this.name = name;
    this.skill = skill;
    this.profession = profession;
}
var  A1 = new Artist('Lata Mangeshkar', 'Singing', "Singer")

console.log(A1);


var artistsObject = {
    name:'Rahul Dravid',
    skill:'Cricket',
    profession:'Cricketer'
}
var n1 = Object.create(artistsObject);
//console.log(n1)
Artist.prototype.getProfession =function (){
     return this.profession;
}
Artist.prototype.print =function (){
    return  `I am ${this.name}`
}


// Do not change this
export {Artist, artistsObject};

// Do not change this
export {Artist, artistsObject};
