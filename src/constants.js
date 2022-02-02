import React from "react";
import {
  news1,
  news2,
  news3,
  news4,
  news5,
  news7,
  news8,
  news9,
  news10,
  news11,
  news12,
} from "./images";
import arlanda from "./images/news/200706_Arlanda.jpg";
import malmen from "./images/news/210301_Malmen.jpg";
import point from "./images/news/210311_point.jpg";
import kriminal from "./images/news/210319_kriminalvården.jpg";
import demine from "./images/news/210420_demine.jpg";
import adda from "./images/news/adda.jpeg";
import company from "./images/news/company.jpeg";
import ds from "./images/news/ds.jpg";
import press_sv from "./images/news/press_sv.jpeg";
import press_en from "./images/news/press_en.jpeg";

export const JOBS_SV = [
  {
    title: "Teknisk kravställare/projektör",
    url: "/teknisk-kravstallare",
    degree: "Gymnasium",
    experience: 5,
  },
  {
    title: "Teknisk kravställare/projektör",
    url: "/teknisk-kravstallare",
    degree: "Högskoleingenjör (eller högre)",
    experience: 2,
  },
];

export const ARTICLES_ES = [
  {
    title: (
      <span>
        200318 ACUERDO MARCO <b>ADMINISTRACIÓN MATERIAL DE DEFENSA SUECA</b>
      </span>
    ),
    img: news12,
    content:
      "Swedish Net ha ganado su mayor acuerdo marco para la Administración de Material de Defensa de Suecia y las Fuerzas Armadas de Suecia. El acuerdo incluye servicios de consultoría como planificación, documentación técnica y gestión de proyectos con respecto a instalaciones técnicas en instalaciones militares en toda Suecia. Swedish Net está fortaleciendo su posición como proveedor calificado para la defensa sueca.",
  },
  {
    title: (
      <span>
        190117 CONTRACT <b>ÅRE ÖSTERSUND AIRPORT</b>
      </span>
    ),
    img: news11,
    content:
      "Swedish Net ha ganado un contrato para una reconstrucción mayor en el aeropuerto de Åre Östersund. El propósito de la reconstrucción es habilitar el Sistema de Aterrizaje por Instrumentos (ILS) categoría III. El contrato se realizará en el octavo aeropuerto público más transitado de Suecia, mientras el aeropuerto sigue operando.",
  },

  {
    title: (
      <span>
        190920 CONTRATO <b>AEROPUERTO DE LAS MONTAÑAS ESCANDINAVAS</b>
      </span>
    ),
    img: news10,
    content:
      "Swedish Net ha completado y recibido una inspección satisfactoria de todos sus contratos en el nuevo aeropuerto entre Sälen y Trysil. Aún hay algunas ordenes adicionales por terminar.",
  },
  {
    title: (
      <span>
        190624 AEROPUERTOS <b>OPERACIONES NORUEGA</b>
      </span>
    ),
    img: news9,
    content:
      "Swedish Net está expandiendo su línea de negocios para aeropuertos e iniciará operaciones en Noruega para ofrecer proyectos integrales en pistas y zonas de aterrizaje y despegue.",
  },
  {
    title: (
      <span>
        190618 ACUERDO MARCO <b>KAMMARKOLLEGIET</b>
      </span>
    ),
    img: news8,
    content:
      'Swedish Net ha ganado un acuerdo marco con la agencia gubernamental sueca "Kammarkollegiet". El acuerdo se refiere a la consultoría de sistemas de seguridad e incluye la entrega de análisis de riesgos, planificación e inspección para una serie de actores públicos.',
  },
  {
    title: (
      <span>
        190318 CONTRATO <b>AEROPUERTO DE ÖREBRO</b>
      </span>
    ),
    img: news7,
    content:
      "Swedish Net ha ganado un contrato para el cambio de los Reguladores de Corriente Constante (CCR) en el aeropuerto de Örebro.",
  },
  {
    title: (
      <span>
        190315 CONTRATO <b>AEROPUERTO DE LYCKSELE</b>
      </span>
    ),
    img: news2,
    content:
      "Swedish Netha ganado un contrato para el cambio de Localizador en el aeropuerto en Lycksele.",
  },
  {
    title: (
      <span>
        190301 CONTRATO <b>AEROPUERTO DE LAS MONTAÑAS ESCANDINAVAS</b>
      </span>
    ),
    img: news5,
    content:
      "Nuestro trabajo en el aeropuerto de Sälen continua, El 70 por ciento del contrato está terminado. Tenemos la responsabilidad total de la ingeniería de los sistemas y la instalación de AGL del aeropuerto, el sistema de suministro de energía eléctrica y la infraestructura para energía y comunicación. Nuestro contrato estará listo para la inspección en agosto. ",
  },
  {
    title: (
      <span>
        190228 CONTRATO <b>AEROPUERTO DE SVEG</b>
      </span>
    ),
    img: news4,
    content:
      "Swedish Net ha instalado nuevos GP y DME para el aeropuerto de Sveg.",
  },
  {
    title: (
      <span>
        190114 SERVICIOS DE CONSULTORIA{" "}
        <b>SEGURIDAD EN LA PLANIFICACIÓN Y LA INGENIERÍA</b>
      </span>
    ),
    img: news3,
    content:
      "A principios de 2019, continuamos teniendo una gran cantidad de tareas, incluida la planificación y el diseño detallado para actores gubernamentales y privados.",
  },
  {
    title: (
      <span>
        181205 CONTRATO <b>AEROPUERTO CIVIL/MILITAR DE RONNEBY </b>
      </span>
    ),
    img: news2,
    content:
      "El aeropuerto civil/miliar de Ronneby ha recibido nuevos mástiles y equipos de iluminación de aproximación para ILS. Swedish Net ganó la adquisición de la Administración de material de defensa sueca a principios de este año y ahora hemos terminado el contrato.",
  },
  {
    title: (
      <span>
        181022 <b>GESTIÓN DE PROYECTOS</b>
      </span>
    ),
    img: news1,
    content:
      "Swedish Net tiene varias asignaciones de gestión de proyectos que se ejecutan durante todo el otoño. Todas las tareas incluyen trabajos en instalaciones con altos requisitos de seguridad.",
  },
];

