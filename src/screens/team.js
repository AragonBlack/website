import React from "react";
import styled from "styled-components";
import "normalize.css";
import theme from "../styles/theme";
import Screen from "../components/screen";
import Slider from "react-slick";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

export default class Two extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500
    };
    return (
      <Screen title="Team">
        <Container>
          <Carousel centered infinite arrows slidesPerPage={1}>
            <Card>
              <h3>Olivier Sarrouy</h3>
              <h4>Tech lead</h4>
              <p>
                Olivier has a Master degree in Computer Sciences from
                Centrale/Supélec. After graduatıng he worked on various open
                source projects before begınnıng a Ph.D ın philosophy. In 2015,
                he defended hıs Ph.D thesis in Communication Sciences on
                web-based decentralized organizations. He then worked as a
                Professor at University of Rennes 2 for three years discussing
                the economical, sociological and philosophical implications of
                distributed organizations and blockchain technologies. He has
                now resigned from academıa to work full time on the blockchain
                projects he leads.
              </p>
            </Card>
            <Card>
              <h3>Cem Dagdelen</h3>
              <h4>Strategy lead</h4>

              <p>
                With a background in institutional Investment Banking, Cem has
                worked on establishing and raising for EM ETFs. He won a
                Financial Innovation award in 2013 for designing a borderless
                credit system. After working on startup financing advisory, Cem
                co-founded Horatii Partners, a research/advisory agency focused
                on distributed governance. Horatii Partners is currently focused
                on synthesizing and promoting use cases for DAOs and crypto
                economic primitives through mechanism design, business
                development and partnerships. Cem is also building
                “DAOincubator”, an ecosystem catalyst which aims to aggregate
                research, funding, and consulting which targets the betterment
                and implementation of DAO based initiatives. Cem is a
                competitive sailor since age 9 and writes about art philosophy
                and critique for a Turkish lifestyle magazine.
              </p>
            </Card>
            <Card>
              <h3>Alexandre Rouxel</h3>
              <h4>Research Lead</h4>

              <p>
                Co-founder of Pando, Alexandre was a research engineer and Ph.d
                student at university Rennes 2 where he studied the contemporary
                forms of our digital co-presences. Alexandre was a professor of
                communication sciences between Rennes and Paris for 4 years
                before leaving its teaching and research activities to fully
                devote itself to the possibilities opened up by blockchain
                technologies. Beside his work on the Decentralized Licence, he
                initiates partnerships to create labs that will soon be
                experimenting on Pando protocol.
              </p>
            </Card>
            <Card>
              <h3>Daniel Shavit / Research & Communityy</h3>
              <h4>Community Lead</h4>

              <p>
                Daniel has a degree in economics from Bocconi University and
                worked as a digital payments consultant advising entities such
                as Paypal, Mastercard, Unicredit and the Italian Banking
                Association on clearing and settlement systems. Daniel was a
                crypto-currency evangelist in the early days then he co-founded
                Horatii Partners. He researches decentralized governance
                focusing on the topics of protocolar governance as well as
                taxonomical classification, security and experimentation of DAOs
                to enable mass adoption by communities, productive organization
                and existing institutions.
              </p>
            </Card>
            <Card>
              <h3>Nolwenn Jollivet</h3>
              <h4>Editorial Manager</h4>
              <p>
                Co-founder of Pando, Nolwenn has a first master degree in
                History & Criticism of arts and a second in Publishing &
                Creative Economy. She worked several years in cultural
                management, visual art galleries and various festivals as team
                coordinator and executive assistant. As a result, she is
                experienced in pro cultural worlds. Beside her
                coordination/organisation role, she has been a small format
                editor for the two passed years and writes fiction in her free
                time.
              </p>
            </Card>
          </Carousel>
        </Container>
      </Screen>
    );
  }
}

const Container = styled.div`
  .BrainhubCarousel__arrows {
    background-color: transparent;
    span {
      border-color: ${theme.accent};
    }
  }
`;

const Card = styled.div`
  background-color: ${theme.card};
  border-radius: 2px;
  margin: auto 3em;
  padding: 1em;
  width: 100%;

  h3 {
    font-family: "Tungsten", sans-serif;
    font-size: 3em;
    text-transform: uppercase;
    line-height: 1em;
    /* color: rgba(47, 52, 52, 1); */
    margin-block-start: 0;
    margin-block-end: 0;
  }

  h4 {
    font-family: "Tungsten", sans-serif;
    font-size: 1.5em;
    text-transform: uppercase;
    /* color: rgba(47, 52, 52, 1); */
    color: ${theme.grey};
    margin-block-start: 0;
    margin-block-end: 0;
  }

  p {
    font-size: 0.85em;
    margin: 0;
    padding: 0;
  }
`;
