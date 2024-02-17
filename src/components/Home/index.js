import { Component } from "react";
import Header from "../Header";
import Item from "../Item";
import "./index.css";

const itemsList = [
  {
    id: "1",
    image_url:
      "https://res.cloudinary.com/dv5f6io4i/image/upload/v1708148620/saleAssist%20Assignment/product%20items/jmdzsojyh0owrfadvqvp.png",
    title: "The Brown Metro Movers",
  },
  {
    id: 2,
    image_url:
      "https://res.cloudinary.com/dv5f6io4i/image/upload/v1708148857/saleAssist%20Assignment/product%20items/c7uq2bnlokrwojogzrmg.png",
    title: "The Metro Movers Black",
  },

  {
    id: 3,
    image_url:
      "https://res.cloudinary.com/dv5f6io4i/image/upload/v1708148863/saleAssist%20Assignment/product%20items/rhcwqm983sb3lzo8oh57.png",
    title: "The Metro Movers Black",
  },
  {
    id: 4,
    image_url:
      "https://res.cloudinary.com/dv5f6io4i/image/upload/v1708148868/saleAssist%20Assignment/product%20items/jd7xpkdifllnopqck8h9.png",
    title: "The Metro Movers Black",
  },
  {
    id: 5,
    image_url:
      "https://res.cloudinary.com/dv5f6io4i/image/upload/v1708148620/saleAssist%20Assignment/product%20items/jmdzsojyh0owrfadvqvp.png",
    title: "The Brown Metro Movers",
  },
  {
    id: 6,
    image_url:
      "https://res.cloudinary.com/dv5f6io4i/image/upload/v1708148857/saleAssist%20Assignment/product%20items/c7uq2bnlokrwojogzrmg.png",
    title: "The Metro Movers Black",
  },

  {
    id: 7,
    image_url:
      "https://res.cloudinary.com/dv5f6io4i/image/upload/v1708148863/saleAssist%20Assignment/product%20items/rhcwqm983sb3lzo8oh57.png",
    title: "The Metro Movers Black",
  },
  {
    id: 8,
    image_url:
      "https://res.cloudinary.com/dv5f6io4i/image/upload/v1708148868/saleAssist%20Assignment/product%20items/jd7xpkdifllnopqck8h9.png",
    title: "The Metro Movers Black",
  },
];

class Home extends Component {
  render() {
    return (
      <div className="bg">
        <Header />
        <ul className="items">
          {itemsList.map((each) => (
            <Item details={each} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
