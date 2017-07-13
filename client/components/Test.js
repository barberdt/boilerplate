import React from 'react';
import PropTypes from 'prop-types';
import { css, withStyles, withStylesPropTypes } from '../styles/withStyles';

const propTypes = {
  ...withStylesPropTypes,
  foo: PropTypes.string,
  onChangeFooPress: PropTypes.func,
};

const defaultProps = {
  foo: null,
  onChangeFooPress() {},
};

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editingFoo: '' };
    this.handleEditingFooChange = this.handleEditingFooChange.bind(this);
    this.handleChangeFooPress = this.handleChangeFooPress.bind(this);
  }

  handleEditingFooChange({ target: { value } }) {
    this.setState({ editingFoo: value });
  }

  handleChangeFooPress() {
    this.props.onChangeFooPress(this.state.editingFoo);
  }

  render() {
    const { styles } = this.props;
    return (
      <div>
        <h1 {...css(styles.title)}>This is Foo</h1>
        <div {...css(styles.foo)}>{this.props.foo}</div>
        <label htmlFor="foo">Edit Foo</label>
        <input
          name="foo"
          onChange={this.handleEditingFooChange}
          type="text"
          value={this.state.editingFoo}
        />
        <button type="submit" onClick={this.handleChangeFooPress}>Change Foo</button>
      </div>
    );
  }
}

Test.propTypes = propTypes;
Test.defaultProps = defaultProps;

export default withStyles(({ color }) => ({
  title: {
    color: color.red,
  },
  foo: {
    color: color.blue,
  },
}))(Test);