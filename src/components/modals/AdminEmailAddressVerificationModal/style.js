// @flow
import theme from 'shared/theme';
import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 16px;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${theme.text.default};
  margin: 0;
`;
