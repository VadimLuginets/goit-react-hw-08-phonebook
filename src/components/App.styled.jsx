import styled from '@emotion/styled';
export const Box = styled.div`
  background-color: cornflowerblue;
  color: floralwhite;
  font-size: 25px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  }`;
export const Nav = styled.nav`
    width: 100%;
    height: 80px;
    margin: 0;    
    font-weight: bold;
  background-color: #0332859e;
  color: floralwhite;
  font-size: 25px;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  }`;
export const Ul = styled.ul`
  padding: 0;
  list-style: none;
`;
export const RightBar = styled.div`
  margin-left: auto;
`;
export const Span = styled.span`
  color: #64daed;
  font-weight: bold;
  padding: 20px;
`;
export const Btn = styled.button`
  margin: 20px;
  width: 305px;
  font-size: 20px;
  border-radius: 50px;
  background-color: #6495ed;
  color: white;
  padding: 8px;
  text-align: center;
  border-color: #0000ff00;
  font-weight: 800;
  &:hover {
    outline: yellow solid;
  }
`;
