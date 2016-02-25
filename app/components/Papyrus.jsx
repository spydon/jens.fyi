import React from 'react';

export default class Papyrus extends React.Component {

  componentWillMount() {
    this.setState({
      visible: true
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      visible: false
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if(!this.state.visible) {
      this.setState({
        visible: true
      });
    }
  }

  splitString(text) {
    const maxLength = 37;
    text = text ? text.trim() : "";
    var rows = [];
    var i = 0;
    while(text.length != 0 && i != 10) {
      i++;
      const subTextLength = text.length > maxLength ? maxLength : text.length;
      const subText = text.substring(0, subTextLength).trim();
      const lastSpace = subText.lastIndexOf(" ")+1;
      const end = subTextLength < maxLength ? subTextLength : lastSpace;
      const row = subText.substring(0, end);

      const size = row.length/2 + "em";
      const style = {width: size};

      rows = rows.concat(<p key={rows.length} className="css-typing" style={style}>{row}</p>);
      text = text.substring(end);
    }

    return rows;
  }

  render() {
    const page = this.props.page;
    const rows = this.splitString(this.props.text);
    const style = this.state.visible ? {} : {display: "none"};

    return (
      <div>
        <div style={style}>{rows}</div>
        <p className="papyrus-turn-page">Page {page}</p>
      </div>
      );
  }
}
