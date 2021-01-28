/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import banner from '../../assets/Banner/banner.png';
import menu from '../../assets/menu.svg';

interface ButtonProps {
  background: string;
  border: boolean;
}

interface HeaderProps {
  open: boolean
}
export const Container = styled.div`

`;
export const Header = styled.header<HeaderProps>`
  margin: 0px auto 35px;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  div:first-of-type{
    width: 30% !important;
  }

  ul.items {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    button {
      display: none;
    }

    li {
      text-decoration: none;
      list-style: none;
      color: #fff;
      font-weight: 700;
      font-size: 16px;
    }
  }

  @media(max-width: 750px) {
    padding: 15px;

    button:first-of-type{
      padding: 8px 26px;
    }

    ul, div:first-of-type{
      display: none;
    }

    img {
      width: 126px;
    }

    ${(props) => (props.open && css`

      div:first-of-type {
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute !important;
        top: 0 !important;
        left: 0 !important;

        width: 100% !important;
        height: 100vh !important;
      }

      ul.items {
        overflow: hidden;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        
        width: 100%;
        height: 100%;

        background: rgba(0, 0, 0, 1);
    
        button.closeButton {
          display: block;
          color: #fff;

          position: absolute;
          top: 0px;
          right: 10px;

          font-size: 62px;
          font-weight: 400;
        }
        li {
          text-decoration: none;
          list-style: none;
          color: #fff;
          font-weight: 700;
          font-size: 24px;

          margin-bottom: 30px;
        }
      }`
  )};
  }
`;

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.background};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 14px 46px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;

  transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);

  ${(props) => props.border && css`
    border: 2px solid #fff;

    :active, :hover {
      background: #fff;
      color: #181818;
    }
  `}
`;

export const MenuBar = styled.button`
  width: 44px;
  height: 27px;
  display: none;

  background-image: url(${menu});
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;

  @media(max-width: 750px) {
    display: block;
  }
`;
export const Banner = styled.section`
  padding: 50px 0px;
  margin: 0px auto 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 80px;
    letter-spacing: 0.2px;
    line-height: 88px;
    font-weight: 900;
    color: #fff;

    text-align: center;
    width: 685px;
    margin-bottom: 15px;
  }

  p {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.2px;
    line-height: 30px;
    color: #fff;

    text-align: center;
    width: 512px;
  }

  > div:first-of-type {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 380px;
    margin: 35px auto 45px;
  }

  > div.imageBanner {
    margin: 0 auto;
    width: 100%;
    height: 900px;
    background-image: url(${banner});
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;

    position: relative;

    > div.overlay {
      z-index: 50;
      width: 100%;
      height: 50%;
      position: absolute;
      bottom: 0;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #0E0E0E 66.15%);
    }
  }

  @media(max-width: 750px) {
    h1 {
      font-size: 52px;
      letter-spacing: 0.2px;
      line-height: 62px;
      font-weight: 600;
      width: 281px;
    }

    p {
      width: 336px;
    }

    > div:first-of-type {
    flex-direction: column;
    height: 120px;
    }

    > div.imageBanner {
      margin: 0 auto;
      height: 400px;
      background-image: url(${banner});
      background-size: 150% 100%;
      background-position: center;
      background-repeat: no-repeat;

      position: relative;
  }
  }
`;

export const Features = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 60px;

  div.layout {
    display: flex;
    align-items: center;
    margin: 40px auto;

    > div.info {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;

      height: 780px;
      padding: 54px 10px 60px;

      > div.subInfo {
        display: flex;
        align-items: flex-start;
        flex-direction: column;

        margin-bottom: 40px;

        div {
          display: flex;

          p {
          font-weight: 600;
          font-size: 20px;
          line-height: 30px;
          letter-spacing: 0.2px;
          color: #fff;

          margin-left: 8px;
          }
        }
        span {
          font-weight: 300;
          font-size: 16px;
          line-height: 32px;
          letter-spacing: 0.2px;
          color: #fff;

          margin-top: 10px;
          width: 240px;
        }
      }
    }
  }

  @media(max-width: 750px) {
    margin: 0 auto;
    margin-bottom: -30px;

    div.layout {
      align-items: center;
      justify-content: center;
      flex-direction: column;

      img:first-child {
        width: 376px;
        height: 406px;
      }

      > div.info {
        margin-top: 40px;
        height: 500px;

        > div.subInfo {
          margin-bottom: 25px;

          div {
            img {
              width: 25px;
              height: 25px;
            }

            margin-bottom: 25px;
          }
          span {
            line-height: 24px;
          }
        }
      }
    }
  }
  
`;

