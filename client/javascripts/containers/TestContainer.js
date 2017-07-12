import { connect } from 'react-redux';

import Test from '../components/Test';
import { fooChanged } from '../actions/testActionCreators';

export default connect(
  ({ test: { foo } }) => ({ foo }),
  { onChangeFooPress: fooChanged },
)(Test);
