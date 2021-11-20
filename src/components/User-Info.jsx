const UserInfo = () => {
  return (
    <div className="user-main__info info-user">
      <div className="info-user__line">
        <div className="info-user__param">name</div>
        <div className="info-user__answer">Aleksandr Klimovich</div>
      </div>
      <div className="info-user__line">
        <div className="info-user__param">city</div>
        <div className="info-user__answer">Energodar</div>
      </div>
      <div className="info-user__line">
        <div className="info-user__param">logon</div>
        <div className="info-user__answer">x5</div>
      </div>
      <div className="info-user__line">
        <div className="info-user__param">favorit class</div>
        <div className="info-user__answer">Druid</div>
      </div>
    </div>
  );
};
export default UserInfo;