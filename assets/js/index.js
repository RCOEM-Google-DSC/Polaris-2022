document.addEventListener("scroll", () => {
    let dif = document.documentElement.scrollTop;
    if (dif > 1960) {
        let num = (dif - 1960)
        console.log(num)
        document.getElementById("mario").style.transform = `translateX(${num}px)`
    }
})