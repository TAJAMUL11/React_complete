import {useState, useEffect} from 'react';
function Digital () {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        let timeIntervalId = setInterval(() => {
                setTime(new Date())
        },1000);

        return () => {
            clearInterval(timeIntervalId);
        }

    }, []);

    function formatTime () {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridium = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;

        return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)} ${meridium}`
    }

    function addZero (number) {
        return (number < 10 ? "0" : "") + number;


    }

    return(
        <div className='clock-Container'>
            <div className="clock">

                <span>{formatTime()}</span>
            </div>

        </div>
    )

}
export default Digital;