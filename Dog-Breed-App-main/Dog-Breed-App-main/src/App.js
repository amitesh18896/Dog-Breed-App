import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header'
import BreedGrid from './components/breeds/BreedGrid'
import Search from './components/ui/Search'
import './App.css';

const App = () => {
    const [items, setItems] = useState([])
    const [isloading, setisloading] = useState(true)
    const [query, setQuery] = useState('')

    useEffect(() => {
        const fetchItems = async() => {
            const result = await axios('https://api.thedogapi.com/v1/breeds?name=${query}')
            console.log(result.data);
            setItems(result.data.slice(0, 20))
            setisloading(false)
        }
        fetchItems()
    }, [query])
    return ( 
    <div className = "container" >
        <Header / >
        <Search getQuery = {
            (q) => setQuery(q) }
        /> <BreedGrid isloading = { isloading }
        items = { items }
        /> </div>
    );
}

export default App;