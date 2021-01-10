import React, { Component} from 'react'

export class DropdownButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle = () => {
        (this.state.dropdownOpen ? this.setState({dropdownOpen: false}) : this.setState({dropdownOpen: true}))
        console.log(this.state.dropdownOpen)
    };

    render() {
        return (
          <select class="select-css">
            <option>This is a native select element</option>
            <option>Apples</option>
            <option>Bananas</option>
            <option>Grapes</option>
            <option>Oranges</option>
          </select>
          );
    }
}

export default DropdownButton
