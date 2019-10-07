class ConstUtil {
    constructor() {

    }
    PORT = process.env.PORT || 8888;
    isSecured = false; // minutes
    authorizationPrefix = "astecvn";
    hasKey = "astecvn2019";
    defaultDateFormat = "YYYY/MM/DD HH:mm:ss";
    appKey = "astecvn2019@vietnamusa";
    dbUrl = "mongodb+srv://cuongpv:123456a@A@cluster0-eup7b.mongodb.net/test";
}
export const constUtil = new ConstUtil();