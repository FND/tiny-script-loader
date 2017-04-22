tiny, dependency-free JavaScript loader — intended primarily for loading
polyfills up front

```javascript
loadScripts(["foo.js", "bar.js", "baz.js"], function() {
    // all aforementioned scripts have been loaded
});
```

(scripts are loaded and executed sequentially)

prompted by
[Loading Polyfills Only When Needed](https://philipwalton.com/articles/loading-polyfills-only-when-needed/),
which explains why `document.write` should be avoided

see `samples` directory for usage examples
