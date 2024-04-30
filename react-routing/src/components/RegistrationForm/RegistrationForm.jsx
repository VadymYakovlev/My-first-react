// * Base
// import RadioButton from '../Radio/RadioButton';
import Button from './../Button/Button';
import FORM from '../../helpers/form';
import Field from '../Field/Field';
import { Formik } from 'formik';

// * Styles
import styles from './RegistrationForm.module.css';
import Radio from '../Radio/Radio';
import Select from '../Select/Select';
// import Select from '../Select/Select';

// * Local
const INITIAL_VALUES = {
  username: '',
  lastname: '',
  password: '',
  coutry: '',
  email: '',
  city: '',
};

const RegistrationForm = () => {
  const validators = ({ email, username, lastname, city, password }) => {
    const errors = {};
    if (!email) {
      errors.email = 'Email is required';
    } else if (!FORM.EMAIL_REG_EXP.test(email)) {
      errors.email = 'Invalid email address';
    }

    if (!username) {
      errors.username = 'Name is required';
    } else if (username.length < FORM.USER_NAME_MIN_LENGTH) {
      errors.username = `Name must contain min ${FORM.USER_NAME_MIN_LENGTH} symbols`;
    }

    if (!lastname) {
      errors.lastname = 'Lastname is required';
    } else if (lastname.length < FORM.USER_NAME_MIN_LENGTH) {
      errors.lastname = `Name must contain min ${FORM.USER_NAME_MIN_LENGTH} symbols`;
    }
    if (!city) {
      errors.city = 'City is required';
    } else if (city.length < FORM.USER_NAME_MIN_LENGTH) {
      errors.city = `Name must contain min ${FORM.USER_NAME_MIN_LENGTH} symbols`;
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (username.length < FORM.PASSWORD_MIN_LENGTH) {
      errors.password = `password must contain min ${FORM.PASSWORD_MIN_LENGTH} symbols`;
    }

    return errors;
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      resetForm();
    }, 3000);
  };

  return (
    <>
      <Formik
        preventDefault
        initialValues={{ INITIAL_VALUES }}
        validate={validators}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Username/Lastname */}
            <div className={styles.block}>
              <Field
                className={styles.item}
                name='username'
                title='Username'
                value={values.username}
                placeholder='Enter username'
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.username && touched.username && errors.username}
              />
              <Field
                className={styles.item}
                type='lastname'
                name='lastname'
                title='Lastname'
                value={values.lastname}
                placeholder='Enter lastname'
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.lastname && touched.lastname && errors.lastname}
              />
            </div>
            {/* Email */}
            <Field
              type='email'
              name='email'
              title='Email'
              value={values.email}
              placeholder='Enter email'
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email && touched.email && errors.email}
            />
            <Radio />
            <div className={styles.block}>
              <Select />
              <div className={styles.item}>
                <Field
                  type='city'
                  name='city'
                  title='City'
                  value={values.city}
                  placeholder='Enter city'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.city && touched.city && errors.city}
                />
              </div>
            </div>
            <Button type='submit' text='Registration' disabled={isSubmitting} />
          </form>
        )}
      </Formik>
    </>
  );
};

export default RegistrationForm;
