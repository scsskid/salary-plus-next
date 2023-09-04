'use client';

import { InputDateProvider } from '@/lib/hooks/useInputDateContext';

type Props = { children: React.ReactNode };

export default function InputDateProviderWrapper({ children }: Props) {
	return <InputDateProvider>{children}</InputDateProvider>;
}
