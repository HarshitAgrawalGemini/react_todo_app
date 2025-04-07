function AddTodoTitle({ handleChange, todo, handleAddClick }) {
    return (
        <div className="addTodo">
            <h1 className="text-lg font-bold text-center text-pink-500" >ADD TODOs</h1>
            <form>
                <input type="text" placeholder='Enter New Task...' className="w-80 bg-red-200 border-2 border-violet-400 focus:border-violet-600 focus:ring-2 focus:ring-violet-200 rounded-lg px-3 py-1 mx-10 transition-all duration-200 outline-none shadow-sm h-10 my-5 text-gray-800 " onChange={() => handleChange(event)} value={todo} /><br />
                <button className="bg-violet-400 hover:bg-violet-700 p-2 px-2 w-1/10 text-sm font-bold text-white rounded-md mx-6" disabled={todo.length === 0} onClick={handleAddClick}>Add</button>
            </form>
        </div>
    );
}

export default AddTodoTitle;