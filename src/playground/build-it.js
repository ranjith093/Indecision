
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility:false
        }
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details': 'Show Details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>Here are some details</p>
                    </div>
                )}
            </div>
        );
    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));























// let toggleVisibility = false;
// const onVisibilityToggle = () => {
//     toggleVisibility = !toggleVisibility;
//     render();
// }


// const appRoot =  document.getElementById('app');
// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onVisibilityToggle}>{toggleVisibility ? 'Hide Details' : 'Show Details'}</button>
//             {toggleVisibility && (
//                 <div>
//                     <p>Here is you details</p>
//                 </div>
//             )}
//         </div>
//     );
//     ReactDOM.render(template, appRoot)
// };
// render();