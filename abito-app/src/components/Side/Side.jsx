import './Side.css'

export const Side = ({img, title, text}) => {
    return (
        <div className="content-side__box">
            <div className="content-side__list">
                <div className="content-side__list-item">
                    <img src={img} alt="info1" className="content-side__list-item--img" />
                    <h5 className="content-side__list-item--title">{title}</h5>
                    <p className="content-side__list-item--text">{text}</p>
                </div>
            </div>
        </div>    
    )
}