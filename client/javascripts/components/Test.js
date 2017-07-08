import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  foo: PropTypes.string,
  onChangeFooPress: PropTypes.func,
};

const defaultProps = {
  foo: null,
  onChangeFooPress() {},
};

export default class Test extends React.Component {
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
    return (
      <div>
        <h1>This is Foo</h1>
        <div>{this.props.foo}</div>
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
