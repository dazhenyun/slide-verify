import React from 'react';
import Login from '../components/Login';

export default () => {

  const loginSubmit = (e) => { console.log('登录提交参数', e) }

  const reqCode = async () => {
    // const res = await false // 返回失败情况
    // const res = await fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/diamond.json') // 返回成功
    // return res
    const res = await 'lkjsafdsafsaf'
    return res
  }

  const loginProps = {
    loginSubmit,
    reqCode,
    platformName: '大箴大数据平台'
  }

  return <Login {...loginProps} />;
};
