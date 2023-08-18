import { useAuth } from "auth-context";
import React from "react";
// import { AuthDataStore } from "service/AuthDataStore";
import { AuthService } from "service/AuthService";
import "view/app-components/Header/buttons/style.scss";

export function LogoutButton() {
    const authContetxtApi = useAuth();
    // const AuthDataStoreApi = AuthDataStore.getAuthDataStore();
    const AuthServiceApi = new AuthService();

    const logoutHandler = async () => {
        localStorage.clear();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        await AuthServiceApi.createAnonymousToken();
        authContetxtApi?.setIsAuth(false);
    };

    return (
        <svg
            className="button-box"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            onClick={logoutHandler}
        >
            <path
                className="logout-button"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.06445 3.198C4.33511 3.198 3.63563 3.48773 3.11991 4.00345C2.60418 4.51918 2.31445 5.21865 2.31445 5.948V17.948C2.31445 18.6773 2.60418 19.3768 3.11991 19.8925C3.63563 20.4083 4.33511 20.698 5.06445 20.698H12.0645C12.7938 20.698 13.4933 20.4083 14.009 19.8925C14.5247 19.3768 14.8145 18.6773 14.8145 17.948V15.948C14.8145 15.5338 14.4787 15.198 14.0645 15.198C13.6502 15.198 13.3145 15.5338 13.3145 15.948V17.948C13.3145 18.2795 13.1828 18.5975 12.9483 18.8319C12.7139 19.0663 12.396 19.198 12.0645 19.198H5.06445C4.73293 19.198 4.41499 19.0663 4.18057 18.8319C3.94615 18.5975 3.81445 18.2795 3.81445 17.948V5.948C3.81445 5.61648 3.94615 5.29853 4.18057 5.06411C4.41499 4.82969 4.73293 4.698 5.06445 4.698H12.0645C12.396 4.698 12.7139 4.82969 12.9483 5.06411C13.1828 5.29854 13.3145 5.61648 13.3145 5.948V7.948C13.3145 8.36221 13.6502 8.698 14.0645 8.698C14.4787 8.698 14.8145 8.36221 14.8145 7.948V5.948C14.8145 5.21865 14.5247 4.51918 14.009 4.00345C13.4933 3.48773 12.7938 3.198 12.0645 3.198H5.06445ZM18.5948 8.41767C18.3019 8.12477 17.827 8.12477 17.5341 8.41767C17.2412 8.71056 17.2412 9.18543 17.5341 9.47833L19.2538 11.198H7.06445C6.65024 11.198 6.31445 11.5338 6.31445 11.948C6.31445 12.3622 6.65024 12.698 7.06445 12.698H19.2538L17.5341 14.4177C17.2412 14.7106 17.2412 15.1854 17.5341 15.4783C17.827 15.7712 18.3019 15.7712 18.5948 15.4783L21.5908 12.4823C21.6053 12.4681 21.6191 12.4533 21.6324 12.4378C21.7314 12.3233 21.79 12.186 21.8083 12.0444C21.8146 11.9954 21.8161 11.9462 21.8128 11.8974C21.801 11.7226 21.7283 11.5512 21.5948 11.4177L18.5948 8.41767Z"
                fill="#121212"
            />
        </svg>
    );
}
