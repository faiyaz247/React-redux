import React, { Fragment, useEffect, useState } from "react";
import { ClockWrapper } from "./style";
import SetAlarmClock from "./SetAlarm";
import AlarmTable from "../../components/Table/AlarmTable";

export default function Clock() {
    
  const [time, updateTime] = useState(new Date());
  const [alarm, setAlarm] = useState({ hour: 0, minute: 0 });
  const [alarmList, setAlarmList] = useState([]);

  // Input handler for hour and minute
  const handleInput = (e) => {
    const { name, value } = e.target;
    if (
      (name === "hour" && value <= 24) ||
      (name === "minute" && value <= 60)
    ) {
      setAlarm((alarm) => ({
        ...alarm,
        [name]: value.replace(/^0+/, "") || 0,
      }));
    }
  };

  // function to get list of alarm scheduled
  const getList = () => {
    const data =
      alarmList?.length &&
      alarmList.map((alarm, index) => ({
        Sno: index + 1,
        Time: alarm,
      }));
    return data?.length ? data : [];
  };

  // function to set state of alarm using hours and minute input
  const setAlarms = ({ hour, minute }) => {
    const newTime = `${hour ? hour.replace(/^0+/, "") : 0}:${
      minute ? minute.replace(/^0+/, "") : 0
    }`;

    if (hour > 0 || minute > 0) {
      setAlarmList((alarmList) => [...alarmList, newTime]);
      setAlarm({ hour: 0, minute: 0 });
    }
  };

  useEffect(() => {
    // To updateTime and to notify matching scheduled alarm.
    const interval = setInterval(() => {
      updateTime(new Date());
      const currentTime = `${new Date().getHours()}:${new Date().getMinutes()}`;
      if (alarmList.includes(currentTime)) {
        setAlarmList(alarmList.filter((item) => item !== currentTime));
        alert(currentTime);
      }
    }, 1000);

    // cleanup function
    return () => {
      clearInterval(interval);
    };
  }, [alarmList]);

  return (
    <Fragment>
      <ClockWrapper className="digital-clock">{`${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`}</ClockWrapper>
      <div>
        <div className="container">
          <div className="setAlarm">
            <SetAlarmClock
              alarm={alarm}
              handleInput={handleInput}
              setAlarms={setAlarms}
            />
          </div>
          <div className="alarmList">
            <AlarmTable data={getList()} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
