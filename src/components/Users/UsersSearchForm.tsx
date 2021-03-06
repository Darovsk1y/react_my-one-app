import { Field, Form, Formik } from "formik";
import { FilterType } from "../../redux/users_reducer";
import s from "./Users.module.css";
import React from "react";
import { useSelector } from "react-redux";
import { getUsersFilter } from "../../redux/selectors/users_selectors";
type PropsType = {
  onFilterChanged: (filter: FilterType) => void;
}
type FriendType = "null" | "true" | "false";

type FormValStrType = {
	term: string
    friend:FriendType
}

// теперь все компоненты будет оборачивать в React.memo
const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {
  // пишем типизацию для values и setSubmitting
  const submit = (values: FormValStrType,{ setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
	const filter:FilterType = {
		term: values.term,
		friend: values.friend==='null'? null : values.friend==='true'? true : false
	}
	
    props.onFilterChanged(filter);
    setTimeout(() => {
      //alert(JSON.stringify(values, null, 2));
      //! пока что так снимаем disabled
      setSubmitting(false);
    }, 400);
  };
  const filter = useSelector(getUsersFilter);
  return (
    <div className={s.UsersSearchForm}>
      <Formik
	  	enableReinitialize={true} // разрешить Реинициализацию что бы подтянуть параметры из стэйта
        initialValues={{ term: filter.term, friend: String(filter.friend) as FriendType}} 
        validate={usersSearchValidate}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={s.searchLine}>
              <Field type="text" name="term" className={s.paramInput} />
			  <Field name="friend" component="select" className={s.paramInput}>
				  {/* первое должно стоять значение по умолчанию, оно не меняется при выборе */}
			 	 <option value="null">All</option>
				<option value="true">only Followed</option>
				<option value="false">only Unfollowed</option>
            </Field>
              <button
                type="submit"
                disabled={isSubmitting}
                className={s.buttonSearch}>
                Search
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
});
//вынесли ф-ию
let usersSearchValidate = (values: any) => {
  const errors = {};
  return errors;
};
export default UsersSearchForm;
