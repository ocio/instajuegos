import React from 'react'
import { styled } from 'frontity'
import Loader from 'react-spinners/ScaleLoader'
const Loading = () => <Container></Container>

export default Loading

const Container = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    background: url('/static/images/loading.gif') no-repeat center center / 64px;
`
