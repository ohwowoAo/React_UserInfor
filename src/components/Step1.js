import React from 'react';

const Step1 = ({username, userage, useraddr, usernum, changeInput, focusRef, onNext}) => {

    return (
        <div>
            <h2>회원 정보 입력</h2>
            <p>
                <label>이름 :</label>
                <input ref={focusRef} value={username} onChange={changeInput} name="username" />
            </p>
            <p>
                <label>나이 :</label>
                <input type="number" value={userage} onChange={changeInput} name="userage"/>
            </p>
            <p>
                <label>주소 :</label>
                <input value={useraddr} onChange={changeInput} name="useraddr"/>
            </p>
            <p>
                <label>연락처 :</label>
                <input type="number" value={usernum} onChange={changeInput} name="usernum"/>
            </p>
            <button onClick={onNext}>다음</button>
        </div>
    );
};

export default Step1;