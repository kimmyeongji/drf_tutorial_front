console.log("로딩 되었습니다")

window.onload = () => {
    const payload = localStorage.getItem("payload", jsonPayload);
    const payload_parce = JSON.parce(payload)
    console.log(payload_parce.email)

    const intro = document.getElementById("intro")
    intro.innerText = payload_parce.email
}