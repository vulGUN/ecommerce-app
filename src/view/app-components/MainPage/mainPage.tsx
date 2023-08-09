import React from "react";
import "view/app-components/MainPage/style.scss";
import Header from "view/app-components/Header/Header";

export default function MainPage() {
    return (
        <div className="main-page">
            <div className="main-part">
                <Header />
                {/* some content start */}
                <h2 style={{ textAlign: "center" }}>MainPage</h2>
                <div className="some-contant" style={{ maxWidth: "40%", marginLeft: "3rem" }}>
                    <h4>New Arrivals</h4>
                    <h3>Create your dream shop instantly.</h3>
                    <p>
                        Keep your everyday style chic and on-trend with our selection 20+ styles to
                        choose from.
                    </p>
                    <button type="button">See Collection</button>
                    {/* some content end */}
                </div>
            </div>
            {/* some footer content start */}
            <footer
                style={{
                    textAlign: "center",
                    fontSize: "4rem",
                    border: "0.3rem solid black",
                    maxWidth: "1440px",
                    margin: "0 auto",
                }}
            >
                Some footer
            </footer>
            {/* some footer end */}
        </div>
    );
}