import { useStore } from 'laco-react'
import React, { useEffect, useRef } from 'react'
import { InView } from 'react-intersection-observer'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import Woodmark from '../components/Woodmark'
import { changeCurrentIndex, changeScrollIndex, NavStore } from '../stores/navigation'

export default props => {
  const { scrollIndex } = useStore(NavStore)
  const items = Array.from({ length: 4 }, () => useRef(null))

  useEffect(() => {
    if (scrollIndex != null) {
      window.scroll({
        top: items[scrollIndex].current.offsetTop,
        left: 0,
        behavior: 'smooth',
      })
      changeScrollIndex(null)
    }
  })

  return (
    <Layout>
      <Navigation />

      <Container>
        <Logo />
        <InView as="div" onChange={inView => inView && changeCurrentIndex(null)}>
          <Woodmark />
        </InView>
      </Container>

      <Section ref={items[0]}>
        <InView as="div" onChange={inView => inView && changeCurrentIndex(0)}>
          <p>
            Aragon Black is currently applying to become the third full-time team of the <a href="#">Aragon</a> project
            and take part in its fight for freedom and full decentralization.
          </p>
          <p>
            Aragon Black is the banner below which the Pando team has gathered to continue developing a decentralized
            VCS enabling coordination and the raise of new collaborative projects, to carry the Aragon manifesto’s
            values and finally to help in creating Aragon applications allowing human autonomy.
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
              is
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

      <Section ref={items[1]}>
        <InView as="div" onChange={inView => inView && changeCurrentIndex(1)}>
          <p>
            Aragon Black is a team whose core members come majoritarily from the PandoNetwork team [mostly known in the
            ecosystem for the development of the pando protocol]. The PandoNetwork team has been working closely with
            the Aragon ecosystem for almost a year now and has been the recipient of two Aragon Nest grants.
          </p>
          <p>
            To strengthen its commitment to the Aragon movement, the PandoNetwork team has decided to apply to the Flock
            program as Aragon Black. This first Flock proposal covers six months of work. However, if the Aragon
            community lends us its trust, we intend to re-apply to this program on the long run.
          </p>
        </InView>
        <div className="section-title">
          <h2>Proposal</h2>
        </div>
      </Section>

      <Test ref={items[2]}>
        <InView id="proposal-video" as="div" onChange={inView => inView && changeCurrentIndex(2)}>
          <iframe
            style={{ overflow: 'hidden', height: '100%', width: '100%' }}
            height="100%"
            width="100%"
            src="https://www.youtube-nocookie.com/embed/AqjIWmiAidw"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </InView>
        <div className="section-title">
          <h2>Values</h2>
        </div>
      </Test>

      <Test ref={items[3]}>
        {/* <Carousel centered infinite arrows slidesPerPage={1}>
          <div>
            <h3>Olivier Sarrouy</h3>
            <h4>Tech Lead</h4>
            <p>
              Olivier has a Master degree in Computer Sciences from Centrale/Supélec. After graduatıng he worked on
              various open source projects before begınnıng a Ph.D ın philosophy. In 2015, he defended hıs Ph.D thesis
              in Communication Sciences on web-based decentralized organizations. He then worked as a Professor at
              University of Rennes 2 for three years discussing the economical, sociological and philosophical
              implications of distributed organizations and blockchain technologies. He has now resigned from academıa
              to work full time on the blockchain projects he leads.
            </p>
          </div>
          <div>
            <h3>Cem Dagdelen</h3>
            <h4>Strategy lead</h4>
            <p>
              With a background in institutional Investment Banking, Cem has worked on establishing and raising for EM
              ETFs. He won a Financial Innovation award in 2013 for designing a borderless credit system. After working
              on startup financing advisory, Cem co-founded Horatii Partners, a research/advisory agency focused on
              distributed governance. Horatii Partners is currently focused on synthesizing and promoting use cases for
              DAOs and crypto economic primitives through mechanism design, business development and partnerships. Cem
              is also building “DAOincubator”, an ecosystem catalyst which aims to aggregate research, funding, and
              consulting which targets the betterment and implementation of DAO based initiatives. Cem is a competitive
              sailor since age 9 and writes about art philosophy and critique for a Turkish lifestyle magazine.
            </p>
          </div>
          <div>
            <h3>Alexandre Rouxel</h3>
            <h4>Research Lead</h4>
            <p>
              Co-founder of Pando, Alexandre was a research engineer and Ph.d student at university Rennes 2 where he
              studied the contemporary forms of our digital co-presences. Alexandre was a professor of communication
              sciences between Rennes and Paris for 4 years before leaving its teaching and research activities to fully
              devote itself to the possibilities opened up by blockchain technologies. Beside his work on the
              Decentralized Licence, he initiates partnerships to create labs that will soon be experimenting on Pando
              protocol.
            </p>
          </div>
          <div>
            <h3>Daniel Shavit</h3>
            <h4>Community Lead</h4>
            <p>
              Daniel has a degree in economics from Bocconi University and worked as a digital payments consultant
              advising entities such as Paypal, Mastercard, Unicredit and the Italian Banking Association on clearing
              and settlement systems. Daniel was a crypto-currency evangelist in the early days then he co-founded
              Horatii Partners. He researches decentralized governance focusing on the topics of protocolar governance
              as well as taxonomical classification, security and experimentation of DAOs to enable mass adoption by
              communities, productive organization and existing institutions.
            </p>
          </div>
          <div>
            <h3>Daniel Shavit</h3>
            <h4>Community Lead</h4>
            <p>
              Daniel has a degree in economics from Bocconi University and worked as a digital payments consultant
              advising entities such as Paypal, Mastercard, Unicredit and the Italian Banking Association on clearing
              and settlement systems. Daniel was a crypto-currency evangelist in the early days then he co-founded
              Horatii Partners. He researches decentralized governance focusing on the topics of protocolar governance
              as well as taxonomical classification, security and experimentation of DAOs to enable mass adoption by
              communities, productive organization and existing institutions.
            </p>
          </div>
          <div>
            <h3>Nolwenn Jollivet</h3>
            <h4>Editorial Manager</h4>
            <p>
              Co-founder of Pando, Nolwenn has a first master degree in History & Criticism of arts and a second in
              Publishing & Creative Economy. She worked several years in cultural management, visual art galleries and
              various festivals as team coordinator and executive assistant. As a result, she is experienced in pro
              cultural worlds. Beside her coordination/organisation role, she has been a small format editor for the two
              passed years and writes fiction in her free time.
            </p>
          </div>
        </Carousel> */}
        <InView as="div" onChange={inView => inView && changeCurrentIndex(3)} />
        <div className="section-title">
          <h2>Team</h2>
        </div>
      </Test>
    </Layout>
  )
}

