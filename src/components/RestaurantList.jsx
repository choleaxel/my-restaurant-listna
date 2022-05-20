import React, { useEffect, useState } from "react";
import { Col, Row, Card } from "antd";

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
    <section>
      <Row gutter={16}>
        {!restaurants ? ( //conditional rendering, showing something while loading
          <h2> Loading...</h2>
        ) : (
          restaurants.map(
            (restaurant) => (
              <Col style={{ width: "300px" }} key={restaurant.id}>
                <Card title={restaurant.name} 
                hoverable>
                  <p>{restaurant.address}</p>
                </Card>
              </Col>
            )

            // dont forget the key
          )
        )}
      </Row>
    </section>
  );
}

export default RestaurantList;
