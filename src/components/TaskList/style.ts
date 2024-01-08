import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin: 2rem auto;
    width: min(46rem, 90%) ;
    padding: 1.7rem 1rem;
    border: 1px solid ${({theme}) => theme.borderColor};
    border-radius: 0.6rem;
    .tasks{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        
    }
    .task{
        display: flex;
        align-items: center;
        width: 100%; 
        justify-content: space-between;
        border: 1px solid ${({theme}) => theme.borderColor};
        padding: .3rem;
        &:hover{
            filter: brightness(1.9);
        }
    }
    .icons{
        display: flex;
        gap: 1rem;
        border: 1px solid ${({theme}) => theme.borderColor};
        padding: .7rem 1rem;
        border-radius: .5rem;
        svg{
            font-size: 1.9rem;
            cursor: pointer;
            transition: transform 0.2s;
            &:hover{
                transform: scale(1.06);
            }
        }
    }
`