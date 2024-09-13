// Bài tập 1:  Quản lý tuyển sinh
function quanLyTuyenSinh() {
  let diemChuan = Number(document.getElementById('diemChuan').value);
  let khuVucUuTien = Number(document.getElementById('khuVucUuTien').value);
  let doiTuongUuTien = Number(document.getElementById('doiTuongUuTien').value);
  let diemMon1 = Number(document.getElementById('diemMon1').value);
  let diemMon2 = Number(document.getElementById('diemMon2').value);
  let diemMon3 = Number(document.getElementById('diemMon3').value);
  let inKetQua = document.getElementById('inKetQuaDiem');

  if (kiemTraDiem(diemMon1) && kiemTraDiem(diemMon2) && kiemTraDiem(diemMon3)) {
    let tongDiem =
      diemMon1 + diemMon2 + diemMon3 + doiTuongUuTien + khuVucUuTien;
    if (tongDiem >= diemChuan) {
      inKetQua.innerHTML = `Chúc mừng bạn đã đậu với tổng điểm là ${tongDiem}`;
    } else {
      inKetQua.innerHTML = `Rất tiếc bạn đã rớt với tổng điểm là ${tongDiem}`;
    }
  } else {
    inKetQua.innerHTML = 'Rất tiếc bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0';
  }
}

function kiemTraDiem(diem) {
  return diem > 0;
}

document.getElementById('btnKetQuaDiem').onclick = quanLyTuyenSinh;

// Bài tập 2: Tính tiền điện
function tinhTienDien() {
  let tenKhachHang = document.getElementById('tenKhachHang').value;
  let soKw = Number(document.getElementById('soKw').value);
  let giaTien50KwDau = 500;
  let giaTien50KwKe = 650;
  let giaTien100KwKe = 850;
  let giaTien150KwKe = 1100;
  let giaTienConLai = 1300;
  let tongTienDien = 0;
  let inTienDien = document.getElementById('inTienDien');

  if (soKw > 0 && soKw <= 50) {
    tongTienDien = soKw * giaTien50KwDau;
  } else if (soKw > 50 && soKw <= 100) {
    tongTienDien = 50 * giaTien50KwDau + (soKw - 50) * giaTien50KwKe;
  } else if (soKw > 100 && soKw <= 200) {
    tongTienDien =
      50 * giaTien50KwDau + 50 * giaTien50KwKe + (soKw - 100) * giaTien100KwKe;
  } else if (soKw > 200 && soKw <= 350) {
    tongTienDien =
      50 * giaTien50KwDau +
      50 * giaTien50KwKe +
      100 * giaTien100KwKe +
      (soKw - 200) * giaTien150KwKe;
  } else if (soKw > 350) {
    tongTienDien =
      50 * giaTien50KwDau +
      50 * giaTien50KwKe +
      100 * giaTien100KwKe +
      150 * giaTien150KwKe +
      (soKw - 350) * giaTienConLai;
  } else {
    inTienDien.innerHTML = 'Số Kw không hợp lệ';
    return;
  }

  inTienDien.innerHTML = `Tên khách hàng: ${tenKhachHang} - Tiền điện: ${tongTienDien.toLocaleString(
    'vi-VN',
  )} VNĐ`;
}

document.getElementById('btnTienDien').onclick = tinhTienDien;

