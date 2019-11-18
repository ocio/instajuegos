import React, { useState, useEffect } from 'react'
import { connect, styled } from 'frontity'
import Link from './link'
import Nav from './nav'

const Header = ({ state }) => {
    const data = state.source.get(state.router.link)
    const splitted = state.router.link.split('s=')
    const searchvalue = splitted[1] || ''
    const [search, setSearch] = useState(searchvalue)

    // useEffect(() => {
    //   setSearch(searchvalue);
    // }, []);

    function onKeyPress(e) {
        if (e.key === 'Enter') {
            location.href = '/?s=' + search
        }
    }

    function onClickBack(e) {
        history.back()
    }

    function onChange(e) {
        setSearch(e.target.value)
    }

    function onFullScreen() {
        const element = document.getElementById('iframe')
        if (element.requestFullscreen) {
            element.requestFullscreen()
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen()
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen()
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen()
        }
    }

    return (
        <>
            <Container>
                {data.isPostType ? (
                    <ButtonIcon onClick={onClickBack}>
                        <img src="/static/images/back.png" />
                    </ButtonIcon>
                ) : null}
                <Link link="/">
                    <ButtonIcon>
                        <img src="/static/images/logo.png" />
                    </ButtonIcon>
                </Link>
                <Search>
                    <Input
                        type="text"
                        value={search}
                        placeholder="Busca un juego..."
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                    />
                </Search>
                {data.isPostType ? (
                    <ButtonIcon onClick={onFullScreen}>
                        <img src="/static/images/fullscreen.png" />
                    </ButtonIcon>
                ) : null}
            </Container>
            {data.isPostType ? null : <Nav />}
        </>
    )
}

export default connect(Header)

const Container = styled.div`
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 4px 12px;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
`

const ButtonIcon = styled.div`
    cursor: pointer;
    padding: 10px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    &:hover {
        background-color: #eee;
    }
    & > img {
        width: 28px;
        height: 28px;
    }
`

const Search = styled.div`
    margin: 10px;
    flex: 1;
`

const Input = styled.input`
    color: #333;
    background: url(/static/images/search.png) no-repeat 10px center #efefef;
    border: 0;
    border-radius: 10px;
    height: 40px;
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    padding: 0px 20px 0 45px;
    width: 100%;
    box-sizing: border-box;
    background-size: 25px;
`
