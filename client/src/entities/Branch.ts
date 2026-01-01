import type { RequiredTrainerInfo, TransportationInformation } from "../types";

class Branch {
  name: string; // PK
  requiredTrainersInfo: RequiredTrainerInfo[] = [];
  restrictedTrainers: string[] = []; // Trainer PKs
  transportationInformation: TransportationInformation;

  constructor(branch: Branch) {
    this.name = branch.name;
    this.requiredTrainersInfo = branch.requiredTrainersInfo;
    this.restrictedTrainers = branch.restrictedTrainers;
    this.transportationInformation = branch.transportationInformation;
  }
}

export default Branch;
