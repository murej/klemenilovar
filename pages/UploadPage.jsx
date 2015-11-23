UploadPage = React.createClass({

  getInitialState() {
    return {
      hasUploaded: false
    }
  },

  onDrop: function (files) {

    var that = this;
    that.setState({ hasUploaded: false });

    files.forEach(function(file) {
      Images.insert(file, function (err, fileObj) {
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
        that.setState({ hasUploaded: true });
      });
    });

  },

  render() {

    var status = this.state.hasUploaded ? <div>DONE, drop more!</div> : <div> &rarr; Drop files anywhere &larr;</div>;

    return (
      <div className="UploadPage">
        { Meteor.user() ? <Dropzone onDrop={this.onDrop} style={{}}>{status}</Dropzone> : <div><div>Login first.</div></div> }
      </div>
    );
  }
});
