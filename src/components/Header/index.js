import { Component } from "react";
import "./index.css";

const iconsList = [
  "https://res.cloudinary.com/dv5f6io4i/image/upload/v1708139459/saleAssist%20Assignment/header/a6uhx4tudw1w9epir12i.png",
  "https://res.cloudinary.com/dv5f6io4i/image/upload/v1708139469/saleAssist%20Assignment/header/suigffvzz7qtyz1qjvva.png",
  "https://res.cloudinary.com/dv5f6io4i/image/upload/v1708139477/saleAssist%20Assignment/header/iuxx7qbzoi9ii0mtvecl.png",

  "https://res.cloudinary.com/dv5f6io4i/image/upload/v1708139482/saleAssist%20Assignment/header/ggyofkkfcxzzwfmg7omm.png",
];

const bagsList = [
  {
    cat: "All Bags",
    imgLink:
      "https://res.cloudinary.com/dv5f6io4i/image/upload/v1708141739/saleAssist%20Assignment/Bags/aqnduzasgqetwcb9weqo.png",
  },
  {
    cat: "Vanity Pouch",
    imgLink:
      "https://res.cloudinary.com/dv5f6io4i/image/upload/v1708141727/saleAssist%20Assignment/Bags/ctlhrzhoyb96aqij9u0g.png",
  },
  {
    cat: "Tote Bag",
    imgLink:
      "https://res.cloudinary.com/dv5f6io4i/image/upload/v1708141717/saleAssist%20Assignment/Bags/ozyclahhofi4r9hnclmy.png",
  },
  {
    cat: "Duffle Bag",
    imgLink:
      "https://res.cloudinary.com/dv5f6io4i/image/upload/v1708141703/saleAssist%20Assignment/Bags/fuo8w6u05d5dzapjbcij.png",
  },
  {
    cat: "Laptop Sleeve",
    imgLink:
      "https://res.cloudinary.com/dv5f6io4i/image/upload/v1708141693/saleAssist%20Assignment/Bags/m2zbp5s84slzfiuanzsq.png",
  },

  {
    cat: "Slings Bags",
    imgLink:
      "https://res.cloudinary.com/dv5f6io4i/image/upload/v1708141668/saleAssist%20Assignment/Bags/ot6akguktp4szwn2mhwe.png",
  },
  {
    cat: "HandBags",
    imgLink:
      "https://res.cloudinary.com/dv5f6io4i/image/upload/v1708141658/saleAssist%20Assignment/Bags/h9fcznfgfkxmybdz3cvm.png",
  },
  {
    cat: "Buck Bag",
    imgLink:
      "https://res.cloudinary.com/dv5f6io4i/image/upload/v1708141646/saleAssist%20Assignment/Bags/lvandbw7kvtw3bny5l4e.png",
  },
];

class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav className="nav">
          <h2 className="name">TANN TRIM</h2>
          <ul className="icons">
            {iconsList.map((each) => (
              <li key={each}>
                <img src={each} alt="icon" />
              </li>
            ))}
          </ul>
        </nav>
        <ul className="categories">
          <li>Bags</li>
          <li>Travel</li>
          <li>Accessories</li>
          <li>Gifting</li>
          <li>Jewelery</li>
        </ul>
        <ul className="un">
          {bagsList.map((each) => (
            <li>
              <img src={each.imgLink} alt="bag" />
              <p>{each.cat}</p>
            </li>
          ))}
        </ul>
        <div className="line">
          <div className="avg">
            <p>Bag</p>
            <ul>
              <li>Back Packs</li>
            </ul>
          </div>
          <div className="avg">
            <p> 13 products </p>
            <img
              className="i"
              src="https://res.cloudinary.com/dv5f6io4i/image/upload/v1708147333/saleAssist%20Assignment/header/y8km1fr2sghggnvbj2gb.png"
              alt="icon"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
