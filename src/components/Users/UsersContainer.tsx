import React from "react";
import { useSelector } from "react-redux";
import { getUsersIsfetching } from "../../redux/selectors/users_selectors";
import Preloader from "../global/Preloader/preloader";
import { UsersPresent } from "./UsersPresent";
//создадим ФК
type UsersPageType = {
  pageTitle: string;
};

const UsersPage: React.FC<UsersPageType> = (props) => {
  const isfetching = useSelector(getUsersIsfetching);
  return (
    <>
      {isfetching ? <Preloader /> : null}
      <UsersPresent />
      {/* Для теста передачи прямых пропсов не через коннект */}
      <h2>{props.pageTitle}</h2>
    </>
  );
};
export default UsersPage;
