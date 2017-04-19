import Ember from 'ember';

export default Ember.Controller.extend({
    emailIsValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    textIsValid: Ember.computed.gte('message.length', 5),
    isValid: Ember.computed.and('emailIsValid', 'textIsValid'),

    actions: {
         sendMessage() {
             const email = this.get('emailAddress');
             const message = this.get('message');

             const newContact = this.store.createRecord('contact', {email:email, message:message});
             newContact.save().then((response) => {
                this.set('responseMessage', `We got your message with id: ${response.get('id')}. We'll be in touch soon`);
                this.set('emailAddress', '');
                this.set('message', '');
             });
        }
    }
});
