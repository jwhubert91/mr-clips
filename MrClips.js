function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var MrClips = function MrClips(_ref) {
  var height = _ref.height;
  var clipsStyle = {
    height: height + "px",
    position: "fixed",
    bottom: '10px',
    right: '10px',
    zIndex: '99999999'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: clipsStyle
  }, /*#__PURE__*/React.createElement("img", {
    src: 'https://drive.google.com/uc?id=1fcFz1ESLzA_8KPlQKICg2gmUSc2__nxN',
    alt: "How can I help you?",
    style: {
      height: '100%'
    }
  }));
};

module.exports = MrClips;
//# sourceMappingURL=index.js.map
