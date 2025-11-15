import { Navbar } from "../components/Navbar";


function Apprendre() {
  return (
    <div>
        <Navbar/>
          <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-20">
      <h1 className="text-3xl font-bold text-green-600 mb-6">
        Apprenez à bien taper au clavier 🖱️⌨️
      </h1>

      <p className="mb-4 text-gray-700">
        Taper rapidement et efficacement sur un clavier est une compétence essentielle dans notre vie numérique. Que vous soyez étudiant, professionnel ou gamer, améliorer votre vitesse et précision au clavier peut vous faire gagner beaucoup de temps.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        1️⃣ Posture et position des mains
      </h2>
      <p className="mb-4 text-gray-700">
        Asseyez-vous droit, les pieds à plat sur le sol. Les coudes doivent être à angle droit et vos doigts reposent naturellement sur la rangée de base :
        <strong> A S D F</strong> pour la main gauche et <strong> J K L ;</strong> pour la main droite. Les pouces reposent sur la barre espace.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        2️⃣ Apprenez le touch typing
      </h2>
      <p className="mb-4 text-gray-700">
        Le touch typing consiste à taper sans regarder le clavier. Cela peut sembler difficile au début, mais avec de la pratique quotidienne, vous gagnerez en vitesse et en précision. Commencez par des exercices simples et augmentez progressivement la difficulté.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        3️⃣ Utilisez des exercices et jeux
      </h2>
      <p className="mb-4 text-gray-700">
        Des plateformes comme <a href="/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">TypeRush</a>  proposent des tests et des jeux pour améliorer votre vitesse. Faites-en 10 à 15 minutes par jour pour progresser rapidement.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        4️⃣ Pratique régulière
      </h2>
      <p className="mb-4 text-gray-700">
        La clé du succès est la régularité. Même 10 minutes par jour, si elles sont faites correctement, suffisent à améliorer votre précision et votre vitesse. Évitez de vous précipiter, concentrez-vous sur la qualité des frappes.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        5️⃣ Patience et persévérance
      </h2>
      <p className="mb-4 text-gray-700">
        Il est normal de faire des erreurs au début. Ne vous découragez pas ! Chaque frappe correcte vous rapproche de votre objectif. Avec quelques semaines de pratique régulière, taper rapidement deviendra naturel.
      </p>

      <p className="mt-6 text-green-700 font-semibold text-lg">
        Prêt à devenir un pro du clavier ? Commencez dès aujourd’hui et amusez-vous avec vos progrès ! 🎯⌨️
      </p>
    </div>
    </div>
  
  );
}

export default Apprendre;
