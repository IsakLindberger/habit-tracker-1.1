interface Habit {
    id: number;
    name: string;
    completed: boolean;
}

interface HabitItemProps {
    habit: Habit;
    toggleHabit: (id: number) => void;
}

function HabitItem({ habit, toggleHabit }: HabitItemProps) {
    return (
        <li
            className={`flex items-center justify-between p-2 border-b ${
                habit.completed ? "bg-green-100" : ""
            }`}
        >
            <span className={habit.completed ? "line-through text-gray-500" : ""}>
                {habit.name}
            </span>
            <input 
                type="checkbox"
                checked={habit.completed}
                onChange={() => toggleHabit(habit.id)}
                className="w-5 h-5"
            />
        </li>
    
    );
}

export default HabitItem