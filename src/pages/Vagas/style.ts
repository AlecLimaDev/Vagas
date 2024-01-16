import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  width: 20%;
  max-height: 600px;
  border: 2px solid #fff;
  padding: 10px;
  height: 40vh;

        p {
            background-color: #555555;
            width: 50%;
            border-radius: 15%;
            font-family: sans-serif;
            font-size: 12px;
            color: #fff;
        }


        div {
            disply: flex;
            justify-content: space-evenly;
            align-items: center;
        }


        img {
            width: 50px;
        } 



  h2 {
    font-size: 18px;
    font-family: sans-serif;
    color: #fff;
  }
`;
