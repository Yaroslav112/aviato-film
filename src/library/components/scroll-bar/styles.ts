import styled from 'styled-components';

export const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ScrollContent = styled.div`
  width: calc(100% + 17px);
  height: 100%;
  overflow-y: scroll;
  margin-right: -17px;
  padding-right: 17px;
`;
