import "./App.css";
import { useState } from "react";
import $ from "jquery";

function FooterContainer() {

    const [isContain, contain] = useState(false);

    const toggleShop = (isOpen) => {
        let containerShop = $('.footerContainer');
        let shop = $('.shop');

        if (isOpen) {
            shop.addClass('shop-open top-[-40px]');
            containerShop.addClass('items-start bg-light-grey-app bg-gradient-to-t from-[#030202] to-[#595959] bg-opacity-50').removeClass('items-end');
        } else {
            shop.removeClass('shop-open top-[-40px]');
            containerShop.addClass('items-end').removeClass('items-start bg-light-grey-app bg-gradient-to-t from-[#030202] to-[#595959] bg-opacity-50');
        }

        console.log(containerShop[0].classList)
    }

    const openShop = function () {
        toggleShop(true)
        contain(true)
    }

    const closeShop = function() {
        toggleShop(false)
        contain(false)
    }

    const handleClickShop = function () {
        if (isContain) {
            closeShop()
        } else {
            openShop()
        }
    }

    return (
        <div className="footerContainer relative w-full h-[210px] flex pb-[15px] bg-grey-app text-white items-end justify-items-center text-center">
            <span className="shop left-[50%] border-b absolute border-white cursor-pointer" onClick={handleClickShop}>shop</span>
        </div>
    );
}

export default FooterContainer;