// Bài tập 3: Tính thuế thu nhập cá nhân
function tinhThueThuNhap() {
  let tenCaNhan = document.getElementById('tenCaNhan').value;
  let tongThuNhap = document.getElementById('tongThuNhap').value;
  let soNguoiPhuThuoc = document.getElementById('soNguoiPhuThuoc').value;
  let inThue = document.getElementById('inThue');
  let thuNhapChiuThue = tongThuNhap - 4e6 - soNguoiPhuThuoc * 16e5;
  let thueThuNhap = 0;
  let thueSuatDen60 = 0.05;
  let thueSuatTren60Den120 = 0.1;
  let thueSuatTren120Den210 = 0.15;
  let thueSuatTren210Den384 = 0.2;
  let thueSuatTren384Den624 = 0.25;
  let thueSuatTren624Den960 = 0.3;
  let thueSuatTren960 = 0.35;

  if (thuNhapChiuThue > 0 && thuNhapChiuThue <= 6e7) {
    thueThuNhap = thuNhapChiuThue * thueSuatDen60;
  } else if (thuNhapChiuThue > 6e7 && thuNhapChiuThue <= 12e7) {
    thueThuNhap = thuNhapChiuThue * thueSuatTren60Den120;
  } else if (thuNhapChiuThue > 12e7 && thuNhapChiuThue <= 21e7) {
    thueThuNhap = thuNhapChiuThue * thueSuatTren120Den210;
  } else if (thuNhapChiuThue > 21e7 && thuNhapChiuThue <= 384e6) {
    thueThuNhap = thuNhapChiuThue * thueSuatTren210Den384;
  } else if (thuNhapChiuThue > 384e6 && thuNhapChiuThue <= 624e6) {
    thueThuNhap = thuNhapChiuThue * thueSuatTren384Den624;
  } else if (thuNhapChiuThue > 624e6 && thuNhapChiuThue <= 960e6) {
    thueThuNhap = thuNhapChiuThue * thueSuatTren624Den960;
  } else if (thuNhapChiuThue > 960e6) {
    thueThuNhap = thuNhapChiuThue * thueSuatTren960;
  } else {
    inThue.innerHTML = 'Số tiền thu nhập không hợp lệ';
    return;
  }

  inThue.innerHTML = `Tên cá nhân: ${tenCaNhan} - Thuế thu nhập: ${thueThuNhap.toLocaleString(
    'vi-VN',
  )} VNĐ`;
}

document.getElementById('btnThue').onclick = tinhThueThuNhap;

// Bài tập 4: Tính tiền cáp
function tinhTienCap() {
  let loaiKhachHang = document.getElementById('loaiKhachHang').value;
  let maKhachHang = document.getElementById('maKhachHang').value;
  let soKenh = Number(document.getElementById('soKenh').value);
  let soKetNoi = Number(document.getElementById('soKetNoi').value);
  let inTienCap = document.getElementById('inTienCap');
  let tongTienCap = 0;
  
  if (loaiKhachHang && soKetNoi >= 0) {
    tongTienCap = tinhTongCap(loaiKhachHang, soKenh, soKetNoi);
  } else {
    inTienCap.innerHTML = 'Dữ liệu không hợp lệ';
  }

  inTienCap.innerHTML = `Mã khách hàng: ${maKhachHang} - Tổng tiền cáp: ${tongTienCap.toLocaleString(
    'en-US',
  )} $`;
}

function tinhTongCap(loaiKhachHang, soKenh, soKetNoi) {
  let phiHoaDon = 0;
  let phiDichVu = 0;
  let phiThueKenh = 0;
  switch (loaiKhachHang) {
    case 'nhaDan': {
      phiHoaDon = 4.5;
      phiDichVu = 20.5;
      phiThueKenh = 7.5 * soKenh;
      return phiHoaDon + phiDichVu + phiThueKenh;
    }
    case 'doanhNghiep': {
      phiHoaDon = 15;
      phiDichVu = function (soKetNoi) {
        if (soKetNoi <= 10) {
          return 75;
        } else {
          return 75 + (soKetNoi - 10) * 5;
        }
      };
      phiThueKenh = 50 * soKenh;
      return phiHoaDon + phiDichVu(soKetNoi) + phiThueKenh;
    }
  }
}

function anInput() {
  let loaiKhachHang = document.getElementById('loaiKhachHang').value;
  let soKetNoi = document.getElementById('soKetNoi');
  if (loaiKhachHang == 'doanhNghiep') {
    soKetNoi.style.display = 'block';
  } else {
    soKetNoi.style.display = 'none';
  }
}

document.getElementById('btnTienCap').onclick = tinhTienCap;
