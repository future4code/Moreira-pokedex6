import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderDetails from '../../components/HeaderDetails';
import {
	ContainerDetails,
	ContainerTipo,
	CardFoto,
	ContainerPoderes,
	ContainerAtaques,
	ContainerTipoPokemon,
	ImgPoke,
	Power
} from './style.js';
export default function PokedexDetails(props) {
	const [tipe, setTipe] = useState([]);
	const [imgPokemon, setImgPokemon] = useState([])
	const [moves, setMoves] = useState([])
	const [power, setPower] = useState([])

	const { name } = useParams()

	const getInfoPokemon = () => {
		axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
			.then((res) => {
				setTipe(res.data.types);
				setImgPokemon(res.data.sprites)
				setMoves(res.data.moves)
				setPower(res.data.stats)
			});
	};

	useEffect(() => {
		getInfoPokemon();
	}, []);

	return (
		<div>
			<HeaderDetails />
			<ContainerDetails>
				<div>
					<CardFoto>
						<ImgPoke src={imgPokemon.front_default} />
					</CardFoto>
					<CardFoto>
						<ImgPoke src={imgPokemon.back_default} />
					</CardFoto>
				</div>
				<ContainerPoderes>
					<h2>Poderes</h2>
					{power.map((dados) => {
						return <Power key={dados.id}>
							<p>{dados.stat.name}</p>
							<p>{dados.base_stat}</p>
						</Power>
					})}
				</ContainerPoderes>
				<div>
					<ContainerTipo>
						<h2>Tipo</h2>
						<ContainerTipoPokemon>
							{tipe.map((dados) => {
								return <div key={dados.id}>
									<p>{dados.type.name}</p>
								</div>
							})}
						</ContainerTipoPokemon>
					</ContainerTipo>
					<ContainerAtaques>
						<h2>Principais ataques</h2>
						{moves.slice(0, 5).map((dados) => {
							return <div key={dados.id}>
								<p>{dados.move.name}</p>
							</div>
						})}
					</ContainerAtaques>
				</div>
			</ContainerDetails>
		</div>
	);
}
