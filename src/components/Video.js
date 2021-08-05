import React from 'react'

export default function Video({ embedUrl }) {
    return (
        <iframe
            width="919"
            height="525"
            src={embedUrl}
            frameborder="0"
            allowfullscreen
            title="Thinking in React"
        />
    )
}
