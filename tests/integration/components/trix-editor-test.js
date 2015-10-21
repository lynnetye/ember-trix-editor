import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('trix-editor', 'Integration | Component | trix editor', {
  integration: true
});

function clearAndRender(template) {
  $('#ember-testing').html('');
  this.render(template);
}

test('renders', function (assert) {
  assert.expect(5);

  clearAndRender.call(this, hbs``);
  let $trixEditor = this.$().find('> div');
  assert.strictEqual($trixEditor.length, 0);

  clearAndRender.call(this, hbs`{{trix-editor}}`);
  $trixEditor = this.$().find('> div');
  assert.strictEqual($trixEditor.length, 1);
  assert.strictEqual($trixEditor.find('> input').length, 1);
  assert.strictEqual($trixEditor.find('> trix-toolbar').length, 1);
  assert.strictEqual($trixEditor.find('> trix-editor').length, 1);
});

test('sets correct HTML attributes to inputId attribute', function (assert) {
  assert.expect(2);

  clearAndRender.call(this, hbs`{{trix-editor inputId="attrs-id"}}`);
  const inputIdAttribute = this.$().find('div > input').attr('id');
  const customInputId = 'attrs-id';
  assert.strictEqual(inputIdAttribute, customInputId);
  const trixEditorInputAttribute = this.$().find('div > trix-editor').attr('input');
  assert.strictEqual(trixEditorInputAttribute, customInputId);
});

test('is focused based on autofocus attribute', function(assert) {
  assert.expect(7);

  clearAndRender.call(this, hbs`{{trix-editor}}`);
  let $trixEditor = this.$().find('trix-editor');
  assert.notOk($trixEditor.is(':focus'), 'editor not focused by default');

  clearAndRender.call(this, hbs`{{trix-editor autofocus=false}}`);
  $trixEditor = this.$().find('trix-editor');
  assert.notOk($trixEditor.is(':focus'), 'editor not focused when autofocus attr is false');

  clearAndRender.call(this, hbs`{{trix-editor autofocus=true}}`);
  $trixEditor = this.$().find('trix-editor');
  assert.ok($trixEditor.is(':focus'), 'editor focused when autofocus attr is true');

  // Demonstrate that the component looks at the truthiness of the autofocus attribute.

  clearAndRender.call(this, hbs`{{trix-editor autofocus=0}}`);
  $trixEditor = this.$().find('trix-editor');
  assert.notOk($trixEditor.is(':focus'), 'editor not focused when autofocus attr is int 0');

  clearAndRender.call(this, hbs`{{trix-editor autofocus=1}}`);
  $trixEditor = this.$().find('trix-editor');
  assert.ok($trixEditor.is(':focus'), 'editor focused when autofocus attr is int 1');

  clearAndRender.call(this, hbs`{{trix-editor autofocus=""}}`);
  $trixEditor = this.$().find('trix-editor');
  assert.notOk($trixEditor.is(':focus'), 'editor not focused when autofocus attr is a falsey string');

  clearAndRender.call(this, hbs`{{trix-editor autofocus="true"}}`);
  $trixEditor = this.$().find('trix-editor');
  assert.ok($trixEditor.is(':focus'), 'editor focused when autofocus attr is a truthy string');
});

test('sets trix-editor\'s placeholder attribute to placeholder attr', function (assert) {
  assert.expect(2);

  clearAndRender.call(this, hbs`{{trix-editor}}`);
  let $trixEditor = this.$().find('trix-editor');
  assert.notOk($trixEditor.attr('placeholder'), 'placeholder empty if not set');

  clearAndRender.call(this, hbs`{{trix-editor placeholder="test placeholder"}}`);
  $trixEditor = this.$().find('trix-editor');
  assert.strictEqual($trixEditor.attr('placeholder'),
                     'test placeholder',
                     'placeholder attribute determines placeholder text');
});

test('sets trix-editor\'s class attribute to editorClass attr', function (assert) {
  assert.expect(3);

  clearAndRender.call(this, hbs`{{trix-editor}}`);
  let $trixEditor = this.$().find('trix-editor');
  assert.notOk($trixEditor.attr('class'), 'class is empty by default');

  clearAndRender.call(this, hbs`{{trix-editor editorClass="one"}}`);
  $trixEditor = this.$().find('trix-editor');
  assert.ok($trixEditor.hasClass('one'), 'accepts class name from editorClass');

  clearAndRender.call(this, hbs`{{trix-editor editorClass="one two"}}`);
  $trixEditor = this.$().find('trix-editor');
  assert.ok($trixEditor.hasClass('one two'), 'accepts multiple class names from editorClass');
});

test('sets trix-editor\'s event listeners on insert', function (assert) {
  assert.expect(8);

  clearAndRender.call(this, hbs`{{trix-editor}}`);
  const trixEditorEl = this.$().find('trix-editor')[0];
  const eventNames = Object.keys(jQuery._data(trixEditorEl, 'events'));
  eventNames.forEach(eventName => {
    assert.notEqual(eventNames.indexOf(eventName),
                    -1,
                    `${eventName} event is bound on insert`);
  });
});

test('removes trix-editor\'s event listeners on destruction', function (assert) {
  assert.expect(2);

  clearAndRender.call(this, hbs`{{trix-editor}}`);
  const $trixEditor = this.$().find('trix-editor');
  const trixEditorEl = $trixEditor[0];
  let eventsObject = jQuery._data(trixEditorEl, 'events');
  assert.ok(eventsObject, 'events are bound initially on insert');

  $('#ember-testing').html('');
  eventsObject = jQuery._data(trixEditorEl, 'events');
  assert.notOk(eventsObject, 'events are removed on destruction');
});
