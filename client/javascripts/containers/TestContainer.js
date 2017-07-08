import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Test from '../components/Test';
import { fooChanged } from '../actions/testActionCreators';

function mapStateToProps({ test: { foo } }) {
  return { foo };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onChangeFooPress: fooChanged,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
