function Buttons({ item, editingId, handleEditClick, handleSaveClick, handleDeleteClick }) {
    return (
        <div className="todo w-1/2 flex  justify-end my-5 ">
            <div className="buttons flex">
                {!item.isCompleted ?
                    editingId !== item.id ?
                        < button onClick={(e) => handleEditClick(e, item.id)} className="bg-violet-400 hover:bg-violet-700 p-2 px-2 text-sm font-bold text-white rounded-md mx-1 my-1">✍️</button>
                        : < button onClick={() => {
                            if (item.todo != "") {
                                handleSaveClick()
                            }

                        }} className="bg-green-400 hover:bg-violet-700 p-2 px-2 text-sm font-bold text-white rounded-md mx-1 my-1">✔️</button> :

                    < button disabled className="bg-violet-400 p-2 px-2 text-sm font-bold text-white rounded-md mx-1 my-1">👍</button>}

                <button onClick={(e) => handleDeleteClick(e, item.id)} className="bg-violet-400 hover:bg-violet-700 p-2 px-2 text-sm font-bold text-white rounded-md mx-1 my-1">❌</button>
            </div>
        </div>
    );

}

export default Buttons;