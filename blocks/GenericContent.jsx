GenericContent = React.createClass({

  propTypes: {
    content: React.PropTypes.string
  },

  render() {

    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: false,
      breaks: true,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });

    var content = { __html: window.marked(this.props.content) };

    return (
    <div className="GenericContent" dangerouslySetInnerHTML={content}></div>
    );
  }
});
