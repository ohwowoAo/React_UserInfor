import React from 'react';

const Step2 = ({userjob, useremail, usersex, userhob, changeInput, focusRef, onPrev, onNext}) => {

    return (
        <div>
            <p>
                <label>직업 :</label>
                <input ref={focusRef} value={userjob} onChange={changeInput} name="userjob" />
            </p>
            <p>
                <label>이메일 :</label>
                <input value={useremail} onChange={changeInput} name="useremail"/>
            </p>
            <p>
                <label>성별 :</label>
                <input value={usersex} onChange={changeInput} name="usersex"/>
            </p>
            <p>
                <label>취미 :</label>
                <input value={userhob} onChange={changeInput} name="userhob"/>
            </p>
            <button onClick={onPrev}>이전</button>
            <button onClick={onNext}>다음</button>
        </div>
    );
};

export default Step2;