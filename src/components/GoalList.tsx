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
  const goalCount = goals.length;

  if (goalCount === 0) {
    return (
      <InfoBox mode='hint'>
        You have no course goals yet — start adding some!
      </InfoBox>
    );
  }

  let warningBox: (ReactNode | null) = null; // default: null

  if (goalCount >= 4) {
    let severity: ('low' | 'medium' | 'high') = 'low'; // default: 'low'

    if (goalCount >= 6 && goalCount < 8) {
      severity = 'medium';
    } else if (goalCount >= 8) {
      severity = 'high';
    }

    warningBox = (
      <InfoBox mode='warning' severity={ severity }>
        { `You have ${goalCount} goals — consider focusing on fewer to maintain your productivity!` }
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