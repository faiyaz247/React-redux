import React, { Fragment, useEffect, useState } from 'react';
import { ClockWrapper } from './style';
import SetAlarmClock from './SetAlarm';
import AlarmTable from '../../components/Table/AlarmTable'

export default function Clock() {

    const [time, updateTime] = useState(new Date())
    const [alarm, setAlarm] = useState({ hour: 0, minute: 0 });
    const [alarmList, setAlarmList] = useState([]);


    const setTime = (e) => {
        const { name, value } = e.target;
        if ((name === 'hour' && value <= 24) || (name === 'minute' && value <= 60)) {
            setAlarm(alarm => ({ ...alarm, [name]:  value.replace(/^0+/, '') }))
        }
    }

    const getList = () => {
        const data = alarmList?.length && alarmList.map((alarm, index) => ({
            Sno: index+1,
            Time: alarm
        }))
        return data?.length ? data : [];
    }

    const setAlarms = ({ hour, minute }) => {
        const newTime = `${hour.replace(/^0+/, '')}:${minute.replace(/^0+/, '')}`;

        console.log(newTime)
        if (hour > 0 || minute > 0) {
            setAlarmList(alarmList => ([...alarmList, newTime]))
            setAlarm({ hour: 0, minute: 0 })
        }

    }

    useEffect(() => {
        const interval = setInterval(() => {
            updateTime(new Date());
            const currentTime = `${new Date().getHours()}:${new Date().getMinutes()}`;
            if(alarmList.includes(currentTime)) {
                setAlarmList(alarmList.filter(item => item !== currentTime))
                alert(currentTime);
            }
        }, 1000);
            
        return () => {
            clearInterval(interval);
        };
    }, [alarmList])

    return (
        <Fragment>
            <ClockWrapper className='digital-clock'>{`${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`}</ClockWrapper>
            <div>
                <div className='container'>
                    <div className='setAlarm'>
                        <SetAlarmClock alarm={alarm} setTime={setTime} setAlarms={setAlarms} />
                    </div>
                    <div className='alarmList'>
                        <AlarmTable data={(getList())} />
                    </div>
                </div>

            </div>

        </Fragment>

    )
}
