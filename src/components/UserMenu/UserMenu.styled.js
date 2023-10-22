import styled from 'styled-components';

export const Container = styled.div`
  /* margin: 0 auto; */
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const Logout = styled.button`
  padding: 2px 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: #fff;
  border-color: transparent;
  width: fit-content;
  border-radius: 2px;

  &:hover,
  &:focus {
    box-shadow: yellow 0px 0px 0px 2px;
  }
`;
