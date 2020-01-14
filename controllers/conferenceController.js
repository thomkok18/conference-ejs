const models = require("../models");
const dateFormat = require('dateformat');

exports.getAddConference = (req, res, next) => {
    const error = req.query.error;
    res.render('conferences/create', {
        title: 'Add conference',
        description: 'What kind of conferences do you want to register?',
        error: error ? error : ''
    });
};

exports.postStoreConference = (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;
    const company = req.body.company;
    const size = req.body.size;
    const dateStart = req.body.dateStart;
    const dateEnd = req.body.dateEnd;

    if (dateStart !== "" && dateEnd !== "") {
        models.Conference.create({
            title: title,
            description: description,
            company: company,
            size: size,
            dateStart: dateStart,
            dateEnd: dateEnd,
        }).then(result => {
            console.log('Conference created');
        }).catch(err => {
            console.log(err);
        });
        return res.redirect('/conference');
    } else {
        return res.redirect('/conference/create?error=1');
    }
};

exports.postUpdateConference = (req, res, next) => {
    const id = req.params.id;
    const title = req.body.title;
    const description = req.body.description;
    const company = req.body.company;
    const size = req.body.size;
    const dateStart = req.body.dateStart;
    const dateEnd = req.body.dateEnd;

    models.Conference.update(
        {
            title: title,
            description: description,
            company: company,
            size: size,
            dateStart: dateStart,
            dateEnd: dateEnd,
        },
        {
            where: {id: id}
        }
    ).then(result => {
        console.log('Conference updated');
    }).catch(err => {
        console.log(err);
    });
    return res.redirect('/conference');
};

exports.postDestroyConference = (req, res, next) => {
    const id = req.params.id;
    models.Conference.destroy({where: {id: id}}).then(() => {
        console.log('Done');
    }).catch(err => {
        console.log(err);
    });
    return res.redirect('/conference');
};

exports.getAllconferences = (req, res, next) => {
    models.Conference.findAll().then(conferences => {
        console.log(conferences);
        res.render('conferences/index', {
            conferences: conferences
        });
    }).catch(err => {
        console.log(err);
    });
};

exports.getEditConference = (req, res, next) => {
    const id = req.params.id;

    models.Conference.findByPk(id).then(conference => {
        res.render('conferences/edit', {
            id: id,
            title: conference.title,
            description: conference.description,
            company: conference.company,
            size: conference.size,
            dateStart: dateFormat(conference.dateStart, "yyyy-mm-dd'T'HH:MM"),
            dateEnd: dateFormat(conference.dateEnd, "yyyy-mm-dd'T'HH:MM"),
        });
    }).catch(err => {
        console.log(err);
    });
};

exports.getConference = (req, res, next) => {
    const id = req.params.id;

    models.Conference.findByPk(id).then(conference => {
        res.render('conferences/show', {
            path: '/conference',
            title: 'One conference',
            description: 'What conferences are upcoming?',
            id: conference.id ? conference.id : '',
            cTitle: conference.title ? conference.title : '',
            cDescription: conference.description ? conference.description : '',
            company: conference.company ? conference.company : '',
            size: conference.size ? conference.size : '',
            dateStart: dateFormat(conference.dateStart, "dd-mm-yyyy HH:MM"),
            dateEnd: dateFormat(conference.dateEnd, "dd-mm-yyyy HH:MM"),
            createdAt: dateFormat(conference.createdAt, "dd-mm-yyyy HH:MM"),
            updatedAt: dateFormat(conference.updatedAt, "dd-mm-yyyy HH:MM"),
        });
    }).catch(err => {
        console.log(err);
    });
};
