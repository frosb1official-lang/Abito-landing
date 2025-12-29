import { Header } from "../components/header/header"
import { Card } from "../components/Card/Card"
import { cardArray } from "../constants"
import { Side } from "../components/Side/Side"
import { sideArray } from "../constants"

export const Home = () => {
    return (
        <>
            <Header />

            <main>
                <section className="search">
                    <div className="container">
                        <div className="search-box">
                            <input type="text" />
                            <button className="btn btn-primary search-btn">
                                <img className="search-btn__icon" src="/images/Search.svg" alt="search" />
                                <span className="search-btn__text">Найти</span>
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <main>
                <section className="content">
                    <div className="container">
                        <div className="content-box">
                            <div className="content-main">

                                <h2 className="content-main__title">Рекомендации для вас</h2>
                                <div className="content-main__list">
                                    {
                                        cardArray.map(card => (
                                            <Card 
                                                key={card.id}
                                                title={card.title}
                                                price={card.price}
                                                address={card.address}
                                                date={card.date}
                                                img={card.img}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="content-side">
                                <h3 className="content-side__title">Сервисы и услуги</h3>

                                    {
                                        sideArray.map(side => (
                                            <Side 
                                                key={side.id}
                                                img={side.img}
                                                title={side.title}
                                                text={side.text}
                                            />

                                        ))    
                                    }
                                    <hr>
                                    </hr>

                                    <div className="content-side__footer">
                                        <p className="content-side__footer--item">
                                            © ООО «Абито», 2011–2021
                                        </p>
                                        <a href="#!" className="content-side__footer--item">
                                            Политика конфиденциальности
                                        </a>

                                        <a href="#!" className="content-side__footer--item">
                                            Обработка данных
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                </section>
            </main>
        </>
    )
}