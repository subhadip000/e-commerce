import React from 'react'
import arrow from '../images/arrow.png'
import add from '../images/add.png'
import controller from '../images/controller.png'

function Body() {

    function handleAddToCart() {
        document.querySelector('.cart').style.display ="block";
       setTimeout(removeCart,1000);
    }
    function removeCart() {
       document.querySelector('.cart').style.display = "none";
     }

    return (
        <>
        <div className="cart">Item Added to cart</div>
        <div className="row">
            <div className="col-1">
                <h2>PS4 V2 <br></br>Dualshock 4</h2>
                <h3>Wireless Controller for PlayStation 4</h3>
                <p>(Compatible/Generic)</p>
                <h4>$32.50</h4>
                <button type="button">Buy Now<img src={arrow} alt=""/></button>
            </div>
            <div className="col-2">
                <img src={controller} alt="" className="controller"/>
                <div className="color-box"></div>
                <div className="add-btn">
                    <img src={add} alt="" onClick={handleAddToCart}/>
                    <p><small>Add to Cart</small></p>
                </div>
            </div>
        </div>

        </>
    )
}

export default Body