import styled from 'styled-components';

export const List = styled.ul`
  list-style: disc;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Marker = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: yellow;
`;

export const DeleteBtn = styled.button`
  margin-left: auto;
  padding: 4px 10px;
  box-shadow: yellowgreen 0px 1px 6px;
  background-color: #fff;
  border-color: transparent;
  width: fit-content;
  border-radius: 2px;

  &:hover,
  &:focus {
    box-shadow: yellow 0px 0px 0px 2px;
  }
`;
