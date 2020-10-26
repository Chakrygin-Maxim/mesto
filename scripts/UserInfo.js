class UserInfo {

    constructor({ nameSelector, jobSelector }) {
        this._userNameSelector = nameSelector;
        this._userJobSelector = jobSelector;
        this._userName = document.querySelector(this._userNameSelector);
        this._userJob = document.querySelector(this._userJobSelector);
    }

    getUserInfo() {
        return { name: this._userName.textContent, job: this._userJob.textContent };
    }

    setUserInfo(userName, userJob) {
        this._userName.textContent = userName;
        this._userJob.textContent = userJob;
    }
}
export default UserInfo;
