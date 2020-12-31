---
title: "Number #1 Problem for Developers - Solved!"
date: "2020-05-09"
coverImage: "hardest-thing-developer.png"
---

One of the most difficult things in programming is coming up with variable names. If the situation is even a bit more complex, I always end up either coming up with bad non-describing name or just taking way too much time thinking of the name.

Variable naming is hard. But one thing that is maybe even harder is thinking of dummy data I can input and test my application with. Lorem ipsum can only do so much. When I need to create for example dummy users, it is just difficult to make up a user name or email, not to mention other info that a user might have, say for example an address.

I have a feeling that I am not alone with this. That is why I wrote this post. Because to be honest I no longer have this issue, thanks to Faker.js.

## Faker.js

[Faker.js](https://github.com/marak/Faker.js/) is a fake data generator for JavaScript. We can use it to generate massive amounts of fake data in the browser and node.js. They have a long list of properties we can generate and I won't list all of them here (you can check it out [here](https://github.com/marak/Faker.js/#api-methods)) but to mention few, you can e.g. generate user names, avatars, emails, location, address, etc.

Usage and the API is very easy and straight forward to use. If we want to use Faker.js in the browser and generate a user name and email, we can do it as follows.

```html
<script src="faker.js" type="text/javascript"></script>
<script>
  var randomName = faker.name.findName(); // Caitlyn Kerluke
  var randomEmail = faker.internet.email(); // Rusty@arne.info
</script>
```

So first we include faker.js file and then generate the name using `faker.` and the respective method name (you can find all the available methods from the [documentation](https://github.com/marak/Faker.js/#api-methods)).

If we want to test Faker.js out, they have a demo site where we can poke around and get a better understanding of all the kind of data we can generate with it. The demo site is found [here](https://rawgit.com/Marak/faker.js/master/examples/browser/index.html).

I hope you found this post helpful and learned something new. I have a [YouTube channel](https://www.youtube.com/channel/UC34UXFLKqdW3cpk5CBu2Siw) where I consistently upload more videos and tutorials about web development. Go ahead and [subscribe](https://www.youtube.com/channel/UC34UXFLKqdW3cpk5CBu2Siw?sub_confirmation=1) to the channel to get posted on all the new uploads!
