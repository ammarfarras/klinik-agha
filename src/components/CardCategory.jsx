import axios from "axios";
import { useEffect, useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./../styles/category-doctor.css";
import { Link } from "react-router-dom";
import Card1 from "../assets/card-1.png"
import Card2 from "../assets/card-2.png"
import Card3 from "../assets/card-3.png"

import AOS from "aos";
import "aos/dist/aos.css";
import JadwalDokter from "./JadwalDokter";

const cards = [
  {
    category: "Poli Umum",
    image: Card1,
    name: "Poli Umum",
    id: "1",
  },
  {
    category: "Poli Kandungan",
    image: Card2,
    name: "Poli Kandungan",
    id: "2",
  },
  {
    category: "Poli Gigi",
    image: Card3,
    name: "Poli Gigi",
    id: "3",
  },
];

function CardCategory() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleCategoryClick = (categoryId, category) => {
    // Store the selected category in local storage
    localStorage.setItem(
      "selectedCategory",
      JSON.stringify({ id: categoryId, name: category })
    );
  };

  return (
    <>
      {cards.map((item) => (
        <Col
          md={3}
          key={item.id}
          id="col-card"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <Link
            to={`/paymentdoctor`}
            key={item.id}
            fluid="true"
            onClick={() => handleCategoryClick(item.id, item.category)}
          >
            <div>
              <Card className="card" id="card">
                <div id="gradient-bg"></div>
                <Card.Img
                  src={item.image}
                  id="card-category-image"
                  className=""
                />
              </Card>
            </div>
          </Link>
        </Col>
      ))}

      <div>
        <JadwalDokter />
      </div>
    </>
  );
}

export default CardCategory;
