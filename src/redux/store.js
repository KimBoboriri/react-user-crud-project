import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer';
import logger from 'redux-logger'  //콘솔에 리덕스 로그출력기능
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';  //액션을 순차적으로 일어나도록 하는 기능(미들웨어 확장기능)

const middleware = [logger, thunk]

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middleware)
    ));

export default store;