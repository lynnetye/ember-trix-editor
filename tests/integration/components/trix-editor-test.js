import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('trix-editor', 'Integration | Component | trix editor', {
  integration: true
});

function clearAndRender(template) {
  $('#ember-testing').html('');
  this.render(template);
}

test('it renders', function (assert) {
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

test('component is focused based on autofocus attribute', function(assert) {
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
