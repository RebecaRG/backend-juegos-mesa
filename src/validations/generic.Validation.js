import { check, body } from 'express-validator';

const idValidator = [
    check('id').isInt().withMessage('Invalid ID')
]

const nameValidator = [
    body('name').isString().withMessage('Invalid Name file')
]

export { idValidator, nameValidator}