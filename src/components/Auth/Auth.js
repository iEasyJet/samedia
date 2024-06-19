import './Auth.scss';

import logo from '../../imgs/logo.svg';
import person from '../../imgs/person.svg';
import key from '../../imgs/key.svg';
import { useRef, useState } from 'react';
import Api from '../../utils/Api';

function Auth() {
  const [status, setStatus] = useState({
    errorAuth: false,
    successAuth: false,
    msg: '',
  });
  const [auth, setAuth] = useState({
    textBtn: 'Войти',
    disabledInput: false,
  });

  const refLogin = useRef(null);
  const refPassword = useRef(null);

  function asd(e) {
    e.preventDefault();

    setAuth({
      textBtn: 'Проверка данных...',
      disabledInput: true,
    });

    Api.authorization({
      login: refLogin.current.value,
      password: refPassword.current.value,
    })
      .then((res) => {
        if (res.status === 'ok') {
          document.cookie = `token=${res.token}`;
          setStatus({
            errorAuth: false,
            successAuth: true,
            msg: res.user.name,
          });
        } else {
          setStatus({
            errorAuth: true,
            successAuth: false,
            msg: res.errorMessage,
          });
        }
      })
      .finally(() => {
        setAuth({
          textBtn: 'Войти',
          disabledInput: false,
        });
      });
  }

  return status.successAuth ? (
    <h1 className='title'>{`${status.msg}, Вы успешно авторизованы!`}</h1>
  ) : (
    <div className='auth'>
      <div className='auth__wrapper'>
        <img src={logo} className='auth__logo' />
        <h1 className='auth__title'>Авторизация</h1>
        <form className='form' onSubmit={asd}>
          <label
            className={`form__label ${
              status.errorAuth ? 'form__label_error' : ''
            } ${status.successAuth ? 'form__label_success' : ''}`}
          >
            <img src={person} className='form__input-icon' />
            <input
              type='text'
              className='form__input form__input-login'
              placeholder='Email или телефон'
              disabled={auth.disabledInput}
              ref={refLogin}
              autoComplete='false'
            />
          </label>

          <label
            className={`form__label ${
              status.errorAuth ? 'form__label_error' : ''
            } ${status.successAuth ? 'form__label_success' : ''}`}
          >
            <img src={key} className='form__input-icon' />
            <input
              type='password'
              className='form__input form__input-password'
              placeholder='Пароль'
              disabled={auth.disabledInput}
              ref={refPassword}
            />
          </label>

          {status.errorAuth ? (
            <label className='form__error-auth'>{status.msg}</label>
          ) : (
            <></>
          )}

          <button
            type='submit'
            className='form__btn-submit'
            disabled={auth.disabledInput}
          >
            {auth.textBtn}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Auth;
