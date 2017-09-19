# babel-plugin-transform-jsx-classnames
babel plugin for automatically adding `classnames()` to `className` attribute.

transform

```javascript
<div className={expression}></div>
```

to

```javascript
<div className={classNames(expression)}></div>
```

## Background

In React, when you need to render conditionally classNames, you can write code like this:

```javascript
<button className={`${active ? 'btn-active' : ''} ${disabled ? 'btn-disabled' : ''}`}>
</button>
```

[classnames](https://github.com/JedWatson/classnames) can help you write clear conditionally classNames:

```
<button 
  className={classNames({
    'btn-active': active,
    'btn-disabled': disabled,
  })}>
</button>
```

And this babel plugin will help you avoiding writing many `classNames`, make your code clean and easy to read.

## Usage

Install:

```
npm i babel-plugin-transform-jsx-classnames
```

Use plugin (example .babelrc):

```json
{
  "presets": [
    "env",
    "react"
  ],
  "plugins": [
    ...
    "transform-jsx-classnames"
  ]
}
```

Write your jsx:

```javascript
<button 
  className={{
    'btn-active': active,
    'btn-disabled': disabled,
  }}>
</button>
```



