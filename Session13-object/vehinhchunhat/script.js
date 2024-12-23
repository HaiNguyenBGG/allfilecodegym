 // Định nghĩa lớp Rectangle
 class Rectangle {
    constructor(length, width) {
      this.length = length;
      this.width = width;
    }

    // Tính diện tích
    getArea() {
      return this.length * this.width;
    }

    // Tính chu vi
    getPerimeter() {
      return 2 * (this.length + this.width);
    }

    // Hiển thị trực quan hình chữ nhật trên canvas
    draw(ctx, x, y) {
      ctx.beginPath();
      ctx.rect(x, y, this.width, this.length); // Vẽ hình chữ nhật
      ctx.strokeStyle = "black";
      ctx.stroke();
    }
  }

  // Khởi tạo đối tượng Rectangle
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext('2d');
  const myRectangle = new Rectangle(100, 50);

  // Hiển thị hình chữ nhật
  myRectangle.draw(ctx, 50, 50);

  // In diện tích và chu vi ra màn hình
  console.log("Diện tích:", myRectangle.getArea());
  console.log("Chu vi:", myRectangle.getPerimeter());

  // Thay đổi chiều dài và chiều rộng
  myRectangle.length = 200;
  myRectangle.width = 100;

  // Hiển thị lại hình chữ nhật với kích thước mới
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Xóa canvas trước khi vẽ lại
  myRectangle.draw(ctx, 50, 50);

  // In diện tích và chu vi mới ra màn hình
  console.log("Diện tích mới:", myRectangle.getArea());
  console.log("Chu vi mới:", myRectangle.getPerimeter());