// * Base
import RadioButton from '../Radio/Radio';
import Button from './../Button/Button';
import FORM from '../../helpers/form';
import Field from '../Field/Field';
import { Formik } from 'formik';

// * Styles
import styles from './RegistrationForm.module.css';

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
    } else if (username.length < FORM.USER_NAME_MIN_LENGTS) {
      errors.username = `Name must contain min ${FORM.USER_NAME_MIN_LENGTS} symbols`;
    }

    if (!lastname) {
      errors.lastname = 'Lastname is required';
    } else if (lastname.length < FORM.USER_NAME_MIN_LENGTS) {
      errors.lastname = `Name must contain min ${FORM.USER_NAME_MIN_LENGTS} symbols`;
    }
    if (!city) {
      errors.city = 'City is required';
    } else if (city.length < FORM.USER_NAME_MIN_LENGTS) {
      errors.city = `Name must contain min ${FORM.USER_NAME_MIN_LENGTS} symbols`;
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (username.length < FORM.PASSWORD_MIN_LENGTS) {
      errors.password = `password must contain min ${FORM.PASSWORD_MIN_LENGTS} symbols`;
    }

    return errors;
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      resetForm();
      // setValues({ email: '', username: '', password: '' });
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
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Username/Lastname */}
            <div className={styles.blockinput}>
              <div className={styles.blockitem}>
                <Field
                  name='username'
                  title='Username'
                  value={values.username}
                  placeholder='Enter username'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.username && touched.username && errors.username}
                />
              </div>
              <div className={styles.blockitem}>
                <Field
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
            </div>
            <div className={styles.email}>
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
              {/* Radio */}
              <div className={styles.radio}>
                <RadioButton
                  id='color-one'
                  name='gender'
                  value='male'
                  label='Male'
                />
                <RadioButton
                  id='color-two'
                  name='gender'
                  value='female'
                  label='Female'
                />
              </div>
              {/* Section */}
              <div className={styles.blockinput}>
                <label>
                  <div className={styles.select}>Country</div>
                  <select className={styles.country}>
                    <option value='' disabled selected hidden>
                      Select country
                    </option>
                    <option value='1'>Austria</option>
                    <option value='2'>Bulgary</option>
                    <option value='3'>Columbia</option>
                    <option value='4'>Denmark</option>
                    <option value='5'>France</option>
                    <option value='6'>Germany</option>
                    <option value='7'>Italy</option>
                    <option value='8'>Poland</option>
                    <option value='9'>Turkey</option>
                    <option value='10'>Ukraine</option>
                  </select>
                </label>
                {/* City */}
                <div className={styles.blockitem}>
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
              {/* Button */}
              <Button
                type='submit'
                text='Registration'
                disabled={isSubmitting}
              />
            </div>
            {/* Footer-title */}
            <div className={styles.terms}>
              By clicking the Sign Up button, you confirm that you accept our
              <a href='#' className={styles.link}>
                Terms of Use
              </a>
              and
              <a href='#' className={styles.link}>
                Privacy Policy
              </a>
            </div>
            <div className={styles.line}></div>
            <footer className={styles.footer}>
              <div>
                <span className={styles.footeritem}>Have an account? </span>
                <a href='#' className={styles.footerlink}>
                  Log In
                </a>
              </div>
            </footer>
          </form>
        )}
      </Formik>
    </>
  );
};

export default RegistrationForm;
