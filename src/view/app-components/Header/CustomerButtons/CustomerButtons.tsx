import React from "react";
import "view/app-components/Header/CustomerButtons/style.scss";
import { LogoutButton } from "view/app-components/Header/buttons/logoutButton";
import { BasketButton } from "view/app-components/Header/buttons/basketButton";
import QuantityItemsInBasket from "view/app-components/Header/buttons/quantityItemsInBasket";
import { NavLink } from "react-router-dom";
import { useAuth } from "auth-context";
import { UserButton } from "view/app-components/Header/buttons/userButton";

export function CustomerButtons() {
    const authContetxtApi = useAuth();

    return (
        <div className="customer-buttons">
            <NavLink to="/login" hidden={!!authContetxtApi?.isAuth}>
                <LogoutButton />
            </NavLink>
            <NavLink to="/profile/adresses" hidden={!authContetxtApi?.isAuth}>
                <UserButton />
            </NavLink>
            <BasketButton />
            <QuantityItemsInBasket />
        </div>
    );
}
