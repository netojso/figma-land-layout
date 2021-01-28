import React, { useEffect, useState } from 'react';
import { Animated } from 'react-animated-css';

import {
  Container,
  Header,
  MenuBar,
  Button,
  Banner,
  Features,
  Title,
  Description,
  Contents,
  Card,
  Gallery,
  Row,
  Partners,
  Icons,
  Testimonials,
  Box,
  MoreDetails,
  Footer,
} from './styles';

import logo from '../../assets/logo.png';

import chart from '../../assets/chart.png';

import features from '../../assets/Features/features.png';
import Cutley from '../../assets/Features/cutlery.svg';
import Smile from '../../assets/Features/smile.svg';
import Infinity from '../../assets/Features/infinity.svg';

import macbook from '../../assets/Contents/macbook.png';
import board from '../../assets/Contents/board.png';

import imageGallery1 from '../../assets/Gallery/1.png';
import imageGallery2 from '../../assets/Gallery/2.png';
import imageGallery3 from '../../assets/Gallery/3.png';
import imageGallery4 from '../../assets/Gallery/4.png';
import imageGallery5 from '../../assets/Gallery/5.png';
import imageGallery6 from '../../assets/Gallery/6.png';
import imageGallery7 from '../../assets/Gallery/7.png';

import iconApple from '../../assets/Partners/logos_apple-app-store.png';
import iconApiary from '../../assets/Partners/logos_apiary.png';
import iconAndroid from '../../assets/Partners/logos_android-icon.png';
import iconBasecamp from '../../assets/Partners/logos_basecamp.png';
import iconAirbnb from '../../assets/Partners/logos_airbnb.png';
import iconIBM from '../../assets/Partners/logos_ibm.png';

import person1 from '../../assets/Testimonials/person1.png';
import person2 from '../../assets/Testimonials/person2.png';
import person3 from '../../assets/Testimonials/person3.png';
import person4 from '../../assets/Testimonials/person4.png';

import map from '../../assets/Footer/map.svg';
import phone from '../../assets/Footer/phone.svg';
import twitter from '../../assets/Footer/twitter.svg';
import facebook from '../../assets/Footer/facebook.svg';
import linkedin from '../../assets/Footer/linkedin.svg';

