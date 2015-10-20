import Ember from 'ember';
import layout from '../templates/components/trix-editor';

export default Ember.Component.extend({
  attachmentsDisabled: false,

  editor: null,

  inputId: 'trix-editor-input-id',

  layout: layout,

  _exposeEditor: Ember.on('didInsertElement', function () {
    // const trixEditorEl = Ember.$(this.get('element')).find('trix-editor')[0];
    // this.set('editor', trixEditorEl.editor);
  }),

  _listenToTrixEditorActions: Ember.on('didInsertElement', function () {
    const $trixEditor = Ember.$(this.get('element')).find('trix-editor');

    $trixEditor.on('trix-attachment-add', event => {
      if (this.attrs['trix-attachment-add']) {
        this.attrs['trix-attachment-add'](event);
      }
    });

    $trixEditor.on('trix-attachment-remove', event => {
      if (this.attrs['trix-attachment-remove']) {
        this.attrs['trix-attachment-remove'](event);
      }
    });

    $trixEditor.on('trix-blur', event => {
      if (this.attrs['trix-blur']) {
        this.attrs['trix-blur'](event);
      }
    });

    $trixEditor.on('trix-change', event => {
      if (this.attrs['trix-change']) {
        this.attrs['trix-change'](event);
      }
    });

    $trixEditor.on('trix-file-accept', event => {
      if (this.attrs.attachmentsDisabled) {
        event.preventDefault();
      }

      if (this.attrs['trix-file-accept']) {
        this.attrs['trix-file-accept'](event);
      }
    });

    $trixEditor.on('trix-focus', event => {
      if (this.attrs['trix-focus']) {
        this.attrs['trix-focus'](event);
      }
    });

    $trixEditor.on('trix-initialize', event => {
      if (this.attrs['trix-initialize']) {
        this.attrs['trix-initialize'](event);
      }
    });

    $trixEditor.on('trix-selection-change', event => {
      if (this.attrs['trix-selection-change']) {
        this.attrs['trix-selection-change'](event);
      }
    });
  }),

  _removeTrixEditorListeners: Ember.on('willDestroyElement', function () {
    const $trixEditor = Ember.$(this.get('element')).find('trix-editor');
    $trixEditor.off('trix-attachment-add');
    $trixEditor.off('trix-attachment-remove');
    $trixEditor.off('trix-blur');
    $trixEditor.off('trix-change');
    $trixEditor.off('trix-file-accept');
    $trixEditor.off('trix-focus');
    $trixEditor.off('trix-initialize');
    $trixEditor.off('trix-selection-change');
  }),

  autofocusOn: Ember.computed('attrs.autofocus', function () {
    return !!this.attrs.autofocus ? true : null;
  })
});
