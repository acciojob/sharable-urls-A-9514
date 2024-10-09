document.getElementById("button").addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var year = document.getElementById("year").value;
    var baseURL = "https://localhost:8080/";

    if (name && year) {
        var url = `${baseURL}?name=${name}&year=${year}`;
        document.getElementById("url").textContent = url;
    }
});
