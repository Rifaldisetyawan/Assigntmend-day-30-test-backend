function weekend(n) {
    let today = new Date(n).getDay();
    var weekdays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu']
    return weekdays[today] === 'Minggu' || weekdays[today] === 'Sabtu' ? 'true' : 'false'

};
console.log(weekend('2022-05-15'));
function leapYear(n) {
    const leap = new Date(n,1,29).getDate() === 29;
    return leap ? 'true' : 'false'
};

module.exports = {
    weekend,
    leapYear
};

