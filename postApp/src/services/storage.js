const ImageKit = require("@imagekit/nodejs")

const imagekit = new ImageKit({
    publicKey: "public_zpIvVaq/2ikqEkHygoo64Kd9bSM=",
    privateKey: "private_SgRKId3pHt2EGPCWQxiudV+rHfs=",

})

async function uploadFile(buffer) {
    const result = await imagekit.upload({
        file: buffer,
        fileName: "image.jpg"
    })
    return result
}
module.exports = uploadFile;
