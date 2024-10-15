import api from "configs/api"

const sendOtp = async(mobile) => {
    try{
        const response = await api.post("auth/send-otp", {mobile});
        return {response}
    } catch(error){
        console.log("Error occurred:", error);
        return {error}
    }
}

const checkOtp = async (mobile, code) =>{
    try{
        const response = await api.post("auth/check-otp" ,{mobile, code});
        return {response}
    }
    catch(error){
        return {error};
    }
}

const logout = async () => {
    await api.post("user/logout"); // آدرس API برای خروج
};

export {sendOtp,checkOtp,logout};