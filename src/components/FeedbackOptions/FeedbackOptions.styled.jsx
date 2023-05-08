import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;

  display: block;
  margin: 14px auto;

  width: 100%;
  max-width: 110px;
  height: 35px;
  padding: 2px 5px;

  color: #fff;
  background-color: #62ada0;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  text-transform: capitalize;

  border: none;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.24) 8px 8px 5px 0px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #095525;
    background-color: #c8e9e3;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
