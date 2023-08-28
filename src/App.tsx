import React, { useEffect, useRef } from "react";
import Header from "view/app-components/Header/Header";
import Footer from "view/app-components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import MainPage from "view/app-components/MainPage/mainPage";
import LoginPage from "view/app-components/LoginPage/LoginPage";
import PageNotFound from "view/app-components/PageNotFound/pageNotFound";
import { AuthDataStore } from "service/AuthDataStore";
import { AuthService } from "service/AuthService";
import { useAuth } from "auth-context";
import RegistrationPage from "view/app-components/Registration/components/RegistrationPage";
import { ShopPage } from "view/app-components/ShopPage/ShopPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const { setIsAuth } = useAuth();
    const AuthServiceApi = useRef(new AuthService());
    const AuthDataStoreApi = useRef(AuthDataStore.getAuthDataStore());

    useEffect(() => {
        (async () => {
            const isAccessToken = AuthDataStoreApi.current.getAccessAuthToken();
            const isAnonToken = AuthDataStoreApi.current.getAnonymousAccessToken();

            if (!isAccessToken) {
                setIsAuth(false);

                if (!isAnonToken) {
                    await AuthServiceApi.current.createAnonymousToken();
                }
            } else {
                setIsAuth(true);
            }
        })();
    }, [setIsAuth]);

    return (
        <div>
            <Header />
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="registration" element={<RegistrationPage />} />
                <Route path="shop" element={<ShopPage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
