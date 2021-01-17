import {useContext} from 'react';
import styled from 'styled-components';
import {Button} from './components/button.js';
import {ThemeContext} from './contexts/ThemeContext';

const Container = styled.header`
display: flex;
  
justify-content: space-between;
    
padding: 24px 64px 0;
    
border-bottom: 1px solid #E0E0E0;
`

const HeaderUl = styled.ul`
display: flex;

margin: 0;

padding: 0;
`

const HeaderLi = styled.li`
list-style: none;

padding: 4px 12px;

cursor: pointer;

border-bottom: ${props => props.focused ? '2px solid #F44336' : 'none'};
`

const HeaderButton = styled(Button)`
    margin-bottom: 0;
    
    padding: 0;
`

export const Header = (props) => {
    const [theme, toggleTheme] = useContext(ThemeContext);

    return (
        <Container>
            <HeaderUl>
                <HeaderLi
                focused = {props.tab === 'list'}

                onClick = {() => props.setTab('list')}
                >
                リスト
                </HeaderLi>

                <HeaderLi
                focused = {props.tab === 'form'}

                onClick = {() => props.setTab('form')}
                >
                フォーム
                </HeaderLi>
            </HeaderUl>

            <HeaderButton onClick = {toggleTheme}>テーマ変更</HeaderButton>
        </Container>
    )
};