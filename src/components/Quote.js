import React, {useMemo} from "react";

import HeaderArea from "./HeaderArea";
import { quotes } from "./quotes"

const Quote = ({ quoteHide, setQuoteHide }) => {
    const todayQuote = useMemo(() => {
        return quotes[parseInt(Math.random() * 10)]
    }, []);

    return(
        <div id="quote" className={["popup", quoteHide && "hidden"].join(" ")}>
            <HeaderArea onClick={setQuoteHide}></HeaderArea>
            <div className="popup-cont-area">
                <p id="quote-txt">{todayQuote.text}</p>
                <p id="quote-author">{todayQuote.author}</p>
            </div>
        </div>
    )
}

export default React.memo(Quote);