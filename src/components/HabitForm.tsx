import { useState } from 'react';

interface HabitFormProps {
    addHabit: (name: string) => void;
}

function HabitForm({ addHabit }: HabitFormProps) {
    const [name, setName] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) return; // Prevent adding empty habits
        addHabit(name.trim());
        setName(""); // Clear the input field after adding a habit
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                placeholder="Enter a new habit"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 border rounded w-2/3"
            />
            <button
                type="submit"
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Add Habit
            </button>    
        </form>
    );
}

export default HabitForm;
// This component is a form that allows users to add new habits. It takes an `addHabit` function as a prop, which is called when the form is submitted. The form includes an input field for the habit name and a submit button. When the form is submitted, it prevents the default behavior, checks if the input is not empty, and then calls the `addHabit` function with the trimmed habit name. After adding the habit, it clears the input field.