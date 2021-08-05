import Comment from './Comment'
import { useState, useRef } from 'react'

export default function CommentList({ comments }) {
    const [votes, setVotes] = useState(comments.map((comment) => ({ ...comment, upvotes: 0, downvotes: 0, voted: null })))
    const [hideComments, setHideComments] = useState(true)
    const [search, setSearch] = useState("")
    const sort = useRef("acending")
    function handleHideComments() {
        setHideComments(prev => !prev)
    }

    function doSearch(e) {
        setSearch(prev => e.target.value)
    }
    function deleteComment(id) {
        setVotes(prev => prev.filter((comment) => comment.id !== id))
    }
    function handleSort() {

        if (sort.current === 'acending') {
            sort.current = 'decending'
            setVotes(prev => [].concat(prev)
                .sort((a, b) => a.user > b.user ? 1 : -1)
                .map((item) => item
                ))
        } else {
            if (sort.current === 'decending') {
                sort.current = 'acending'
                setVotes(prev => [].concat(prev)
                    .sort((a, b) => a.user < b.user ? 1 : -1)
                    .map((item) => item
                    ))
            }
        }


    }
    const itemsToDisplay = votes.filter((item) => item.user.toLowerCase().includes(search.toLowerCase()));
    return (
        <div>
            <button onClick={handleHideComments}>{hideComments ? "show comments" : "hide comments"}</button>
            <h2>{votes.length + " "}comments</h2>
            <button onClick={handleSort}>{sort.current === 'decending' ? "Alphabetic Acending" : "Alphabetic Decending"}</button>
            <input name='search' type='text' onChange={doSearch} placeholder="search" />
            {hideComments ? null : itemsToDisplay.map((comment) => <Comment key={comment.id} handleDelete={deleteComment} comment={comment} setVotes={setVotes} />)}
        </div>
    )
}
