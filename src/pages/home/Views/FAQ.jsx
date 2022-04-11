import React, { useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs';

import { NavLink } from 'react-router-dom';
import data from './FaqData'
import FaqInfo from './FaqInfo';

export default function FAQ({ title, info }) {

    const [questions, setQuestions] = useState(data)

    return (
        <>
            <div className="back-arrow"><NavLink to='/' title="Back - Home"><BsArrowLeft /></NavLink></div>

            <div className="faq">
                <h2 className="title">FAQs</h2>
                <section className='faq-container'>
                    {questions.map((question) => (
                        <FaqInfo key={question.id} {...question} />
                    ))}
                </section>
            </div>
        </>
    )
}
