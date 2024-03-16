
    const calendar = document.getElementById('calendar');
    const prevWeekBtn = document.getElementById('prevWeek');
    const nextWeekBtn = document.getElementById('nextWeek');
    let currentDate = new Date(2024, 2, 16); // Months are zero-based, so March is represented as 2

    // Set currentDate to the start of the current week
    currentDate.setDate(currentDate.getDate() - (currentDate.getDay() - 1));


    // Set the time of currentDate to midnight
    currentDate.setHours(0, 0, 0, 0);

    renderWeek(currentDate);

    prevWeekBtn.addEventListener('click', function() {
        currentDate.setDate(currentDate.getDate() - 7);
        renderWeek(currentDate);
    });

    nextWeekBtn.addEventListener('click', function() {
        currentDate.setDate(currentDate.getDate() + 7);
        renderWeek(currentDate);
    });

   // Define a mapping of dates to training times

   function renderWeek(date) {
    const trainingSchedule = {
        '2024-03-15': 30,
        '2024-03-19': 30,
        '2024-03-22': 30,
        '2024-03-26': 35,
        '2024-03-29': 35, // Increase by 5 minutes after every 4 sessions
        '2024-04-02': 35,
        '2024-04-05': 35,
        '2024-04-09': 40,
        '2024-04-12': 40,
        '2024-04-16': 40,
        '2024-04-19': 35,
        '2024-04-23': 40,
        '2024-04-26': 00,
        '2024-04-30': 40,
        '2024-05-03': 45,
        '2024-05-07': 45,
        '2024-05-10': 45,
        '2024-05-14': 50, // Maximum training time reached
        '2024-05-17': 50,
        '2024-05-21': 50,
        '2024-05-24': 35,
        '2024-05-28': 55,
        '2024-05-31': 55,
        '2024-06-04': 00,
        '2024-06-07': 55,
        '2024-06-11': 55,
        '2024-06-14': 60,
        '2024-06-18': 60,
        '2024-06-21': 60,

    };

    let html = '';
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']; // Adjusted day names
    let startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay() + 1); // Calculate the first day of the week (Monday)
    let lastDayOfWeek = new Date(startOfWeek);
    lastDayOfWeek.setDate(startOfWeek.getDate() + 6); // Calculate the last day of the week (Sunday)

    html += `<h2>${startOfWeek.toLocaleDateString('en-GB', {day: 'numeric', month: 'numeric'})} - ${lastDayOfWeek.toLocaleDateString('en-GB', {day: 'numeric', month: 'numeric'})}</h2>`;
    html += '<table>';
    html += '<tr>';
    for (let i = 0; i < 7; i++) { // Start from Monday
        html += `<th>${days[i]}</th>`; // Use adjusted day names
    }
    html += '</tr>';
    html += '<tr>';
    for (let i = 0; i < 7; i++) {
        const currentDate = new Date(startOfWeek);
        currentDate.setDate(currentDate.getDate() + i);
        const currentDateKey = currentDate.toISOString().slice(0, 10); // Get the YYYY-MM-DD format of the current date
        const trainingTime = trainingSchedule[currentDateKey]; // Get the training time for the current date from the mapping

        html += `<td class="dates-row">${currentDate.getDate()}</td>`;
    }
    html += '</tr>';
    // Add an empty row underneath each day with training time on Wednesdays and Saturdays
    html += '<tr id="empty-row">';
    for (let i = 0; i < 7; i++) {
        const currentDate = new Date(startOfWeek);
        currentDate.setDate(currentDate.getDate() + i);
        currentDate.setUTCHours(0, 0, 0, 0); // Ensure consistency with UTC time
        const currentDateKey = currentDate.toISOString().slice(0, 10); // Get the YYYY-MM-DD format of the current date
        const trainingTime = trainingSchedule[currentDateKey]; // Get the training time for the current date from the mapping

        html += `<td>${trainingTime ? `${trainingTime}min` : ''}</td>`;
    }
    html += '</tr>';
    html += '</table>';

    // Check for specific weeks and render corresponding message

