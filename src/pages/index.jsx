import React, { useEffect, useRef, useState } from "react";
import { InView } from "react-intersection-observer";
import styled from "styled-components";
import member3 from "../assets/images/alexandre.png";
import member9 from "../assets/images/billy.png";
import member2 from "../assets/images/cem.png";
import member4 from "../assets/images/daniel.png";
import member7 from "../assets/images/deam.png";
import member5 from "../assets/images/nolwenn.png";
import member1 from "../assets/images/olivier.png";
import member10 from "../assets/images/thibault.png";
import member6 from "../assets/images/xavier.png";
import hiringProcess from "../assets/images/hiring-process.png";
import Layout from "../components/Layout";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Woodmark from "../components/Woodmark";

const Content = props => {
  const [scrollIndex, setScrollIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const items = Array.from({ length: 5 }, () => useRef(null));

  useEffect(() => {
    if (scrollIndex !== 4 && window.location.hash === "#jobs") {
      setScrollIndex(4);
    }
  }, []);

  useEffect(() => {
    if (scrollIndex != null) {
      window.scroll({
        top: items[scrollIndex].current.offsetTop,
        left: 0,
        behavior: "smooth"
      });
      setScrollIndex(null);
    }
  });

  return (
    <Container>
      <Navigation
        currentIndex={currentIndex}
        setScrollIndex={idx => setScrollIndex(idx)}
      />

      <HeroSection ref={items[4]}>
        <Logo />
        <InView as="div" onChange={inView => inView && setCurrentIndex(null)}>
          <Woodmark />
        </InView>
      </HeroSection>

      <Section ref={items[0]}>
        <InView as="div" onChange={inView => inView && setCurrentIndex(0)}>
          <p>
            Aragon Black was the third full-team of the{" "}
            <a
              href="https://aragon.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aragon
            </a>{" "}
            project taking part in its fight for freedom and full
            decentralization.
          </p>
          <p>
            Aragon Black was the banner below which the Pando team had gathered
            to continue developing a decentralized VCS and a continuous
            fundraising scheme, to carry the Aragon manifesto’s values and
            finally to help in creating Aragon applications allowing human
            autonomy.
          </p>
          <p>Welcome</p>
        </InView>
        <div className="section-title">
          <h2>
            <span>
              What
              <br />
            </span>
            <span>
              was
              <br />
            </span>
            <span>
              Aragon
              <br />
            </span>
            <span>
              Black
              <br />
            </span>
          </h2>
        </div>
      </Section>

      <ProposalSection ref={items[2]}>
        <div id="proposal-video">
          <iframe
            style={{ overflow: "hidden", height: "100%", width: "100%" }}
            height="100%"
            width="100%"
            src="https://www.youtube-nocookie.com/embed/AqjIWmiAidw"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <InView as="div" onChange={inView => inView && setCurrentIndex(2)}>
          <div className="section-title">
            <h2>Values</h2>
          </div>
        </InView>
      </ProposalSection>

      <TeamSection ref={items[3]}>
        <InView as="div" onChange={inView => inView && setCurrentIndex(3)}>
          <div className="section-title">
            <h2>Team</h2>
          </div>
        </InView>
        <TeamContent>
          <Card>
            <img src={member1} alt="profile" />
            <h3>Olivier Sarrouy</h3>
            <h4>Tech Lead</h4>
            <p>
              Olivier has a Master degree in Computer Sciences from
              Centrale/Supélec. After graduatıng he worked on various open
              source projects before begınnıng a Ph.D ın philosophy. In 2015, he
              defended hıs Ph.D thesis in Communication Sciences on web-based
              decentralized organizations. He then worked as a Professor at
              University of Rennes 2 for three years discussing the economical,
              sociological and philosophical implications of distributed
              organizations and blockchain technologies. He has now resigned
              from academıa to work full time on the blockchain projects he
              leads.
            </p>
          </Card>
          <Card>
            <img src={member2} alt="profile" />
            <h3>Cem Dagdelen</h3>
            <h4>Strategy Lead</h4>
            <p>
              With a background in institutional Investment Banking, Cem has
              worked on establishing and raising for EM ETFs. He won a Financial
              Innovation award in 2013 for designing a borderless credit system.
              After working on startup financing advisory, Cem co-founded
              Horatii Partners, a research/advisory agency focused on
              distributed governance. Horatii Partners is currently focused on
              synthesizing and promoting use cases for DAOs and crypto economic
              primitives through mechanism design, business development and
              partnerships. Cem is also building “DAOincubator”, an ecosystem
              catalyst which aims to aggregate research, funding, and consulting
              which targets the betterment and implementation of DAO based
              initiatives. Cem is a competitive sailor since age 9 and writes
              about art philosophy and critique for a Turkish lifestyle
              magazine.
            </p>
          </Card>
          <Card>
            <img src={member3} alt="profile" />
            <h3>Alexandre Rouxel</h3>
            <h4>Research Lead</h4>
            <p>
              Co-founder of Pando, Alexandre was a research engineer and Ph.d
              student at university Rennes 2 where he studied the contemporary
              forms of our digital co-presences. Alexandre was a professor of
              communication sciences between Rennes and Paris for 4 years before
              leaving its teaching and research activities to fully devote
              itself to the possibilities opened up by blockchain technologies.
              Beside his work on the Decentralized Licence, he initiates
              partnerships to create labs that will soon be experimenting on
              Pando protocol.
            </p>
          </Card>
          <Card>
            <img src={member4} alt="profile" />
            <h3>Daniel Shavit</h3>
            <h4>Community Lead</h4>
            <p>
              Daniel is a governance researcher focused on the topics of
              protocolar governance, taxonomic classification and
              experimentation of DAOs, as well as open-science with the Abstract
              Machine project for Pando (immutable, uncensorable and
              self-governed journals) . Daniel has a degree in economics from
              Bocconi University with a thesis on the perverse monetary,
              economic and political effects of natural resource booms. In a
              previous life he worked as a payments consultant advising entities
              such as Atos Worldline, Paypal, Mastercard, Unicredit and the
              Italian Banking Association on clearing and settlement and dispute
              systems.
            </p>
          </Card>
          <Card>
            <img src={member5} alt="profile" />
            <h3>Nolwenn Jollivet</h3>
            <h4>Editorial Manager</h4>
            <p>
              Co-founder of Pando, Nolwenn has a first master degree in History
              & Criticism of arts and a second in Publishing & Creative Economy.
              She worked several years in cultural management, visual art
              galleries and various festivals as team coordinator and executive
              assistant. As a result, she is experienced in pro cultural worlds.
              Beside her coordination/organisation role, she has been a small
              format editor for the two passed years and writes fiction in her
              free time.
            </p>
          </Card>
          <Card>
            <img src={member6} alt="profile" />
            <h3>Xavier Seignard</h3>
            <h4>UI/UX</h4>
            <p>
              Xavier is a JavaScript expert and freelance creative technologist
              based in Nantes, France. His main focus is on interactive
              experiences, be they with web technologies or electronics, often
              both. Obsessed with JavaScript: React, Vue.js and Node, he is an
              outstanding designer when it comes to electronics and always has
              an Arduino or a Teensy next to him to build real life interaction
              or setup a large scale LED system. Active member of the POW
              collective and founder of it's company named Drangies, his work
              has been presented in many exhibitions, events and live shows.
            </p>
          </Card>
          <Card>
            <img src={member7} alt="profile" />
            <h3>Deam Hansen</h3>
            <h4>Frontend</h4>
            <p>
              Deam has been a web developer for nearly 4 years, and is mostly
              self-taught through open source work. Previously he worked for a
              small Danish startup, Peergrade, as a Full-stack developer. He
              started out in the crypto space by contributing to Giveth and has
              been in the community for a year now. He has since contributed to
              projects such as, Giveth Dapp, Giveth Riot Bot, Giveth Wall of
              Fame, Tennagraph, That Planning Suite and Aragon UI.
            </p>
          </Card>
          <Card>
            <img src={member9} alt="profile" />
            <h3>Billy Rennekamp</h3>
            <h4>Curve Bonding</h4>
            <p>
              Billy is an artist, developer and co-founder of Bin Studio, a
              multidisciplinary research, design and development studio based in
              Berlin, DE. In 2018 he received an ECF grant to continue work on
              Clovers.Network, a game that rewards the creation of scarce art.
              He’s the author of EIP-1633 (Re-Fungible Token) and active
              contributor to the Curation Market Community. He’s involved as a
              developer, researcher and community member of a number of projects
              including Cosmos.Network, Gnosis.io, Relevant.community,
              NewModels.io, Trust.support, MemeLords.com, ENSnifty.com and
              Doneth.org.
            </p>
          </Card>
          <Card>
            <img src={member10} alt="profile" />
            <h3>Thibault Boixière</h3>
            <h4>Chief Redactor</h4>
            <p>
              Co-founder of Pando Network, Thibault has been journalist for two
              years, book reviewer and qualified in modern literature and
              publishing. Thibault is also a writer in his free time. After a
              moment Ph.D student in Canada where he studied literature he came
              back to join the Pando team. He’s interested in discourses about
              the end of literature and particularly the possibilities of
              renewal of contemporary literary field.
            </p>
          </Card>
        </TeamContent>
      </TeamSection>
    </Container>
  );
};

// Prevent flickering because of Layout component rendering
export default props => (
  <Layout>
    <Content />
  </Layout>
);

const Container = styled.div`
  .section-title {
    text-transform: uppercase;
    color: rgba(114, 114, 114, 0.5);
    font-family: "Tungsten", sans-serif;
    font-size: 4em;
    font-weight: bold;
    line-height: 1;
  }
`;

const HeroSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  max-width: 100%;
  #logo {
    height: 250px;
    margin-bottom: 3rem;
  }
  #woodmark {
    height: 50px;
  }

  @media (min-width: 1040px) {
    #logo {
      height: 350px;
    }
    #woodmark {
      height: 100px;
    }
  }

  @media (min-width: 1366px) {
    flex-direction: row;
  }
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  margin: 6rem 2rem;

  p {
    font-size: 18px;
    color: #ffffff;
    padding: 0.5rem;
    background-color: rgba(13, 18, 18, 0.5);
    margin-bottom: 1rem;
    width: fit-content;
  }
  a {
    text-decoration: none;
    color: #ffffff;
    border-bottom: 2px solid #00f0e0;
  }
  span {
    margin-right: 1rem;
    display: inline-block;
  }
  h2 {
    margin-bottom: 2rem;
  }

  @media (min-width: 1040px) {
    flex-direction: row;
    height: 100vh;
    margin: 0 5rem;

    span {
      margin-right: 0rem;
      display: block;
    }

    .section-title {
      font-size: 7em;
    }
    div:nth-child(1) {
      width: 50%;
    }
    div:nth-child(2) {
      margin-left: 8rem;
    }
  }

  @media (min-width: 1366px) {
    margin: 0 10rem;

    div:nth-child(1) {
      margin-left: 6rem;
      width: 50%;
    }
    div:nth-child(2) {
      margin-left: 12rem;
    }
  }
