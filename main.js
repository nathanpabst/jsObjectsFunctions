// console.log('hello');

var favAnimal = {
    name: "zoe",
    animal: "cat"
};

console.log("favAnimal", favAnimal.animal);
 
var instructorPets = [
     { 
         instructorName: "Zoe",
         petName: "Biff",
         animalType: "evil cat",
         isFavorite: false
    },
    { 
        instructorName: "Zoe",
        petName: "Whiskey",
        animalType: "nice cat",
        isFavorite: true
   },
    { 
        instructorName: "Lauren",
        petName: "Frankie",
        animalType: "sweet dog",
        isFavorite: true
   },
   { 
    instructorName: "Callan",
    petName: "Seymour",
    animalType: "one eyed dog",
    isFavorite: true
},
{ 
    instructorName: "Callan",
    petName: "Wiley",
    animalType: "destructive dog",
    isFavorite: false
}
 ];
 console.log("instructorPets", instructorPets);

//  for (var i = 0; i < instructorPets.length; i++){
//     document.getElementById('pet-names').innerHTML += ('<h1>' + instructorPets[i].petName + '</h1>');
//  }
 var petDiv = document.getElementById("pet-names");
 for (var i = 0; i < instructorPets.length; i++){
    petDiv.innerHTML += '<h1>' + instructorPets[i].petName + '</h1>';
 }