const Container = styled.div`
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

  @media (min-width: 769px) {
    #logo {
      height: 350px;
    }
    #woodmark {
      height: 100px;
    }
  }

  @media (min-width: 1170px) {
    flex-direction: row;
  }
`

const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  margin: 6rem 2rem;
  opacity: 0.8;

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

  .section-title {
    text-transform: uppercase;
    color: rgba(47, 52, 52, 0.4);
    font-family: 'Tungsten', sans-serif;
    font-size: 4em;
    font-weight: bold;
    line-height: 1;
  }

  @media (min-width: 540px) {
    div:nth-child(2) {
      margin-left: 4rem;
    }
  }

  @media (min-width: 769px) {
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

  @media (min-width: 1170px) {
    margin: 0 10rem;

    div:nth-child(1) {
      margin-left: 6rem;
      width: 50%;
    }
    div:nth-child(2) {
      margin-left: 12rem;
    }
  }
`

const Test = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  height: 100vh;
  opacity: 0.8;

  .section-title {
    text-transform: uppercase;
    color: rgba(47, 52, 52, 0.4);
    font-family: 'Tungsten', sans-serif;
    font-size: 7em;
    font-weight: bold;
    line-height: 1;
    margin-bottom: 4rem;
  }

  #proposal-video {
    width: 100%;
    height: 25%;
  }

  @media (min-width: 540px) {
    #proposal-video {
      width: 80%;
      height: 30%;
    }
  }

  @media (min-width: 769px) {
    #proposal-video {
      width: 900px;
      height: 500px;
    }
  }
`

const TeamSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  margin: 0 5rem;
  color: #ffffff;
  opacity: 0.8;

  .BrainhubCarousel {
    margin-left: 3rem;
    max-width: 50%;
  }

  .BrainhubCarousel__arrows {
    background-color: transparent;
    span {
      border-color: #00f0e0;
    }
  }

  .BrainhubCarouselItem div {
    background-color: rgba(13, 18, 18, 0.5);
    border-radius: 2px;
    padding: 1rem;
    width: 100%;
  }

  .section-title {
    text-transform: uppercase;
    color: rgba(47, 52, 52, 0.4);
    font-family: 'Tungsten', sans-serif;
    font-size: 4em;
    font-weight: bold;
    line-height: 1;
  }

  h3 {
    font-family: 'Tungsten';
    font-weight: bold;
    font-size: 3em;
    text-transform: uppercase;
    line-height: 1em;
  }

  h4 {
    font-family: 'Tungsten';
    font-weight: bold;
    font-size: 1.5em;
    text-transform: uppercase;
    color: rgba(47, 52, 52, 1);
  }

  p {
    padding: 0.5rem;
    background-color: rgba(13, 18, 18, 0.5);
    margin-bottom: 1rem;
    width: fit-content;
  }

  @media (min-width: 769px) {
    .section-title {
      font-size: 7em;
      margin-left: 8rem;
    }
  }

  @media (min-width: 1170px) {
    margin: 0 10rem;
    .section-title {
      margin-left: 12rem;
    }
  }
`
