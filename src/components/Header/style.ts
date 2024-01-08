import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    width: 100%;
    //background-color:;
    align-items: center;
    justify-content: space-between;
    padding: 1.2rem 2rem;
    border-bottom: 1px solid ${({theme}) => theme.borderColor};
`