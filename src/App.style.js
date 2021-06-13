import styled from 'styled-components'

const AppWrapper = styled.div`
    font-family: Roboto, sans-serif;
    p{
        margin:8px 0px;
        color:#A0A0A6;
    }

    h1{
        margin:0;
        color:#E9E9E9;
    }
    b{
        margin:8px 0px;
        color:#E9E9E9;
    }
    #body{
        display:flex;
    }

    #body-left{
        background:#26282B;
        width:25%;
        padding-right:10px;
        overflow-y: scroll;
        height: 100vh;
        position:fixed;
    
    }

    #body-left::-webkit-scrollbar-track
    {
	    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	    background-color: #26282B;
    }

    #body-left::-webkit-scrollbar
    {
	    width: 12px;
	    background-color: #F5F5F5;
    }

    #body-left::-webkit-scrollbar-thumb
    {
	    border-radius: 10px;
	    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	    background-color: #949494;
    }

    #search-css{
        padding:40px 20px;
    }

    #search{
        background:#303034;
        width:90%;
        border-radius:8px;
        margin:auto;
        padding:3px 10px;
        border-bottom: 1px solid #303034;
    }

    #search input{
        background:none;
        font-size:18px;
        padding:5px 10px;
        width:87%;
        border:0;
        color:white;
        outline: none;
    }

    .search-icon{
        color:#7F7E7E;
        background:none;
    }

    #stock-list{
    }
    .stocks-css{
        padding-left:20px;
        &:hover{
            opacity:80%;
            background:#3E3C41;
        }
    }
    .stocks{
        border-bottom: 1px solid #4f4f4f;
        width:90%;
        margin:auto;   
        padding: 10px 0;  
        display:flex;
        justify-content: space-between;
    }

    .loss{
        padding: 4px 13px;
        background:#EA4F3D;
        border:0;
        border-radius:6px;
    }

    .profit{
        padding: 4px 13px;
        background:#65C567;
        border:0;
        border-radius:6px;
    }

    #body-right{
        width:75%;
        background:#1D1F21;
        padding:50px 80px;
        margin-left:25%;
    }

    #header{
        display:flex;
        justify-content:space-between;
    }

    #header-name{
        display:flex;
    }

    #header p{
        margin:0;
        margin-top:13px;
        margin-left:20px;
    }

    #share-price{
        display:flex;
    }

    .loss-num{
        color:#EA4F3D;
    }

    #chart{
        background: #303034;
        width:100%;
        height:600px;
        margin:40px 0;
    }

    #news-list{
        display:flex;
        justify-content:space-between;
    }

    .news{
        width:80%;
        margin-top:20px;
    }
    .stock-info{
        color:#DADBDB;
    }

    .time{
        margin-top:20px;
    }

`

export default AppWrapper;