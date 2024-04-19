import { body } from 'express-validator';


export const loginValidator = [
    body("email").isEmail().withMessage("Proporcione un correo electrónico válido"),
    body("password")
        .exists()
        .withMessage("La contraseña es obligatoria")
        .isString()
        .withMessage("La contraseña debe ser una cadena de texto")
        .isLength({ min: 5 })
        .withMessage("La contraseña debe tener al menos 5 caracteres")
]

export const registerValidator = [
    body("email").isEmail().withMessage("Proporcione un correo electrónico válido"),
    body("password")
        .exists()
        .withMessage("La contraseña es obligatoria")
        .isString()
        .withMessage("La contraseña debe ser una cadena de texto")
        .isLength({ min: 5 })
        .withMessage("La contraseña debe tener al menos 5 caracteres")
        .custom(value => {
            if (value == '123456') {
                throw new Error('Esta contraseña es muy básica');
            }
            return true;
        }),
    body("name").isString().withMessage("El nombre debe ser una cadena de texto"),
    body("surname").isString().withMessage("El apellido debe ser una cadena de texto")
]

export const forgotPasswordValidator = [
    body("email").isEmail().withMessage("Proporcione un correo electrónico válido")
];


export const changePasswordValidator = [
    body("token")
        .exists()
        .withMessage("El token es obligatorio"),
    body("password")
        .exists()
        .withMessage("La contraseña es obligatoria")
        .isString()
        .withMessage("La contraseña debe ser una cadena de texto")
        .isLength({ min: 5 })
        .withMessage("La contraseña debe tener al menos 5 caracteres")
];

