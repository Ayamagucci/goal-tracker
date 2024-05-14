import Goal from '../models/Goal';
import CourseGoal from './CourseGoal';
import InfoBox from './InfoBox';
import { type ReactNode } from 'react';

interface ListProps {
  goals: Goal[];
  handleDelete: (idx: number) => void;
}

export default function GoalList(
  { goals, handleDelete }: ListProps
) {
  if (goals.length === 0) {
    return (
      <InfoBox mode='hint'>
        You have no course goals yet — start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode; // default: undefined
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode='warning'>
        You're collecting a lot of goals — don't be too ambitious!
      </InfoBox>
    );
  }
  return (
    <>
      { warningBox }
      <ul>
        { goals.map(({ title, description }, i) => (
          <li key={ i }>
            <CourseGoal
              title={ title }
              description={ description }
              handleClick={ () => handleDelete(i) }
            >
              <p>Learn it from the ground up!</p>
            </CourseGoal>
          </li>
        )) }
      </ul>
    </>
  );
}