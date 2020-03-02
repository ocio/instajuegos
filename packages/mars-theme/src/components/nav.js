import React from 'react'
import { connect, styled } from 'frontity'
import Link from './link'

const Nav = ({ state }) => {
    return (
        <Container>
            {state.theme.menu.map(([name, link]) => {
                return (
                    <Item key={name} isSelected={state.router.link === link}>
                        <Link link={link}>{name}</Link>
                    </Item>
                )
            })}
        </Container>
    )
}

export default connect(Nav)

const Container = styled.nav`
    position: fixed;
    z-index: 1;
    top: 69px;
    background: rgba(250, 250, 250, 0.8);
    backdrop-filter: saturate(180%) blur(20px);
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-items: center;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    margin: 0;
    overflow-x: auto;
    @media (max-width: 609px) {
        display: block;
        position: relative;
        width: 100%;
    }
`

const Item = styled.div`
    outline: none;
    padding: 2px 20px;
    border-radius: 20px;
    font-size: 16px;
    font-weight: 700;
    box-sizing: border-box;
    background-color: ${({ isSelected }) =>
        isSelected ? '#45ff91' : 'transparent'};

    & > a {
        color: ${({ isSelected }) => (isSelected ? '#333' : 'rgba(12,17,43)')};
        outline: none;
        text-decoration: none;
        display: inline-block;
        line-height: 2em;
    }

    & > a:hover {
        color: #333;
        text-decoration: underline;
    }
`
