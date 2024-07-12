// Question: โค้ดด้านล่างทำงานได้หรือไม่ 
// ==================
let company = prompt('Which company created JavaScript?');
company == 'Netscape' ? alert('Right!') : alert('Wrong.');

// Answer:
// ==================
// ตัว code สามารถทำงานได้
// เนื่องจากหลังจากที่มีการรับ input จาก user
// มาเก็บไว้ในตัวแปร company แล้ว
// ตัว logic ก็จะทำ Ternary operator
// ตรวจสอบเงื่อนไขว่า ข้อความที่ user กรอกมามีค่าเป็น 'Netscape' หรือไม่
// --> ถ้าใช่ จะ alert('Right!')
// --> ถ้าไม่ใช่ จะ alert('Wrong.');
// แต่จะไม่มีตัวแปรที่มารอรับค่าที่ return ออกมาหลังจบการทำ Ternary
// เพื่อนำค่าไปใช้งานต่อเท่านั้นเอง