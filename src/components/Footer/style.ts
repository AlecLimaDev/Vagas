import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 20px;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: blue;

            div {
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                gap: 10px;
            }

            div img {
                width: 50px;
            }

            a {
                font-size: 24px;
                font-family: sans-serif;
            }

            p {
                font-size: 24px;
                font-family: sans-serif;
            }
`;
