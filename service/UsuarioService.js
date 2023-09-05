import http from "@/common/http";

class UsuarioService {
    create(data) {
        console.log(data);
        return http.post("/usuario", data);
    }
    list() {
        return http.get("/usuario");
    }
}
export default new UsuarioService();