import styled from "styled-components"

export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${(props) => `/assets/${props.bgImage}`}) no-repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 2.8rem;
  }
  p {
    font-weight: 500;
    font-size: 1.05rem;
    letter-spacing: 1px;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 6vh;
  width: 100%;
  @media (width < 768px) {
    flex-direction: column;
    gap: 1rem;
  }
  .left-button,
  .right-button {
    background: rgba(23, 26, 32, 0.945);
    height: 45px;
    width: 256px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 8px;
    opacity: 0.85;
    font-size: 16px;
    margin: 0 12px;
    font-weight: 500;
  }
  .right-button {
    background: #fff;
    color: #000;
  }
`

export const DownArrow = styled.img`
  margin: 10px 0 20px 0;
  height: 40px;
  animation: animateDown infinite 1.5s;
`
