function generateCalendar() {
    const month = parseInt(document.getElementById("month").value);
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    // Tạo đối tượng Date để lấy số ngày trong tháng
    const firstDay = new Date(currentYear, month, 1);
    const lastDay = new Date(currentYear, month + 1, 0);

    // Lấy ngày trong tuần của ngày đầu tháng (0 - Chủ nhật, 6 - Thứ bảy)
    const firstDayOfWeek = firstDay.getDay();
    const totalDaysInMonth = lastDay.getDate();

    let calendarHTML = '<table>';
    calendarHTML += '<tr class="header"><th>CN</th><th>T2</th><th>T3</th><th>T4</th><th>T5</th><th>T6</th><th>T7</th></tr>';

    let day = 1;

    // Tạo các dòng cho lịch
    for (let i = 0; i < 6; i++) {
        calendarHTML += '<tr>';

        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDayOfWeek) {
                // Thêm ô trống trước ngày đầu tháng
                calendarHTML += '<td></td>';
            } else if (day <= totalDaysInMonth) {
                const todayClass = (day === currentDate.getDate() && month === currentDate.getMonth()) ? 'current-day' : '';
                calendarHTML += `<td class="${todayClass}">${day}</td>`;
                day++;
            } else {
                // Thêm ô trống nếu ngày đã vượt quá số ngày trong tháng
                calendarHTML += '<td></td>';
            }
        }

        calendarHTML += '</tr>';
        if (day > totalDaysInMonth) break;  // Dừng khi hết ngày
    }

    calendarHTML += '</table>';

    // Hiển thị lịch vào container
    document.getElementById('calendar-container').innerHTML = calendarHTML;
}

// Khởi tạo lịch khi trang được tải
window.onload = generateCalendar;