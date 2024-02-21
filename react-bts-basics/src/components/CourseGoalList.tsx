import { ReactNode } from "react";

import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox.tsx";
import { type CourseGoal as CGoals } from "../App.tsx";

type GoalsListProps = {
  goals: CGoals[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: GoalsListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goal yet. Start adding some.
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning">
        You`re collecting a lot of goals. Dont put too much on year plate
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
