import React from 'react';

const Step1 = ({username, userage, changeId, changeAge}) => {

    return (
        <div>
            <p>
                <label>이름 :</label>
                <input value={username} onChange={changeId}/>
            </p>
            <p>
                <label>나이 :</label>
                <input type="number" value={userage} onChange={changeAge}/>
            </p>
            <p>
                <label>주소 :</label>
                <input />
            </p>
            <p>
                <label>연락처 :</label>
                <input />
            </p>
            <button>다음</button>
        </div>
    );
};

export default Step1;