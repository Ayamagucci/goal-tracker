import { useState } from 'react';
import goalsImg from './assets/goals.jpg';
import Header from './components/Header';
import Goal from './models/Goal';
import GoalList from './components/GoalList';
import Adder from './components/Adder';
import './App.css';

export default function App() {
  const [ goals, setGoals ] = useState<Goal[]>([]);

  const handleAdd = (goal: string, summary: string) => {
    const newGoal: Goal = {
      title: goal,
      description: summary,
    };
    setGoals((prev) => [ ...prev, newGoal ]);
  };

  const handleDelete = (idx: number) => {
    setGoals((prev) =>
      prev.slice(0, idx)
        .concat(
          prev.slice(idx + 1)
        )
    );
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>

      <Adder handleAdd={ handleAdd } />
      <GoalList
        goals={ goals }
        handleDelete={ handleDelete }
      />
    </main>
  );
}