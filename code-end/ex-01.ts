export {}
interface AnimalBase {
  id?: number;
  type: string;
  createdDate?: Date;
  name: string;
}
interface Bird extends AnimalBase {
  type: "bird";
  id?: number & {  __type: "bird" }
  isFlightless: boolean;
}

interface Dog extends AnimalBase {
  type: "dog";
  id?: number & {  __type: "dog" }
  isAGoodBoy: boolean;
}

interface Cat extends AnimalBase {
  type: "cat";
  id?: number & {  __type: "cat" }
  isEvil: boolean;
}

type Animal = Cat | Dog | Bird;

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
    case "dog": console.log(`Dog ${a.name} isGoodBoy: ${a.isAGoodBoy}`); break;
    case "cat": console.log(`Bird ${a.name} isEvil: ${a.isEvil}`); break;
    case "bird": console.log(`Dog ${a.name} isFlightless: ${a.isFlightless}`); break;
    default: assertNever(a);
  }
}

let store = createAnimalStore();
let dog: Dog = {
  type: "dog",
  isAGoodBoy: true,
  name: "Rover" 
}

store.saveItem(dog);

store.getCat(dog.id!);


