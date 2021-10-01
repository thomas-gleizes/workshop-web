import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

import { useStorage } from "../helpers/hooks";
import { AUTH_TOKEN, IS_LOGIN } from "../helpers/localstorageKey";
import Api from "../helpers/api";
import addToast, { TOAST_ERROR, TOAST_SUCCESS } from "../helpers/toastr";

const Vote = () => {
  const [candidats, setCandidats] = useState([]);

  const isLogin = useStorage(IS_LOGIN);
  const token = useStorage(AUTH_TOKEN);

  if (!isLogin) return <Redirect to="/authentification/connexion" />;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    (async () => {
      try {
        const { data } = await Api.candidates();
        setCandidats(data);
      } catch (e) {
        setCandidats([
          [
            {
              id: 1,
              nom: "Melanchon",
              prenom: "Jean-Luc",
              parti: "a france insoumise",
              description: "Travailler moins pour gagner plus (ou pas)",
            },
            {
              id: 2,
              nom: "Asselineau",
              prenom: "Francois",
              parti: "Union populaire républicaine",
              description: "C'est pas faux",
            },
            {
              id: 3,
              nom: "Le Pen",
              prenom: "Marine",
              parti: "Rassemblement nationnal",
              description: "Liberté liberté chérie",
            },
            {
              id: 4,
              nom: "Poisson",
              prenom: "Jean-Frédéric",
              parti: "La voix du peuple",
              description: "L'humilité, c'est pas quand il ya des infiltrations",
            },
            {
              id: 5,
              nom: "Dupont-Aignan",
              prenom: "Nicolas",
              parti: "Debout la france",
              description: "Arthour, pas changer assiette pour fromage",
            },
            {
              id: 6,
              nom: "Arthaud",
              prenom: "Nathalie",
              parti: "Lutte ouvriere",
              description: "Vous avez parlé de votre amitié avec une truite",
            },
            {
              id: 7,
              nom: "Roussel",
              prenom: "Fabien",
              parti: "Parti communiste français",
              description: "Je crois qu’il faut que vous arrêtiez d’essayer de dire des trucs ",
            },
            {
              id: 8,
              nom: "Poutou",
              prenom: "Philippe",
              parti: "Parti anti-capitaliste",
              description: "Au bûcher ",
            },
            {
              id: 9,
              nom: "Bertrand",
              prenom: "Xavier",
              parti: "Les républicains",
              description: "Elle est où la poulette ?",
            },
          ],
        ]);
      }
    })();
  }, []);

  const handleVote = async (event) => {
    const candidat = event.target.value;
    try {
      const formData = new FormData();
      formData.append("token", token);
      formData.append("candidat", candidat);

      const response = await Api.vote(formData);

      console.log("Response", response);
      addToast("Votre vote a été pris en compte", TOAST_SUCCESS);
    } catch (e) {
      addToast("Une erreur est surenue lors du vote", TOAST_ERROR);
    }
  };

  return (
    <div>
      <div className="banner pt-24">
        <div className="title">
          <h2 className="text-center text-4xl">Election Présidentielle 2021</h2>
        </div>
        <div className="separate pt-4">
          <hr className="rounded-lg" />
        </div>
      </div>
      <div className="body-candidat text-center pt-24 flex flex-wrap justify-center">
        {candidats.map((candidat, index) => (
          <div key={index} className="card m-4 w-1/4 flex-auto text-center rounded-lg">
            <div className="card-header">
              <div className="card-header-img">
                <img src={`./assets/${candidat.nom}.jpg`} alt={candidat.nom} />
              </div>
            </div>
            <div className="card-body">
              <div>
                <h3>
                  {candidat.nom} {candidat.prenom}
                </h3>
                <h4>{candidat.parti}</h4>
              </div>
              <div>
                <p>{candidat.description}</p>
              </div>
            </div>
            <div className="card-footer">
              <button value={candidat.id} onClick={handleVote} className="btn">
                Voter
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 mb-40">
        <button className="card-btn rounded text-center px-32 py-2 text-lg rounded">Voter Blanc</button>
      </div>
    </div>
  );
};

export default Vote;
