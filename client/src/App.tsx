import { useState } from "react";
import Branch from "./entities/Branch";
import Trainer from "./entities/Trainer";
import TrainerAllocator from "./entities/TrainerAllocator";
import mockData from "./MockData.json";

const App = () => {
  const [schedule, setSchedule] = useState(new Map<string, string[]>());

  const createSchedule = () => {
    const trainers: Trainer[] = [];
    const branches: Branch[] = [];
    mockData.trainers.forEach((trainer) => trainers.push(new Trainer(trainer)));
    // @ts-ignore
    mockData.branches.forEach((branch) => branches.push(new Branch(branch)));

    const trainerAllocator = new TrainerAllocator(trainers, branches);
    const result = trainerAllocator.allocate();
    setSchedule(result);
  };

  const onClickHandler = () => {
    createSchedule();
  };

  return (
    <div>
      <button onClick={onClickHandler}>Create Schedule</button>
      <div className="schedule">
        {[...schedule.entries()].map((entry) => (
          <div key={entry[0]}>{entry[0] + ", " + entry[1].toString()}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
