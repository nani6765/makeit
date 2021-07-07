import React, { useState, useEffect } from 'react'
import Avatar from "react-avatar";
import { RerepleContentGrid } from '../../css/CommunityDetailElement.js';

function RerepleContent(props) {

    const [rereple, setrereple] = useState(props.rereple);

    useEffect(() => {
        console.log(rereple)
    }, [])

    return (
        <RerepleContentGrid>
            <div className="content">
                {<div className="avatar">
                    <Avatar
                        src={rereple.avatar}
                        size="50"
                        round={true}
                        style={{ border: "1px solid #c6c6c6" }}
                    />
                </div>}
                <p className="author">{rereple.name}</p>
                <p className="desc">{rereple.content}</p>
            </div>
        </RerepleContentGrid>
    )
}

export default RerepleContent
