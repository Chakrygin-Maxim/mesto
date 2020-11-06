class Api {

    constructor(token, cohort) {
        this._token = token;
        this._cohort = cohort;
        this._url = "https://mesto.nomoreparties.co/v1/";

    }

    getInitialCards() {
        return fetch(`${this._url}${this._cohort}/cards`, {
            headers: {
                'authorization': this._token,
                'Content-Type': "application/json"
            }
        }).then(res => {
            if (!res.ok) {
                return Promise.reject('Server error');
            }
            return res.json();
        }).then(data => {
            return data
        }).catch(err => {
            console.log(`Error ${err}`)
        })
    }
}

export default Api;