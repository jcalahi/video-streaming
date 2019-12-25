import React from 'react';
import { connect } from 'react-redux';
// components
import StreamForm from './StreamForm';
// actions
import { editStream, fetchStream } from '../../actions';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  }

  render() {
    if (!this.props.stream) return <div>Loading...</div>;
    const { id, userId, ...formItems } = this.props.stream;
    return (
      <div>
        <h3>Edit A Stream</h3>
        <StreamForm 
          initialValues={formItems}
          onSubmit={this.onSubmit} 
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    stream: state.streams[id]
  };
};

export default connect(mapStateToProps, { editStream, fetchStream })(StreamEdit);
