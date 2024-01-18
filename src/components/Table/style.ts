import styled from "styled-components";

export const sTable = styled.div`
    background-color: #555555;
    max-width: 100%;
    height: 18vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    gap: 10px;


    h1 {
        font-family: sans-serif;
        color: white;
    }

    padding: 40px;

            div {
                display: flex;
                justify-content: space-evenly;
                align-items: center;
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
