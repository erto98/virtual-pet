function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
  this.isAlive = {
    age: this.age,
    hunger: this.hunger,
    fitness: this.fitness,
  };

  Pet.prototype.growUp = function () {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  };
  Pet.prototype.walk = function () {
    if (this.fitness <= 5) {
      this.fitness += 4;
    } else {
      this.fitness = 10;
    }
  };

  Pet.prototype.feed = function () {
    let hungerLevel = this.hunger;
    if (hungerLevel === 0 || hungerLevel <= 0) {
      return false;
    } else {
      return (this.hunger -= 3);
    }
  };

  this.checkUp = function () {
    this.fitness;
    this.hunger;
    let petNeedsWalk = this.fitness <= 3;
    let petsHunger = this.hunger >= 5;
    let petWantsWalkAndFood = (petNeedsWalk, petsHunger);

    if (petWantsWalkAndFood === true) {
      return `I am hungry AND I need a walk`;
    } else {
      return `I fell great!`;
    }
  };
  if (this.fitness <= 3) {
    return `I need a walk`;
  }
  if (this.hunger >= 5) {
    return `I am hungry`;
  }

  Pet.prototype = {
    get isAlive() {
      return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    },
  };

  Pet.prototype.feed = function () {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    }
  };
  Pet.prototype.walk = function () {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    }
  };
  Pet.prototype.growUp = function () {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    }
  };
}

module.exports = Pet;
