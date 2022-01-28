import {AiOutlinePlus} from 'react-icons/ai';
import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useTask} from '../context/taskContext';

const Layout = ({children}) => {
	const router = useRouter();
	const {tasks} = useTask();
	return (
		<>
			<Head>
				<title>NextJS App</title>
			</Head>
			<div className='h-screen bg-gray-900 text-white'>
				<header className='bg-gray-800 flex items-center px-28 py-5'>
					<Link href='/'>
						<a>
							<h1 className='font-black text-lg'>Task App</h1>
						</a>
					</Link>
					<span className='ml-2 text-gray-400 font-bold'>
						{tasks.length} Tasks
					</span>
					<div className='grow text-right'>
						<button
							className='btn btn-success inline-flex items-center gap-1 font-bold'
							onClick={() => router.push('/new')}
						>
							<AiOutlinePlus /> Add Task
						</button>
					</div>
				</header>
				<hr />
				<main className='px-28 py-10'>{children}</main>
			</div>
		</>
	);
};

export default Layout;
