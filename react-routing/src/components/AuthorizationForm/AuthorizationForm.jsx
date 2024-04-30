// // * Base
// import Button from '../Button/Button';
// import FORM from '../../helpers/form';
// import { useFormik } from 'formik';

// // * Styles
// import styles from './AuthorizationForm.module.css';

// const AuthorizationForm = () => {
//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       password: '',
//     },
//     validate: ({ email, password }) => {
//       const errors = {};
//       if (!email) {
//         errors.email = 'Email is required';
//       } else if (!FORM.EMAIL_REG_EXP.test(email)) {
//         errors.email = 'Invalid email address';
//       }

//       if (!password) {
//         errors.password = 'Password is required';
//       } else if (password.length < FORM.PASSWORD_MIN_LENGTH) {
//         errors.password = `Password must contain at least ${FORM.PASSWORD_MIN_LENGTH} characters`;
//       }
//       return errors;
//     },

//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });

//   return (
//     <form className={styles.form}>
//       <div className={styles.input}>
//         <label htmlFor='email'>Email</label>
//         <input
//           id='email'
//           name='email'
//           type='email'
//           onChange={formik.handleChange}
//           value={formik.values.email}
//         />
//         {formik.errors.email && <div>{formik.errors.email}</div>}
//       </div>

//       <div className={styles.input}>
//         <label htmlFor='password'>Password</label>
//         <input
//           id='password'
//           name='password'
//           type='password'
//           onChange={formik.handleChange}
//           value={formik.values.password}
//         />
//         {formik.errors.password && <div>{formik.errors.password}</div>}
//       </div>
//       <Button type='submit' text='Authorization' />
//     </form>
//   );
// };

// export default AuthorizationForm;

{
  /* TEST */
}
import Button from '../Button/Button';
import FORM from '../../helpers/form';
import { Field, useFormik } from 'formik';

// Styles
import styles from './AuthorizationForm.module.css';

const AuthorizationForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validate: ({ email, password }) => {
      const errors = {};
      if (!email) {
        errors.email = 'Email is required';
      } else if (!FORM.EMAIL_REG_EXP.test(email)) {
        errors.email = 'Invalid email address';
      }

      if (!password) {
        errors.password = 'Password is required';
      } else if (password.length < FORM.PASSWORD_MIN_LENGTH) {
        errors.password = `Password must contain at least ${FORM.PASSWORD_MIN_LENGTH} characters`;
      }
      return errors;
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <div className={styles.input}>
        <Field
          className={styles.item}
          name='email'
          type='email'
          placeholder='Enter email'
        />
        {formik.errors.email && <div>{formik.errors.email}</div>}
      </div>
      <div className={styles.input}>
        <Field
          className={styles.item}
          name='password'
          type='password'
          placeholder='Enter password'
        />
        {formik.errors.password && <div>{formik.errors.password}</div>}
      </div>
      <Button type='submit' text='Authorization' />
    </form>
  );
};

export default AuthorizationForm;
