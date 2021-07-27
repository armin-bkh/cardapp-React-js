import React from "react";
import { RiCarLine, RiShoppingCartLine } from "react-icons/ri";

const CardComponent = ({
  detail,
  location,
  index,
  garage,
  market,
  classes,
  img,
}) => {
  return (
    <article className={classes.style}>
      <header className={classes.imgBox}>
        <img className={classes.img} src={img} alt="card-image" />
      </header>
      <div className={classes.bodyCard}>
        <h5 className={classes.detail}>
          {detail}
          <br />
          {location}
        </h5>
        <span className={classes.badge}>{index}</span>
      </div>
      <footer className={classes.subTitle}>
        <span>
          {garage}
          <i className={classes.icon}>
            <RiCarLine />
          </i>
        </span>
        <span>
          {market}
          <i className={classes.icon}>
            <RiShoppingCartLine />
          </i>
        </span>
      </footer>
    </article>
  );
};

export default CardComponent;
