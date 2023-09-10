/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useRef, useState } from "react";
import BasketService from "service/BasketService/BasketService";
import Text from "shared/components/Text/text";
import TableHead from "view/app-components/BasketPage/TableHead/TableHead";
import BasketItems from "view/app-components/BasketPage/BasketItems";
import { Button } from "shared/components/button/Button";
import { NavLink } from "react-router-dom";

export type BasketResponseType = {
    type: string;
    id: string;
    version: number;
    createdAt: string;
    lastModifiedAt: string;
    lastModifiedBy: {
        isPlatformClient: false;
    };
    createdBy: {
        isPlatformClient: false;
    };
    lineItems: LineItemsType[];
    cartState: string;
    totalPrice: {
        type: string;
        currencyCode: string;
        centAmount: number;
        fractionDigits: number;
    };
    shippingMode: string;
    shipping: [];
    customLineItems: [];
    discountCodes: [];
    directDiscounts: [];
    inventoryMode: string;
    taxMode: string;
    taxRoundingMode: string;
    taxCalculationMode: string;
    refusedGifts: [];
    origin: string;
    itemShippingAddresses: [];
};

export type AttributeType = {
    name: string;
    value: {
        key: string;
        label: string;
    };
};

export type LineItemsType = {
    addedAt: string;
    discountedPricePerQuantity: [];
    id: string;
    lastModifiedAt: string;
    lineItemMode: string;
    name: { "en-US": string };
    perMethodTaxRate: [];
    price: {
        discounted: {
            discount: {
                id: string;
                typeId: string;
            };
            value: {
                centAmount: number;
                currencyCode: string;
                fractionDigits: number;
                type: string;
            };
        };
        id: string;
        value: {
            centAmount: number;
            currencyCode: string;
            fractionDigits: number;
            type: string;
        };
    };
    priceMode: string;
    productId: string;
    productKey: string;
    productSlug: { "en-US": string };
    productType: { typeId: string; id: string; version: number };
    quantity: number;
    state: [];
    taxedPricePortions: [];
    totalPrice: { type: string; currencyCode: string; centAmount: number; fractionDigits: number };
    variant: {
        assets: [];
        attributes: AttributeType[];
        id: 1;
        images: [
            {
                url: string;
            },
        ];
        key: "shoes_slippers_shoes_2_1";
        prices: [];
        sku: "shoes_slippers_shoes_2_1";
    };
};

function BasketPage() {
    const BASKET_SERVICE = useRef(new BasketService());
    const [basketData, setBasketData] = useState<BasketResponseType>();
    const [totalPrice, setTotalPrice] = useState<number>(0);

    const getBasket = useCallback(async () => {
        const basketResponse = await BASKET_SERVICE.current.getCartById();
        setBasketData(basketResponse);
        const totalPriceResult = basketData?.totalPrice?.centAmount;

        if (totalPriceResult) {
            setTotalPrice(totalPriceResult / 100);
        }

        console.log(basketResponse);
    }, [basketData?.totalPrice?.centAmount]);

    useEffect(() => {
        getBasket();
    }, [getBasket]);

    return (
        <div className="basket__container">
            <Text classes={["space-grotesk-500-font", "font-size_heading-3", "page-title"]}>
                Cart
            </Text>

            {basketData && basketData.lineItems.length !== 0 ? (
                <>
                    <Text
                        classes={[
                            "space-grotesk-500-font",
                            "font-size_heading-4",
                            "page-title",
                            "basket__total-price",
                        ]}
                    >
                        {`Total price: $ ${totalPrice}`}
                    </Text>
                    <TableHead />
                    <BasketItems basketResponse={basketData} getBasketHandler={getBasket} />
                </>
            ) : (
                <>
                    <div className="basket__empty-message">
                        <Text
                            classes={[
                                "space-grotesk-500-font",
                                "font-size_heading-4",
                                "page-title",
                            ]}
                        >
                            Ooops...Your basket is empty
                        </Text>
                    </div>
                    <div>
                        <NavLink to="/shop">
                            <Button
                                type="button"
                                text="See Collection"
                                textClasses={[
                                    "space-grotesk-500-font",
                                    "font-size_l",
                                    "color_white",
                                ]}
                                buttonClasses="button-shop"
                            />
                        </NavLink>
                    </div>
                </>
            )}
        </div>
    );
}

export default BasketPage;