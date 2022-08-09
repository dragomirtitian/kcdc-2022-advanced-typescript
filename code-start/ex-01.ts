export {}

interface AnimalBase {
  id?: number;
  type: string;
  createdDate?: Date;
  name: string;
}
interface Bird extends AnimalBase {
  isFlightless: boolean;
}

interface Dog extends AnimalBase {
  isAGoodBoy: boolean;
}
interface Cat extends AnimalBase {
  isEvil: boolean;
}
// Animal is any, maybe we can do better 
type Animal = any;

function assertNever(o: never){
  throw Error("Unexpected");
}
function createAnimalStore() {
  let animals: Animal[] = [];

  function getDog(id: number) {
    return animals.find((p) => p.type === "dog" && p.id == id);
  }

  function getCat(id: number) {
    return animals.find((p) => p.type === "cat" && p.id == id);
  }
  
  function getBird(id: number) {
    return animals.find((p) => p.type === "bird" && p.id == id);
  }
  function saveItem(animal: Animal) {
    const id = animals
      .filter(a => a.type == animal.type)
      .map(a => a.id!)
      .reduce((a,b) => Math.max(a, b), 0);
    animal.id = (id + 1) as Animal['id'];
    animals.push(animal);
  }
  return {
    getDog,
    getCat,
    getBird,
    saveItem,
  };
}

function printAnimalInfo(a: Animal) {
  switch(a.type) {
    // Typo on the string we are checking
    case "dogg": console.log(`Dog ${a.name} isGoodBoy: ${a.isAGoodBoy}`); break;
    case "cat": console.log(`Bird ${a.name} isEvil: ${a.isEvil}`); break;
    // Not all cases are handled, we should fix that 
    // can TS ensure we treat all cases ?
    // default: assertNever(a);
  }
}

let store = createAnimalStore();
let dog: Dog = {
  type: "dog",
  isAGoodBoy: true,
  name: "Rover" 
}

store.saveItem(dog);

// Wrong id sent to getCat ?
// Can TS help here ?
dog = store.getCat(dog.id!);

printAnimalInfo(dog)
