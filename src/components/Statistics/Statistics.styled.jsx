import styled from 'styled-components';

export const StatisticList = styled.ul`
  margin: 0;
  padding: 15px 10px 25px;
  font-size: 16px;
  font-weight: 500;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #c8e9e3;
`;

export const StcItem = styled.li`
  margin-bottom: 6px;
  font-size: 16px;

  &:last-child {
    margin-bottom: 0px;
  }
`;
