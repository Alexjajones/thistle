import React, { Component } from 'react'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'

const Container = (props) => (
    <div>
        <Header />
        <Menu />
        {props.children}
        <Footer />
    </div>
);

export default Container