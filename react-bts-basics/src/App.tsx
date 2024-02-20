import { useState } from "react";

import "./App.css";
import CourseGoal from "./components/CourseGoal.tsx";
import Header from "./components/Header.tsx";
import GolasImg from "./assets/goals.png";
import CourseGoalList from "./components/CourseGoalList.tsx";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const addGoalHandler = (goal: string, summary: string) => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  };

  const deleteGoalHandler = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <>
      <Header image={{ src: GolasImg, alt: "A List Of Goals" }}>
        <h1>Your Course Goals</h1>
      </Header>

      <NewGoal onAddGoal={addGoalHandler} />
      <CourseGoalList goals={goals} onDeleteGoal={deleteGoalHandler} />
    </>
  );
}

export default App;
