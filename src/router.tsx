import React from "react"
import { Route, ReactLocation, MakeGenerics } from "react-location"
import { getPost, getPosts } from "./api/axios"
import { Post } from "./interfaces/post"


export const routes: Route[] = [
    {
        path: "/",
        element: () => import("./components/home").then(module => <module.default />)
    },
    {
        path: "/list",
        loader: async () => {
            return {
                posts: await getPosts()
            }
        },
        element: () => import("./components/posts/list").then(module => <module.default />)
    },
    {
        path: "/create",
        element: () => import("./components/posts/create").then(module => <module.default />)
    },
    {
        path: "/single",
        children: [
            {
                path: ":id",
                loader: async ({ params }) => {
                    return {
                        post: await getPost(Number(params.id))
                    }
                },
                element: () => import("./components/posts/single").then(module => <module.default />)
            }
        ]
    }
]

export type LocationGenerics = MakeGenerics<{
    LoaderData: {
        post: Post,
        posts: Post[]
    }
}>

export const location = new ReactLocation()

