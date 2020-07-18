import React, {Component} from "react"


class FormList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'coconut',
            chooseSide: ""
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
            
          <form onSubmit={this.handleSubmit}>
            <label>
              Chose of size:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="Small Pizza">Small Pizza</option>
                <option value="Medium Pizza">Medium Pizza</option>
                <option value="Large Pizza">Large Pizza</option>
                <option value="Xtra Pizza">Xtra Pizza</option>
              </select>
            </label>
            

            <label>
            <input type="radio" name="fruit" value="apple" />
            <input type="radio" name="fruit" value="orange" />
            <input type="radio" name="fruit" value="melon" />
            </label>
            
           </form>
           
        );
      }
    }



    
 
export default FormList;