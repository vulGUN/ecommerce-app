import React from "react";
import "view/app-components/MainPage/style.scss";
import "react-toastify/dist/ReactToastify.css";
import Text from "shared/components/Text/text";
import { Button } from "shared/components/button/Button";
import { NavLink } from "react-router-dom";

// import { Button } from "shared/components/button/Button";
// import { NavLink } from "react-router-dom";

export default function MainPage() {
    return (
        <div className="main-part">
            {/* <div className="some-content" style={{ maxWidth: "40%", marginLeft: "3rem" }}>
                <NavLink to="/registration">
                    {" "}
                    <Button
                        type="button"
                        text="Sign up"
                        textClasses={["space-grotesk-500-font", "font-size_2xl", "color_white"]}
                        buttonClasses="button"
                    />
                </NavLink>
                <NavLink to="/login">
                    <Button
                        type="button"
                        text="Sign in"
                        textClasses={["space-grotesk-500-font", "font-size_2xl", "color_white"]}
                        buttonClasses="button"
                    />
                </NavLink>
                <NavLink to="/profile">
                    <Button
                        type="button"
                        text="Profile"
                        textClasses={["space-grotesk-500-font", "font-size_2xl", "color_white"]}
                        buttonClasses="button"
                    />
                </NavLink>
            </div> */}
            <div className="containter">
                <div className="main-part__info">
                    <div>
                        <Text classes={["inter-600-font", "font-size_m"]}>New Arrivals</Text>
                    </div>
                    <div>
                        <Text
                            classes={[
                                "space-grotesk-500-font",
                                "font-size_heading-3",
                                "page-title",
                            ]}
                        >
                            Create your dream shop instantly.
                        </Text>
                    </div>
                    <div>
                        <Text classes={["inter-400-font", "font-size_l"]}>
                            Keep your everyday style chic and on-trend with our selection 20+ styles
                            to choose from.
                        </Text>
                    </div>
                </div>

                <NavLink to="/shop">
                    <Button
                        type="button"
                        text="See Collection"
                        textClasses={["space-grotesk-500-font", "font-size_l", "color_white"]}
                        buttonClasses="button-shop"
                    />
                </NavLink>
            </div>
        </div>
    );
}
