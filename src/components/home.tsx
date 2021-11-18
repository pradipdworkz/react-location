import React from "react"
import { Link } from "react-location"

const HomePage = () => {
    return (
        <Link to="list" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
            Goto Posts list
        </Link>
    )
}

export default HomePage