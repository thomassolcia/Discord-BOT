module.exports = async client => {
    console.log('\n     [COMANDOS PREPARADOS]      \n')
    setInterval(function() {
        client.user.setActivity("-ajuda", { type: "PLAYING" })
    }, 60000);
}