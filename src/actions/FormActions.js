const AppDispatcher = require('../dispatcher/AppDispatcher');
const FormConstants = require('../constants/FormStoreConstants');

const FormStoreActions = {

  set: (data, type) => {
    AppDispatcher.handleViewAction({
      actionType: FormConstants.SET,
      data,
      type,
    });
  },

  submit: () => {
    AppDispatcher.handleViewAction({
      actionType: FormConstants.SUBMIT,
    });
  },

  APIResponse: (data) => {
    AppDispatcher.handleViewAction({
      actionType: FormConstants.API_RESPONSE,
      data,
    });
  },

  APIResponsePost: (data) => {
    AppDispatcher.handleViewAction({
      actionType: FormConstants.API_RESPONSE_POST,
      data,
    });
  },

};

module.exports = FormStoreActions;
