import { useState } from "react";

import "./App.css";
import CourseGoal from "./components/CourseGoal.tsx";
import Header from "./components/Header.tsx";
import GolasImg from "./assets/goals.png";

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const addGoalHandler = () => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "Learn React + TS",
        description: "Learn if from the ground up",
      };
      return [...prevGoals, newGoal];
    });
  };

  return (
    <>
      <Header image={{ src: GolasImg, alt: "A List Of Goals" }}>
        <h1>Your Course Goals</h1>
      </Header>

      <button onClick={addGoalHandler}>Add Goal</button>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
