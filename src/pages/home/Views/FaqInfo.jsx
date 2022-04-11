import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';


export default function FaqInfo({ title, info }) {

    const [expanded, setExpanded] = useState(false)
    return (
        <>
            <div className="faq-section">
                <div className="question">
                    <h3 onClick={() => setExpanded(!expanded)}> {title}</h3>
                    <i onClick={() => setExpanded(!expanded)}>

                        {expanded ? <IoIosArrowDown /> : <i><IoIosArrowUp /></i>}

                    </i>
                </div>
                <div className="answer">
                    <p>
                        {expanded && <p>{info}</p>}
                    </p>
                </div>
            </div>
        </>
    )
}
