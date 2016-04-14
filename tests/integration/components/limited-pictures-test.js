import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('limited-pictures', 'Integration | Component | limited pictures', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{limited-pictures}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#limited-pictures}}
      template block text
    {{/limited-pictures}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
