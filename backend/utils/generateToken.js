import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ "userId" : userId }, process.env.JWT_SECRET, {   //payload is a list with one userId data
		expiresIn: "15d",
	});

	res.cookie("jwt", token, {  //name of cookie is jwt and is sent to browser as response
		maxAge: 15 * 24 * 60 * 60 * 1000, // Milliseconds
		httpOnly: true, // prevent XSS attacks cross-site scripting attacks
		sameSite: "strict", // CSRF attacks cross-site request forgery attacks
		secure: process.env.NODE_ENV !== "development",
	});
};

export default generateTokenAndSetCookie;