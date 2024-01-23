import React, { useContext } from "react";
import {WishlistContext} from "../../Context/WishlistContext";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Wishlist = () => {
  const { wishlist, deleteFromWishlist } = useContext(WishlistContext);
  return (
    
    <div>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>


      {wishlist &&
        wishlist.map((item) => (
          <div key={item._id}>
            <div>
              <h1>{item.title}</h1>
              <button onClick={() => deleteFromWishlist(item._id)}>Sil Wishlisden</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Wishlist;
