import generate from "./arrow-repeat.svg";

const Navbar = () => {
    return (
        <div className="navbar">
            <button onClick={() => window.location.reload() }>
                random
                <img src={generate} alt="generate icon" />
            </button>
        </div>
    );
}
 
export default Navbar;