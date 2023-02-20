import { useEffect, router } from "@/utilities";
import axios from "axios";

const AdminProjectsAdd = () => {
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const ten = document.querySelector("#project-ten");
        const mota = document.querySelector("#project-mota");
        const anh = document.querySelector("#project-anh");
        const tglam = document.querySelector("#project-tglam");
        const cnghe = document.querySelector("#project-cnghe");
        const demo = document.querySelector("#project-demo");
        const github = document.querySelector("#project-github");

        form.addEventListener("submit", async function (e) {
            e.preventDefault();

            const urls = await uploadFiles(anh.files);
            const formData = {
                ten: ten.value,
                mota: mota.value,
                tglam: tglam.value,
                cnghe: cnghe.value,
                demo: demo.value,
                github: github.value,
                anh: urls
            };
            axios.post("http://localhost:3000/project", formData).then(() => {
                router.navigate("/admin/projects");
            });
        });
    });
    
    const uploadFiles = async (files) => {
        if (files){
            const CLOUD_NAME = "dzo94imrh";
            const PRESET_NAME = "upload";
            const FOLDER_NAME = "ECMA"
            const urls =[];
            const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    
            const formData = new FormData();
            formData.append("upload_preset", PRESET_NAME);
            formData.append("folder", FOLDER_NAME);
    
            for(const file of files) {
                formData.append("file", file);
    
                const response = await axios.post(api,formData,{
                    headers:{
                        "Content-Type": "multipart/form-data",
                    },
                })
                urls.push(response.data.secure_url)
            }
            return urls;
        }
    };
    return `<div class="container pt-5">
        <form action="" id="form-add">
            <div class="form-group">
                <label for="" class="form-label">Tên Dự án</label>
                <input type="text" class="form-control" id="project-ten" />
            </div>
            <div class="form-group">
                <label for="" class="form-label">Mô tả</label>
                <input type="text" class="form-control" id="project-mota" />
            </div>
            <div class="form-group">
                <label for="" class="form-label">Ảnh</label>
                <input type="file" class="form-control" multiple id="project-anh" />
            </div>
            <div class="form-group">
                <label for="" class="form-label">Thời gian làm </label>
                <input type="text" class="form-control" id="project-tglam" />
            </div>
            <div class="form-group">
                <label for="" class="form-label">Công nghệ</label>
                <input type="text" class="form-control" id="project-cnghe" />
            </div>
            <div class="form-group">
                <label for="" class="form-label">Link Demo</label>
                <input type="text" class="form-control" id="project-demo" />
            </div>
            <div class="form-group">
                <label for="" class="form-label">Link Github</label>
                <input type="text" class="form-control" id="project-github" />
            </div>
            <button class="btn btn-primary">Thêm dự án</button>
        </form>
        </div>`;
};

export default AdminProjectsAdd;

