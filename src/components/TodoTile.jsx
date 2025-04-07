import Buttons from "./TileComponents/Buttons";
function TodoTile({ item, editingId, handleCheckBox, handleEditChange, handleDeleteClick, handleEditClick, handleSaveClick }) {
    return (<div className="todos flex  mx-auto  bg-slate-200 my-3 px-10 rounded-2xl"   >
        <div className='flex -800 min-w-1/2 justify-start'>
            <label className="inline-flex items-center cursor-pointer my-auto w-1/6 ">
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

                <textarea
                    type="text"
                    value={item.todo}

                    onChange={(e) => handleEditChange(e, item.id)}
                    className="border-2 border-violet-400 focus:border-violet-600 focus:ring-2 focus:ring-violet-200 rounded-lg px-3 py-1 mx-10 transition-all duration-200 outline-none shadow-sm h-10 my-auto text-gray-800 w-full"
                />




            ) : (
                <div className={!item.isCompleted ? `text-red-600 mx-10 font-bold my-auto text-xl` : "text-green-500 mx-10 line-through my-auto "} >
                    {!item.isCompleted ? item.todo.toLowerCase()
                        .split(" ")
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(" ") : item.todo}
                </div>
            )}

        </div>


        <Buttons item={item} editingId={editingId} handleEditClick={handleEditClick} handleSaveClick={handleSaveClick} handleDeleteClick={handleDeleteClick} />


    </div>);
}

export default TodoTile;