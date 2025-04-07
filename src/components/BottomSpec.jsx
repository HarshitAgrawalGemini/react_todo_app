function BottomSpecs({ completedCount, pendingCount }) {
    return (<div className="text-lg font-semibold text-purple-700 my-4">
        <span className="mr-6">✅ Completed: <span className="text-green-600">{completedCount}</span></span>
        <span>🕒 Pending: <span className="text-red-500">{pendingCount}</span></span>
    </div>);
}
export default BottomSpecs;