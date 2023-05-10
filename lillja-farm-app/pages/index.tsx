//import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

import React from 'react'
import styles from '../styles/Homepage.module.css' //'../styles/About.Module.css'

import Homepage from './home'
import AboutPage from './about'
import Contact from './contact'
import Products from './products'

import { FiGithub, FiInstagram } from 'react-icons/fi'
import { FaLinkedin, FaFacebook } from 'react-icons/fa'
import { ImStackoverflow, ImNpm } from 'react-icons/im'

export default function HomePage() {
    return (
        <div className={`${styles.container} bg-primary-background flex-1 scroll-smooth`}>
            <Head>
                <title className='text-lg text-primary-text'>Lillja Farm</title>
                <meta name="description" content="Lillja Farm Website" />
                <link rel="icon" href="/favicon.ico" />

            </Head>

            <NavBar />
            <main
                className={`${styles.main} px-8 md:px-20 scroll-smooth`} 
            >
                <Homepage />
                <Products />
                <AboutPage />
                {/* <Contact /> */}
                <Contact /> 
                <Footer />
                
            </main>
            
        </div>
    )
}

