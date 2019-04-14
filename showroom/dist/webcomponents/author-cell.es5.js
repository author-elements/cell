// Copyright (c) 2019 Author.io. MIT licensed.
// @author.io/element-cell v1.0.0 available at github.com/author-elements/cell
// Last Build: 4/13/2019, 10:10:51 PM
var AuthorCellElement = (function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  if (!window.hasOwnProperty('AuthorBaseElement')) {
    console.error('[ERROR] <author-cell> Required dependency "AuthorBaseElement" not found.');
    console.info('AuthorBaseElement is available at https://github.com/author-elements/base');
  }

  (function () {
    var missingDependencies = Array.from(new Set([])).filter(function (dep) {
      return !customElements.get(dep);
    });

    if (missingDependencies.length > 0) {
      console.error("[ERROR] <author-cell> Required dependenc".concat(missingDependencies.length !== 1 ? 'ies' : 'y', " not found: ").concat(missingDependencies.map(function (d) {
        return "<".concat(d, ">");
      }).join(', ').replace(', ' + missingDependencies[missingDependencies.length - 1], ' and ' + missingDependencies[missingDependencies.length - 1])));
      missingDependencies.forEach(function (dep, i) {
        return console.info("".concat(i + 1, ". <").concat(dep, "> is available at ").concat('https://github.com/author-elements/cell'.replace('cell', dep.replace('author-', ''))));
      });
    }
  })();

  var AuthorCellElement =
  /*#__PURE__*/
  function (_AuthorBaseElement) {
    _inherits(AuthorCellElement, _AuthorBaseElement);

    function AuthorCellElement() {
      var _this;

      _classCallCheck(this, AuthorCellElement);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(AuthorCellElement).call(this, "<template><style>@charset \"UTF-8\"; :host *,:host :after,:host :before{box-sizing:border-box}author-cell *,author-cell :after,author-cell :before{box-sizing:border-box}</style><slot></slot></template>"));

      _this.UTIL.defineProperties({
        defaultRole: {
          "private": true,
          readonly: true,
          get: function get() {
            return sourceElement.localName === 'th' ? 'columnheader' : 'cell';
          }
        },
        injected: {
          "private": true,
          "default": false
        },
        sourceElement: {
          "private": true,
          "default": null
        }
      });

      _this.UTIL.defineAttributes({
        role: _this.PRIVATE.defaultRole
      });

      _this.UTIL.registerListeners(_assertThisInitialized(_this), {
        'attribute.change': function attributeChange(evt) {
          var _evt$detail = evt.detail,
              attribute = _evt$detail.attribute,
              newValue = _evt$detail.newValue;

          switch (attribute.toLowerCase()) {
            case 'role':
              if (newValue !== _this.PRIVATE.defaultRole) {
                _this.setAttribute('role', _this.PRIVATE.defaultRole);
              }

              break;
          }
        },
        connected: function connected() {
          return _this.setAttribute('role', _this.PRIVATE.defaultRole);
        }
      });

      return _this;
    }

    _createClass(AuthorCellElement, [{
      key: "inject",
      value: function inject(sourceElement) {
        // Prevent re-injections
        if (this.PRIVATE.injected) {
          return;
        }

        this.PRIVATE.sourceElement = sourceElement;
        this.PRIVATE.injected = true;
      }
    }]);

    return AuthorCellElement;
  }(AuthorBaseElement(HTMLElement));

  customElements.define('author-cell', AuthorCellElement);

  return AuthorCellElement;

}());
//# sourceMappingURL=author-cell.es5.js.map
