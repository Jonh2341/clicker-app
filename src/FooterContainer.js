import "./App.css";
import { useState } from "react";
import $ from "jquery";

function FooterContainer({ counterUp, click, counter, level, achive }) {
    const [isContain, contain] = useState(false);

    const doublePoints = function() {
        alert('double!')
    }

    const toggleShop = (isOpen) => {
        let containerShop = $('.footerContainer');
        let btnDouble = $('.btn-double');
        let shop = $('.shop');

        if (isOpen) {
            shop.addClass('shop-open top-[-40px]');
            containerShop.addClass('items-start bg-light-grey-app').removeClass('items-end');
            btnDouble.removeClass('hidden');
        } else {
            shop.removeClass('shop-open top-[-40px]');
            containerShop.addClass('items-end').removeClass('items-start bg-light-grey-app');
            btnDouble.addClass('hidden');
        }

        console.log(containerShop[0].classList);
    }

    const openShop = function () {
        toggleShop(true);
        contain(true);
    }

    const closeShop = function() {
        toggleShop(false);
        contain(false);
    }

    const handleClickShop = function () {
        if (isContain) {
            closeShop();
        } else {
            openShop();
        }
    }

    return (
        <div className="footerContainer relative w-full h-[210px] flex pb-[15px] bg-grey-app text-white items-end justify-items-center text-center">
            <span className="shop left-[50%] border-b absolute border-white cursor-pointer" onClick={handleClickShop}>shop</span>
            <button type="button" className="btn-double bg-grey-app self-center mx-auto hidden" onClick={doublePoints}>double</button>
        </div>
    );
}

export default FooterContainer;
