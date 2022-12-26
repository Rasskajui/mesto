export default class UserInfo {
  constructor(userNameElementSelector, userInfoElementSelector, userAvatarElementSelector) {
    this._usernameElement = document.querySelector(userNameElementSelector);
    this._userInfoElement = document.querySelector(userInfoElementSelector);
    this._userAvatarElement = document.querySelector(userAvatarElementSelector);
  }

  getUserInfo() {
    return {
      name: this._usernameElement.textContent,
      about: this._userInfoElement.textContent,
      avatar: this._userAvatarElement.src,
      id: this.userId
    };
  }

  setUserInfo({
    userName = this._usernameElement.textContent,
    userInfo = this._userInfoElement.textContent,
    userAvatar = this._userAvatarElement.src,
    userId = this.userId
  }) {
    this._usernameElement.textContent = userName;
    this._userInfoElement.textContent = userInfo;
    this._userAvatarElement.src = userAvatar;
    this.userId = userId;
  }
}
