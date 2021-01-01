---
title: "How to display FormData object values in Javascript"
date: "2019-05-25"
description: "If you want to see the values of FormData object, console.log does not work. Instead you need to use a property provided by FormData to inspect the values."
excerpt: "If you want to see the values of FormData object, console.log does not work. Instead you need to use a property provided by FormData to inspect the values."
tags: javascript, web development
---

If you are working with Javascript and sending data to server, especially when you need to send files, you might have run into [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) object. It is handy way to form set of key/value pairs that represent form fields and values. You will most likely run into a situation where you want to inspect your `FormData` object. Normally you could just `console.log` the object, but this doesn't work with FormData object.

If you console.log FormData object, you will just get empty object logged to the console. What you need to do is use `entries` property. Here is how you can log all key/value pairs to console using [entries](https://developer.mozilla.org/en-US/docs/Web/API/FormData/entries) property.

```js
var formData = new FormData();
formData.append("key_one", "First value");
formData.append("key_two", "Second value");
formData.append("key_three", "Thrid value");

// Log the key/value pairs
for (var pair of formData.entries()) {
  console.log(pair[0] + " - " + pair[1]);
}
```

This logs the following to the console:

```
key_one - First value
key_two - Second value
key_three - Thrid value
```

`FormData.entries()` returns array of the form data key/value pairs. Each row in the array contains one key/value pair. So item key is in the index 0 and item value is in the index 1.

Logging the values is just one example on what you can do with the key/value pairs. If you need to inspect the values of a FormData object for some other purpose, it is obviously easy to do using the `entries` property.
