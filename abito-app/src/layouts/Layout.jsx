import { Outlet } from "react-router-dom"
import { Header } from "../components/header/Header"
import { useEffect, useState } from "react"
import { cardArray } from "../constants"

export const Layout = () => {
    const [searchText, setSearchText] = useState('')
    const [products, setProducts] = useState([])

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearchArray()
        }
    }

    const handleSearch = (event) => {
        setSearchText(event.target.value)
    }

    const handleLogoClick = () => {
        setSearchText('')
        setProducts(cardArray)
    }

    const handleSearchArray = () => {
        const q = String(searchText).trim().toLowerCase()
        if (!q) {
            setProducts(cardArray)
            return
        }

        setProducts(
            cardArray.filter((p) =>
                String(p.title).toLowerCase().includes(q)
            )
        )
    }

    useEffect(() => {
        setProducts(cardArray)
    }, [])

    return (
        <>
            <Header onLogoClick={handleLogoClick} />
            
            <main>
                <section className="search">
                    <div className="container">
                        <div className="search-box">
                            <input 
                                type="text"
                                placeholder="Поиск товаров"   
                                autoFocus    
                                value={searchText}
                                onChange={handleSearch}
                                onKeyDown={handleKeyPress}
                            />
                            <input type="submit" style={{display: "none"}} />
                            <button className="btn btn-primary search-btn" onClick={handleSearchArray}>
                                <img className="search-btn__icon" src="/images/Search.svg" alt="search" />
                                <span className="search-btn__text">Найти</span>
                            </button>
                        </div>
                    </div>
                </section>
                <Outlet context={{products}}/>
            </main>
        </>
    )
}