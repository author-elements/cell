class AuthorCellElement extends AuthorBaseElement(HTMLElement) {
  constructor () {
    super(`{{TEMPLATE-STRING}}`)

    this.UTIL.defineProperties({
      defaultRole: {
        private: true,
        readonly: true,
        get: () => sourceElement.localName === 'th' ? 'columnheader' : 'cell'
      },

      injected: {
        private: true,
        default: false
      },

      sourceElement: {
        private: true,
        default: null
      }
    })

    this.UTIL.defineAttributes({
      role: this.PRIVATE.defaultRole
    })

    this.UTIL.registerListeners(this, {
      'attribute.change': evt => {
        let { attribute, newValue } = evt.detail

        switch (attribute.toLowerCase()) {
          case 'role':
            if (newValue !== this.PRIVATE.defaultRole) {
              this.setAttribute('role', this.PRIVATE.defaultRole)
            }

            break
        }
      },

      connected: () => this.setAttribute('role', this.PRIVATE.defaultRole)
    })
  }

  inject (sourceElement) {
    // Prevent re-injections
    if (this.PRIVATE.injected) {
      return
    }

    this.PRIVATE.sourceElement = sourceElement
    this.PRIVATE.injected = true
  }
}

customElements.define('author-cell', AuthorCellElement)

export default AuthorCellElement