const Main: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window.orientation === 'undefined') {
      setOpen(true);
    }
  }, []);

  return (
    <Container>
      <Header open={open}>
        <img src={logo} alt="logo" />
        <Animated
          animationIn="fadeInDown"
          animationOut="fadeOutUp"
          animationInDuration={2000}
          animationOutDuration={2000}
          isVisible={open}
        >
          <ul className="items">
            <button
              className="closeButton"
              type="button"
              onClick={() => setOpen(false)}
            >
              &times;
            </button>
            <li>Home</li>
            <li>Product</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </Animated>

        <Button border background="#181818">
          Login
        </Button>
        <MenuBar
          onClick={() => {
            setOpen((state) => !state);
          }}
        />
      </Header>

      <Banner>
        <h1>Work at the speed of thought</h1>
        <p>
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </p>
        <div>
          <Button border={false} background="#4452FE">
            Try for free
          </Button>
          <Button border background="#181818">
            Learn more
          </Button>
        </div>

        <div className="imageBanner">
          <div className="overlay" />
        </div>
      </Banner>

      <Features>
        <Title>FEATURES</Title>
        <Description>
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </Description>

        <div className="layout">
          <img src={features} alt="Features" />
          <div className="info">
            <div className="subInfo">
              <div>
                <img src={Cutley} alt="" />
                <p>A single source of truth </p>
              </div>

              <span>
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </span>
            </div>
            <div className="subInfo">
              <div>
                <img src={Smile} alt="" />
                <p>Intuitive interface</p>
              </div>

              <span>
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </span>
            </div>
            <div className="subInfo">
              <div>
                <img src={Infinity} alt="" />
                <p>Or with rules</p>
              </div>

              <span>
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </span>
            </div>
          </div>
        </div>
      </Features>

      <Contents>
        <Title>CONTENTS</Title>
        <Description>
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </Description>

        <div className="cards">
          <Card>
            <p>Work</p>
            <span>
              Ever wondered if you're too reliant on a client for work? Slate
              helps you identify .
            </span>

            <Button border={false} background="#4452FE">
              Sign Up
            </Button>
            <img src={macbook} alt="macbook" />
          </Card>

          <Card>
            <p>Design with real data</p>
            <span>
              Ever wondered if you're too reliant on a client for work? Slate
              helps you identify .
            </span>

            <Button border={false} background="#4452FE">
              Try for free
            </Button>
            <img src={board} alt="board" width={406} height={227} />
          </Card>
        </div>
      </Contents>

      <Gallery>
        <Title>GALLERY</Title>
        <Description>
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </Description>

        <Row>
          <img src={imageGallery1} alt="" />
          <img src={imageGallery2} alt="" />
          <img src={imageGallery3} alt="" />
          <img src={imageGallery4} alt="" />
        </Row>

        <Row>
          <img src={imageGallery5} alt="" />
          <img src={imageGallery6} alt="" />
          <img src={imageGallery7} alt="" />
        </Row>

        <Button style={{ marginTop: 44 }} border background="#181818">
          See more
        </Button>
      </Gallery>

      <Partners>
        <Title>PARTNERS</Title>
        <Description>
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </Description>

        <Icons>
          <img src={iconApple} alt="" />
          <img src={iconApiary} alt="" />
          <img src={iconAndroid} alt="" />
          <img src={iconBasecamp} alt="" />
          <img src={iconAirbnb} alt="" />
          <img src={iconIBM} alt="" />
        </Icons>

        <Button border background="#181818">
          All partners
        </Button>
      </Partners>

      <Testimonials>
        <Title>TESTIMONIALS</Title>
        <div className="boxes">
          <Box>
            <div>
              <img src={person1} alt="" />
              <p>
                Claire Bell
                <br />
                <strong>Designer</strong>
              </p>
            </div>
            <span>
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year. Slate helps you see
              how many more days you need to work to reach your financial goal
              for the month and year.
            </span>
          </Box>
          <Box>
            <div>
              <img src={person2} alt="" />
              <p>
                Francisco Lane
                <br />
                <strong>Designer</strong>
              </p>
            </div>
            <span>
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year. Slate helps you see
              how many more days you need to work to reach your financial goal
              for the month and year.
            </span>
          </Box>
          <Box>
            <div>
              <img src={person3} alt="" />
              <p>
                Ralph Fisher
                <br />
                <strong>Designer</strong>
              </p>
            </div>
            <span>
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year. Slate helps you see
              how many more days you need to work to reach your financial goal
              for the month and year.
            </span>
          </Box>
          <Box>
            <div>
              <img src={person4} alt="" />
              <p>
                Jorge Murphy
                <br />
                <strong>Designer</strong>
              </p>
            </div>
            <span>
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year. Slate helps you see
              how many more days you need to work to reach your financial goal
              for the month and year.
            </span>
          </Box>
        </div>
      </Testimonials>

      <MoreDetails>
        <div>
          <p>OpenType features and Variable fonts</p>
          <Button border={false} background="#4452FE">
            Try for free
          </Button>
        </div>

        <img src={chart} alt="" />
      </MoreDetails>

      <Footer>
        <div className="content">
          <div className="refs">
            <ul>
              <li>
                <strong>Fingertipes</strong>
              </li>
              <li>Home</li>
              <li>Examples</li>
              <li>Pricing</li>
              <li>Updates</li>
            </ul>

            <ul>
              <li>
                <strong>Resources</strong>
              </li>
              <li>Home</li>
              <li>Examples</li>
              <li>Pricing</li>
              <li>Updates</li>
            </ul>

            <ul>
              <li>
                <strong>About</strong>
              </li>
              <li>Home</li>
              <li>Examples</li>
              <li>Pricing</li>
              <li>Updates</li>
            </ul>
          </div>

          <div className="info">
            <div>
              <img src={map} alt="map" width={20} />
              <p>7480 Mockingbird Hill</p>
            </div>

            <div>
              <img src={phone} alt="phone" width={20} />
              <p>(239) 555-0108</p>
            </div>

            <div>
              <img src={twitter} alt="" width={30} />
              <img src={facebook} alt="" width={30} />
              <img src={linkedin} alt="" width={30} />
            </div>
          </div>
        </div>
      </Footer>
    </Container>
  );
};

export default Main;
