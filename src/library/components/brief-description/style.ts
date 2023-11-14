import styled from 'styled-components';

interface ContainerTypes {
  isDescriptionShown: boolean;
}

export const Container = styled.span<ContainerTypes>`
  position: relative;
  top: 100px;
`

export const Wrapper = styled.span`
  position: absolute;
`
