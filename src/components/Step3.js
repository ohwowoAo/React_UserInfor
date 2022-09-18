import React from 'react';

const Step3 = ({username, userage, useraddr, usernum, userjob, useremail, usersex, userhob, onPrev }) => {

    return (
        <div>
            <h2>회원정보 입력완료!</h2>
            <ul>
                <li><span> 이름 </span> : <em> {username} </em></li>
                <li><span> 나이 </span> : <em> {userage} </em></li>
                <li><span> 주소 </span> : <em> {useraddr} </em></li>
                <li><span> 연락처 </span> : <em> {usernum} </em></li>
                <li><span> 직업 </span> : <em> {userjob} </em></li>
                <li><span> 이메일 </span> : <em> {useremail} </em></li>
                <li><span> 성별 </span> : <em> {usersex} </em></li>
                <li><span> 취미 </span> : <em> {userhob} </em></li>
            </ul>
            <button onClick={onPrev}>정보 수정</button>
        </div>
    );
};

export default Step3;