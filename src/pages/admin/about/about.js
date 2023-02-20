import { useState, useEffect } from "@/utilities";

const about = () => {
    const [about, setAbout, ] = useState([]);
useEffect(() => {
    fetch("http://localhost:3000/user", {
    method: "GET",
    redirect: "follow",
  })
    .then((response) => response.json())
    .then((result) => {
      setAbout(result[0])
    })
    .catch((error) => console.log("error", error));

},[]);
  
  return `<div class="container pt-5">
  <form action="" id="form-add">
      <div class="form-group">
          <label for="" class="form-label">Ngày Sinh</label>
          <input type="text" class="form-control" id="about-date" value = "${about.date}"/>
      </div>
      <div class="form-group">
          <label for="" class="form-label">Email</label>
          <input type="text" class="form-control" id="about-email" value = "${about.email}"/>
      </div>
      <div class="form-group">
          <label for="" class="form-label">Số Điện Thoại</label>
          <input type="text" class="form-control" id="about-tel" value = "${about.tel}"/>
      </div>
      <div class="form-group">
          <label for="" class="form-label">Địa Chỉ</label>
          <input type="text" class="form-control" id="about-address" value = "${about.address}"/>
      </div>
      <div class="form-group">
          <label for="" class="form-label">Công Việc</label></label>
          <input type="text" class="form-control" id="about-job" value = "${about.job}"/>
      </div>
      <div class="form-group">
          <label for="" class="form-label">Mô tả CV</label>
          <input type="text" class="form-control" id="about-jobdetails" value = "${about.jobdetails}"/>
      </div>
      <a class="btn btn-danger" href="/admin/about/edit">Sửa</a>
  </form>
  </div>`;
}

export default about

