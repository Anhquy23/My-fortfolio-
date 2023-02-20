import { useState, useEffect } from "@/utilities";

const FortfolioPage = () => {
  const [fortfolio, setFortfolia] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/project")
      .then((response) => response.json())
      .then((data) => setFortfolia(data));
  }, []);

  const ListItem = fortfolio.map((item) => {
    return `<div class="portfolio-item">
    <img src="${item.anh}" class="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates">
                <div class="content-holder">
                <a class="img-popup" href="assets/imgs/web-2.jpg"></a>
                <div class="text-holder">
                <h6 class="title">Tên Dự Án: ${item.ten}</h6>
                <p class="subtitle">Mô Tả: ${item.mota}</p>
                <p class="subtitle">Thời Gian Làm: ${item.tglam}</p>
                <p class="subtitle">Công Nghệ: ${item.cnghe}</p>
                <p class="subtitle">Link Demo: <a href="${item.demo}">ĐÂY NÈ</a></p>
                <p class="subtitle">Link GitHub: <a href="${item.github}">ĐÂY NÈ</a></p>

            </div>
            </div> 
</div>`;
  }).join('');
  return `
    <!-- Portfolio Section -->
    <section class="section bg-custom-gray" id="portfolio">
        <div class="container">
            <h1 class="mb-5"><span class="text-danger">Dự Án</span></h1>
            <div class="portfolio">
                <div class="portfolio-container container"> 
                <div class="row">
                    <div class="col-md-6 col-lg-4 web new">
                    ${ListItem}              
                </div>
                </div>
                </div> 
            </div>  
        </div>            
    </section>
  `;
};

export default FortfolioPage;
