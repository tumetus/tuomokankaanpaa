---
title: "How to focus element in React"
date: "2018-09-27"
coverImage: "focus_search_field.png"
---

Focusing elements with plain Javascript is quite easy. You get the element for example with id and call `focus()` on it e.g. `document.getElementById("myAnchor").focus()` and that's it. But how can you focus element in React since you can't get the element by id, class or type, like you would with plain Javascript?

The answer is: React Refs!

[![5 Tips for Successful Remote Work](http://img.youtube.com/vi/mqP_qNViGUQ/0.jpg)](http://www.youtube.com/watch?v=mqP_qNViGUQ)

## React Refs

[Refs](https://reactjs.org/docs/refs-and-the-dom.html) can be used to access DOM nodes or React components that are rendered in the render method. Refs are created with `React.createRef()` function. Refs can then be assigned to an element with ref-attribute. Following example shows a component that will focus to the text input when rendered.

```jsx
class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focus();
  }

  render() {
    return <input ref={this.textInput} />;
  }
}
```

So we create the ref in the constructor and assign it for `textInput` variable. Then in the `render()` method we render our input and set ref-attribute to equal the `textInput` variable. To get the input autofocus when the component is rendered, we call `focus()` on the `textInput` variable in the `componentDidMount()` method. Note that in order to access the DOM element of the ref we need to use the ref's `current` property.

## React < 16.3

The example above uses `React.createRef()` API for creating refs. It was introduced in React 16.3. If you are using an earlier version of React you should use [_callback refs_](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs).

With callback refs we need to pass a function (instead of ref attribute created by `React.createRef()`) for the input's ref-attribute. The function receives DOM element as its argument which can be stored and accessed elsewhere. So the `AutoFocusTextInput` component would look like following with callback refs.

```jsx
class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = null;
  }

  componentDidMount() {
    this.textInput.focus();
  }

  render() {
    return <input ref={(elem) => (this.textInput = elem)} />;
  }
}
```

In the constructor we define `textInput` variable and set it to `null`. Then in the `render()` method we pass a function which assigns the element, given as parameter, for the `textInput` variable. In the `componentDidMount()` method we now call `focus()` directly to the `textInput` variable since it is now the DOM element.

## Wrapping up

Focusing inputs with React is a bit different than with plain Javascript. But once you get the hang of it, it's quite straight forward. Depending on the React version in use, you have two options , from which to choose from, for implementing refs.

In case you want to try and play around with refs and focusing (with both ways), [here is a codesandbox](https://codesandbox.io/s/xo7ozwqx9q) I created. There you can find two components `Refs163` and `Refs162` which implement refs both with `React.createRef()` and with _callback refs_.

If you are interested in learning more about React, I recommend you check out [The Road to learn React](https://amzn.to/31dUD7G) by Robin Wieruch and [React Quickly](https://amzn.to/2YxTc2g) by Azat Mardan. Both of these are great resources for learning React and should be found from any serious React developer's bookshelf.

That's it for now! If you have any questions or comments, be sure to leave them in the comment section!
