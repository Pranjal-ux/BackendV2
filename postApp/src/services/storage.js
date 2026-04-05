const { ImageKit } = require("@imagekit/nodejs")

const imagekit = new ImageKit({
    publicKey: process.env.imageKit_privateKey,
    privateKey: process.env.imageKit_publicKey,

})

async function uploadFile(buffer) {

    const result = await imagekit.files.upload({
        file: buffer.toString('base64'),
        fileName: "image.jpg"
    })
    return result
}
module.exports = uploadFile;
