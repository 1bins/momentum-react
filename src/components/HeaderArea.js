const HeaderArea = ({onClick}) => {
    return(
        <div className="header-area">
            <button type="button" className="close-pop" onClick={() => onClick(true)}>❌</button>
        </div>
    )
}

export default HeaderArea;