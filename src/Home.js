import { useEffect, useState } from "react";
import QuoteDetails from "./QuoteDatails";
import Navbar from "./Navbar";
import QuoteList from "./QuoteList";
import loading from "./loading.png";
import data from "./data/db.json";

const Home = () => {
    const [quotes, setQuotes] = useState(null);
    const [isLoading, setIsLoading,] = useState(true);
    const [allQuotes, setAllAuotes] = useState("allquote");

    const randomNumber = Math.ceil(Math.random() * 7);

    const handleClick = (e) => {
        const author = e.target.children[0].textContent;
        const indQuote = data.quote.filter(quote => quote.author === author);
        setQuotes(indQuote);
        setAllAuotes("");
    }
    
    useEffect(() => {
        // don't this on a real world project
        // this is just to simualte a the ideal of making real request
        // you are just causing your users to wait additional 1s when they don't need to
        setTimeout(() => {
            setQuotes(data.quote);
            setIsLoading(false);
        }, 1000)
    }, []);

    return (
        <div className="home">
            <Navbar />
            {isLoading && <div className="loading"> <img src={loading} alt="loading..." /> </div>}
            {quotes && allQuotes === "allquote" ? <QuoteDetails quotes={quotes.filter(quote => quote.id === randomNumber)} handleClick={handleClick} /> : null}
            {quotes && allQuotes === "" ? <QuoteList quotes={quotes} /> : null}
        </div>
    );
}
 
export default Home;
