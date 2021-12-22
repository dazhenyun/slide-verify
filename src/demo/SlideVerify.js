import React from 'react';
import SlideVerify from '../components/SlideVerify';

export default () => {

  const onSuccess = (e) => { console.log('前端滑动验证通过时会触发该回调参数。您可以在该回调参数中将会话ID（sessionId）、签名串（sig）、请求唯一标识（token）字段记录下来，随业务请求一同发送至您的服务端调用验签。', e) }

  const onFail = (e) => { console.log('滑动验证失败时触发该回调参数。', e) }

  const onError = (e) => { console.log('验证码加载出现异常时触发该回调参数。', e) }

  const reqCode = async () => {
    // const res = await false // 返回失败情况
    // const res = await fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/diamond.json') // 返回成功
    // return res
    const res = await 'lkjsafdsafsaf'
    return res
  }

  const SlideVerifyProps = {
    width: '300px',
    height: '34px',
    defaultBg: '#e8e8e8',
    defaultText: '请按住滑块，拖动到最右边',
    loadingText: '验证中',
    successBg: '#7ac23c',
    successText: '验证通过',
    onSuccess,
    onFail,
    onError,
    reqCode
  }

  return <SlideVerify {...SlideVerifyProps} />;
};
