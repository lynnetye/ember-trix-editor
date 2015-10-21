# ember-trix-editor

An Ember wrapper for the [Trix editor](https://github.com/basecamp/trix).
You can also [visit our demo](http://lynnetye.com/ember-trix-editor/).

This add-on is consistent with the Ember "actions up, data down" pattern, making
the Trix editor available as a component in any Ember.js application.

###"Data down" to `{{trix-editor}}` (optional)
* `attachmentsDisabled` (boolean)
* `autofocus` (boolean)
* `editorClass` (styling formatted content)
* `placeholder`
* `value` (to populate with stored content)

### "Actions up" from `{{trix-editor}}`
* `trix-attachment-add`
* `trix-attachment-remove`
* `trix-blur`
* `trix-change`
* `trix-file-accept`
* `trix-focus`
* `trix-initialize`
* `trix-selection-change`
* (all actions send jQuery event, from which the original event and editor
property can be extracted)

## Contributing to Trix
This is the first time [Channing Allen] (https://twitter.com/ChanningAllen) and [Lynne Tye](https://twitter.com/lynnetye)
have contributed to an open-source project! We welcome others to send bug reports,
make pull requests, or give us feedback.

Special thanks to [Courtland Allen](https://twitter.com/csallen) for his help.

### Installation

* `git clone` this repo
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
