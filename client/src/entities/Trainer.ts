class Trainer {
  name = ""; // PK
  prefersBranches: string[] = []; // Branch PKs
  canVisitBranches: string[] = []; // Branch PKs
  knowsPrograms: string[] = [];
  hasCar = false;

  constructor(trainer: Trainer) {
    this.name = trainer.name;
    this.prefersBranches = trainer.prefersBranches;
    this.canVisitBranches = trainer.canVisitBranches;
    this.knowsPrograms = trainer.knowsPrograms;
    this.hasCar = trainer.hasCar;
  }
}

export default Trainer;