export const ARTICLES_EN = [
  {
    title: (
      <span>
        220201 <b>SWECO ACQUIRES SWEDISH NET ENGINEERING</b>
      </span>
    ),
    img: press_en,
    content: (
      <>
        <p>
          Sweco Sverige AB acquired all shares in Swedish Net Engineering AB,
          our engineering consultancy company in the Swedish Net Group on
          February 1.
          <br />
          The merger between Swedish Net Engineering and Sweco is a natural and
          important step for our employees and customers. It is positive that
          Swedish Net Engineering's customers now gets the opportunity to take
          advantage of Sweco's broad offering and turnkey operations.
          <br />
          The sale of Swedish Net Engineering means that we can focus more on
          our other companies in the Group, such as Swedish Net Air & Defence,
          where our contracting operations are expected to develop strongly in
          the coming years.
          <br />
          Sweco plans and designs sustainable cities and communities of the
          future. With 17,500 employees in northern Europe, the right expertise
          for each individual project can always be offered. Sweco has a
          turnover of approximately SEK 21 billion and is listed on NASDAQ OMX
          Stockholm.
          <br />
          We look forward to a continued and long-term collaboration with Sweco
          in our contracting operations.
          <br />
        </p>
      </>
    ),
  },
  {
    title: (
      <span>
        211222 Mission <b>OSCE</b>
      </span>
    ),
    img: ds,
    align: "top",
    url: "https://disarmamentsolutions.com/news",
    content: (
      <>
        <p>
          The contract awarded includes the supply of mine detectors and other
          search equipment to the OSCE Project Co-ordinator in Ukraine. The
          procurement is intended to increase the capacity to clear landmines
          and other explosive diveces, a necessary condition to be able to
          guarantee safety and security for the population. The equipment will
          be delivered during the first quarter of 2022 and we are proud to be
          able to contribute to the OSCE's important work in Ukraine.
          <br />
        </p>
        <p>Happy New Year to our partners and customers!</p>
      </>
    ),
  },

  {
    title: (
      <span>
        210820 RECRUITMENT <b>NY FILM</b>
      </span>
    ),
    img: company,
    url: "https://www.youtube.com/watch?v=IkvH-PZt4ds",
    content:
      "Swedish Net Engineering AB has uploaded a film clip where we tell about who we are and what we do.",
  },
  {
    title: (
      <span>
        CONSULTATION FRAMEWORK
        <b>
          ADDA PURCHASING CENTER (PREVIOUSLY SKL COMMENTS PURCHASING CENTER)
        </b>
      </span>
    ),
    img: adda,
    content:
      "Swedish Net has signed an agreement regarding the design of security systems and fire alarms with Adda Inköpscentral. The agreement refers to ranked allocation, where Swedish Net is first and second in two different technology areas, respectively, the agreement also refers to renewed competition in all framework agreement areas. Adda Inköpscentral is a central purchasing organization that all municipalities, municipal companies and regions can call from. In the procurement, 1163 eligible organizations were specified.",
  },
  {
    title: (
      <span>
        210420 FRAMEWORK AGREEMENT{" "}
        <b>FMV AMMUNITION AND MINING CLEARANCE EQUIPMENT</b>
      </span>
    ),
    img: demine,
    content:
      "Swedish Net will support the Swedish Armed Forces and FMV with expert support in the ability to clear mines, unexploded ordnance and improvised charges, as well as expert support in the sensor area linked to military search services. Swedish Net will also train, design and conduct investigations in the area. The agreement covers the provision of equipment, such as equipment intended for forensic investigations and protective equipment in ammunition and demining operations. The framework agreement runs until 2024 with the possibility of extension until 2027-12-31.",
  },
  {
    title: (
      <span>
        210319 CONSULTATION FRAMEWORK <b>PRISON</b>
      </span>
    ),
    img: kriminal,
    content: (
      <>
        Swedish Net wins framework agreement with the Swedish Prison and
        Probation Service. The Swedish Prison and Probation Service rents
        approximately 700,000 sqm of premises worth approximately NOK 1.3
        billion. This makes the Swedish Prison and Probation Service one of
        Sweden's largest tenants on the open market. The Swedish Prison and
        Probation Service leases all premises but owns and manages the
        telecommunications and security systems. The size, design and level of
        security of the premises vary from office premises to institutions and
        prisons. In general, however, there is a high level of security in all
        premises.
        <br />
        The assignment includes planning in ongoing and upcoming
        telecommunications bag projects within all of the Swedish Prison and
        Probation Service's activities.
        <br />
        The first time Swedish Net signed a framework agreement with the Swedish
        Prison and Probation Service was in 2012.
      </>
    ),
  },

  {
    title: (
      <span>
        210311 ASSIGNMENT <b>FMV POINT</b>
      </span>
    ),
    img: point,
    content:
      "On behalf of the Swedish Armed Forces, FMV POINT provides an information portal, the portal contains guiding and guiding information that is to be used in connection with work on the Armed Forces' fixed telecommunications and information technology facilities. The target group for POINT are those who work with design, installations, maintenance, operation, maintenance and decommissioning. Swedish Net has been given the honorary task of maintaining and developing this comprehensive system of design and installation instructions.",
  },
  {
    title: (
      <span>
        210301 PROJECT{" "}
        <b>
          FMV, INSTALLATION OF CONTROL SYSTEMS FOR AIRPORT LIGHTS ORE AND VIDSEL
        </b>
      </span>
    ),
    img: malmen,
    content:
      "Swedish Net will install ADB Safegate's control system for airport lighting at Malmen and Vidsel airports. Malmen Airport is located within the municipality of Linköping. The airport area covers 455 hectares and is part of the Armed Forces as a flotilla airport. At Vidsel Airport, tests of equipment are conducted by both the Swedish Air Force and foreign air units. The test area, which is a military protected object, roughly follows the Udtja nature reserve and is 165,000 hectares.",
  },
  {
    title: (
      <span>
        200706 FRAMEWORK AGREEMENT<b> SWEDAVIA, STOCKHOLM ARLANDA</b>
      </span>
    ),
    img: arlanda,
    content:
      "Swedish Net signs framework agreement with Swedavia regarding design of Electricity, Tele, Data, Fire alarms etc. at Stockholm Arlanda. The agreement refers to renewed competition. Arlanda has three runways and four terminals, more than 26 million passengers travel to and from the airport each year, just over 230,000 take-offs and landings are made per year. Arlanda is one of the country's largest protected objects and also a national border. Over the years, the airport has been very expansive and new projects are constantly underway there.",
  },

  {
    title: (
      <span>
        200318 FRAMEWORK AGREEMENT{" "}
        <b>THE SWEDISH DEFENCE MATERIEL ADMINISTRATION</b>
      </span>
    ),
    img: news12,
    content:
      "Swedish Net has won its largest framework agreement for the Swedish Defence Materiel Administration and the Swedish Armed Forces. The agreement includes consultancy services such as planning, technical documentation and project management regarding technical installations at military facilities all over Sweden. Swedish Net is strengthening its position as a qualified supplier to the Swedish defence.  ",
  },
  {
    title: (
      <span>
        190117 CONTRACT <b>ÅRE ÖSTERSUND AIRPORT</b>
      </span>
    ),
    img: news11,
    content:
      "Swedish Net has won a contract for a larger reconstruction at Åre Östersund Airport. The purpose of the reconstruction is to enable Instrument Landing System (ILS) category III. The contract will be delivered at Sweden’s eighth most trafficked public airport, while the airport is still operating.  ",
  },
  {
    title: (
      <span>
        190920 CONTRACT <b>SCANDINAVIAN MOUNTAINS AIRPORT</b>
      </span>
    ),
    img: news10,
    content:
      "Swedish Net has completed and received an approved inspection of all its contracts in the new airport between Sälen and Trysil. There are still a few additional orders to be finished.",
  },
  {
    title: (
      <span>
        190624 AIRPORTS <b>BRANCH NORWAY </b>
      </span>
    ),
    img: news9,
    content:
      "Swedish Net is expanding its airport business and starts a branch in Norway to deliver turnkey contracts for airside.",
  },
  {
    title: (
      <span>
        190618 FRAMEWORK AGREEMENT <b>KAMMARKOLLEGIET</b>
      </span>
    ),
    img: news8,
    content:
      "Swedish Net has won a framework agreement with the Swedish governmental agency ’Kammarkollegiet’. The agreement concerns security systems consulting and includes delivery of risk analysis, planning and inspection for a number of public actors. ",
  },
  {
    title: (
      <span>
        190318 CONTRACT <b>ÖREBRO AIRPORT</b>
      </span>
    ),
    img: news7,
    content:
      "Swedish Net has won a procurement for changing of Constant Current Regulators (CCR) at Örebro Airport.",
  },
  {
    title: (
      <span>
        190315 CONTRACT <b>LYCKSELE AIRPORT</b>
      </span>
    ),
    img: news2,
    content:
      "Swedish Net has won a procurement for change of Localizer at the ariport in Lycksele.",
  },
  {
    title: (
      <span>
        190301 CONTRACT <b>SCANDINAVIAN MOUNTAINS AIRPORT</b>
      </span>
    ),
    img: news5,
    content:
      "Our work at the airport in Sälen continues, 70 percent of the contract is finished. We have full responsibility for engineering of systems and installation of the airport’s AGL, electrical power supply system and infrastructure for power and communication. Our contract is to be ready for inspection in August. ",
  },
  {
    title: (
      <span>
        190228 CONTRACT <b>AIRPORT SVEG</b>
      </span>
    ),
    img: news4,
    content:
      "Swedish Net has installed a new GP and DME for the airport in Sveg.",
  },
  {
    title: (
      <span>
        190114 CONSULTANCY SERVICES <b>SECURITY PLANNING AND ENGINEERING</b>
      </span>
    ),
    img: news3,
    content:
      "At the beginning of 2019, we continue to have a large number of assignments including planning and detailed design for governmental and private actors.",
  },
  {
    title: (
      <span>
        181205 CONTRACT <b>RONNEBY CIVILIAN/MILITARY AIRPORT </b>
      </span>
    ),
    img: news2,
    content:
      "Ronneby civilian/military has recevied new approach lighting masts and equipment for ILS. Swedish Net won the Swedish Defence Materiel Administration’s procurement earlier this year and now we have finished the contract.",
  },
  {
    title: (
      <span>
        181022 CONSULTANCY SERVICES <b>PROJECT MANAGEMENT </b>
      </span>
    ),
    img: news1,
    content:
      "Swedish Net has several project management assignments that run during the whole fall. All assignments includes work on facilities with high security requirements.",
  },
];

