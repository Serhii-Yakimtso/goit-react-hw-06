import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

import { useSelector } from 'react-redux';
import { selectContacts, selectNameFilter } from '../../redux/selectors';
import { filtersReducer } from '../../redux/filtersSlice';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filterName = useSelector(selectNameFilter);

  // console.log(contacts);
  // console.log(filterName);

  const visibleContacts = contacts.filter(contact => {
    contact.info.name.toLowerCase().includes(filterName.toLowerCase());
  });

  return (
    <>
      <ul className={css.list}>
        {visibleContacts.map(contact => (
          <li className={css.item} key={contact.id}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}
