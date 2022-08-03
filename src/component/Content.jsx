import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import SearchForm from "./SearchForm";

function Content() {
  const [news, setNews] = useState([]);
  const [term, setTerm] = useState("sports");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getNews();
  }, [term]);

  const getNews = async () => {
    try {
      const { data } = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${process.env.REACT_APP_API_KEY}`
      );
      // const news = await data.json();
      console.log(data.response.docs);
      setNews(data.response.docs);
      // console.log(data.response.docs);
      // setNews(data.response);
      setIsLoading(false);
    } catch (error) {
      console.log(error, "<= error iNews");
    }
  };

  return (
    <>
      <div className="showcase">
        <div className="overlay">Cari Artikel Berita {term}</div>
        <SearchForm searchText={(text) => setTerm(text)} />
      </div>

      {isLoading ? (
        <h1 className="text-center">Loading</h1>
      ) : (
        <section>
          {news.map((berita) => {
            const {
              abstract,
              headline: { main },
              byline: { original },
              lead_paragraph,
              news_desk,
              section_name,
              web_url,
              _id,
              word_count,
            } = berita;

            return (
              <Card border="light" className="mt-2" key={_id}>
                <Card.Header>{main}</Card.Header>
                <Card.Body>
                  <Card.Title>{abstract}</Card.Title>
                  <p>{lead_paragraph}</p>
                  <p>{original}</p>
                  <p>News Desk: {news_desk}</p>
                  <p>
                    <b>Section Name : </b>
                    {section_name}
                  </p>
                  <p>Word Count : {word_count}</p>
                  <a href={web_url} target="#">
                    Selengkapnya..
                  </a>
                </Card.Body>
              </Card>
            );
          })}
        </section>
      )}
    </>
  );
}

export default Content;
