import React from "react";
import "view/app-components/Header/buttons/style.scss";

export function BasketButton() {
    return (
        <svg
            className="basket-button-box"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
        >
            <path
                className="basket-button"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.3075 6.99998C11.3075 6.82776 11.3947 6.46198 11.7486 6.1343C12.0904 5.81782 12.7518 5.47434 13.9998 5.47434C15.2478 5.47434 15.9093 5.81782 16.2511 6.1343C16.605 6.46198 16.6921 6.82776 16.6921 6.99998H18.3075C18.3075 6.39442 18.0447 5.59353 17.3486 4.94899C16.6404 4.29325 15.5518 3.85895 13.9998 3.85895C12.4478 3.85895 11.3593 4.29325 10.6511 4.94899C9.95497 5.59353 9.69214 6.39442 9.69214 6.99998H11.3075ZM11.3075 7V8.8202H16.6921V7H18.3075V8.8202H21.0819C21.5279 8.8202 21.8896 9.18182 21.8896 9.62789V20.661C21.8896 21.2954 21.6355 21.9024 21.1853 22.3489C20.7353 22.7953 20.1264 23.0449 19.4929 23.0449H8.37006C7.73652 23.0449 7.12763 22.7953 6.67767 22.3489C6.2275 21.9024 5.97339 21.2954 5.97339 20.661V9.62789C5.97339 9.18182 6.335 8.8202 6.78108 8.8202H9.69214V7H11.3075ZM9.69214 12.8333V10.4356H7.58877V20.661C7.58877 20.8627 7.66948 21.0575 7.81529 21.2021C7.96131 21.3469 8.16075 21.4295 8.37006 21.4295H19.4929C19.7022 21.4295 19.9016 21.3469 20.0477 21.2021C20.1935 21.0575 20.2742 20.8627 20.2742 20.661V10.4356H18.3075V12.8333H16.6921V10.4356H11.3075V12.8333H9.69214Z"
                fill="#121212"
            />
        </svg>
    );
}
