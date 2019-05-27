import { check, sleep } from "k6"
import http from "k6/http"

export default function (data) {

    
    var response = http.get("https://xkcd.com/614/info.0.json")
   
    check(response, {"check for status ok": (res) => res.status==200});

    
    

    sleep(0.05);
}