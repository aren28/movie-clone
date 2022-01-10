import { useEffect, useState } from "react";
import React from "react";
import Modal from "./modal/Modal";

function Row(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()

  const { title, movieType } = props;
  useEffect(() => {
    fetch(
      "https://movie-clone-5695a-default-rtdb.firebaseio.com/movies/" +
        movieType +
        ".json"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="row">
        <h2>{title}</h2>
        <div className="row__posters">
          {items.map((item) => (
            <img
              className="row__poster row__posterLarge"
              src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
              alt={item.original_name}
              onClick={() => {
                const newLocal = true;
                setModalOpen(newLocal);
              }}
            />
          ))}
        </div>
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
      </div>
    );
  }
}

export default Row;
