import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;


export const Section = styled.section`
  background: #9933CC;
`


export const Container = styled.div`
  width: 20%;
  max-height: 600px;
  margin: 10px;
  border: 2px solid black;
  height: 50vh;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  background-color: #282828;
  
      div {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
      }

      article {
        display: flex;
        width: 100%;
        flex-direction: column;
      }

        article p {
          background-color: blue;
        }

            div  img {
              width: 60px;
            } 

        div h2{
          font-family: sans-serif;
        }

        section {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        section h3 {
          background-color: blue;
          width: 60%;
          text-align: center;
          font-size: 16px;
          font-family: sans-serif;
          color: white;
          border-radius: 10px;
        }

        section h4 {
          background-color: #555555;
          text-align: center;
          font-family: sans-serif;
          color: #fff;
          border-radius: 10px;
        }

        button { 
          background-color: orange;
          padding: 10px;
          border-radius: 10px;
          cursor: pointer;
          color: #fff;
          font-size: 18px;
        }


        h2 {
          font-size: 18px;
          font-family: sans-serif;
          color: #fff;
        }
`;
