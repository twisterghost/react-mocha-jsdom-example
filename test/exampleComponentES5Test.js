var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestUtils = require('react-addons-test-utils');
var ExampleComponent = require('../src/exampleComponent.jsx');
var assert = require('chai').assert;

var Simulate = ReactTestUtils.Simulate;
var ExampleComponentFactory = React.createFactory(ExampleComponent);

describe('Example Component ES5', function() {

  // The simplest use case - ensure the component can be rendered into our test 
  // environment.
  it('can be rendered', function() {
    var example = ReactTestUtils.renderIntoDocument(ExampleComponentFactory({}));
    assert(example);
  });

  // Interact with the component using findDOMNode and ReactTestUtils.Simulate
  // Here, we test the click handler for the component
  it('can be interacted with', function() {
    var example = ReactTestUtils.renderIntoDocument(ExampleComponentFactory({}));
    Simulate.click(ReactDOM.findDOMNode(example));
    assert.isTrue(example.state.clicked);
  });

  // Inspect the rendered component using its refs
  // You could also use querySelector, but refs are preferrable for most operations
  it('can be queried with refs', function() {
    var example = ReactTestUtils.renderIntoDocument(ExampleComponentFactory({}));
    Simulate.click(ReactDOM.findDOMNode(example));
    assert.isDefined(example.refs.clicked);
  });

  // If you want to keep your unit testing true, you may want to directly call
  // functions instead of calling them through simulations. You can still do
  // just that by calling functions directly from the return value of
  // renderIntoDocument()
  it('provides access to direct function calls', function() {
    var example = ReactTestUtils.renderIntoDocument(ExampleComponentFactory({}));
    example.clickHandler();
    assert.isTrue(example.state.clicked);
    assert.isDefined(example.refs.clicked);
  });
});
