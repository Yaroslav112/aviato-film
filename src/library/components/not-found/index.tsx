import withNavigation from '../../hocs/with-navigation';
import { NotFoundContainer, Text } from './styles';

const NotFound = () => (
  <NotFoundContainer>
    <Text>Page not found</Text>
  </NotFoundContainer>
);

export default withNavigation(NotFound);
