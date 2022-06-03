import styled from 'styled-components'

const CardItem = styled.div`
    width:auto;
    height:400px; //set height
    .card-header{
        height:10%;
        background:#f5f5f5;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:0.8rem;
        font-weight:800;
        //position:absolute;
    }
    .card-body{
        height:70%;
        background:#555555;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:2rem;
        font-weight:800;
        img{
            width:100%;
            height:100%;
        }
    }
    .card-footer{
        height:20%;
        background:#f9f9f9;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:1rem;
        font-weight:800;
    }
`

export default CardItem