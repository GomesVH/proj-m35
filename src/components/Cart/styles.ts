import styled from 'styled-components'
import { Colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'
import fechar from '../../assets/fechar.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${Colors.black};
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`

export const Sidebar = styled.aside`
  background-color: ${Colors.gray};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  & > Button {
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.04);
    }
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${Colors.white};
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: ${Colors.ligthGray};
  }
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${Colors.white};
  margin-top: 32px;
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${Colors.ligthGray};
  padding: 8px 0;
  position: relative;

  ${TagContainer} {
    display: inline-flex;
  }

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    color: ${Colors.white};
    font-weight: bold;
    font-size: 16px;
  }

  span {
    display: block;
    color: ${Colors.white};
    font-weight: bold;
    font-size: 14px;
  }

  ${TagContainer} {
    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 8px;
    right: 0;
    cursor: pointer;
  }
`

export const CheckoutCart = styled.div`
  display: block;

  h3 {
    margin-bottom: 14px;
  }
`

export const FormDelivery = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 100%;

  font-weight: bold;

  Button {
    margin-top: 22px;
  }

  label,
  .cep-numb {
    margin-top: 16px;
  }

  input,
  label {
    height: 32px;
    border-radius: 2px;
    border: none;
  }

  .cep-numb {
    display: flex;

    & div {
      margin-right: 18px;
      width: calc(100% - 10%);

      input,
      label {
        max-width: 155px;
      }
    }
  }
`