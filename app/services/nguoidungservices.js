function nguoidungservices() {
    // lay danh sach nguoi dung tu backend ve 
    this.LayDanhSachNguoiDung = function() {

            return $.ajax({
                url: "http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung",
                type: "GET"
            })

        }
        // them nguoi dung
    this.themnguoidung = function(nguoidungmoi) {

        return $.ajax({
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung",
            type: "POST",
            data: nguoidungmoi,
        })
    }
    this.Xoanguoidung = function(id) {
        return $.ajax({
            url: `http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${id}`,
            type: "DELETE",

        })
    }
}