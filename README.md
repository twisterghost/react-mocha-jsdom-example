# React Mocha JSDOM Example

A quick and concise example of testing React components in Mocha using JSDOM.

## Some quick info

### What JSDOM does for you

JSDOM emulates a DOM entiely in Nodejs. This lets you render React components
into a fake DOM and poke at them the same way you would if you ran your tests
in a browser or in PhantomJS.

### What is lost (spoiler: not much)

You won't be testing your component in an actual browser, therefore you won't
have the _exact_ same level of certainty in your tests. If you are using this
method for unit testing, you won't need to worry about much. If your components
are doing very complex stuff with generating DOM elements outside of the flow
of react's `render` methods, this may not be for you.

## Setting it up

This is the wonderful part. There is hardly any setup. You just need a tiny
bit of scaffolding that you require via mocha's `--require` flag. See
[test/setup](https://github.com/twisterghost/react-mocha-jsdom-example/blob/master/test/setup.js)
for a documented example of what you'll need.

## Writing tests

You can write your tests the same way you always have. If you haven't written
tests before, you can see the example test files written in both ES5 and 6
living in the `test` directory of this repo. For the sake of brevity, I won't
write complicated examples here. The example files have plenty of comments.

If something needs clarification, please open an issue and I will improve the
documentation around that area in this repo's files.
