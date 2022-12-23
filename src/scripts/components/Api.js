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
    });
  }

  deleteCard(cardId) {
    fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.headers
    })
  }

  likeCard(card, user) {
    fetch(`${this.baseUrl}/cards/${card._id}/likes`, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify({
        likes: card.push(user)
      })
    });
  }

  removeLike(card) {
    fetch(`${this.baseUrl}/cards/${card._id}/likes`, {
      method: 'DELETE',
      headers: this.headers,
      body: JSON.stringify({
        //likes:
      })
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
  }

}

export default Api;
