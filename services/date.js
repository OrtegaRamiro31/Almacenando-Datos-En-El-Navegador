export const uniqueDates = (tasks) => {
    const unique = [];
    tasks.forEach(task => {
        if(!unique.includes(task.dateFormat))  unique.push(task.dateFormat);
    });
    return unique;
};

export const orderDates = (dates) => {
    return dates.sort((a,b) => {
        const firstDate = moment(a, "DD/MM/YYYY");
        const secondDate = moment(b, "DD/MM/YYYY");
        return firstDate - secondDate;
    }); 
}

export const currentDate = () => {
    const calendar = document.querySelector('[data-form-date]');
    const today = new Date();
    calendar.value = moment(today).format("YYYY-MM-DDTHH:mm");
}