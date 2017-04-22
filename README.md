tiny, dependency-free JavaScript loader — intended primarily for loading
polyfills up front

```javascript
loadScripts(["foo.js", "bar.js", "baz.js"], function() {
    // all aforementioned scripts have been loaded
});
```

(scripts are loaded and executed sequentially)

you can also pass an object in order to assign arbitrary attributes to the
generated `script` tag, e.g. for
[Subresource Integrity](https://www.w3.org/TR/SRI/):

```javascript
loadScripts([{
    src: "https://cdn.example.org/lib.js",
    integrity: "sha256-Ijl…1bE=",
    crossorigin: "anonymous"
}]);
```

prompted by
[Loading Polyfills Only When Needed](https://philipwalton.com/articles/loading-polyfills-only-when-needed/),
which explains why `document.write` should be avoided

see `samples` directory for usage examples
