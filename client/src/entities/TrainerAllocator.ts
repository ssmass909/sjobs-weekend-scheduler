import type Branch from "./Branch";
import Trainer from "./Trainer";

class TrainerAllocator {
  trainers: Trainer[] = [];
  branches: Branch[] = [];

  constructor(trainers: Trainer[], branches: Branch[]) {
    this.trainers = trainers;
    this.branches = branches;
  }

  allocate(): Map<string, string[]> {
    const result = new Map<string, string[]>();

    return result;
  }
}

export default TrainerAllocator;
