$(document).ready(() => {
    $("textarea").each(() => {
        this.setAttribute("style", "height:" + (this.scrollHeight) + "px;");
    }).on("input", () => {
        this.style.height = 0;
        this.style.height = (this.scrollHeight) + "px";
    });
});