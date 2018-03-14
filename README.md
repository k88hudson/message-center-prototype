# Message Center Prototype

This repository demonstrates a possible architecture for displaying messages in Firefox from the Snippets Server
and other sources.

## Running the prototype

```
npm install
npm start
```

## Components

- **firefox**: This represents client code shipped with Firefox
- **message-center-templates**: A server providing js and css files for various templates
- **snippets-server**: This represents the snippets service, providing campaign data as an JSON-formatted array of campaigns

## Architecture

Our Firefox code, we include JS/CSS files from our Message Center Template Server:

```html
<html>
<head>
  <link rel="stylesheet" href="https://message-center-templates.mozilla.org/v60/templates.css">
</head>
<body>
  <script src="https://message-center-templates.mozilla.org/v60/templates.js"></script>
</html>
```

This gives us access to a list of functions on the window object:

```js
window.MessageCenterTemplates = {
  simple: ...
  special: ...
};
```
