function ProgressBar({ pendingCount, completedCount, todoList }) {
    return (

        <>
            {(pendingCount !== 0 || completedCount !== 0) ?
                <div className="w-full bg-red-600 rounded-full h-2 my-4">
                    <div
                        className="bg-green-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(completedCount / (todoList.length)) * 100}%` }}
                    ></div>
                </div> : <div></div>}
        </>);
}

export default ProgressBar;