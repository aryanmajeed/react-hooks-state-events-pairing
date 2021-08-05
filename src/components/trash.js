const [votes, setVotes] = useState({ voted: null, upvotes: video.upvotes, downvotes: video.downvotes })

function handleVoteChange(voted, setState, action) {
    console.log(action)
    if (voted === null) {
        if (action === "increase")
            setState(prev => ({ voted: "up", upvotes: prev.upvotes + 1, downvotes: prev.downvotes }))
        else
            setState(prev => ({ voted: "down", upvotes: prev.upvotes, downvotes: prev.downvotes + 1 }))
    }
    if (voted === "down") {
        if (action === "increase")
            setState(prev => ({ voted: 'up', upvotes: prev.upvotes + 1, downvotes: prev.downvotes - 1 }))
    }
    if (voted === "up") {
        if (action === "decrease")
            setState(prev => ({ voted: 'down', upvotes: prev.upvotes - 1, downvotes: prev.downvotes + 1 }))
    }
}