import { useEffect } from "react";
import Card from "./Card";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loderaction } from "../store/Loder";
import { cardAction } from "../store/CardSlice";
import Loderimage from "./Loderimage";
function Container() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cardData);
  const [error, setError] = useState(null);
  const isload=useSelector((state)=> state.Loder);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(loderaction.startLoading());
    fetch("https://dummyjson.com/products", { signal })
      .then((res) => res.json())
      .then((data) => {
        dispatch(cardAction.addToCard(data.products));
        dispatch(loderaction.endLoading());
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError("Network Error! Refresh the page.");
          dispatch(loderaction.endLoading());
        }
      });

    return () => {
      controller.abort();
    };
  },[]);

  return (
    <main>
      <div className="items-container">
        {isload ? (
          <Loderimage />
        ) : (
          items.map((item) => {
            return <Card key={item.id} item={item}></Card>;
          })
        )}
        
        {error && (
          <div className="fetch-error" style={{ color: "#b00020", padding: "1rem" }}>
            {error}
          </div>
        )}
      </div>
    </main>
  );
}

export default Container;
