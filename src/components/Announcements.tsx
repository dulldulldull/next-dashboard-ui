const Announcements = () => {
  return (
    <div className="bg-white rounded-md p-4">
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Announcements</h1>
            <span className="text-gray-400 text-xs">View All</span>
        </div>
        <div className="flex flex-col gap-4 mt-4">
            <div className="bg-lamaSkyLight rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Text of the announcement </h2>
                    <span className="text-gray-400 text-xs bg-white rounded-md px-1 py-1">2024-01-01</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">Description of the announcement goes here</p>
            </div>
            <div className="bg-lamaPurpleLight rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Text of the announcement </h2>
                    <span className="text-gray-400 text-xs bg-white rounded-md px-1 py-1">2024-01-01</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">Description of the announcement goes here</p>
            </div>
            <div className="bg-lamaYellowLight rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Text of the announcement</h2>
                    <span className="text-gray-400 text-xs bg-white rounded-md px-1 py-1">2024-01-01</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">Description of the announcement goes here</p>
            </div>
        </div>
    </div>
  )
}

export default Announcements