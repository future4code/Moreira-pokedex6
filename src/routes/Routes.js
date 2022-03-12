import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from "../pages/error/error";
import Home from "../pages/home/home";
import Pokedex from "../pages/pokedex/pokedex";
import PokedexDetails from "../pages/pokedexDetail/pokedexDetail";

export default function Rotas() {

	return <div>

		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/pokedex" element={<Pokedex />} />
				<Route exact path="/pokedex-detail/:name" element={<PokedexDetails />} />
				<Route exact path="*" element={<ErrorPage />} />

			</Routes>
		</BrowserRouter>

	</div>
}