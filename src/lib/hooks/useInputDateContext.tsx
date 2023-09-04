import {
	SetStateAction,
	createContext,
	useContext,
	useState,
	Dispatch,
	ReactNode,
} from 'react';

type InputDateContextType = {
	inputDate: Date;
	setInputDate: Dispatch<SetStateAction<Date>>;
};

const inputDateContextDefaultValue = {
	inputDate: new Date(),
	setInputDate: () => {},
} as InputDateContextType;

export const InputDateContext = createContext(inputDateContextDefaultValue);

export function useInputDate() {
	const context = useContext(InputDateContext);
	if (!context) {
		throw new Error('useInputDate must be used within an InputDateProvider');
	}
	return context;
}

export function InputDateProvider({ children }: { children: ReactNode }) {
	const [inputDate, setInputDate] = useState<Date>(new Date());

	return (
		<InputDateContext.Provider value={{ inputDate, setInputDate }}>
			{children}
		</InputDateContext.Provider>
	);
}
