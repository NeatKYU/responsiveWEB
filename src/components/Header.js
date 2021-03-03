import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="header_container">
        <div className="f_left">이번달 매출</div>
        <div className="f_right">집 아이콘</div>
      </div>
      <div className="header_container">
        <div className="total_money_show">3881012013 원</div>
      </div>
      <div className="header_container">
        <div className="today_money_show">오늘 +840000원</div>
      </div>
      <div>datepicker</div>
    </div>
  );
}

export default Header;
