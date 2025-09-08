import log from "@/utils/log"
import React from "react"

const ListItems = async () => {
  const data = await fetch("https://api.vercel.app/blog")
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const posts: any = await data.json()
  /* log.warn(
    "registrando en un componente de tipo server, mientras hago un fetch",
    { posts }
  ) */

  return (
    <ul>
      {Array.isArray(posts) &&
        posts.map((post: { id: string | number; title: string }) => (
          <li key={post.id}>{post.title}</li>
        ))}
    </ul>
  )
}

export default ListItems
