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
    validated: false,
    memberStatus: '',
    status: '',
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
  formInfo.submit = true;

  MailChimpUtil.getSubscriberStatus(formInfo.email.value);
  if (formInfo.email.value === '') {
    formInfo.validated = false;
  } else {
    MailChimpUtil.addSubscriber(
      formInfo.email.value,
      formInfo.firstName.value,
      formInfo.lastName.value,
    );
    formInfo.validated = true;
  }
}

function memberStatus(data) {
  switch (data) {
    case 'subscribed':
      console.log('subscribed case');
      formInfo.memberStatus = 'subscribed';
      break;
    case 'unsubscribed':
      console.log('unsubscribed case');
      formInfo.memberStatus = 'unsubscribed';
      break;
    case 'pending':
      console.log('pending case');
      formInfo.memberStatus = 'pending';
      break;
    case 'cleaned':
      console.log('cleaned case');
      formInfo.memberStatus = 'cleaned';
      break;
    default:
      console.log('defualt case');
  }
}

function status(data) {
  if (data.statusCode !== undefined) {
    formInfo.status = data.statusCode;
    formInfo.validated = false;
  } else {
    formInfo.status = data.status;
    formInfo.validated = true;
  }
  console.log(formInfo.status);
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
      memberStatus(action.data);
      break;
    default:
      return true;

    case FormConstants.API_RESPONSE_POST:
      status(action.data);
      break;
  }

  formStore.emitChange();

  return true;
});

module.exports = formStore;
