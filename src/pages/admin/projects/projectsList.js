import { useEffect, useState } from "@/utilities";
import axios from "axios";

const AdminProjectsList = () => {
    
  const [ projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/project").then(({data}) => setProjects(data));
}, []);
  

  useEffect(function (){
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click",function(){
        const id = this.dataset.id;

        axios.delete(`http://localhost:3000/project/${id}`).then(() => {
          const newProjects = projects.filter((project) => project.id != id);
          setProjects(newProjects);
        });
      })
    }
  })

  return `<div class="container pt-5">
  <h1>Quản lý dự án</h1>
  <table class="table table-bordered">
          <thead>
              <tr>
                  <th>#</th>
                  <th>Tên dự án</th>
                  <th>Mô tả</th>
                  <th>Ảnh</th>
                  <th>Thời gian làm</th>
                  <th>Công nghệ</th>
                  <th>Demo</th>
                  <th>Link github</th>
              </tr>
          </thead>
          <tbody>
              ${projects
                  .map((project, index) => {
                      return `
                      <tr>
                          <td>${index + 1}</td>
                          <td>${project.ten}</td>
                          <td>${project.mota}</td>
                          <td style="width:40px">${project.anh}</td>
                          <td>${project.tglam}</td>
                          <td>${project.cnghe}</td>
                          <td>${project.demo}</td>
                          <td>${project.github}</td>
                          <td>
                              <button data-id="${project.id}"class="btn btn-danger btn-remove">Remove</button>
                              <a class="btn btn-primary" href="/admin/projects/${project.id}/edit">Edit</a>
                          </td>
                      </tr>
                  `;
                  })
                  .join("")}
                  <a class="btn btn-success mb-4" href="/#/admin/projects/add">Thêm dự án</a>
          </tbody>
      </table>
</div>`;
}

export default AdminProjectsList