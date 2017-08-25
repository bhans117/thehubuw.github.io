const Dispatcher = require('flux').Dispatcher;

const AppDispatcher = new Dispatcher();

AppDispatcher.handleViewAction = function handleViewAction(action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action,
  });
};

module.exports = AppDispatcher;
