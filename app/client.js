import React from 'react';
import ReactDOM from 'react-dom';

import routerConfig from './router/router.js';

import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './styles/index.css'

moment.locale('zh-cn');

ReactDOM.render(routerConfig,document.getElementById('root'));