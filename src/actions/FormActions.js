const AppDispatcher = require('../dispatcher/AppDispatcher');
const FormConstants = require('../constants/FormStoreConstants');

const FormStoreActions = {

  set: (data) => {
    AppDispatcher.handleViewAction({
      actionType: FormConstants.SET,
      data,
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

};

module.exports = FormStoreActions;
