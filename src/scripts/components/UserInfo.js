export default class UserInfo {
  constructor(userNameElementSelector, userInfoElementSelector) {
    this._usernameElement = document.querySelector(userNameElementSelector);
    this._userInfoElement = document.querySelector(userInfoElementSelector);
  }

  getUserInfo() {
    return {
      name: this._usernameElement.textContent,
      about: this._userInfoElement.textContent
    };
  }

  setUserInfo(userName, userInfo) {
    this._usernameElement.textContent = userName;
    this._userInfoElement.textContent = userInfo;
  }
}
