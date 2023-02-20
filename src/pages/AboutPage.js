import { useState, useEffect } from "@/utilities";

const AboutPage = () => {

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
  
    
  return `
    <div class="container-fluid">
    <div id="about" class="row about-section">
        <div class="col-lg-6 about-card">
            <h3 class="font-weight-light">Bạn Là Ai ?</h3>
            <span class="line mb-5"></span>
            <h5 class="mb-3">${about.job}</h5>
            <p class="mt-20">${about.jobdetails}</p>
            <button class="btn btn-outline-danger"><i class="icon-down-circled2 "></i>Download My CV</button>
        </div>
        <div class="col-lg-6 about-card">
            <h3 class="font-weight-light">Thông tin</h3>
            <span class="line mb-5"></span>
            <ul class="mt40 info list-unstyled">
                <li><span>Ngày Sinh</span> : ${about.date}</li>
                <li><span>Email</span> : ${about.email}</li>
                <li><span>Số Điện Thoại</span> : ${about.tel}</li>
                <li><span>Địa Chỉ</span> :  ${about.address}</li>
            </ul>
        </div> 
    </div>
    </div>
  `;
};

export default AboutPage;





