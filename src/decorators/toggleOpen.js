//HOC - higher order component
//decorator
import React from 'react'

export default (Component) => {
    return class ToggleOpenComponent extends React.Component {
        state = {
            isOpen: false
        }

        toggleOpen = ev => {
            if (ev) ev.preventDefault()
            this.setState({
                isOpen: !this.state.isOpen
            })
        }

        render() {
            return <Component {...this.props} isOpen = {this.state.isOpen} toggleOpen = {this.toggleOpen}/>
        }
    }
}