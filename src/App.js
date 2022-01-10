import "./App.scss";
import "./Modal.css";
import React, { useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Row from "./components/Row";
import Modal from "./components/modal/Modal";
 
// 動画
import Video from "./components/video_player/video";

function App() {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="app">
    {/* ナビ　*/}
    <Nav />
    {/* ナビ終了　*/}
    {/* ヘッダー　*/}
    <Header />
    {/* ヘッダー終了　*/}
    {/* 映画の画像配列　*/}
    <Row title="Netflix Originals" movieType="netflix-originals" />
    {/* <Row title="Trending Now" movieType="trending-now" />
    <Row title="Top Rated" movieType="top-rated" />
    <Row title="Action Movies" movieType="action-movies" />
    <Row title="Horror Movies" movieType="horror-movies" />
    <Row title="Romance Movies" movieType="romance-movies" /> */}
    </div>
  );
}

export default App;
