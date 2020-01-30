class IndecisionApp extends React.Component {
  constructor(props){
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    }
  }
  componentDidMount(){
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if(options){
        this.setState(() => ({options}))
      }
    } catch (error) {
      //do nothing
    }
  }
  componentDidUpdate(prevProps,prevState){
    if(prevState.options.length !== this.state.options.length){
      const json  = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('saving data');
    }
  }
  componentWillUnmount(){
    console.log('component will unmount');
  }
  handleDeleteOptions(){
    this.setState(() => ({options: []}));
  }
  handleDeleteOption(optionToRemove){
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((option) => {
          return optionToRemove !== option
        })
      }
    })
  }
  handlePick(){
    const option = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[option])
 };
 handleAddOption(option){
  if(!option){
    return "Enter a valid value to options"
  }else if(this.state.options.indexOf(option) > -1){
    return "This option already exist"
  }
  this.setState((prevState) => ({options:prevState.options.concat(option)}));
 }
  render() {
    const title = 'Indecision App';
    const subtitle = 'Put your life in the hands of a computer'
    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0}/>
        <Options handleDeleteOptions={this.handleDeleteOptions}
        options={this.state.options}
        handleDeleteOption={this.handleDeleteOption}/>
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>  
    </div>
  );
}
Header.defaultProps = { title: 'Indecision App' }
const Action = (props) => {
  return (
    <div>
      <button  disabled={!props.hasOptions} onClick={props.handlePick}>What Should I do?</button> 
    </div>
  );
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      <h4>{props.options.length > 0 ? 'Here are your options' : 'Please enter an option'}</h4>
      { 
        props.options.map((option) => (
          <Option 
          key={option} 
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}  
          />))
      }
      
    </div>
    
  );
}
const Option = (props) => {
  return (
    <div>
      Option: {props.optionText}
      <button onClick={(e) => {
        props.handleDeleteOption(props.optionText)
      }}>
      Remove</button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(()=> ({error}))
    if(!error){
      e.target.elements.option.value = ''
    }
  }
  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>  }
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));