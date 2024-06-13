import styled from "styled-components";

export const StyledPanel2 = styled.div`
    
    
    width: 550px;
    height: 416px;
    margin: auto auto;
    background-color: #000000;
    padding: 75px;
    box-sizing: border-box;
    border-radius: 5px;
        
    h2{
        margin-top: 30px;
        color: #FFFFFF;
        font-size: 36px;
        font-weight: bold;
        text-align: center;
    }

    p{
        color: #FFFFFF;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        margin: 30px;
    }

    button{
        width: 100%;
        height: 40px;
        border: none;
        background-color: transparent;
        background-image: linear-gradient(to right, #3eDCFF, #00A9CE);
        border-radius: 20px;
        font-size: 16px;
        cursor: pointer;

        &:hover {
            background-image: linear-gradient(to left, #3eDCFF, #00A9CE);
        }  
    }

    @media (max-width: 600px) {
        width: 95%;
        height: 390px;
        padding: 65px 30px;

        h1, h2{
            font-size: 24px !important;
        }
    }
`;