import Comment from './Comment'
import { useState } from 'react'

export default function CommentList({ comments }) {
    const [votes, setVotes] = useState(comments.map((comment) => ({ ...comment, upvotes: 0, downvotes: 0, voted: null })))
    const [hideComments, setHideComments] = useState(true)
    function handleHideComments() {
        setHideComments(prev => !prev)
    }
    return (
        <div>
            <button onClick={handleHideComments}>{hideComments ? "show comments" : "hide comments"}</button>
            <h2>{votes.length + " "}comments</h2>
            {hideComments ? null : votes.map((comment) => <Comment key={comment.id} comment={comment} setVotes={setVotes} />)}
        </div>
    )
}
