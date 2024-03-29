<script setup lang="ts">
const imgFinancePar = new URL(
  '../../../assets/etiquette-fr.png',
  import.meta.url
).href
</script>

<template>
  <div
    class="flex flex-col gap-12 w-[880px] h-fit bg-white rounded-xl px-8 py-16 mx-auto mt-32 mb-[79px] font-dm-sans"
  >
    <h1 class="text-[44px] leading-[48px] mb-12 font-bold">
      Conditions d’utilisation
    </h1>
    <div class="flex flex-col gap-8 leading-6 text-">
      <p class="text-base align-baseline">
        Rennes Métropole met à disposition, via le présent site, un service
        permettant, sur le territoire de Ville de Rennes, de consulter les
        mesures d'exposition aux ondes électromagnétiques réalisées,
        d'identifier les sites radioélectriques présents et d'être redirigé vers
        le site de l'ANFR pour réaliser une demande de mesure d'exposition aux
        ondes électromagnétiques. L’Utilisateur est réputé avoir pris
        connaissance des présentes conditions générales, qui s'imposent à tout
        usager du présent site. L’Utilisateur garantit qu’il n’utilisera pas le
        site à des fins illicites ou immorales ou contraires à leur utilisation
        initiale.
      </p>
      <p class="text-base align-baseline">
        Les équipements (ordinateurs, téléphones, moyens de télécommunication…)
        permettant l'accès au site sont à la charge exclusive des Utilisateurs,
        de même que les frais de télécommunications induits par leur
        utilisation.
      </p>

      <p class="text-base align-baseline">
        Pour une expérience optimale de l'application, vous trouverez ci-dessous
        les prérequis techniques :
      </p>
      <ul class="list-disc pl-6">
        <li>
          Navigateur : Nous recommandons l'utilisation de Firefox, Chrome ou
          Safari pour une compatibilité maximale.
        </li>
        <li>
          WebGL : Assurez-vous que votre navigateur prend en charge WebGL, une
          technologie graphique 3D utilisée par notre application.
        </li>
        <li>
          Accélération matérielle : Pour des performances optimales, vérifiez
          que votre appareil dispose d'un accélérateur graphique ou GPU.
        </li>
        <li>
          Version du navigateur : Nous vous recommandons d'utiliser la dernière
          version stable de votre navigateur préféré pour bénéficier des
          dernières améliorations et fonctionnalités de compatibilité.
        </li>
        <li>
          Suppression du cache : Pour éviter tout problème lié à des versions
          précédentes de l'application en cache, nous vous conseillons de vider
          régulièrement le cache de votre navigateur.
        </li>
        <li>
          Pour garantir une expérience fluide et sans problèmes, nous vous
          recommandons vivement de n'utiliser que les boutons de navigation
          internes fournis dans notre application. Ces boutons sont spécialement
          conçus pour maintenir la cohérence de l'interface utilisateur et
          prévenir les erreurs.
        </li>
      </ul>
      <p>
        Pour profiter pleinement de l'expérience immersive offerte par notre
        application basée sur Cesium et le jumeau numérique 3D de la métropole
        de Rennes, veuillez vérifier ces prérequis techniques et mettre à jour
        votre navigateur si nécessaire.
      </p>

      <h2 class="text-2xl font-bold">Services proposés aux utilisateurs</h2>
      <ul class="list-disc pl-6">
        <li>
          Consultation des mesures en temps réel : via l'observatoire des Ondes,
          un service de l'EXEM (laboratoire spécialisé dans la mesure de champs
          électromagnétiques). Les mesures "en temps réel" sont enregistrées
          toutes les deux heures par des capteurs permanents du laboratoire EXEM
          installés par la Ville de Rennes.
        </li>
        <li>
          Consultation des mesures ponctuelles : via le site Cartoradio, carte
          des sites et des mesures radioélectriques de l'ANFR. Le site permet la
          consultation des rapports détaillés des mesures de champs
          électromagnétiques ainsi que des informations sur les sites
          radioélectriques en France.
        </li>
        <li>
          Consultation des sites émetteurs d'ondes (téléphonie mobile, réseaux
          mobiles privés, télévision, radio, faisceaux hertziens et autres
          stations) : également disponibles via le site Cartoradio.
        </li>
      </ul>
      <p>Ces données sont mises à jour une fois par trimestre.</p>
      <h2 class="text-2xl font-bold mt-1">Propriété intellectuelle</h2>
      <h3 class="font-bold text-xl">Sites utilisés</h3>
      <ul class="list-disc pl-6">
        <slot></slot>
      </ul>
      <h2 class="text-2xl font-bold mt-1">Droits de reproduction</h2>
      <h3 class="font-bold text-xl">Contenus produits par Rennes Métropole</h3>
      <p class="text-base align-baseline">
        Le présent site est la propriété de Rennes Métropole, qui en est
        l'auteur au sens des articles L. 111.1 et suivants du Code de la
        propriété intellectuelle. Les photographies, textes, slogans, dessins,
        images, séquences animées sonores ou non ainsi que toutes œuvres
        intégrées dans le site sont la propriété de Rennes Métropole ou de tiers
        ayant autorisé Rennes Métropole à les utiliser. La reproduction, sur un
        support papier ou informatique, du rapport téléchargeable ou du site est
        autorisée sous réserve qu'elle soit strictement réservée à un usage
        personnel, excluant tout usage à des fins publicitaires et/ou
        commerciales et/ou d'informations, et qu'elle soit conforme aux
        dispositions de l'article L122-5 du Code de la Propriété Intellectuelle.
        À l'exception des dispositions ci-dessus, toute reproduction,
        représentation, utilisation ou modification, par quelque procédé que ce
        soit et sur quelque support que ce soit, de tout ou partie du site, des
        rapports téléchargeables et de tout ou partie des contenus qui le
        composent, sans avoir obtenu l'autorisation préalable de Rennes
        Métropole, est strictement interdite et constitue un délit de
        contrefaçon.
      </p>

      <h3 class="font-bold text-xl">Liens hypertextes pointant vers le site</h3>
      <p class="text-base align-baseline">
        Le site de Rennes Métropole autorise tout site internet ou tout autre
        support à le citer ou à mettre en place un lien hypertexte pointant vers
        son contenu, sous réserve :
      </p>
      <ul class="list-disc pl-6">
        <li>
          Que la page atteinte ne soit pas imbriquée à l’intérieur d’autres
          pages, en particulier par voie de cadre (ou « frames ») c’est-à-dire
          que les pages du présent site ne soient pas imbriquées à l’intérieur
          des pages d’un autre site, mais accessibles par l’ouverture d’une
          fenêtre,
        </li>
        <li>
          De mentionner la source (Site Rennes Métropole) pour chaque lien, en
          particulier lorsqu’il s’agit d’un lien direct sur un contenu,
        </li>
        <li>
          Que l’accès aux pages contenant ces liens vers le présent site soit
          gratuit.
        </li>
      </ul>
      <p class="text-base align-baseline">
        Cette autorisation ne s’applique pas aux sites diffusant des
        informations à caractère polémique, pornographique, xénophobe ou
        pouvant, dans une plus large mesure porter atteinte à la sensibilité du
        plus grand nombre. Rennes Métropole se réserve le droit de demander la
        suppression d’un lien qu’elle estime non conforme à sa ligne éditoriale.
        <br /><br />
        Rennes Métropole ne peut en aucun cas être tenu responsable de la mise à
        disposition du présent site via un lien hypertexte, et ne peut supporter
        aucune responsabilité sur le contenu, les produits, les services, etc.
        disponibles sur ces sites destinataires ou à partir de ces sites
        destinataires.
      </p>

      <h3 class="font-bold text-xl">
        Liens hypertextes proposés sur le présent site
      </h3>
      <p class="text-base align-baseline">
        Plusieurs liens vers d’autres sites sont proposés. Leur présence ne
        saurait engager Rennes Métropole quant à leur contenu et ne vise qu’à
        permettre à l’internaute de trouver plus facilement un accompagnement et
        d’autres ressources sur le sujet de l'énergie photovoltaïque.
      </p>

      <h2 class="text-2xl font-bold mt-1">
        Traitement des données personnelles
      </h2>
      <p class="text-base align-baseline">
        Voir la politique
        <a
          href="/legalnotice/confidentialite"
          target="_blank"
          class="underline"
        >
          de protection des données personnelles</a
        >
        du présent site.
      </p>

      <h2 class="text-2xl font-bold mt-1">Responsabilité</h2>
      <p class="text-base align-baseline">
        Rennes Métropole met tout en œuvre pour offrir aux Utilisateurs des
        informations et/ou des outils disponibles et mis à jour. Pour autant,
        elle ne saurait être tenue responsable en cas d’erreurs, d’absence de
        disponibilité des fonctionnalités et/ou de la présence de virus sur le
        site.
        <br /><br />
        Rennes Métropole ne saurait garantir l'exactitude, la complétude,
        l'actualité et l’exhaustivité des informations diffusées sur le site.
        Chaque Utilisateur est invité à affiner les informations obtenues et
        restituées dans le rapport téléchargeable auprès de structures
        spécialisées.
        <br /><br />
        La responsabilité de Rennes Métropole ne saurait être engagée en cas de
        force majeure.
      </p>

      <h2 class="text-2xl font-bold mt-1">Programme France Relance</h2>
      <p class="text-base align-baseline">
        Ce projet a été soutenu par le programme France Relance.
      </p>

      <img class="w-[242.25px] h-[130px]" :src="imgFinancePar" alt="" />

      <p class="text-base align-baseline">
        Licence Creative Commons BY-NC-SA 3.0 FR
      </p>
    </div>
  </div>
</template>
