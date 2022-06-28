import { ButtonComponent, NavBtn } from './styles';

export const Button = ({ icon }) => {
  return(
    <NavBtn>
      <ButtonComponent>{icon}</ButtonComponent>
    </NavBtn>
  )
}