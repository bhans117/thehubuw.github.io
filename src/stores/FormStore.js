const AppDispatcher = require('../dispatcher/AppDispatcher');
const FormConstants = require('../constants/FormStoreConstants');
const EventEmitter = require('events').EventEmitter;

let formInfo = {};


function loadFormInfo(data) {
  formInfo = data.formInfo;
}

loadFormInfo(
  {
    formInfo: {
      email: {
        value: '',
      },
    },
  },
);

// set the data in a specific text feild of the form
function set(data) {
  formInfo.email.value = data;
  // do something
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
      set(action.data);
      break;

    default:
      return true;
  }

  formStore.emitChange();

  return true;
});

module.exports = formStore;
