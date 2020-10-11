class Item extends React.Component {
  static getInitialProps({ query }) {
    debugger;
    return { query };
  }
  render() {
    return <div>Hey</div>;
  }
}

export default Item;
