async function logMovies(){
    const response = await fetch("https://bmbtoj67o7epskxp2hvnkgznd40yrpcf.lambda-url.ap-northeast-1.on.aws/")
    const movies = await response.json();
    console.log(movies["name"])
}
logMovies()
