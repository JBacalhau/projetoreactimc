import styled from "styled-components";

export const StyledLgpd = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    column-gap: 60px;
    padding: 20px 0;
    width: 100%;
    position: fixed;
    bottom: 0;

    p{
        color: #FFFFFF;
        max-width: 850px;
        font-size: 14px;

        a{
            color: #3eDCFF;
        }
    }
    
    button {
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
        padding: 0 40px;
    }

    @media (max-width: 1100px) {
        flex-direction: column;
        row-gap: 15px;
        text-align: center;
        padding: 15px;
        box-sizing: border-box;
    }

`  