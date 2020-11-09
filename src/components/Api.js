class Api {
    constructor(token, cohort) {
        this._token = token;
        this._cohort = cohort;
        this._url = "https://mesto.nomoreparties.co/v1/";
    }

    getUserInfo() {
        return fetch(`${this._url}${this._cohort}/users/me`, {
            headers: {
                'authorization': this._token,
                'content-type': "application/json"
            }
        }).then(res => {
            if (!res.ok) {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
            return res.json();
        }).then(data => {
            return data;
        }).catch(err => {
            console.log(`Error ${err}`)
        })
    }

    updateUserInfo(name, about) {
        return fetch(`${this._url}${this._cohort}/users/me`, {
            method: 'PATCH',
            headers: {
                'authorization': this._token,
                'content-type': "application/json"
            },
            body: JSON.stringify({ name, about })
        }).then(res => {
            if (!res.ok) {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
            return res.json();
        }).then(data => {
            return data;
        }).catch(err => {
            console.log(`Error ${err}`)
        })
    }

    getInitialCards() {
        return fetch(`${this._url}${this._cohort}/cards`, {
            headers: {
                'authorization': this._token,
                'content-type': "application/json"
            }
        }).then(res => {
            if (!res.ok) {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
            return res.json();
        }).then(data => {
            return data;
        }).catch(err => {
            console.log(`Error ${err}`)
        })
    }

    addCard(name, link) {
        return fetch(`${this._url}${this._cohort}/cards`, {
            method: 'POST',
            headers: {
                'authorization': this._token,
                'content-type': "application/json"
            },
            body: JSON.stringify({ name, link })
        }).then(res => {
            if (!res.ok) {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
            return res.json();
        }).then(data => {
            return data;
        }).catch(err => {
            console.log(`Error ${err}`)
        })
    }

    deleteCard(cardId) {
        return fetch(`${this._url}${this._cohort}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                'authorization': this._token,
                'content-type': "application/json"
            }
        }).then(res => {
            if (!res.ok) {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
            return res.json();
        }).then(data => {
            return data;
        }).catch(err => {
            console.log(`Error ${err}`)
        })
    }

    setLike(cardId) {
        return fetch(`${this._url}${this._cohort}/cards/likes/${cardId}`, {
            method: 'PUT',
            headers: {
                'authorization': this._token,
                'content-type': "application/json"
            }
        }).then(res => {
            if (!res.ok) {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
            return res.json();
        }).then(data => {
            return data;
        }).catch(err => {
            console.log(`Error ${err}`)
        })
    }

    removeLike(cardId) {
        return fetch(`${this._url}${this._cohort}/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: {
                'authorization': this._token,
                'content-type': "application/json"
            }
        }).then(res => {
            if (!res.ok) {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
            return res.json();
        }).then(data => {
            return data;
        }).catch(err => {
            console.log(`Error ${err}`)
        })
    }

    updateAvatar(avatar) {
        return fetch(`${this._url}${this._cohort}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                'authorization': this._token,
                'content-type': "application/json"
            },
            body: JSON.stringify({ avatar })
        }).then(res => {
            if (!res.ok) {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
            return res.json();
        }).then(data => {
            return data;
        }).catch(err => {
            console.log(`Error ${err}`)
        })
    }
}

export default Api;