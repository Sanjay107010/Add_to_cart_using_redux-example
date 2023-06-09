import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Cardsdata from "./CardsData";
import "../component/style.css";
import { useDispatch } from "react-redux";
import { Add } from "../redux/action/action";

const Cards = () => {
  const [data, setData] = useState(Cardsdata);

  const dispatch = useDispatch();
  const send = (e) => {
    // console.log("send data ", e);
    dispatch(Add(e));
  };
  return (
    <div className="container mt-3">
      <h2 className="text-center">ADD to Cart project</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {data.map((element, id) => {
          return (
            <>
              <Card
                style={{ width: "22rem", border: "none" }}
                className="mx-2 mt-2 card_style "
              >
                <Card.Img
                  variant="top"
                  src={element.imgdata}
                  style={{ height: "16rem" }}
                  className="mt-3"
                />
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>price: ₹ {element.price}</Card.Text>
                  <div className="botton_div d-flex justify-content-center">
                    <Button
                      variant="primary"
                      className="col-lg-12"
                      onClick={() => send(element)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
