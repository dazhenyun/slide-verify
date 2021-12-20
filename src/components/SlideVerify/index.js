import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './index.less';

const Page = (props) => {
  const {
    id = 'nc',
    width = '300px',
    height = '34px',
    onSuccess = (e) => { console.log('前端滑动验证通过时会触发该回调参数。您可以在该回调参数中将会话ID（sessionId）、签名串（sig）、请求唯一标识（token）字段记录下来，随业务请求一同发送至您的服务端调用验签。', e) },
    onFail = (e) => { console.log('滑动验证失败时触发该回调参数。', e) },
    onError = (e) => { console.log('验证码加载出现异常时触发该回调参数。', e) }
  } = props

  const init = () => {
    // 实例化nc
    AWSC.use("nc", (state, module) => {
      // 初始化
      window.nc = module.init({
        // 应用类型标识。它和使用场景标识（scene字段）一起决定了滑动验证的业务场景与后端对应使用的策略模型。您可以在阿里云验证码控制台的配置管理页签找到对应的appkey字段值，请务必正确填写。
        appkey: "CF_APP_1",
        // 使用场景标识。它和应用类型标识（appkey字段）一起决定了滑动验证的业务场景与后端对应使用的策略模型。您可以在阿里云验证码控制台的配置管理页签找到对应的scene值，请务必正确填写。
        scene: "register",
        // 声明滑动验证需要渲染的目标ID。
        renderTo: "nc",
        // 前端滑动验证通过时会触发该回调参数。您可以在该回调参数中将会话ID（sessionId）、签名串（sig）、请求唯一标识（token）字段记录下来，随业务请求一同发送至您的服务端调用验签。
        success: (data) => {
          onSuccess(data)
        },
        // 滑动验证失败时触发该回调参数。
        fail: (failCode) => {
          onFail(failCode)
        },
        // 验证码加载出现异常时触发该回调参数。
        error: (errorCode) => {
          onError(errorCode)
        }
      });
    })
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="slide-verify" style={{ width, height }}>
      <div id={id} />
    </div>
  );
};

Page.propTypes = {
  id: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  onSuccess: PropTypes.func,
  onFail: PropTypes.func,
  onerror: PropTypes.func
}

export default Page;