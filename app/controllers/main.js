$(document).ready(function() {
    function themnguoidung();
    console.log("themnguoidung")
})
$(document).ready(function() {

    var mangnguoidung = [];
    var Nguoidungservices = new nguoidungservices();


    var ajaxNguoiDung = Nguoidungservices.LayDanhSachNguoiDung();
    ajaxNguoiDung
        .done(function(result) {

            mangnguoidung = result;
            console.log(mangnguoidung);
            // luu vao local storage
            hienthi(mangnguoidung);

        })
        .fail(function(err) {
            console.log(err);
        })

    function hienthi(mangnguoidung) {
        var tbodydanhsachnguoidung = $("#tblDanhSachNguoiDung");
        var content = "";
        mangnguoidung.map(function(nhanvien, index) {
            content += `
                <tr>
                    <td>${index+1}</td>
                    <td>${nhanvien.TaiKhoan}</td>
                    <td>${nhanvien.MatKhau}</td>
                    <td>${nhanvien.HoTen}</td>
                    <td>${nhanvien.Email }</td>
                    <td>${nhanvien.SoDT}</td>
                    <td>
                        <button class="btn btn-danger xoathanhvien" data-id=${nhanvien.TaiKhoan}>Xoa</button>
                    </td>
                    
                </tr>
                `
        })
        tbodydanhsachnguoidung.html(content);
    }
    $("#btnThemNguoiDung").click(function() {
        $("#modal-title").html("Thêm Người Dùng");
        var btn = `
        <button class="btn btn-success" id="btnThem">Thêm Người Dùng  </button>
        `
        $("#modal-footer").html(btn);
    })
    $("body").delegate("#btnThem", "click", function() {
        // lay thong tin
        var taikhoan = $("#TaiKhoan").val();
        var hoten = $("#HoTen").val();
        var matkhau = $("#MatKhau").val();
        var email = $("#Email").val();
        var sodt = $("#SoDienThoai").val();
        var maloai = $("#maloainguoidung").val();
        // tao doi tuong
        var Nguoidung = new nguoidung(taikhoan, matkhau, hoten, email, sodt, maloai);
        // them vao database(api)
        var ajaxthem = Nguoidungservices.themnguoidung(Nguoidung)
        ajaxthem
            .done(function(result) {
                console.log(result);
            })
            .fail(function(err) {
                console.log(err);
            });
    })
    $("body").delegate(".xoathanhvien", "click", function() {
        var taikhoan = $(this).data("id");
        Nguoidungservices.Xoanguoidung(taikhoan)

        .done(function() {
                location.reload()
            })
            .fail(function(err) {
                console.log(err);
            });

    })


})