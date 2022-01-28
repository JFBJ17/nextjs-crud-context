import {useTask} from '../context/taskContext';
import Layout from '../components/Layout';
import {VscTrash} from 'react-icons/vsc';
import {useRouter} from 'next/router';

const Home = () => {
	const {tasks, deleteTask} = useTask();
	const {push} = useRouter();
	return (
		<Layout>
			<div className='flex justify-center'>
				{tasks.length > 0 ? (
					<div className='w-7/12'>
						{tasks.map((task, i) => {
							return (
								<div
									className='font-bold bg-gray-700 hover:bg-gray-600 cursor-pointer px-20 py-5 m-2 flex justify-start items-center'
									key={task.id}
									onClick={() => push(`/edit/${task.id}`)}
								>
									<span className='text-5xl mr-5'>{i + 1}</span>
									<div className='w-full'>
										<div className='flex justify-between'>
											<h1 className='font-bold'>{task.title}</h1>
											<button
												className='btn btn-danger inline-flex items-center'
												onClick={(e) => {
													e.stopPropagation();
													deleteTask(task.id);
												}}
											>
												<VscTrash className='mr-2' /> Delete
											</button>
										</div>
										<p className='text-gray-300'>{task.description}</p>
									</div>
								</div>
							);
						})}
					</div>
				) : (
					<div>No hay tareas</div>
				)}
			</div>
		</Layout>
	);
};

export default Home;