if (startOfWeek.getFullYear() === 2024 && startOfWeek.getMonth() === 2 && startOfWeek.getDate() === 11) {
        // Render message for the week starting from March 18, 2024
        html += '<p>ALLE BEGIN IS MOEILIJK</p><p>Remember: Focus op TIJD, niét op AFSTAND.</p>';
} else if (startOfWeek.getFullYear() === 2024 && startOfWeek.getMonth() === 2 && startOfWeek.getDate() === 18) {
    // Render message for the week starting from March 18, 2024
    html += '<p>GOOOO LANDER GOOOO</p>';
} else if (startOfWeek.getFullYear() === 2024 && startOfWeek.getMonth() === 2 && startOfWeek.getDate() === 25) {
    // Render message for the week starting from March 23, 2024
    html += '<p>"ALLES GEVEN EH!" - Alain Vandam</p>';
} else if (startOfWeek.getFullYear() === 2024 && startOfWeek.getMonth() === 3 && startOfWeek.getDate() === 1) {
    // Render message for the week starting from March 23, 2024
    html += '<p>RUN FOREST RUN</p>';
} else if (startOfWeek.getFullYear() === 2024 && startOfWeek.getMonth() === 3 && startOfWeek.getDate() === 8) {
    // Render message for the week starting from March 23, 2024
    html += '<p>“Running is the greatest metaphor for life, because you get out of it what you put into it.” - Oprah Winfrey</p>';
} else if (startOfWeek.getFullYear() === 2024 && startOfWeek.getMonth() === 3 && startOfWeek.getDate() === 15) {
    // Render message for the week starting from March 23, 2024
    html += '<p>"What are you waiting for?! DO IT! JUST DO IT! YES YOU CAN! JUST DO IT! If you’re tired of starting over, stop giving up." - Shia LaBeouf</p>';
} else if (startOfWeek.getFullYear() === 2024 && startOfWeek.getMonth() === 3 && startOfWeek.getDate() === 22) {
    // Render message for the week starting from March 23, 2024
    html += '<p>REST WEEK - "Rest is not a reward, it`s a part of the progress."</p>';
} else if (startOfWeek.getFullYear() === 2024 && startOfWeek.getMonth() === 3 && startOfWeek.getDate() === 29) {
    // Render message for the week starting from March 23, 2024
    html += '<p>"Is da verplicht?" - Hanz Rimmer</p>';
} else if (startOfWeek.getFullYear() === 2024 && startOfWeek.getMonth() === 4 && startOfWeek.getDate() === 6) {
    // Render message for the week starting from March 23, 2024
    html += '<p>"How do you know if someone ran a marathon? Don’t worry, they’ll tell you." - Jimmy Fallon</p>';
} else if (startOfWeek.getFullYear() === 2024 && startOfWeek.getMonth() === 4 && startOfWeek.getDate() === 13) {
    // Render message for the week starting from March 23, 2024
    html += '<p>"Ja lap, hier: okselvijvers." - Alain Vandam</p>';
} else if (startOfWeek.getFullYear() === 2024 && startOfWeek.getMonth() === 4 && startOfWeek.getDate() === 20) {
    // Render message for the week starting from March 23, 2024
    html += '<p>"I’ve got 99 problems, so I went on a run to ignore them all."</p>';  
} else if (startOfWeek.getFullYear() === 2024 && startOfWeek.getMonth() === 4 && startOfWeek.getDate() === 27) {
    // Render message for the week starting from March 23, 2024
    html += '<p>"If it’s not on Strava, it didn’t happen."</p>';
} else if (startOfWeek.getFullYear() === 2024 && startOfWeek.getMonth() === 5 && startOfWeek.getDate() === 3) {
    // Render message for the week starting from March 23, 2024
    html += '<p>REST WEEK - "Rustig blijven Frankie ... Rustig!" - Michel Drets</p>';
} else if (startOfWeek.getFullYear() === 2024 && startOfWeek.getMonth() === 5 && startOfWeek.getDate() === 10) {
    // Render message for the week starting from March 23, 2024
    html += '<p>"Ge zijt fantastisch goe bezig, GAAN MAN!" - Bucky Laplace</p>';
} else if (startOfWeek.getFullYear() === 2024 && startOfWeek.getMonth() === 5 && startOfWeek.getDate() === 17) {
    // Render message for the week starting from March 23, 2024
    html += '<p>THIS IS WHY WE TRAINED, LET`S GO</p>';
} else if (startOfWeek.getFullYear() === 2024 && startOfWeek.getMonth() === 5 && startOfWeek.getDate() === 24) {
    // Render message for the week starting from March 23, 2024
    html += '<p>This is it. I`ve got nothing left to teach you, my dear apprentice. NOW GO MY SON AND ROCK - xxx Lennart</p>';
} 

    calendar.innerHTML = html;
}

    
    
