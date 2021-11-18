import React from "react"
import { Link } from "react-location"

const Card = ({ post, readMore }: any) => {
    return (
        <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 transform transition duration-500 hover:scale-110" key={post.id}>
            <div>
                <h2 className="text-gray-800 text-3xl font-bold">{post.title}</h2>
                <p className="mt-2 text-gray-600">{post.body}</p>
            </div>
            {readMore &&
                <div className="flex justify-end mt-4">
                    <Link to={`/single/${post.id}`} className="text-xl font-medium text-indigo-500">View More</Link>
                </div>
            }
        </div>
    )
}

export { Card }