import React, { useState, useEffect, useReducer, useContext } from "react";
import BtnComponent from "./BtnComponent";
import "./App.scss";
import CardComponent from "./CardComponent";
import Data from "./data";
import {CSSTransition} from 'react-transition-group';
import './Animation.scss';

function App() {
  const [counter, setCounter] = useState(0);
  const [card, setCard] = useState(Data[counter]);

  useEffect(() => {
    if (counter >= 0 && counter < Data.length) {
      setCard(Data[counter]);
    }
  }, [counter]);

  const nextHandler = () => {
    setCounter((prevState) => {
      if(prevState < 3) return prevState + 1;
      else return prevState;
    });
  };
  const prevHandler = () => {
    setCounter((prevState) => {
      if(prevState > 0) return prevState - 1;
      else return prevState;
    });
  };

  return (
    <section>
        <CardComponent
          detail={card.detail}
          location={card.location}
          index={card.index}
          garage={card.garage}
          market={card.market}
          img={card.src}
          classes={{
            card: "card",
            imgBox: "imgBox",
            img: "img",
            bodyCard: "bodyCard",
            detail: "detail",
            badge: "badge",
            subTitle: "subTitle",
            icon: "icon",
            style: card.animateStyle,
          }}
        />
      <article className="btnContainer">
      <BtnComponent
          classes="btnComponent"
          innerTxt="prev"
          event={prevHandler}
        />
        <BtnComponent
          classes="btnComponent"
          innerTxt="next"
          event={nextHandler}
        />
      </article>
    </section>
  );
}

export default App;