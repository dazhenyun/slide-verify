# 滑动验证组件

## 描述

基于React封装的滑动验证组件，用于登录时人机验证，有效防止接口被调用等攻击行为。只需通过简单的右滑交互操作，用户无需思考即可通过验证。

## 效果

<img src="https://s2.loli.net/2021/12/20/cVabgIUZtSTkJzD.png" width="320"/><img src="https://s2.loli.net/2021/12/20/QckIs3OTuiEdvql.png" width="320"/>

## 安装

```
npm i @dzc/slide-verify --save
```

## 使用

```jsx
import React from 'react';
import SlideVerify from '@dzc/slide-verify';

export default () => {

  const onSuccess = (e) => { console.log('前端滑动验证通过时会触发该回调参数。您可以在该回调参数中将会话ID（sessionId）、签名串（sig）、请求唯一标识（token）字段记录下来，随业务请求一同发送至您的服务端调用验签。', e) }

  const onFail = (e) => { console.log('滑动验证失败时触发该回调参数。', e) }

  const onError = (e) => { console.log('验证码加载出现异常时触发该回调参数。', e) }

  const SlideVerifyProps = {
    id: 'nc',
    width: '300px',
    height: '34px',
    onSuccess,
    onFail,
    onError
  }

  return <SlideVerify {...SlideVerifyProps} />;
};

```

## API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| id | 声明滑动验证需要渲染的目标ID | string | 'nc' | - |
| width | 宽度 | string | '300px' | - |
| height | 高度 | string | '34px' | - |
| onSuccess | 前端滑动验证通过时会触发该回调参数。您可以在该回调参数中将会话ID（sessionId）、签名串（sig）、请求唯一标识（token）字段记录下来，随业务请求一同发送至您的服务端调用验签。 | func | - | - |
| onFail | 滑动验证失败时触发该回调参数。 | func | - | - |
| onError | 验证码加载出现异常时触发该回调参数。 | func | - | - |


## 更新日志

```
1.0.4 修复组件切换展示不全问题
1.0.3 修复组件切换展示不全问题
1.0.2 修复组件切换不显示问题
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
