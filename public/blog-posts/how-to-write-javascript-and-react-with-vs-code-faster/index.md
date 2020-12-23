---
title: "How to write Javascript and React with VS Code FASTER!"
date: "2020-07-09"
coverImage: "feature-image.jpg"
---

If you are using VS Code to write Javascript or React code, keep reading!

VS Code is my favourite code editor and I use it mostly to write Javascript and React code.

Since I use it a lot, I have picked up few things that make my life easier as a Javascript and React developer. One of them is code snippets!

_See also: [TOP 10 Keyboard Shortcuts For Visual Studio Code](https://codepulse.blog/top-10-keyboard-shortcuts-for-visual-studio-code/)_

Code snippets are great because they save me from having to write same boilerplate code, for example when creating a React component or defining a for loop, over and over again.

You just type in the prefix for the code you want to generate and press enter and voalá, you got your code written instantly!

[On the video below](https://www.youtube.com/watch?v=uuXxomVFbC8), I will show you how you can get started on using React and Javascript code snippets with Visual Studio Code in a matter of minutes! I will also share bunch of my favourite and most used snippets that I use every day.

https://www.youtube.com/watch?v=uuXxomVFbC8

If you rather read, here is a short summary of the video. (I still recommend you [check the video out](https://www.youtube.com/watch?v=uuXxomVFbC8), and if you like it please do subscribe to [my Youtube channel](https://www.youtube.com/channel/UC34UXFLKqdW3cpk5CBu2Siw) also, I would really appreciate it!).

In VS Code, you can create your own snippets. But that is not necessary, because you can also install an extension that provides code snippets you want.

There is a great extension for Javascrit & React code snippets called [VS Code ES7 React/Redux/React-Native/JS snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) and you can install it from the extensions tab in your Visual Studio Code.

After installing the extension, you can start using the snippets right away! Snippets can be used with prefixes listed in the extension page. You just type in the prefix in the file you are editing and press `enter` and the snippet is automatically generated.

Here are couple of my favourite snippets:

###### fin

for(let itemName in objectName { }

###### nfn

const functionName = (params) => { }

###### clg

console.log(object)

###### imr

import React from 'react'

###### imrc

import React, { Component } from 'react'

###### imrr

import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

###### cdm

componentDidMount = () => { }

###### cdup

componentDidUpdate = (prevProps, prevState) => { }

###### rcc

import React, { Component } from 'react'

export default class FileName extends Component {
  render() {
    return <div>$2</div>
  }
}

###### rpcp

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class FileName extends PureComponent {
  static propTypes = {}

  render() {
    return <div>$2</div>
  }
}

###### rcredux

import React, { Component } from 'react'
import { connect } from 'react-redux'

export class FileName extends Component {
  render() {
    return <div>$4</div>
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FileName)

### Wrapping up

Code snippets really save keystrokes and that way also your time and you can code faster and be more efficient.

Are you using code snippets? Comment below your favourite code snippets!

PS. If you are new to React or someone who has just started using it, you should check out my [React Basics course](https://skl.sh/2XAKn7u) on Skillshare. You can now get it for free when registering to Skillshare through [this link](https://skl.sh/2XAKn7u).
