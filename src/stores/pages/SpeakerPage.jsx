import React, { useState } from "react";
import { speakerData } from "../data/speaker";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
const SpeakerPage = () => {
  const [selectedSpeakers, setSelectedSpeakers] = useState([]);
  const companyHandler = (speaker) => {
    if (selectedSpeakers.includes(speaker)) {
      const aj = selectedSpeakers.filter((item) => item !== speaker);
      setSelectedSpeakers(aj);
    } else {
      setSelectedSpeakers([...selectedSpeakers, speaker]);
    }
  };

  const filteredSpeaker =
    selectedSpeakers.length === 0
      ? speakerData
      : speakerData.filter((item) => selectedSpeakers.includes(item.brand));

  return (
    <>
      <Navbar />
      <div className="full-page">
        <div className="pro-selected">
          {speakerData.map((speaker) => {
            return (
              <div key={speaker.id} className="p-2 mt-1">
                <label className="label-styling">
                  <input
                    type="checkbox"
                    checked={selectedSpeakers.includes(speaker.brand)}
                    onChange={() => companyHandler(speaker.brand)}
                  />
                  {speaker.brand}
                </label>
              </div>
            );
          })}
        </div>
        <div className="product-section">
          {filteredSpeaker.map((item) => {
            return (
              <div className="pageImg-div shadow rounded" key={item.id}>
                <Link
                  to={`/speakers/${item.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img
                    src={item.image}
                    alt="speaker"
                    className="image-styling"
                  />
                  <p>
                    {item.model},{item.brand}
                  </p>
                  <h6>Rs.{item.price}</h6>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SpeakerPage;
