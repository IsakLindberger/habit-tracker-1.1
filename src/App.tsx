import { useEffect, useState } from 'react';
import HabitForm from './components/HabitForm';
import HabitList from "./components/HabitList";

interface Habit {
  id: number;
  name: string;
  completed: boolean;
  lastCompleted?: string; // ISO date string (e.g. "2025-05.21")
}

const getTodayDate = () => new Date().toISOString().split("T")[0];

function App() {
  const [habits, setHabits] = useState<Habit[]>(() => {
    const saved = localStorage.getItem("habits");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
  localStorage.setItem("habits", JSON.stringify(habits));
}, [habits]);

  useEffect(() => {
    const today = getTodayDate();
    const updated = habits.map((habit) => ({
      ...habit,
      completed: habit.lastCompleted === today,
    }));
    setHabits(updated);
  }, []);

  const addHabit = (name: string) => {
    const newHabit = {
      id:Date.now(),
      name,
      completed: false,

    };
    setHabits([...habits, newHabit]);
  };

  const toggleHabit = (id: number) => {
    const today = getTodayDate();

    const updated = habits.map((habit) => {
      if (habit.id === id) {
        const isCompletedToday = habit.lastCompleted === today;
        return {
          ...habit,
          completed: !isCompletedToday,
          lastCompleted: isCompletedToday ? undefined : today,
        };
      }
      return habit;
    });
    setHabits(updated);
  };

  const deleteHabit = (id: number) => {
    const filtered = habits.filter((habit) => habit.id !== id);
    setHabits(filtered);
  };

  return ( 
    <div className="max-w-xl mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Habit Tracker</h1>
      <HabitForm 
        addHabit={addHabit} 
      />
      <HabitList 
        habits={habits} 
        toggleHabit={toggleHabit} 
        deleteHabit={deleteHabit}
      />
    </div> 
  );
}

export default App;