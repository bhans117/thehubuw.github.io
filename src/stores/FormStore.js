const AppDispatcher = require('../dispatcher/AppDispatcher');
const FormConstants = require('../constants/FormStoreConstants');
const EventEmitter = require('events').EventEmitter;
const MailChimpUtil = require('../util/MailChimpUtil');
const SignUpConstants = require('../constants/SignUpConstants');

let formInfo = {};


function loadFormInfo(data) {
  formInfo = data;
}

loadFormInfo(
  {
    email: { value: '' },
    firstName: { value: '' },
    lastName: { value: '' },
    submit: false,
  },
);

// set the data in a specific text feild of the form
function set(data, type) {
  switch (type) {
    case SignUpConstants.EMAIL:
      formInfo.email.value = data;
      break;
    case SignUpConstants.FIRST_NAME:
      formInfo.firstName.value = data;
      break;
    case SignUpConstants.LAST_NAME:
      formInfo.lastName.value = data;
      break;
    default:
      // do nothing
  }
}

function submit() {
  console.log(formInfo.email.value);
  MailChimpUtil.addSubscriber(
    formInfo.email.value,
    formInfo.firstName.value,
    formInfo.lastName.value,
  );
  formInfo.submit = true;
}

function mailDecision(data) {
  console.log(data);
  switch (data) {
    case 'subscribed':
      console.log('subscribed case');
      break;
    case 'unsubscribed':
      console.log('unsubscribed case');
      break;
    case 'pending':
      console.log('pending case');
      break;
    case 'cleaned':
      console.log('cleaned case');
      break;
    default:
      console.log('defualt case');
  }
}

/* eslint-disable class-methods-use-this */
class FormStore extends EventEmitter {
  getForm() {
    return formInfo;
  }

  emitChange() {
    this.emit('change');
  }

  addChangeListener(callback) {
    this.on('change', callback);
  }

  removeChangeListener(callback) {
    this.removeChangeListener('change', callback);
  }
} const formStore = new FormStore();

AppDispatcher.register((payload) => {
  const action = payload.action;

  switch (action.actionType) {
    case FormConstants.SET:
      set(action.data, action.type);
      break;

    case FormConstants.SUBMIT:
      submit();
      break;

    case FormConstants.API_RESPONSE:
      mailDecision(action.data);
      break;
    default:
      return true;
  }

  formStore.emitChange();

  return true;
});

module.exports = formStore;
