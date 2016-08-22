export default {
    getInitialState() {
        return {
            openArticleId: null
        }
    },

    toggleOpen(id) {
        return ev => {
            if (ev) ev.preventDefault()
            this.setState({
                openArticleId: this.state.openArticleId == id ? null : id
            })
        }
    },

    isOpen(id) {
        return this.state.openArticleId == id
    }
}