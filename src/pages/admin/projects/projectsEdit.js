import { useEffect, router, useState } from "@/utilities";
import axios from "axios";

const AdminProjectsEdit = ({id}) => {
    const [project, setProject] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3000/project/${id}`).then(({data}) => setProject(data));
    },[]);

    useEffect(() => {
        const form = document.querySelector("#form-add");
        const ten = document.querySelector("#project-ten");
        const mota = document.querySelector("#project-mota");
        const tglam = document.querySelector("#project-tglam");
        const cnghe = document.querySelector("#project-cnghe");
        const demo = document.querySelector("#project-demo");
        const github = document.querySelector("#project-github");

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const formData = {
                id,
                ten: ten.value,
                mota: mota.value,
                tglam: tglam.value,
                cnghe: cnghe.value,
                demo: demo.value,
                github: github.value,
            };

            axios.put("http://localhost:3000/project/" + id, formData).then(() => {
                router.navigate("/admin/projects/");
            });
        });
    });
    return `<div class="container pt-5">
        <form action="" id="form-add">
            <div class="form-group">
                <label for="" class="form-label">Tên Dự án</label>
                <input type="text" class="form-control" id="project-ten" value="${project.ten}"/>
            </div>
            <div class="form-group">
                <label for="" class="form-label">Mô tả</label>
                <input type="text" class="form-control" id="project-mota" value="${project.mota}"/>
            </div>
            <div class="form-group">
                <label for="" class="form-label">Thời gian làm </label>
                <input type="text" class="form-control" id="project-tglam" value="${project.tglam}"/>
            </div>
            <div class="form-group">
                <label for="" class="form-label">Công nghệ</label>
                <input type="text" class="form-control" id="project-cnghe" value="${project.cnghe}"/>
            </div>
            <div class="form-group">
                <label for="" class="form-label">Link Demo</label>
                <input type="text" class="form-control" id="project-demo" value="${project.demo}"/>
            </div>
            <div class="form-group">
                <label for="" class="form-label">Link Github</label>
                <input type="text" class="form-control" id="project-github" value="${project.github}"/>
            </div>
            <button class="btn btn-primary">Sửa dự án</button>
        </form>
        </div>`;
};

export default AdminProjectsEdit;

