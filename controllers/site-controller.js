const createPath = require('../helpers/create-path');

const getPageContacts = (req, res) => {
    const title = 'Контакты';
    const description = 'Здесь мы собрали контактные данные нашей компании, по которым вы можете связаться с нами. ☎ Звоните за консультацией!';
    res.render(createPath('contacts'), {title,description});
}

module.exports = {getPageContacts};
