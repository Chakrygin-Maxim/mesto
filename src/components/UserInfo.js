class UserInfo {
  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this._userNameSelector = nameSelector;
    this._userJobSelector = jobSelector;
    this._userAvatarSelector = avatarSelector;
    this._userName = document.querySelector(this._userNameSelector);
    this._userJob = document.querySelector(this._userJobSelector);
    this._userAvatar = document.querySelector(this._userAvatarSelector);
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      job: this._userJob.textContent,
      id: this._id,
    };
  }

  setUserInfo(userName, userJob, id, userAvatar) {
    this._userName.textContent = userName;
    this._userJob.textContent = userJob;

    if (id) {
      this._id = id;
    }

    if (userAvatar) {
      this._userAvatar.src = userAvatar;
      this._userAvatar.alt = userName;
    }
  }
}
export default UserInfo;
