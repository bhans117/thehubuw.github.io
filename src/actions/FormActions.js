const AppDispatcher = require('../dispatcher/AppDispatcher');
const FormConstants = require('../constants/FormStoreConstants');

const FormStoreActions = {

  set: (data) => {
    AppDispatcher.handleViewAction({
      actionType: FormConstants.SET,
      data,
    });
  },

};

module.exports = FormStoreActions;
