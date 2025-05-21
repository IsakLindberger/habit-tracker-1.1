import HabitItem from "./HabitItem";

interface Habit {
    id: number;
    name: string;
    completed: boolean;
}

interface HabitListProps {
    habits: Habit[];
    toggleHabit: (id: number) => void;
    deleteHabit: (id: number) => void;
}

function HabitList({ habits, toggleHabit, deleteHabit }: HabitListProps) {
    if (habits.length === 0) {
        return <p className="text-gray-500">No habits yet.</p>;
    }

    return (
        <ul className="text-left">
            {habits.map((habit) => (
                <HabitItem
                 key={habit.id} 
                 habit={habit} 
                 toggleHabit={toggleHabit}
                 deleteHabit={deleteHabit}
                />
            ))}
        </ul>
    );
}

export default HabitList