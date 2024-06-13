import styled from "styled-components";

export const StyledPainel = styled.section`

    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .painel{    
        width: 90%;
        max-width: 550px;
        height: 416px;
        margin: auto auto;
        background-color: #000000;
        padding: 75px;
        box-sizing: border-box;
        border-radius: 5px;

        .content{
            text-align: center;

            h1{
                color: #FFFFFF;
                font-size: 36px;
                font-weight: bold;
            }

            p{
                color: #FFFFFF;
                font-size: 16px; 
                margin-bottom: 10px;
            }

    
            form{        
                display: flex;
                flex-direction: column;
                
                row-gap: 15px;
                margin-top: 35px;

                input{
                    
                    height: 50px;
                    box-sizing: border-box;
                    border-radius: 5px;
                    padding-left: 15px;
                    border: none;
                    font-size: 16px;
                    background-color: #222222;
                    color: #FFFFFF;

                    &:hover{
                        outline: solid 1px #999999;
                    }

                    &:focus{
                        outline: solid 1px #3eDCFF;
                    }
                }

                button{
                    
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
    }
            
        
    
    

`

