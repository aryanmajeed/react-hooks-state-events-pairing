import VoteButtons from './VoteButtons'
export default function Comment({ comment, setVotes, handleDelete }) {
    return (
        <>
            <div key={comment.id}>
                <h3>{comment.user}</h3>{comment.comment}
                <span>{" "}<VoteButtons id={comment.id} upvotes={comment.upvotes} downvotes={comment.downvotes} vote={comment.voted} setVotes={setVotes} /></span>
                <button onClick={() => { handleDelete(comment.id) }}>Delete</button>
            </div>
        </>
    )
}
