import { useState } from 'react'
import VoteButtons from './VoteButtons'

export default function VideoInfos({ title, views, createdAt, upvotes, downvotes }) {
    const [votes, setVotes] = useState([{ id: 0, upvotes: upvotes, downvotes: downvotes, voted: null }])
    console.log(votes[0].upvotes)
    return (
        <div>
            <h1>{title}</h1>
            <span>
                <small>{views}Views</small>
                {' | '}
                <small>Uploaded At{createdAt}</small>
            </span>
            <br />
            <VoteButtons id={0} upvotes={votes[0].upvotes} downvotes={votes[0].downvotes} vote={votes[0].voted} setVotes={setVotes} />
        </div>
    )
}
