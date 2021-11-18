import React from "react"
import { Link, useMatch } from "react-location"
import type { LocationGenerics } from "../../router"
import { Card } from "./card"

interface IPost {
    title: string,
    id: number,
    body: string
}

const SinglePost = () => {
    const { post } = useMatch<LocationGenerics>().data

    return (
        <div>
            <Link to="/list" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                {"<- Back"}
            </Link>
            <Card post={post} />
        </div>
    )
}

export default SinglePost