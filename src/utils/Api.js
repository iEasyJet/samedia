class Api1 {
  // Анализирование ответа
  _parseResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(
      new Error(`Произошла ошибка со статус-кодом ${res.status}`)
    );
  }

  // Авторизация
  authorization(data) {
    return fetch(
      `https://test-works.pr-uni.ru/api/login/index.php?login=${data.login}&password=${data.password}`
    ).then((res) => this._parseResponse(res));
  }
}

const Api = new Api1();

export default Api;
