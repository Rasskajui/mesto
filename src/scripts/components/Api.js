class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: this.headers
    })
      .then(res => res.json())
      .catch((err) => {
        console.log(err);
      })
  }

  getCards() {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'GET',
      headers: this.headers
    })
    .then(res => res.json())
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
  }

  updateUserInfo(newName, newAbout) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: newName,
        about: newAbout
      })
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
  }

  addCard(cardInfo) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: cardInfo.name,
        link: cardInfo.link
      })
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
  }

  deleteCard(cardId) {
    fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.headers
    })
    .then(res => res.json())
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
  }

  likeCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this.headers,
    })
    .then(res => res.json())
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
  }

  removeLike(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this.headers,
    })
    .then(res => res.json())
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
  }

  updateAvatar(avatarUrl) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: avatarUrl
      })
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
  }

}

export default Api;
