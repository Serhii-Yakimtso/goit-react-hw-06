import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import css from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/selectors';

export default function SearchBox() {
  const nameFieldId = useId();

  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Find contacts by name</label>
        <Field
          className={css.input}
          type="text"
          name="username"
          // value={value}
          onChange={evt => dispatch(changeFilter(evt.target.value))}
          id={nameFieldId}
        />
      </Form>
    </Formik>
  );
}
