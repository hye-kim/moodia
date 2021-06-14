# Welcome to Moodia!

### **Live Link: [Moodia](https://moodia-app.herokuapp.com/)**

![Moodia Homepage](react-app/src/images/readme-landing.png)

**Moodia** is a personal well-being application designed to help individuals track their daily mental health. The site allows users to track their moods, habits, and goals, as well as create picture diaries.

Check out the [wiki](https://github.com/hye-kim/moodia/wiki) for more information!

## Technologies

#### Front-End

- React
- Redux
- TailwindCSS

#### Back-End

- Python
- PostgreSQL
- Flask
- SQLAlchemy

## Features

- Create a new account and log in
- Track your mood from 5 different options by date
- Create goals and see the progress towards your completion of the goal
- Upload images and create diary entries on those images

## Instructions

To run this application:

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/hye-kim/moodia.git
   ```

2. Install dependencies

   ```bash
   pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
   ```

3. Create a **.env** file based on the **.env.example** file
4. Setup a PostgreSQL user, password and database that matches the **.env** file

5. Enter the python virtual environment, migrate the database, seed the database, and run the flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. Install front end dependencies from the `react-app` directory and then run the front end server
   ```bash
   npm install && npm run
   ```

## Code Snippets

Users can add moods to a specific calendar date. Creating the calendar component utilized finding the start and end days of the selected month and creating the array of day components populated with data from the mood entry.

```js
const startMonth = new Date(date.getFullYear(), date.getMonth(), 1);
const calendarItems = [];
for (
  let i = 0;
  i <= daysPerMonth[startMonth.getMonth()] + startMonth.getDay() - 1;
  i++
) {
  if (i < startMonth.getDay()) {
    calendarItems.push(<div key={i}></div>);
  } else {
    const calendarPos = i - startMonth.getDay() + 1;
    const c = !moodData[calendarPos]
      ? "white"
      : emoteColors[moodData[calendarPos]?.rating + 2];
    calendarItems.push(
      <CalendarDay
        key={i}
        color={c}
        day={calendarPos}
        date={date}
        setDate={setDate}
      />
    );
  }
}
```

![Moodia Moods](react-app/src/images/readme-mood.gif)
