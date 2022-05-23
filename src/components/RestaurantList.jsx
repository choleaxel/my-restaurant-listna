import React, { useEffect, useState } from "react";
import { Row } from "antd";
import RestaurantCard from "./RestaurantCard";

function RestaurantList() {
  const [restaurants, setRestaurants] = useState();
  useEffect(() => {
    //fetch our api
    fetch("https://my-first-firestore-na.web.app/restaurants")
      .then((response) => response.json())
      .then((data) => setRestaurants(data)) //data -> restaurants
      .catch(console.error);
  }, []);
  return (
    <section style={{ marginTop: '60px'}}>
      <Row>
        {!restaurants ?  //conditional rendering, showing something while loading
          <h2> Loading...</h2>
         : restaurants.map(restaurant => <RestaurantCard restaurant={restaurant} key={restaurant.id} />)}
      </Row>
    </section>
  );
}

export default RestaurantList;

//pulling in list of restaurants, adding the components in by importing them from their files
//line 17-19, waiting on restaurants to be defined (getting); while getting 'loading',
// is mapping through the list