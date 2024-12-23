const canvasA = document.getElementById('messengerCanvasA');
const ctxA = canvasA.getContext('2d');

const canvasB = document.getElementById('messengerCanvasB');
const ctxB = canvasB.getContext('2d');

const phoneA = { battery: 100, isOn: false, messages: [], input: '', activeInput: false };
const phoneB = { battery: 100, isOn: false, messages: [], input: '', activeInput: false };

function drawPhone(ctx, phone, label) {
    ctx.clearRect(0, 0, 300, 400); // Clear canvas

    // Phone body
    ctx.fillStyle = phone.isOn ? '#ddd' : '#888';
    ctx.fillRect(0, 0, 300, 400);

    // Phone screen
    ctx.fillStyle = phone.isOn ? '#fff' : '#666';
    ctx.fillRect(20, 20, 260, 300);

    // Battery and Status
    ctx.fillStyle = '#000';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`Pin: ${phone.battery}%`, 150, 15);
    ctx.fillText(phone.isOn ? 'Trạng thái: Bật' : 'Trạng thái: Tắt', 150, 35);

    // Messages
    if (phone.isOn) {
        ctx.textAlign = 'left';
        let y = 50;
        phone.messages.forEach((msg) => {
            ctx.fillText(msg, 30, y);
            y += 25;
        });
    }

    // Phone label
    ctx.textAlign = 'center';
    ctx.fillStyle = '#000';
    ctx.fillText(label, 150, 380);
}

function displayMessages() {
    drawPhone(ctxA, phoneA, 'Điện thoại A');
    drawPhone(ctxB, phoneB, 'Điện thoại B');
}

function sendMessage(phone, recipient, message) {
    if (!phone.isOn) {
        alert('Điện thoại đang tắt!');
        return;
    }

    if (phone.battery <= 0) {
        alert('Điện thoại đã hết pin!');
        return;
    }

    if (message.trim()) {
        phone.messages.push(`Bạn: ${message}`);
        recipient.messages.push(`Người gửi: ${message}`);
        phone.battery = Math.max(0, phone.battery - 5);
        displayMessages();
    }
}

function sendMessageFromInput(phone, recipient, inputId) {
    const input = document.getElementById(inputId);
    if (input) {
        const message = input.value.trim();
        if (message) {
            sendMessage(phone, recipient, message);
            input.value = '';
        } else {
            alert('Tin nhắn không được để trống!');
        }
    }
}

function togglePhone(phone) {
    phone.isOn = !phone.isOn;
    displayMessages();
}

function chargePhone(phone) {
    if (phone.isOn) {
        phone.battery = Math.min(100, phone.battery + 20);
        displayMessages();
    } else {
        alert('Điện thoại đang tắt. Vui lòng bật lên trước khi sạc.');
    }
}

displayMessages();