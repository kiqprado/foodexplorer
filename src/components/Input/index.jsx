import { Container } from './styles'

export function Input({ icon: Icon, title, ...rest }) {
  return (
    <Container>
      {Icon && <Icon />}
      {title}
      <input {...rest} />
    </Container>
  );
};