import React, { useState } from "react";
import "./Home.css";
import SkizaTune from "./SkizaTunes";
import "font-awesome/css/font-awesome.min.css";
import SearchBarToggle from "./SearchBarToggle";

const Home = () => {
  const skizaTunesData = [
    {
      title: "Konon",
      skizaCode: "1234567",
      price: "KES 10",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShKBYj9MVNJsjFgktPPqeJqRy1SKsQjL1zaQ&usqp=CAU",
      audioUrl: "https://example.com/audio1.mp3", // Replace with actual audio URL
    },
    {
      title: "ex",
      skizaCode: "7654321",
      price: "KES 15",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEsyVBRhEW5O03qsUTjuJCJlolhlXYTI144w&usqp=CAU",
      audioUrl: "https://example.com/audio2.mp3", // Replace with actual audio URL
    },
  ];

  const [filteredSkizaTunes, setFilteredSkizaTunes] = useState(skizaTunesData);
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Moved this state up

  const handleSearch = (searchTerm) => {
    const filteredTunes = skizaTunesData.filter((tune) =>
      tune.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSkizaTunes(filteredTunes);
  };

  const toggleSearchBar = () => {
    setSearchBarVisible(!searchBarVisible);
  };

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    handleSearch(newSearchTerm); // Call the handleSearch function to filter Skiza tunes
  };

  return (
    <div className="home-container">
      <section className="sect">
        <h1>
          <img
            src="https://ahadisentistreamltd.co.ke/wp-content/uploads/2022/09/sentilogo.png"
            alt="Website Title"
            className="website-title-image"
          />
        </h1>
        <div className="serm">
          <SearchBarToggle onSearch={handleSearch} />
          <div className="menu">
            <div className="menu-icon">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="menu-icon">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="menu-icon">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
      <h3 className="text">
        <section className="text2">
          <p>Find Skiza </p>
          <p>Tunes From</p>
          <p>Artists You love</p>
        </section>
        <img
          className="img"
          src="https://images.pexels.com/photos/8412414/pexels-photo-8412414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Microphone"
        />
      </h3>

      <div className="skiza-tune-list">
        {filteredSkizaTunes.map((tune, index) => (
          <SkizaTune
            key={index}
            title={tune.title}
            skizaCode={tune.skizaCode}
            price={tune.price}
            imageUrl={tune.imageUrl}
            audioUrl={tune.audioUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
