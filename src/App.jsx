import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";
import "./App.css";
// import ToDoList from "./assets/TodoList";
import Navbar from "./components/Navbar";

function App() {
	const [todo, setTodo] = useState("");
	const [todoList, setTodoList] = useState([]);
	const [editingId, setEditingId] = useState(null);
	useEffect(() => {
		let todoString = localStorage.getItem("TodoList");
		if (todoString) {
			let todoList = JSON.parse(localStorage.getItem("TodoList"));
			setTodoList(todoList);
		}

	}, [])
	const saveToLS = (updatedList) => {
		localStorage.setItem("TodoList", JSON.stringify(updatedList));
	}
	const handleDeleteClick = (e, id) => {
		let newTodoList = todoList.filter(item => {
			return item.id !== id;
		});
		setTodoList(newTodoList);
		saveToLS(newTodoList);
	}
	const handleSaveClick = () => {
		setEditingId(null); // Stop editing
	};

	const handleEditChange = (e, id) => {

		const updatedList = todoList.map(item =>
			item.id === id ? { ...item, todo: e.target.value } : item
		);
		setTodoList(updatedList);
		saveToLS(updatedList);
		// localStorage.setItem("TodoList", JSON.stringify(updatedList));
	};

	const handleEditClick = (e, id) => {
		setEditingId(id);
	}
	const handleAddClick = () => {
		let updatedList = [{ id: uuidv4(), todo, isCompleted: false }, ...todoList];
		setTodoList(updatedList);
		console.log(updatedList);
		// localStorage.setItem("TodoList", JSON.stringify(updatedList));
		setTodo("");

		saveToLS(updatedList);
	}
	const handleChange = (e) => {
		setTodo(e.target.value);
		// saveToLS();
	}

	const handleCheckBox = (e) => {
		// if (editingId === id) {
		// 	handleSaveClick();
		// }
		let id = e.target.name;
		let index = todoList.findIndex(item => {
			return item.id === id;
		});
		let newTodoList = [...todoList];
		newTodoList[index].isCompleted = !newTodoList[index].isCompleted;
		setTodoList(newTodoList);
		saveToLS(newTodoList);
	}

	return (
		<>
			{/* <Navbar /> */}
			<div className="container mx-auto my-5 bg-violet-200 min-h-[90vh] mt-10 rounded-xl p-5 text-center">
				<div className="addTodo">
					<h1 className="text-lg font-bold text-center text-pink-500" >ADD TODOs</h1>
					<input type="text" className="w-80 bg-red-200 border-2 border-violet-400 focus:border-violet-600 focus:ring-2 focus:ring-violet-200 rounded-lg px-3 py-1 mx-10 transition-all duration-200 outline-none shadow-sm h-10 my-5 text-gray-800 " onChange={() => handleChange(event)} value={todo} /><br />
					<button className="bg-violet-400 hover:bg-violet-700 p-2 px-2 w-1/10 text-sm font-bold text-white rounded-md mx-6" disabled={todo.length === 0} onClick={handleAddClick}>Add</button>
				</div>
				<h1 className="font-bold text-xl text-pink-500">Your ToDos</h1>

				{todoList.length === 0 && <div className='my-5 font-bold text-red-400'> No ToDos</div>}


				{todoList.map(item => {

					return <div key={item.id} className="todos flex  mx-auto  "   >
						<div className='flex -800 min-w-1/2 justify-start'>
							<label className="inline-flex items-center cursor-pointer my-auto">
								<input
									name={item.id}
									disabled={editingId === item.id}
									type="checkbox"
									checked={item.isCompleted}
									onChange={handleCheckBox}
									className="sr-only peer "
								/>
								<div className="w-5 h-5 rounded border-2 border-red-500 peer-checked:border-violet-500  peer-checked:bg-green-500 flex items-center justify-center transition-colors duration-200">
									<svg
										className="w-3 h-3 text-white hidden peer-checked:block"
										fill="none"
										stroke="currentColor"
										strokeWidth="3"
										viewBox="0 0 24 24"
									>
										<path d="M5 13l4 4L19 7" />
									</svg>
								</div>
							</label>

							{editingId === item.id ? (
								<>
									<input
										type="text"
										value={item.todo}
										onChange={(e) => handleEditChange(e, item.id)}
										className="border-2 border-violet-400 focus:border-violet-600 focus:ring-2 focus:ring-violet-200 rounded-lg px-3 py-1 mx-10 transition-all duration-200 outline-none shadow-sm h-10 my-auto text-gray-800"
									/>

									{/* <button onClick={handleSaveClick} className="bg-green-400 hover:bg-green-700 p-2 px-2 text-sm font-bold text-white rounded-md mx-1 my-auto">✔️</button> */}

								</>
							) : (
								<div className={!item.isCompleted ? "text-red-600 mx-10 font-bold my-auto" : "text-green-500 mx-10 line-through my-auto"}>
									{!item.isCompleted ? item.todo.toLowerCase()
										.split(" ")
										.map(word => word.charAt(0).toUpperCase() + word.slice(1))
										.join(" ") : item.todo}
								</div>
							)}

						</div>
						<div className="todo w-1/2 flex  justify-end my-5 ">


							<div className="buttons flex">
								{!item.isCompleted ?
									editingId !== item.id ?
										< button onClick={(e) => handleEditClick(e, item.id)} className="bg-violet-400 hover:bg-violet-700 p-2 px-2 text-sm font-bold text-white rounded-md mx-1 my-1">✍️</button>
										: < button onClick={handleSaveClick} className="bg-green-400 hover:bg-violet-700 p-2 px-2 text-sm font-bold text-white rounded-md mx-1 my-1">✔️</button> :

									< button disabled className="bg-violet-400 p-2 px-2 text-sm font-bold text-white rounded-md mx-1 my-1">👍</button>}

								<button onClick={(e) => handleDeleteClick(e, item.id)} className="bg-violet-400 hover:bg-violet-700 p-2 px-2 text-sm font-bold text-white rounded-md mx-1 my-1">❌</button>
							</div>
						</div>
					</div>
				})}
			</div >
		</>
	);
}

export default App;
