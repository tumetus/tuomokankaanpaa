---
title: "How To Use CSS Modules With create-react-app"
date: "2019-10-22"
coverImage: "existence.png"
---

In order to use [CSS Modules](https://github.com/css-modules/css-modules) in your Javascript project you usually need to do some configuring. Luckily this is not the case when you are using [create-react-app](https://github.com/facebook/create-react-app). CSS Modules are supported with create-react-app out of the box. There is however a catch that you need to know in order to get your CSS Modules working in your create-react-app project.

_Read also_ [_6 Things Every Beginner React Developer Should Know_](https://codepulse.blog/6-things-every-beginner-react-developer-should-know/)

https://www.youtube.com/watch?v=Udf951dyTdU

[Watch through tutorial on YouTube](https://www.youtube.com/watch?v=Udf951dyTdU)

If you want create-react-app to treat a CSS file as CSS Module file, you need to use a specific naming convention when naming your CSS file. You need to name your CSS files with `.module.css` extension. This way create-react-app knows that the file should be treated as CSS Module. After this you can import the CSS file normally and use the class names from it to style your components.

This post is a short one because I just wanted to write a quick post about this since I was fighting with this a while back. It took me way too long to find the solution for this and hopefully this post helped you to solve the problem with CSS Modules and CRA faster than it took me.

If you would like a more through explanation, I made a video about this to [CodePulse YouTube channel](https://www.youtube.com/channel/UC34UXFLKqdW3cpk5CBu2Siw), so be sure to check that out.
