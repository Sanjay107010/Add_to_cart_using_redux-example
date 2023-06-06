import { colors } from "@mui/material";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Del, Add, Remove } from "../redux/action/action";

const CradsDetails = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const { id } = useParams();
  const getdata = useSelector((state) => state.cartreduce.carts);
  //   console.log("get x data", getdata);
  const history = useNavigate();

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    });
    console.log("compare data::: id", comparedata);
    setData(comparedata);
  };
  useEffect(() => {
    compare();
  }, [id]);

  const dle = (id) => {
    dispatch(Del(id));
    history("/");
  };

  const send = (e) => {
    // console.log("send data ", e);
    dispatch(Add(e));
  };
  const remove = (item) => {
    dispatch(Remove(item));
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center">item Details </h2>
      <section className="container mt-3">
        <div className="iteamsdetails">
          {data.map((ele) => {
            return (
              <>
                <div className="items_img">
                  <img src={ele.imgdata} />
                </div>
                <div className="details">
                  <Table>
                    <tr>
                      <td>
                        <p>
                          <strong>Restaurant</strong>: {ele.rname}
                        </p>
                        <p>
                          <strong>Price</strong>: ₹ {ele.price}
                        </p>
                        <p>
                          <strong>Dishes</strong>: {ele.address}
                        </p>
                        <p>
                          <strong>Total</strong>: ₹ {ele.price * ele.qnty}
                        </p>
                        <div
                          className="mt-5 d-flex justify-content-between align-item-center"
                          style={{
                            width: 100,
                            cursor: "pointer",
                            backgroundColor: "#ddd",
                            color: "#111",
                          }}
                        >
                          <span
                            style={{ fontSize: 24 }}
                            onClick={
                              ele.qnty <= 1
                                ? () => dle(ele.id)
                                : () => remove(ele)
                            }
                          >
                            -
                          </span>
                          <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                          <span
                            style={{ fontSize: 24 }}
                            onClick={() => send(ele)}
                          >
                            +
                          </span>
                        </div>
                      </td>
                      <td>
                        <p>
                          <strong>Rating</strong>:
                          <span
                            style={{
                              backgroundColor: "green",
                              colors: "#fff",
                              padding: "2px 5px",
                              borderRadius: "5px",
                            }}
                          >
                            4.9 ★★★★★
                          </span>
                        </p>
                        <p onClick={() => dle(ele.id)}>
                          <strong>Remove : </strong>
                          <span
                            style={{
                              colors: "red",
                              padding: "2px 5px",
                              borderRadius: "5px",
                              cursor: "pointer",
                            }}
                          >
                            <i className="fas fa-trash "></i>
                          </span>
                        </p>
                      </td>
                    </tr>
                  </Table>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default CradsDetails;
