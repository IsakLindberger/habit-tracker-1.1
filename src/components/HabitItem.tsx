interface Habit {
    id: number;
    name: string;
    completed: boolean;
}

interface HabitItemProps {
    habit: Habit;
    toggleHabit: (id: number) => void;
    deleteHabit: (id: number) => void;
}

function HabitItem({ habit, toggleHabit, deleteHabit }: HabitItemProps) {
    return (
        <li
            className={`flex items-center justify-between p-2 border-b ${
                habit.completed ? "bg-green-100" : ""
            }`}
        >
            <div className="flex items-center gap-2">
                <input
                type="checkbox"
                checked={habit.completed}
                onChange={() => toggleHabit(habit.id)}
                className="w-5 h-5"
            />
            <span className={habit.completed ? "line-through text-gray-500" : ""}>
                {habit.name}
            </span>
            </div>
            <button
                onClick={() => deleteHabit(habit.id)}
                className="text-red-500 hover:text-red-700 font-bold"
            >
                ✕
            </button>
        </li>
    
    );
}

export default HabitItem