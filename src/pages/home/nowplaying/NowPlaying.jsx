import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const NowPlaying = () => {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(
    `/${endpoint}/${endpoint === "movie" ? "now_playing" : "on_the_air"}`
  );

  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };

  const carouselTitle = endpoint === "movie" ? "Now playing" : "On the air";

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">{carouselTitle}</span>
        <SwitchTabs data={["Movies", "Tv Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};

export default NowPlaying;
