# babel-plugin-jsx-classnames
babel plugin for automatically adding `classnames()` to `className` attribute.

transform

```javascript
<div className={expression}></div>
```

to

```javascript
<div className={classNames(expression)}></div>
```

## Why

### classNames

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

### babel-plugin-jsx-classnames

This babel plugin will keep you away from writing many `classNames`, make the code clean and easy to read.

## Usage

Install: (Don't forget to install classnames)

```
npm i classnames --save-dev
npm i babel-plugin-jsx-classnames --save-dev
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
    "jsx-classnames"
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

It will be transformed to:

```javascript
import classNames from 'classnames'

<button
  className={classNames({
    'btn-active': active,
    'btn-disabled': disabled,
  })}>
</button>
```
