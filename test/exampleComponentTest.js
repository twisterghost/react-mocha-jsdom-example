import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ExampleComponent from '../src/exampleComponent.jsx';
import {assert} from 'chai';

const ExampleComponentFactory = React.createFactory(ExampleComponent);

describe('Example Component', () => {
  it('can be rendered', () => {
    let example = ReactTestUtils.renderIntoDocument(ExampleComponentFactory({}));
    assert(example);
  });
});
