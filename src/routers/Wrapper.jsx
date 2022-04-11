import React from 'react'
import Footer from '../components/navigation/Footer';
import NavBar from './../components/navigation/NavBar';
import ScrollToTopBtn from '../components/scroll/ScrollToTop'

export default function Wrapper({ body }) {
    return (
        <>
            <NavBar />
            {body}
            <ScrollToTopBtn />
            <Footer year={new Date().getFullYear()}/>
        </>
    )
}
