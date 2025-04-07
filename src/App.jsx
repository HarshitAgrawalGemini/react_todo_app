import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";
import "./App.css";
// import ToDoList from "./assets/TodoList";
import Navbar from "./components/Navbar";
import ProgressBar from './components/ProgressBar';
import AddTodoTitle from './components/AddTodoForm';
import TodoTile from "./components/TodoTile";
import BottomSpecs from './components/BottomSpec';
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
		setEditingId(null);
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
	let completedCount = todoList.filter(item => item.isCompleted).length;
	let pendingCount = todoList.length - completedCount;


	return (
		<>
			{/* min-h-[90vh] */}
			<div className={
				`container mx-auto my-5 h-screen bg-violet-200  mt-10 rounded-xl p-5 text-center  border-2 ${completedCount > pendingCount ? "border-green-200" : "border-red-200"}`}>


				<AddTodoTitle handleChange={handleChange} todo={todo} handleAddClick={handleAddClick} />

				<h1 className="font-bold text-xl text-pink-500">Your ToDos</h1>

				<ProgressBar pendingCount={pendingCount} completedCount={completedCount} todoList={todoList} />


				{todoList.length === 0 && <div className='my-5 font-bold text-red-400'> No ToDos</div>}

				<div className='overflow-auto snap-x h-4/6 custom-scrollbar rounded-lg'>
					{/* // Wrapped this div just to have a scrollbar */}


					{todoList.map(item => {

						return (< TodoTile key={item.id} item={item} editingId={editingId} handleCheckBox={handleCheckBox} handleEditChange={handleEditChange} handleDeleteClick={handleDeleteClick} handleEditClick={handleEditClick} handleSaveClick={handleSaveClick} />)
					})}
				</div>
				<BottomSpecs completedCount={completedCount} pendingCount={pendingCount} />
			</div >
		</>
	);
}

export default App;
