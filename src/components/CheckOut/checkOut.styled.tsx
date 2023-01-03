import styled from "styled-components";

type ItemProps = {
  background: string;
};

export const Title = styled.p`
  font-weight: bold;
  font-size: 170px;
  margin-top: 20px;
`;

export const ItemWrapper = styled.div<ItemProps>`
  display: grid;
  align-items: flex-end;
  width: 240px;
  height: 340px;
  border-radius: 20px;
  background: ${(props) =>
  props.background && `url(${props.background}) center no-repeat`};
  background-size: 300px;
  overflow: hidden;
  position: relative;
`;

export const CheckOutTable = styled.table`
`;

export const CheckOutHeader = styled.th`
  height: 50px;
  width: 150px;
  background-color: #ffb703;
  border-radius: 20px;
  font-size: 25px;
  text-align: center;
  vertical-align: middle;
  color: #023047;
  font-family: 'tahoma';
`;

export const Det = styled.td`
  text-align: center;
  padding: 50px;

  p {
    font-weight: bold;
    font-size: 22px;
    margin: 0;
  }
`;

export const CheckOutLabel = styled.label`
  font-size: 19px;
  padding-right: 5px;
`;

export const CheckOutInput = styled.input`
  margin-right: 10px;
`;

export const OrderButton = styled.button`
  background-color: #ffb703;
  float: right;
  justify-content: center;
  align-items: center;
  top: 20px;
  right: 20px;
  width: 150px;
  height: 40px;
  padding: 5px;
  cursor: pointer;
  border-radius: 15px;
  broder: none;

  p {
    font-size: 20px;
    font-weight: bold;
    margin: 0;
    color: #023047;
  }

  
`;
