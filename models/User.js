const mongoose = require("mongoose");
let crypto = require('crypto');

const UserSchema = mongoose.Schema({
    email: { type: String, unique: true },
    hash: String,
    salt: String,
    name: String,
    versionKey: false
});

// Метод для установки соли и хэширования пароля для пользователя
// метод setPassword сначала создает соль, уникальную для каждого пользователя
// тогда он хеширует соль с паролем пользователя и создает хеш
// этот хеш хранится в базе данных как пароль пользователя

UserSchema.methods.setPassword = function(password) {



    // Создание уникальной соли для конкретного пользователя

    this.salt = crypto.randomBytes(16).toString('hex');

    // хешируем соль пользователя и пароль с 1000 итерациями, 64 length and sha512 digest

    this.hash = crypto.pbkdf2Sync(password, this.salt, 500, 64, `sha512`).toString(`hex`);

};

// Способ проверки введенного пароля правильный или нет
// метод действительного пароля проверяет, является ли пользователь
// пароль правильный или нет
// Он берет пароль пользователя из запроса
// и соль из пользовательской базы данных
// Затем хэширует пароль пользователя и соль
// затем проверяет, равен ли этот сгенерированный хеш
// хешу пользователя в базе данных или нет
// Если хеш пользователя равен сгенерированному хешу
// тогда пароль правильный, иначе нет

UserSchema.methods.validPassword = function(password) {

    let hash = crypto.pbkdf2Sync(password, this.salt, 500, 64, `sha512`).toString(`hex`);
    return this.hash === hash;
};


// Экспорт модуля для его импорта в другие файлы
//const User = module.exports = mongoose.model('User', UserSchema);
module.exports = mongoose.model('User', UserSchema);