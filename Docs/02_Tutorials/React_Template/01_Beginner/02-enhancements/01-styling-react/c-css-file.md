# Using a Good Old CSS File

Some nice options of CSS frameworks *without* javascript (you want to handle this yourself with React):

CSS Sheets:

- [Mustar UI](https://mustard-ui.com/)
- [Primer](https://primer.style/)
- [Chuck CSS](http://chuckcss.io)
- [PicNic CSS](https://picnicss.com/)
- [Pure](https://purecss.io/)
- [Min](http://mincss.com)

Some utilities frameworks

- [TailWind](https://tailwindcss.com/)
- [Tachyons](https://tachyons.io/)

Utilities frameworks are a bit different because you do not edit any css. Instead, you compose a lot of classes.
For example, a button in `Tachyon` might look like:

```html
<a class="f6 link dim br1 ph3 pv2 mb2 dib white bg-black" href="#0">Button Text</a>
```

Of course, you can abstract it to a component in React, so it's no big deal, but it is definitely a different way of approaching this

I like [Picnic](https://picnicss.com/), because it uses as little classes as possible. The styles are directly applied to html tags, such as `<p>` and `<button>`, instead of classes.

This is generally considered very bad practice, but it helps getting started fast, because you have nothing to learn. Include the css file, write your tags, you're good to go.

Picnic is very limited, which means you'll have to add a lot of styling, or switch to something else later, but it is great to not waste time making css choices.

Let's do this. Move to `front`, and

```sh
npm install picnic --save
```

Then, in `index.js`, write:

```js
// front/src/index.js
import "picnic/picnic.min.css";
```

You're done!