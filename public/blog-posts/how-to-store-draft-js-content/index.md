---
title: "How to store Draft.js content"
date: "2018-04-04"
---

[Earlier I wrote](https://codepulse.blog/2018/04/01/how-to-display-draft-js-content-as-html/) about Draft.js and how to display editor content as HTML. Most often just showing the current editor content as HTML is not sufficient and we need to store the editor content somewhere for example to a database. The HTML representation of the editor content can of course be stored to a database, but that is not the best option.

_I just published a class where I teach more about Draft.js. Best part is that you can get it for free! [Read more](https://codepulse.blog/rich-text-editing-in-react-with-draft-js-course/)._

Draft.js comes with _convertToRaw_ method that takes in a ContentState object and returns the given ContentState as a raw javascript object. This object can then be stored to a database or wherever you need to store your application’s data.

Then when we need to load the data from the database, we get the raw javascript object and we make use of another method provided by Draft.js, _convertFromRaw_. This method takes in a raw javascript object and returns corresponding ContentState object. You can then use this ContentState object to populate your Draft.js editor with your content.

\[caption id="attachment\_72" align="alignnone" width="660"\]![](images/IMG_6950-1024x493.jpg) Saving and loading Draft.js content\[/caption\]

Let’s see an example: https://gist.github.com/tumetus/ea7986141d3b41f200975fa8e7353927 _Here is a working demo: [https://github.com/tumetus/draft-js-to-raw](https://github.com/tumetus/draft-js-to-raw)_

In the example the component has a Draft.js editor and a pre-element that displays the editor content as raw javascript. It also saves the editor’s content to local storage so that when you refresh the page, the editor is populated with the saved data.

Saving and loading makes use of the _convertToRaw_ and _convertFromRaw_ methods mentioned earlier. So in this example you could also save the data for example to a server, instead of just saving it to local storage. For convenience reasons I made this example to save the data to local storage.

So as we see saving and loading Draft.js editor content is pretty straight forward in the end. If you have any questions or comments feel free to leave your comment below.
