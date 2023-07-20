/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PDFContext = createContext();

const PDFProvider = ({ children }) => {
	const [selectedPDF, setSelectedPDF] = useState();
	const [user, setUser] = useState();

	const [PDFs, setPDFs] = useState();

	const navigate = useNavigate();

	

	useEffect(() => {
		const userInfo = JSON.parse(localStorage.getItem("userInfo"));
		setUser(userInfo);


		if (!userInfo) {
			navigate("/login");
		}
	}, [navigate]);

	return (
		<PDFContext.Provider
			value={{
				selectedPDF,
				setSelectedPDF,
				user,
				setUser,
				PDFs,
				setPDFs,
			}}
		>
			{children}
		</PDFContext.Provider>
	);
};

export const PDFState = () => {
	return useContext(PDFContext);
};

export default PDFProvider;