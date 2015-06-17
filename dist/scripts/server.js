module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _componentsHandlersAppHandler = __webpack_require__(4);

	var _componentsHandlersAppHandler2 = _interopRequireDefault(_componentsHandlersAppHandler);

	var _componentsHandlersBooksHandler = __webpack_require__(8);

	var _componentsHandlersBooksHandler2 = _interopRequireDefault(_componentsHandlersBooksHandler);

	var Routes = _react2['default'].createElement(
	  _reactRouter.Route,
	  { name: 'root', path: '/', handler: _componentsHandlersAppHandler2['default'] },
	  _react2['default'].createElement(_reactRouter.Route, { name: 'books', path: 'books', handler: _componentsHandlersBooksHandler2['default'] }),
	  _react2['default'].createElement(_reactRouter.DefaultRoute, { handler: _componentsHandlersBooksHandler2['default'] })
	);

	exports['default'] = Routes;
	module.exports = exports['default'];

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _stylesGlobalsCss = __webpack_require__(5);

	var _stylesGlobalsCss2 = _interopRequireDefault(_stylesGlobalsCss);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _header = __webpack_require__(6);

	var _header2 = _interopRequireDefault(_header);

	var App = (function (_React$Component) {
	  function App() {
	    _classCallCheck(this, App);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(App, _React$Component);

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'main',
	        null,
	        _react2['default'].createElement(_header2['default'], null),
	        _react2['default'].createElement(
	          _reactRouter.Link,
	          { to: 'books' },
	          'Book path'
	        ),
	        _react2['default'].createElement(_reactRouter.RouteHandler, this.props)
	      );
	    }
	  }]);

	  return App;
	})(_react2['default'].Component);

	exports['default'] = App;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	// empty (null-loader)

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _stylesHeaderLess = __webpack_require__(7);

	var _stylesHeaderLess2 = _interopRequireDefault(_stylesHeaderLess);

	var Header = (function (_React$Component) {
	  function Header() {
	    _classCallCheck(this, Header);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(Header, _React$Component);

	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'header',
	        { className: _stylesHeaderLess2['default'].header },
	        _react2['default'].createElement(
	          'p',
	          { className: _stylesHeaderLess2['default'].foo },
	          'Book Shelf!'
	        )
	      );
	    }
	  }]);

	  return Header;
	})(_react2['default'].Component);

	exports['default'] = Header;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = {
	  "header": "_1NWXQ9VTDjpNlJtoPfRDaw",
	  "foo": "_3EQW8QZMxIWTpP3YNPw2Nk"
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	// import Container from 'worsley/container';

	var _books = __webpack_require__(9);

	var _books2 = _interopRequireDefault(_books);

	var BooksHandler = (function (_React$Component) {
	  function BooksHandler() {
	    _classCallCheck(this, BooksHandler);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(BooksHandler, _React$Component);

	  _createClass(BooksHandler, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'h1',
	        null,
	        'Hello'
	      );
	    }
	  }]);

	  return BooksHandler;
	})(_react2['default'].Component);

	exports['default'] = BooksHandler;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _book = __webpack_require__(10);

	var _book2 = _interopRequireDefault(_book);

	var Books = (function (_React$Component) {
	  function Books() {
	    _classCallCheck(this, Books);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(Books, _React$Component);

	  _createClass(Books, [{
	    key: 'addBook',
	    value: function addBook() {
	      this.props.BooksActions.create({ id: 3, title: 'Sapiens' });
	    }
	  }, {
	    key: 'renderBooks',
	    value: function renderBooks() {
	      return this.props.books.map(function (book) {
	        return _react2['default'].createElement(_book2['default'], { key: book.id,
	          title: book.title,
	          isbn: book.isbn });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;

	      var books = this.renderBooks();

	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'ul',
	          null,
	          books
	        ),
	        _react2['default'].createElement(
	          'span',
	          { onClick: function (e) {
	              return _this.addBook(e);
	            } },
	          'Add a book'
	        )
	      );
	    }
	  }]);

	  return Books;
	})(_react2['default'].Component);

	exports['default'] = Books;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _stylesBookLess = __webpack_require__(11);

	var _stylesBookLess2 = _interopRequireDefault(_stylesBookLess);

	var Book = (function (_React$Component) {
	  function Book() {
	    _classCallCheck(this, Book);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(Book, _React$Component);

	  _createClass(Book, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'li',
	        null,
	        _react2['default'].createElement(
	          _reactRouter.Link,
	          { to: 'books' },
	          'MyLink'
	        ),
	        _react2['default'].createElement(
	          'p',
	          { className: _stylesBookLess2['default'].header },
	          this.props.title
	        ),
	        _react2['default'].createElement('img', { src: 'http://covers.openlibrary.org/b/isbn/' + this.props.isbn + '-M.jpg' })
	      );
	    }
	  }]);

	  return Book;
	})(_react2['default'].Component);

	exports['default'] = Book;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = {
	  "header": "thujpq7f97kDBbfRvkvyr"
	};

/***/ }
/******/ ]);