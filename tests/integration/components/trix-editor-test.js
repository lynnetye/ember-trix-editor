import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('trix-editor', 'Integration | Component | trix editor', {
  integration: true
});

test('it renders', function (assert) {
  assert.expect(5);

  this.render(hbs``);

  let $trixEditor = this.$().find('> div');
  assert.strictEqual($trixEditor.length, 0);

  this.render(hbs`{{trix-editor}}`);

  $trixEditor = this.$().find('> div');
  assert.strictEqual($trixEditor.length, 1);
  assert.strictEqual($trixEditor.find('> input').length, 1);
  assert.strictEqual($trixEditor.find('> trix-toolbar').length, 1);
  assert.strictEqual($trixEditor.find('> trix-editor').length, 1);
});
