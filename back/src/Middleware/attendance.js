'use strict';

const e = {
    HOUR_PRESENT: 8,
    HOUR_START: 9,
    HOUR_END: 17,
    MAX_POSITIVE_STREAK: 10,
    MAX_NEGATIVE_STREAK: 3,
    PTS_BASE_PTS: 1,
    PTS_MAX_STREAK: 10,
    PTS_MULTI_LATE: -300,
    PTS_MONTHLY_LATE: -1000,  
    PTS_ABSENCE_EXCUSED: -30,
    PTS_ABSENCE_UNEXCUSED: -1000,
}
// ****** ATTENDANCES SYSTEM ****** \\
/* Instructions
    // Create Config Data
    // What do I recieve (input) ?
    // 0. UserID || Name
    // 1. Time Arrived
    // 2. Status
    // What Should I get (Request DB) ? 
    // Positive + Negative Streak Value.
    // What Should I do (algo) ?
    // Check Arrived Time date
    // 1. if on time update streak if streak++ === 10 update maxstreak and give extra points
    // 2. if late reset positive streak and add negative streak if negative++ === 3 then calculate points. if monthly late add -1000 points.
    // 3. Add/Remove standard points for presance 
    // 4. Return new Data for user.
    // 5. Update Database.
*/

const attendanceTime = time => {
    try {
      const hour = time;// normalizeHour(time);
      return hour && (hour >= e.HOUR_START && hour <= e.HOUR_END) ? hour : e.HOUR_PRESENT;
    } catch (e) {
      console.log(`Error: attendanceTime ${e}`);
    }
};

const main = (data) => 
{
    const { user_id, time_arrived, status } = data.user_data;
    let { positive_streak, negative_streak, max_positive_streak, max_negative_streak } = data.user_streak;
    try {
        const time = attendanceTime(time_arrived);
        if (!time)
            throw "Something Mysterious...";

        let points = 0;

        if (status)
        {
            switch (status) {
                case 0: //'absent with excuse':
                    points = e.PTS_ABSENCE_EXCUSED;
                case 1: //'absent without excuse':
                    points = e.PTS_ABSENCE_UNEXCUSED;
                default: 
                    console.log(`unknown attendance status : ${status} for user_id : ${user_id}`);
            }
        }
        else 
        {
            if (time != e.HOUR_PRESENT) // Late
            {
                // Reset Positive 
                // Update MaxPositiveStreak
                if (positive_streak > 0)
                {
                    if (positive_streak > max_positive_streak)
                        max_positive_streak = positive_streak;

                    positive_streak = 0;
                }
                
                // if late 3 time in a row then -300 points 
                if (++negative_streak === e.MAX_NEGATIVE_STREAK)
                {
                    points = e.PTS_MULTI_LATE;
                    negative_streak = 0;
                } 
                else
                    points = -((time - e.HOUR_START) + 1);

                // if it's 3 time a month then -1000
                if (++max_negative_streak === e.MAX_NEGATIVE_STREAK)
                    points = e.PTS_MONTHLY_LATE;
            }
            else // is on time !
            {
                if (negative_streak > 0)
                    negative_streak = 0;

                if (++positive_streak === e.MAX_POSITIVE_STREAK)
                {
                    points = e.PTS_MAX_STREAK;
                    positive_streak = 0;
                    ++max_positive_streak;
                }
                else if (positive_streak > max_positive_streak)
                    max_positive_streak = positive_streak;

                points += ((time - e.HOUR_PRESENT) + 1);
                console.log(points);
            }
        }
    
        if (points === 0)
            throw "points. Something Mysterious..."

        const Data = { points, positive_streak, negative_streak, max_positive_streak, max_negative_streak }
        return Data;
    } catch (e)
    {
        console.log(`attendance main ${e}`);
    }
}

const FakeData = () => {
    const user_data = {
        user_id: 0,
        time_arrived: 8,
        status: 0
    };
    // Request Streak by userID
    const user_streak = {
        positive_streak: 9,
        negative_streak: 2,
        max_positive_streak: 10,
        max_negative_streak: 0
    }

    const data = { user_data, user_streak };

    const toDisplay = main(data);

    console.log(toDisplay);
}

FakeData();