export const ARTICLES_SV = [
  {
    title: (
      <span>
        220201 <b>SWECO FÖRVÄRVAR SWEDISH NET ENGINEERING</b>
      </span>
    ),
    img: press_sv,
    content: (
      <>
        <p>
          Sweco Sverige AB har den 1 februari förvärvat samtliga aktier i
          Swedish Net Engineering AB, vårt teknikkonsultföretag i Swedish
          Net-koncernen.
          <br />
          Att Swedish Net Engineering går samman med Sweco är ett naturligt och
          viktigt steg för våra medarbetare och kunder. Det är positivt att
          Swedish Net Engineerings kunder nu får ta del av Swecos breda
          erbjudande och helhetsåtagande.
          <br />
          Försäljningen av Swedish Net Engineering gör att vi kan fokusera mer
          på våra övriga företag i koncernen som exempelvis Swedish Net Air &
          Defence där entreprenadverksamheten förväntas utvecklas kraftigt under
          de kommande åren.
          <br />
          Sweco planerar och utformar framtidens hållbara städer och samhällen.
          Med 17 500 medarbetare i norra Europa kan man alltid erbjuda rätt
          expertis för varje enskilt projekt. Sweco har en omsättning på cirka
          SEK 21 miljarder och är noterade på NASDAQ OMX Stockholm.
          <br />
          Vi ser fram emot ett fortsatt och långvarigt samarbete med Sweco inom
          vår entreprenadverksamhet.
          <br />
        </p>
        <p>
          <a href="/docs/press-release-2022-02-02.pdf" target="_blank">
            {" "}
            Här kan du läsa pressmeddelandet.
          </a>
        </p>
      </>
    ),
  },
  {
    title: (
      <span>
        211222 Uppdrag <b>OSCE</b>
      </span>
    ),
    img: ds,
    align: "top",
    url: "https://disarmamentsolutions.com/news",
    content: (
      <>
        <p>
          Swedish Net Air and Defence har tillsammans med sitt systerbolag
          Disarmament Solutions vunnit en internationell upphandling. Kontraktet
          som vunnits innefattar materialförsörjning av mindetektorer och annan
          sökutrustning till projektkoordinatorn för OSCE i Ukraina.
          Upphandlingen är tänkt att öka kapaciteten för att röja landminor och
          andra explosiva enheter, en nödvändig åtgärd för att kunna garantera
          trygghet och säkerhet för befolkningen. Utrustningen kommer att
          levereras under det första kvartalet 2022 och vi är stolta över att
          kunna bidra till OSCE's viktiga arbete i Ukraina.
          <br />
        </p>
        <p>Gott nytt år till alla våra samarbetspartners och kunder!</p>
      </>
    ),
  },
  {
    title: (
      <span>
        210820 REKRYTERING <b>NY FILM</b>
      </span>
    ),
    img: company,
    url: "https://www.youtube.com/watch?v=IkvH-PZt4ds",
    content:
      "Swedish Net Engineering AB rekryterar och har laddat upp ett filmklipp där vi berättar om vilka vi är och vad vi gör.",
  },
  {
    title: (
      <span>
        210819 KONSULTRAMVTAL{" "}
        <b>ADDA INKÖPSCENTRAL (TIDIGARE SKL KOMMENTUS INKÖPSCENTRAL)</b>
      </span>
    ),
    img: adda,
    content:
      "Swedish Net har tecknat ett avtal avseende projektering av säkerhetssystem och brandlarm mm. med Adda Inköpscentral. Avtalet avser rangordnad tilldelning där Swedish Net ligger först respektive tvåa på två olika teknikområden, avtalet avser även förnyad konkurrensutsättning på samtliga ramavtalsområden. Adda Inköpscentral är en central inköpsorganisation som alla kommuner, kommunala bolag och regioner kan avropa ifrån. I upphandlingen angavs 1163 avropsberättigade organisationer.",
  },
  {
    title: (
      <span>
        210420 RAMVTAL <b>FMV AMMUNITION-OCH MINRÖJNINGSUTRUSTNING</b>
      </span>
    ),
    img: demine,
    content:
      "Swedish Net ska stödja Försvarsmakten och FMV med expertstöd inom förmåga att röja minor, oexploderad ammunition och improviserade laddningar samt expertstöd inom sensorområdet kopplat mot militär söktjänst. Swedish Net ska även utbilda, utforma och göra utredningar inom området. Avtalet omfattar tillhandahållande av utrustning, exempelvis materiel avsedd för kriminalteknisk undersökning och skyddsutrustning inom ammunition och minröjningsverksamhet. Ramavtalet löper fram till 2024 med möjlighet till förlängning fram till 2027-12-31.",
  },
  {
    title: (
      <span>
        210319 KONSULTRAMVTAL <b>KRIMINALVÅRDEN</b>
      </span>
    ),
    img: kriminal,
    content: (
      <>
        Swedish Net vinner ramavtal med Kriminalvården. Kriminalvården hyr ca
        700 000 kvm lokaler till ett värde av ca 1,3 miljarder. Detta gör
        Kriminalvården till en av Sveriges största hyresgäster på den öppna
        marknaden. Kriminalvården förhyr samtliga lokaler men äger och förvaltar
        tele- och säkerhetssystemen. Lokalernas storlek, utformning och
        säkerhetsnivå varierar från kontorslokaler till anstalter och häkten.
        Generellt råder dock en hög säkerhetsnivå i samtliga lokaler.
        <br />
        Uppdraget innefattar projektering i pågående och kommande telesäkprojekt
        inom Kriminalvårdens samtliga verksamheter.
        <br />
        Första gången Swedish Net tecknade ramavtal med Kriminalvården var år
        2012.
      </>
    ),
  },

  {
    title: (
      <span>
        210311 UPPDRAG <b>FMV POINT</b>
      </span>
    ),
    img: point,
    content:
      "På uppdrag av Försvarsmakten tillhandahåller FMV POINT informationsportal, portalen innehåller styrande och vägledande information som ska användas i samband med arbeten med försvarets fasta tele- och informationstekniska anläggningar. Målgruppen för POINT är de som arbetar med projektering, installationer, vidmakthållande, drift, underhåll och avveckling. Swedish Net har fått det hedrande uppdraget att underhålla och utveckla detta omfattande system av projekterings- och installationsanvisningar.",
  },
  {
    title: (
      <span>
        210301 PROJEKT{" "}
        <b>
          FMV, INSTALLATION AV STYRSYSTEM FÖR FLYGPLATSLJUS MALMEN OCH VIDSEL
        </b>
      </span>
    ),
    img: malmen,
    content:
      "Swedish Net ska installera ADB Safegates styrsystem för flygplatsljus på flygplatserna Malmen och Vidsel. Malmens flygplats är belägen inom Linköpings kommun. Flygplatsområdet omfattar 455 hektar och ingår i Försvarsmakten som en flottiljflygplats. På flygplatsen Vidsel bedrivs prov av utrustning av såväl Flygvapnet som utländska flygförband. Provområdet, som är ett militärt skyddsobjekt, följer ungefär Udtja naturreservat och är 165 000 hektar.",
  },
  {
    title: (
      <span>
        200706 KONSULTRAMVTAL<b> SWEDAVIA, STOCKHOLM ARLANDA</b>
      </span>
    ),
    img: arlanda,
    content:
      "Swedish Net tecknar ramavtal med Swedavia avseende projektering av El, Tele, Data, Brandlarm mm. på Stockholm Arlanda. Avtalet avser förnyad konkurrensutsättning. Arlanda har tre banor och fyra terminaler, mer än 26 miljoner passagerare reser till respektive från flygplatsen per år, drygt 230 000 starter och landningar genomförs per år. Arlanda är ett av landets största skyddsobjekt och även riksgräns. Flygplatsen har genom åren varit mycket expansiv och nya projekt pågår där ständigt.",
  },
  {
    title: (
      <span>
        200318 KONSULTRAMVTAL <b>FÖRSVARETS MATERIELVERK</b>
      </span>
    ),
    img: news12,
    content:
      "Swedish Net har vunnit sitt största konsultramavtal till FMV och Försvarsmakten. Ramavtalet heter Garnisonsanläggningar 2.0 och innehåller enligt FMV:s uppskattningar 86 000 konsulttimmar per år, vilket motsvarar cirka 50 heltidstjänster. Avtalet avser projekteringsledning, teknisk kravställning, entreprenadsamordning och dokumentation gällande tekniska installationer på garnisonsanläggningar i hela Sverige. Swedish Net stärker därmed sin position som kvalificerad leverantör till det svenska försvaret.",
  },
  {
    title: (
      <span>
        190117 ENTREPRENAD <b>ÅRE ÖSTERSUND AIRPORT</b>
      </span>
    ),
    img: news11,
    content:
      "Swedish Net har vunnit en entreprenad för en större ombyggnation på Åre Östersund Airport. Ombyggnationen har till syfte att möjliggöra instrumentlandningssystem kategori 3. Entreprenaden ska utföras på Sveriges åttonde mest trafikerade civila flygplats, medan flygplatsen fortfarande är i drift. ",
  },
  {
    title: (
      <span>
        190920 ENTREPRENAD <b>SCANDINAVIAN MOUNTAINS AIRPORT</b>
      </span>
    ),
    img: news10,
    content:
      "Swedish Net har färdigställt och fått godkänd entreprenadbesiktning på alla sina entreprenader på den nya flygplatsen mellan Sälen och Trysil. Det återstår fortfarande ett begränsat antal tilläggsbeställningar.",
  },
  {
    title: (
      <span>
        190624 FLYGPLATSER <b>FILIAL NORGE</b>
      </span>
    ),
    img: news9,
    content:
      "Swedish Net expanderar inom flygplatssegmentet och startar filial i Norge för att leverera totalentreprenader för airside. ",
  },
  {
    title: (
      <span>
        190618 KONSULTRAMAVTAL <b>KAMMARKOLLEGIET</b>
      </span>
    ),
    img: news8,
    content:
      "Swedish Net har blivit rangordnad nummer 1 i ett konsultramavtal med Kammarkollegiet på området för säkerhetssystem. Avtalet omfattar utförande av riskanalys, projektering och besiktning hos organisationer anknutna till statens inköpscentral.",
  },
  {
    title: (
      <span>
        190318 ENTREPRENAD <b>ÖREBRO FLYGPLATS</b>
      </span>
    ),
    img: news7,
    content:
      "Swedish Net har vunnit upphandling för byte av konstantströmsregulatorer (CCR:er) på Örebro flygplats.",
  },
  {
    title: (
      <span>
        190315 ENTREPRENAD <b>LYCKSELE FLYGPLATS</b>
      </span>
    ),
    img: news2,
    content:
      "Swedish Net har vunnit upphandling för byte av kurssändare (Localizer) på flygplatsen i Lycksele.",
  },
  {
    title: (
      <span>
        190301 ENTREPRENAD <b>SCANDINAVIAN MOUNTAINS AIRPORT</b>
      </span>
    ),
    img: news5,
    content:
      "Vårt arbete på flygplatsen i Sälen fortsätter, 70 procent av entreprenaden är färdigställd. Swedish Net har funktionsansvar för flygplatsens ban- och inflygningsljus samt kraft- och reservkraftsystem. Vår entreprenad ska vara redo för besiktning i slutet av augusti. ",
  },
  {
    title: (
      <span>
        190228 ENTREPRENAD <b>FLYGPLATSEN I SVEG </b>
      </span>
    ),
    img: news4,
    content:
      "Swedish Net har installerat ny glidbanesändare (GP) och utrustning för avståndsmätning (DME) på flygplatsen i Sveg.",
  },
  {
    title: (
      <span>
        190114 KONSULTTJÄNSTER{" "}
        <b>SÄKERHETSPROJEKTERING OCH DETALJKONSTRUKTION</b>
      </span>
    ),
    img: news3,
    content:
      "I början av 2019 har vi ett  fortsatt stort inflöde på uppdrag inom säkerhetsprojektering och detaljkonstruktion åt statliga och privata aktörer.",
  },
  {
    title: (
      <span>
        181205 ENTREPRENAD <b>RONNEBYS CIVILA/MILITÄRA FLYGPLATS</b>
      </span>
    ),
    img: news2,
    content:
      "Ronnebys flygplats har fått nya inflygningsmaster och utrustning för ILS. Swedish Net vann upphandlingen från FMV tidigare i år och entreprenaden är nu genomförd.",
  },
  {
    title: (
      <span>
        181022 KONSULTTJÄNSTER <b>PROJEKTLEDNINGSUPPDRAG</b>
      </span>
    ),
    img: news1,
    content:
      "Swedish Net innehar flera projektledningsuppdrag som pågår under hela hösten. Samtliga uppdrag innebär arbete på anläggningar med högt ställda krav på säkerhet.",
  },
];
