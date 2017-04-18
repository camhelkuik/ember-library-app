import Ember from 'ember';

export default Ember.Controller.extend({
    emailIsValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    textIsValid: Ember.computed.gte('message.length', 5),
    isValid: Ember.computed.and('emailIsValid', 'textIsValid'),

    actions: {
         sendMessage() {
            alert(`Sending of the following email and message is in progress: ${this.get('emailAddress')}: ${this.get('message')}`);
            this.set('responseMessage', `We got your message and we'll be in touch soon`);
            this.set('emailAddress', '');
            this.set('message', '');
        }
    }
});
