import Tasks from "./Tasks";
import Context from "./Context";
import Footer from "./Footer";

const Main = () => {
    return (
        <>
            <div className="main-container">
                <Tasks/>
                <Context/>
            </div>
            <Footer/>
        </>
    );
};

export default Main;