export const Title = styled.p`
  font-weight: 300;
  font-size: 52px;
  letter-spacing: 0.2px;
  color: #fff;

  margin-bottom: 25px;
`;

export const Description = styled.p`
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.2px;
  color: #fff;

  text-align: center;
  width: 504px;

  @media(max-width: 750px) {
    width: 320px;
  }
`;

export const Contents = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 120px;

  div.cards {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;

    margin-top: 54px;
  }

  @media(max-width: 750px) {
    margin-bottom: 60px;

    div.cards {
      width: 100%;
      height: 100%;
      flex-direction: column;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 476px;
  height: 625px;
  margin: 0px 16px;
  background-color: #fff;
  border-radius: 10px;

  p {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.1px;
    color: #000;
    margin-bottom: 30px;

    text-align: center;
  }

  span {
    font-size: 16px;
    letter-spacing: 0.2px;
    line-height: 24px;
    color: #5c5c5c;
    
    text-align: center;
    width: 241px;
    margin-bottom: 65px;
  }

  img {
    margin: 55px auto 0px;
  }

  @media(max-width: 750px) {
    width: 348px;
    height: 572px;
    margin: 16px auto;

    img {
      width: 297px;
      height: 175px;
    }
  }
`;

export const Gallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 120px;

  @media(max-width: 750px) {

    > div:last-of-type {
      display: none;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: 44px;
  img {
    margin: 0 20px;
    border-radius: 12px;
  }

  @media(max-width: 750px) {
    width: 320px;
    overflow-y: scroll;

    img {
      width: 330px;
      height: 285px;
      margin: 0;

      & + img {
        margin: 0 20px;
      }
    }
  }
`;

export const Partners = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 120px;

  @media(max-width: 750px) {

  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 50px auto;
  width: 70%;

  @media(max-width: 750px) {
    width: 300px;
    overflow-y: scroll;

    img + img {
      margin: 0px 20px;
    }
  }
`;

export const Testimonials = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 120px;

  div.boxes {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 80%;
  }

  @media(max-width: 750px) {
    div.boxes { 
      width: 352px;
      overflow-y: scroll;
      flex-wrap: nowrap;
      align-items: initial;
      justify-content: initial;
    }
  }
`;

export const Box = styled.div`
  width: 430px;
  border: 2px solid #fff;
  border-radius: 10px;
  padding: 40px;

  margin: 20px;

  div {
    display: flex;

    img {
      margin-right: 20px;
      margin-bottom: 30px;
    }
  }

  p, span {
      font-size: 16px;
      line-height: 24px;
      color: #fff;
      letter-spacing: 0.2px;
  }
`;

export const MoreDetails = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;

  background-color: #343434;

    div {
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      margin: 80px;
      p {
        font-size: 42px;
        line-height: 52px;
        letter-spacing: 0.2px;
        color: #fff;

        max-width: 376px;
        margin-bottom: 35px;
      }
    }

    img {
      margin-right: 80px;
    }
    
  @media(max-width: 750px) {
    flex-direction: column;

    div {
      align-items: center;
    }

    p {
      text-align: center;
      font-size: 32px;
      width: 300px;
    }
    img {
      width: 350px;
      height: 280px;
      margin: 0 auto;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 100px 0 60px;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;

    div.refs {
      display: flex;
    }
    ul {
      margin: 0px 60px;

      li:first-child {
        margin-bottom: 16px;
      }

      li {
        list-style: none;
        margin-bottom: 8px;
        color: #fff;
        font-size: 16px;
        letter-spacing: 0.2px;
      }
    }

    .info {
      margin-left: 200px;

      display: flex;
      align-items: flex-start;
      flex-direction: column;

      > div {
        display: flex;
        align-items: center;

        margin-bottom: 18px; 

        img {
          margin-right: 10px;
        }

        p {
          font-size: 16px;
          letter-spacing: 0.2px;
          color: #fff;
        }
      }
    }
  }
  
  @media(max-width: 750px) {
    .content {
      flex-direction: column;

      .refs {
        display: flex;
        width: 100%;

        ul {
          margin: 0;
        }

        ul:nth-child(2) {
          margin: 0 50px;
        }
      }

      .info {
        align-items: center;
        margin: 0;
        margin-top: 30px;

        a[href^=tel] {
          text-decoration:inherit;
          color: inherit;
        }
      }
    }
  }

  
`;
