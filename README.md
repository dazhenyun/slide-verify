# 登录页面组件

## 描述

基于React封装的登录页面组件，包含3D效果、登录背景、人机验证、用户登录等功能模块。

## 效果

<img src="https://s2.loli.net/2022/01/14/hkWqHprfb1gKQZN.png" width="750"/>

## 安装

```
npm i @dzc/login-page --save
```

## 使用

```jsx
import React from 'react';
import LoginPage from '@dzc/login-page';

export default () => {

  const loginSubmit = (values) => {
    console.warn('获取登录信息', values)
  }

  const reqCode = async () => {
    // const res = await false // 返回失败情况
    // const res = await fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/diamond.json') // 返回成功
    // return res
    const res = await 'lkjsafdsafsaf'
    return res
  }

  const loginPage = {
    platformName: '大数据平台'
    reqCode,
    loginSubmit
  }

  return <LoginPage {...loginPage} />;
};

```

## API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| width | 宽度 | string | '300px' | - |
| height | 高度 | string | '#e8e8e8' | - |
| defaultBg | 默认背景色 | string | '34px' | - |
| defaultText | 默认文字 | string | '请按住滑块，拖动到最右边' | - |
| loadingText | 验证中文字 | string | '验证中' | - |
| successBg | 验证成功时背景色 | string | '#7ac23c' | - |
| successText | 验证成功时文字 | string | '验证通过' | - |
| reqCode | 回调函数，用于请求接口获取key值返回到组件中 | func | - | - |
| onSuccess | 前端滑动验证通过时会触发该回调参数。您可以在该回调参数中将会话ID（sessionId）、签名串（sig）、请求唯一标识（token）字段记录下来，随业务请求一同发送至您的服务端调用验签。 | func | - | - |
| onFail | 滑动验证失败时触发该回调参数。 | func | - | - |
| onError | 验证码加载出现异常时触发该回调参数。 | func | - | - |
| onError | 验证码加载出现异常时触发该回调参数。 | func | - | - |


## 更新日志

```
2.0.1 ~ 2.0.5 修复组件切换显示问题
2.0.0 支持内网环境下使用、支持背景和文字配置、支持通过后端已返回code再进行验证
1.0.2 ~ 1.0.6 修复组件切换不显示问题
1.0.1 修改组件安装方式
1.0.0 组件发布
```

## 温馨提示

```
如需支持更多自定义效果，请联系作者逐步完善
开发者：诺克
微信：15858194070
```

## 鼓励和支持

开发不易，开源不易。如果这篇经验对您有所帮助，请多给我一些鼓励和支持，谢谢！。

<img src="https://i.loli.net/2021/11/12/IgrFyOTfE5AkWpu.jpg" width="300"/><img src="https://i.loli.net/2021/11/12/AMhSpxZX19d5CIq.jpg" width="300"/>
