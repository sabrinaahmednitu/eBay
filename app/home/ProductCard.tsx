import React from 'react';

const ProductCard = () => {
    return (
      <div className="container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-[50px] mx-auto">
        {/* card-1 */}
        <div className="card lg:card-side bg-base-100 shadow-sm">
          <figure>
            <img
              src="https://i.ebayimg.com/images/g/IxQAAeSwMW1pTYlE/s-l1600.webp"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
        {/* card-2 */}
        <div className="card lg:card-side bg-base-100 shadow-sm">
          <figure>
            <img src="https://i.ebayimg.com/images/g/lIcAAeSwl6FpUTTd/s-l1600.webp" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
        {/* card-3 */}
        <div className="card lg:card-side bg-base-100 shadow-sm">
          <figure>
            <img
              src="https://i.ebayimg.com/images/g/IxQAAeSwMW1pTYlE/s-l1600.webp"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
        {/* card-4 */}
        <div className="card lg:card-side bg-base-100 shadow-sm">
          <figure>
            <img
              src="https://i.ebayimg.com/images/g/lIcAAeSwl6FpUTTd/s-l1600.webp"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
        {/* card-5 */}
        <div className="card lg:card-side bg-base-100 shadow-sm">
          <figure>
            <img
              src="https://i.ebayimg.com/images/g/lIcAAeSwl6FpUTTd/s-l1600.webp"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
        {/* card-6 */}
        <div className="card lg:card-side bg-base-100 shadow-sm">
          <figure>
            <img
              src="https://i.ebayimg.com/images/g/IxQAAeSwMW1pTYlE/s-l1600.webp"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;