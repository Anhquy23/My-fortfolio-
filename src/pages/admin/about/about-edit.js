import { useEffect, router, useState } from "@/utilities";

const AdminAboutEditPage = ({id}) => {
    const [about, setAbout] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3000/about/${id}`)
        .then((response) => response.json())
        .then((data) => setAbout(data));
    },[]);

    useEffect(() => {
        const form = document.getElementById("form-edit");
        const aboutdate = document.getElementById("about-date");
        const aboutemail = document.getElementById("about-email");
        const abouttel = document.getElementById("about-tel");
        const aboutaddress = document.getElementById("about-address");
        const job = document.getElementById("about-job");
        const jobdetails = document.getElementById("about-jobdetails");
        

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const formData = {
                id,
                date: aboutdate.value,
                email: aboutemail.value,
                tel: abouttel.value,
                aboutaddress: aboutaddress.value,
                job: job.value,
                jobdetails: jobdetails.value
            };
            
            fetch("http://localhost:3000/about/" + id,{
                method: "PUT",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }).then(() => router.navigate("/admin/about/"));
        });
    });
    
    return `<div class="container pt-5">
  <form action="" id="form-edit">
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
      <button class="btn btn-primary">Sửa</button>
  </form>
  </div>`;
};

export default AdminAboutEditPage;

