import React from 'react'

export default function CommentList({ comments }) {
  return (
    <ul>
      {
        comments.map((entry, i) => (
          <li key={`response-${i}`}>
            <p>{entry.name}</p>
            <p>{entry.content}</p>
          </li>
        ))
      }
    </ul>
  )
}