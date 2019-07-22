class Hello extends React.Component {
  render() {
    const props = this.props;
    let bangs = "!".repeat(this.props.bangs);
    return <p>Hi {props.to} from {props.from}{bangs} </p>;
  }
}