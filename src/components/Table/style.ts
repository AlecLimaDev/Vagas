import styled from "styled-components";

export const sTable = styled.div`
    background-color: #555555;
    max-width: 100%;
    height: 18vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;


    h1 {
        font-family: sans-serif;
        color: white;
    }


            div {
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                width: 50%;
            }


            p {
                padding: 8px;
                border-radius: 20px;
                font-size: 20px;
                color: white; 
                font-family: sans-serif;
            }

            span {
                font-family: sans-serif;
                background-color: #008000;
                padding: 8px;
                border-radius: 20px;
                font-size: 20px;
                color: white;
            }
`;
