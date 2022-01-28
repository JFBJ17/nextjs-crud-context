import {createContext, useContext, useState} from 'react';
import {v4 as uuid} from 'uuid';

export const TaskContext = createContext();

export const useTask = () => useContext(TaskContext);

export const TaskProvider = ({children}) => {
	const [tasks, setTask] = useState([]);

	const createTask = (title, description) => {
		setTask([...tasks, {title, description, id: uuid()}]);
	};

	const updateTask = (id, updatedTask) => {
		setTask(
			tasks.map((task) => (task.id === id ? {...task, ...updatedTask} : task))
		);
	};

	const deleteTask = (id) => setTask(tasks.filter((task) => task.id !== id));

	return (
		<TaskContext.Provider value={{tasks, createTask, updateTask, deleteTask}}>
			{children}
		</TaskContext.Provider>
	);
};
