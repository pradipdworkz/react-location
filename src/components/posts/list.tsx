import React from "react"
import { useMatch } from "react-location"
import type { LocationGenerics } from "../../router"
import { Card } from "./card"

const ListPost = () => {
    const { posts } = useMatch<LocationGenerics>().data

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => {
                return (
                    <Card post={post} readMore />
                )
            })}
        </div>
    )
}

export default ListPost