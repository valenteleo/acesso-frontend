import styled from "styled-components";

export const Container = styled.div``;

export const FormField = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #284b63;
  border-radius: 8px;
  margin: 5px 0;
`;

export const SelectDpo = styled.select`
  padding: 10px;
  border: 1px solid #284b63;
  border-radius: 8px;
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 8px;
  border: none;
  background-color: #dc0032;
  color: #fff;
  cursor: pointer;
`;
