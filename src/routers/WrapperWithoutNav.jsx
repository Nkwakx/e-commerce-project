import React from 'react'
import Footer from '../components/navigation/Footer';
import ScrollToTopBtn from '../components/scroll/ScrollToTop'

export default function WrapperWithoutNav({ body }) {
    return (
        <>
            {body}
            <ScrollToTopBtn />
            <Footer year={new Date().getFullYear()}/>
        </>
    )
}
