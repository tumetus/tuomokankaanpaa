---
title: "My first time using Flow for Static Type Checking"
date: "2018-07-04"
coverImage: "flow-1200x630-1.png"
description: "This was my first time using Flow type checking in a javascript project. Here are some of my experiences of it."
excerpt: "This was my first time using Flow type checking in a javascript project. Here are some of my experiences of it."
tags: javascript, typescript, flow, type checking
---

![Flow image](./images/flow-1200x630-1.png)

My first touch for Flow was a while back. I needed to add some kind of type checking for an existing React project and I decided to go with Flow (pun intended). Here are some of my experiences as first time Flow user.

## What is Flow?

From the official [Flow docs](https://flow.org/en/docs/getting-started/):

_Flow is a static type checker for your JavaScript code. It does a lot of work to make you more productive. Making you code faster, smarter, more confidently, and to a bigger scale._

_Flow checks your code for errors through **static type annotations**. These types allow you to tell Flow how you want your code to work, and Flow will make sure it does work that way._

_Because Flow understands JavaScript so well, it doesn’t need many of these types. You should only ever have to do a minimal amount of work to describe your code to Flow and it will infer the rest. A lot of the time, Flow can understand your code without any types at all._

## Deciding to go with Flow

I researched my options which were Flow and [Microsoft's TypeScript](https://www.typescriptlang.org/). I decided to go with Flow since I didn't want to move my code to new (.ts) files which I would have had to do with TypeScript. Also since Flow analyses your existing code even without any type annotations, it would be able to check my code and find errors from it right away. As far as I know, correct me if I'm wrong, TypeScript doesn't do this. Overall I got the picture that both are good choices and you really don't go wrong using either one.

## Installation

Installation was quite straight forward and easy to do with the help of [Flow installation instructions](https://flow.org/en/docs/install/). First step was setting up a compiler for stripping out Flow types. Since I was already using Babel in the project it was as easy as adding "flow" to Babel presets configuration and installing babel-preset-flow as dev dependency with yarn.

After this I just needed to install flow-bin as dev dependency with yarn and I was good to go. I ran "yarn run flow" and got 0 errors, yay!

## Usage

Ok 0 errors wasn't really a surprise. Since Flow monitors only files tagged as Flow files, I needed to add "// @flow" to the files I wanted to be checked by Flow. I started with one file and right away Flow found errors from it. I'm not sure if this is a sign of Flow's goodness or sign of how bad my code was 🙈 I decided that it was Flow's goodness (+ in my defence the file was quite large).

So I started by tagging one file and fixed the errors that Flow pointed out. Errors and inconsistencies weren't the only thing Flow was complaining about. It was of course pointing out the missing type annotations given that I had none in place. So I added those too, which was quite easy by just reading about them from the [docs](https://flow.org/en/docs/types/), and after a while I got 0 errors in my Flow terminal again!

I did this to few other files and after a while I got bunch of my files using Flow. I also started to already see the power of the type annotations when I was importing functions to components and I could see for example what the function was expecting as a parameter and what type of variables they were. And if I accidentally passed say string as a parameter for a function that was expecting number as a parameter, Flow instantly pointed this out and I was able to catch a potential bug before it had a chance to do any damage.

## Conclusion

This was my first touch to Flow. For this project I decided to go with Flow ( 🥁 ) but I am sure to try TypeScript out too. Flow was easy to install and I really liked the fact that by just adding "// @flow" to a file I could get it checked for errors and improve the code right away. I realise that this was just a scratch to the surface but I am excited to learn more about Flow and how to start utilising it's full potential on my JavaScript projects.
