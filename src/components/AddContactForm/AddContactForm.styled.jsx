import styled from '@emotion/styled';
export const Button = styled.button`
  margin: 20px;
  width: 305px;
  font-size: 20px;
  border-radius: 50px;
  background-color: #2858ac;
  color: white;
  padding: 8px;
  text-align: center;
  border-color: #0000ff00;
  font-weight: 800;
  &:hover {
    outline: yellow solid;
  }
`;
export const Input = styled.input`
  font-size: 20px;
  border-radius: 50px;
  background-color: #2858ac;
  color: white;
  padding: 8px;
  margin: 8px;
  text-align: center;
  border-color: #0000ff00;
  font-weight: 800;
  &:focus {
    outline: yellow solid;
  }
  &:hover {
    outline: yellow solid;
  }
`;
export const Form = styled.form`
  padding: 0;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Span = styled.span`
  color: #2858ac;
  font-weight: bold;
  margin-bottom: 16px;
`;
