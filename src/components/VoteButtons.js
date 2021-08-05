import React from 'react'

export default function VoteButtons({ upvotes, downvotes, vote, setVotes, id }) {
    function handleVoteChange(id, action) {
        if (vote === null) {
            if (action === "increase")
                setVotes(prev => {
                    return prev.map((element) => {
                        if (element.id === id)
                            return { ...element, voted: "up", upvotes: element.upvotes + 1, downvotes: element.downvotes }
                        return element
                    })
                })
            else
                setVotes(prev => {
                    return prev.map((element) => {
                        if (element.id === id)
                            return { ...element, voted: "down", upvotes: element.upvotes, downvotes: element.downvotes + 1 }
                        return element
                    })
                })
        }
        if (vote === "down") {
            if (action === "increase")
                setVotes(prev => {
                    return prev.map((element) => {
                        if (element.id === id)
                            return { ...element, voted: "up", upvotes: element.upvotes + 1, downvotes: element.downvotes - 1 }
                        return element
                    })
                })
        }
        if (vote === "up") {
            if (action === "decrease")
                setVotes(prev => {
                    return prev.map((element) => {
                        if (element.id === id)
                            return { ...element, voted: "down", upvotes: element.upvotes - 1, downvotes: element.downvotes + 1 }
                        return element
                    })
                })
        }
    }
    return (
        <>
            <button onClick={() => handleVoteChange(id, 'increase')}>👍{upvotes}</button>
            <button onClick={() => handleVoteChange(id, 'decrease')}>👎{downvotes}</button>
        </>
    )
}
