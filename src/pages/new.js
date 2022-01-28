import {useEffect, useState} from 'react';
import Layout from '../components/Layout';
import {useTask} from '../context/taskContext';
import {useRouter} from 'next/router';

const TaskFormPage = () => {
	const {createTask, updateTask, tasks} = useTask();
	const {push, query} = useRouter();
	const [task, setTask] = useState({
		title: '',
		description: '',
	});

	const handleChange = (e) => {
		const {name, value} = e.target;
		setTask({...task, [name]: value});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!query.id) {
			createTask(task.title, task.description);
		} else {
			updateTask(query.id, task);
		}
		push('/');
	};

	useEffect(() => {
		if (query.id) {
			const taskFound = tasks.find((task) => task.id === query.id);
			setTask({title: taskFound.title, description: taskFound.description});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Layout>
			<form onSubmit={handleSubmit}>
				<h1>{query.id ? 'Update a Task' : 'Create a Task'}</h1>
				<input
					type='text'
					name='title'
					value={task.title}
					onChange={handleChange}
					placeholder='Write a title'
					className='bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5'
				/>
				<textarea
					rows='2'
					name='description'
					value={task.description}
					onChange={handleChange}
					placeholder='Write a description'
					className='bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5'
				></textarea>
				<button
					className='btn btn-success disabled:opacity-30'
					disabled={!task.title}
				>
					Save
				</button>
			</form>
		</Layout>
	);
};

export default TaskFormPage;
