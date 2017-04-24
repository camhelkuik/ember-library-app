import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  email: DS.attr('string'),
  message: DS.attr('string'),

  emailIsValid: Ember.computed.match('email', /^.+@.+\..+$/),
  textIsValid: Ember.computed.gte('message.length', 5),
  isValid: Ember.computed.and('emailIsValid', 'textIsValid'),
  isNotValid: Ember.computed.not('isValid')

});
