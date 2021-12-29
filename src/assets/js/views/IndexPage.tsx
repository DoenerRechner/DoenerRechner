import {
	Box,
	FormControl,
	FormLabel,
	Input,
	NumberInput,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";

export const IndexPage = () => {
	const [kebabPrice, setKebabPrice] = useState<string>("3.7");
	const [price, setPrice] = useState<string>(
		String(Math.floor(Math.random() * 20))
	);
	const kebabs = useMemo(() => {
		const priceNumber = Number(price);
		const kebabPriceNumber = Number(kebabPrice);
		if (
			!price ||
			isNaN(priceNumber) ||
			!kebabPrice ||
			isNaN(kebabPriceNumber)
		) {
			return undefined;
		}

		try {
			return Math.floor(priceNumber / kebabPriceNumber);
		} catch {
			return undefined;
		}
	}, [price, kebabPrice]);

	return (
		<div className="calculator-page">
			<Box className="calculator" p={4}>
				<FormControl id="payment">
					<FormLabel>Wie viel möchtest du ausgeben?</FormLabel>
					<Input
						placeholder="Ausgaben"
						className="input"
						label
						size="lg"
						autofocus
						value={price}
						onChange={(e) => setPrice(e.currentTarget.value)}
					/>
				</FormControl>
				<FormControl id="kebabprice">
					<FormLabel>Döner Preis</FormLabel>
					<Input
						placeholder="Dein Döner Preis"
						className="input"
						label
						size="lg"
						value={kebabPrice}
						onChange={(e) => setKebabPrice(e.currentTarget.value)}
					/>
				</FormControl>

				{kebabs !== undefined && (
					<div className="result">
						Du könntest entweder
						<span className="sum">{price} €</span>
						ausgeben, oder dir
						<span className="sum">{kebabs}</span>
						Döner kaufen
					</div>
				)}
			</Box>
		</div>
	);
};
