import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from '~/pages/Home';
import Issues from '~/pages/Issues';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Home,
      Issues,
    },
    {
      navigationOptions: {
        title: ''
      },
    }
  )
);

export default Routes;