`;

const ProposalSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  height: 100vh;

  #proposal-video {
    margin-top: 6rem;
    width: 100%;
    height: 50%;
  }

  @media (min-width: 700px) {
    #proposal-video {
      width: 80%;
      height: 50%;
    }
  }

  @media (min-width: 1366px) {
    #proposal-video {
      width: 900px;
      height: 500px;
    }
    .section-title {
      font-size: 7em;
    }
  }
`;

const TeamSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  @media (min-width: 1040px) {
    margin-top: 16rem;

    .section-title {
      font-size: 7em;
    }
  }
`;

const TeamContent = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 6rem 2rem;

  @media (min-width: 1040px) {
    margin: 6rem 8rem;
  }
  @media (min-width: 1366px) {
    margin: 12rem 16rem;
  }
`;

const Card = styled.div`
  margin-bottom: 10rem;
  width: 100%;
  background-color: rgba(13, 18, 18, 0.5);
  color: #fff;
  padding: 1rem;

  img {
    width: 100px;
    position: absolute;
    right: 40px;
    top: -60px;
  }

  @media (min-width: 480px) {
    img {
      width: 150px;
      position: absolute;
      right: 50px;
      top: -100px;
    }
  }

  h3 {
    font-size: 32px;
    font-family: "Tungsten";
  }
  h4 {
    font-size: 24px;
    font-family: "Tungsten";
    color: rgb(112, 112, 112);
  }

  @media (min-width: 1400px) {
    width: 46%;
  }
`;

const JobCard = styled.div`
  margin-bottom: 10rem;
  width: 100%;
  background-color: rgba(13, 18, 18, 0.5);
  color: #fff;
  padding: 1rem;

  img {
    width: 100%;
  }

  h3 {
    font-size: 42px;
    font-family: "Tungsten";
  }
  h4 {
    font-size: 32px;
    font-family: "Tungsten";
    color: rgb(112, 112, 112);
  }
  p,
  li {
    font-size: 18px;
  }

  ul {
    margin-left: 1.5rem;

    li {
      list-style-type: initial;
    }
  }

  a {
    text-decoration: none;
    color: #ffffff;
    border-bottom: 2px solid #00f0e0;
  }
`;
