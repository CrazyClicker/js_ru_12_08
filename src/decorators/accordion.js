//HOC - higher order component
//decorator
import React from 'react'

//Декораторы создают для переиспользования кода. Их следует делать максимеально универсальными, 
//не привязывайся к названиям сущностей типа Article. Лучше называй toggleOpenItem, например
export default (Component) => {
    return class AccordionDecorator extends React.Component {
        state = {
            openArticleId: null
        }

        toggleOpen = id => ev => {
            if (ev) ev.preventDefault()
            this.setState({
                openArticleId: this.state.openArticleId == id ? null : id
            })
        }

        isOpen = id => this.state.openArticleId == id

        render() {
            return <Component {...this.props}  toggleOpen = {this.toggleOpen} isOpen = {this.isOpen}/>
        }
    }
}
