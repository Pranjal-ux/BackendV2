const { ImageKit } = require('@imagekit/nodejs')

const ImageKitClient = new ImageKit({
    privateKey: process.env.imageKit_privateKey
})
const uploadFile = async (file) => {
    const result = await ImageKitClient.files.upload({
        file,
        filename: "music_" + Date.now,
        folder: "BackendV2/spotifyMusics"
    })
    return result
}


module.exports = { uploadFile } 