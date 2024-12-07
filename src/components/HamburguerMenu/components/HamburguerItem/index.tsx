import { ReactNode } from 'react';
import { HamburguerItemStyle } from './HamburguerItem.styled';

interface HamburguerItemProps {
	children: ReactNode;
  borderTop?: boolean;
}

export default function HamburguerItem({ children, borderTop = false }: HamburguerItemProps) {
	return <HamburguerItemStyle borderTop={borderTop}>{children}</HamburguerItemStyle>;
}
