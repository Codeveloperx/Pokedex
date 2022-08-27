import styled from "styled-components"


const Container = styled.div`
    display:${props => props.flex ? 'flex': 'inherit'};
    flex-direction: ${props => props.Direction ? 'column' : 'row'};
    justify-content: ${props => props.centrarContenido || 'flex-start'};
    align-items: ${props => props.CentrarItems || 'flex-start'};
    width: ${props => props.Width ? '90%' : props};
    height: ${props => props.Height ? '100vh' : props};
    margin: 0 auto;
    `



export {Container}