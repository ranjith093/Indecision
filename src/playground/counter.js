class Counter extends React.Component {
  constructor(props){
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    }
  }
  componentDidMount(){
    const count = parseInt(localStorage.getItem('counter'), 10);
    if(!isNaN(count)){
    this.setState(() => ({count}));
    }
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.count !== this.state.count){
      localStorage.setItem('counter', this.state.count);
    }
  }
  handleAddOne(){
    this.setState((prevState) => {
      return{
        count: prevState.count + 1
      }
    })
  }
  handleMinusOne(){
    this.setState((prevState) => {
      return {
        count: prevState.count - 1 
      }
    })
  }
  handleReset(){
    this.setState(() => {
      return {
        count: 0
      }
    })
    // this.setState({
    //   count: 0
    // })
    // this.setState({
    //   count: this.state.count + 1
    // })
  }
  render(){
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter /*count={5}*//>, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//   count++;
//   render();
// };
// const minusOne = () => {
//   count--;
//   render();
// };
// const reset = () => {
//   count = 0;
//   render();
// };
// const appRoot = document.getElementById("app");
// const render = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );
//   ReactDOM.render(templateTwo, appRoot);
// };

// render();
