import { useState } from 'react';
import HabitForm from './components/HabitForm';
import HabitList from "./components/HabitList";

interface Habit {
  id: number;
  name: string;
  completed: boolean;
}

function App() {
  const [habits, setHabits] = useState<Habit[]>([]);

  const addHabit = (name: string) => {
    const newHabit = {
      id:Date.now(),
      name,
      completed: false,

    };
    setHabits([...habits, newHabit]);
  };

  const toggleHabit = (id: number) => {
    const updated = habits.map((habit) =>
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    );
    setHabits(updated);
  }

  return ( 
    <div className="max-w-xl mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Habit Tracker</h1>
      <HabitForm addHabit={addHabit} />
      <HabitList habits={habits} toggleHabit={toggleHabit} />
    </div> 
  );
}

export default App;