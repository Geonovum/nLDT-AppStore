# Interoperabiliteit van de Digitale Tweelingen

De App Store van Apple of de Play Store van Google kunnen enkel werken omdat het ecosysteem sterk gedefinieerd—Apple en Google zijn markt reuzen en kunnen het ecosysteem opleggen. Interoperabiliteit wordt hier bereikt door oplegging—en helaas kunnen de 2 grootste ecosystem niet samenwerken!
Dat willen we niet in het ecosysteem van Digitale Tweelingen, we willen dat meerdere en verschillende Digitale Tweelingen kunnen samenwerken.
Architecturen volgen het principe van “seperation of concern”: er is geen vermenging van de 3 elementen: data wordt niet vermengt met visialisatie, data niet vermengt met rekenmodellen etc.

## Architectuur en Governance voor Digitale Interoperabiliteit

Interoperabiliteit tussen platforms, met name in een federaal Digital Twin (DT) ecosysteem zoals een App Store of Data Space, vereist een sterke en gecoördineerde reeks architecturale principes en governance-afspraken.
Hieronder worden de essentiële architecturale en governance-afspraken beschreven die nodig zijn voor interoperabiliteit tussen platforms, gebaseerd op de verstrekte bronnen:

### Architecturale Vereisten voor Interoperabiliteit

De architectonische basis van een DT-ecosysteem moet gebaseerd zijn op losse koppeling (loose coupling). Componenten moeten onafhankelijk kunnen functioneren en uitsluitend communiceren via duidelijke en gestandaardiseerde interfaces.
#### Standaardisatie en Semantiek
De verplichte adoptie van open, internationale standaarden is ononderhandelbaar om vendor lock-in te vermijden:
1. Open API’s en API-First Principe: Alle componenten moeten communiceren via gestandaardiseerde en gedocumenteerde API's. Dit bevordert naadloze integratie van zowel Commercial Off The Shelf (COTS)-oplossingen als custom-built modules. Apps en individuele functionaliteiten moeten via een beschreven (open) API beschikbaar worden gesteld voor hergebruik.
1. Cloud-Native Principes: De infrastructuur moet gebaseerd zijn op fundamentele Cloud-Native principes, waarbij DT-functies worden ontwikkeld als onafhankelijke, gecontaineriseerde componenten (microservices). Dit ondersteunt de flexibiliteit en losse koppeling die cruciaal zijn voor interoperabiliteit.
#### Data Fundament
1. Data en Apps Scheiden: Een fundamenteel principe is het strikt scheiden van data en applicaties. De data blijft bij de bron en moet via open (streaming) standaarden beschikbaar worden gesteld aan apps. Apps halen alle data op bij de bron en stellen eventuele resultaten ook weer als gestandaardiseerde data beschikbaar.
1. Metadata: Alle data moet gestructureerd beschreven (metadata) en gepubliceerd worden. Een minimale metadata set is essentieel (bijv. metadatering, API type, dataproduct beschrijving).
1. Data Soevereiniteit: Alle data moet binnen de Europese Unie worden opgeslagen.

### Governance- en Regelgevingsafspraken

Governance is het fundament dat vertrouwen, soevereiniteit en wettelijke naleving garandeert, wat essentieel is voor succesvolle interoperabiliteit.

Alle data en rekenmodules voldoen aan wetgeving. In de grijze zone is er een governance board

#### Wettelijke Compliance en Vertrouwen
1. Data Governance Act (DGA): De DGA is een kernpijler die het vertrouwen in data-uitwisseling moet vergroten. Governance moet maatregelen bevatten om te zorgen dat het platform fungeert als een betrouwbare Data-Intermediair.
1. GDPR en Privacy: Naleving van de Algemene Verordening Gegevensbescherming (GDPR) is een fundamentele ontwerpeis. Dit vereist Data Protection by Design and by Default, inclusief anonimisering en pseudonymisering om de risico’s bij datadeling te verminderen.

#### Beheer van Toegang en Vertrouwen
1. Zero Trust Architectuur (ZTA): Gezien het losgekoppelde en gedistribueerde ecosysteem is een ZTA essentieel. ZTA werkt volgens het principe van "never trust, always verify" en zorgt voor continue validatie van elke toegangsaanvraag en het Principe van Least Privilege.
1. Identity and Access Management (IAM): Robuuste IAM-services zijn nodig om datasoevereiniteit te waarborgen. Platforms moeten aansluiten bij de centrale IAM teneinde een zo naadloos mogelijke gebruikerservaring te realiseren. Inconsistenties in IAM zijn een risico voor de interoperabiliteit.

#### Organisatie en Kwaliteitsborging
1. Verantwoordelijkheden: Er moeten duidelijke afspraken zijn over wie waarvoor verantwoordelijk is, met name met betrekking tot data-eigenaarschap, labeltoekenning, validatie en exploitatie. Onheldere verantwoordelijkheidstoedeling kan leiden tot vertraging of lock-in.
1. Kaders en Labels: Er moeten labels (bijvoorbeeld lokaal, provinciaal, regionaal) worden geïntroduceerd, gekoppeld aan interoperabiliteitsarrangementen en spelregels (API-eisen, datakwaliteit, producttype).
1. Validatie: Er moet een validatiestap zijn bij publicatie (zoals linting) met feedback richting de leverancier. Daarnaast moeten er conformance & testing suites worden ontwikkeld om de technische interoperabiliteit te valideren en het vertrouwen te vergroten, door te controleren of componenten voldoen aan de vastgestelde standaarden.
1. Beheer van Modellen: Een Model Registry en versiebeheer zijn noodzakelijk om een stabiele basisversie van contextschema's te onderhouden en de evolutie van schema's te beheren via gefaseerde, achterwaarts compatibele deprecatietrajecten.

## Europeese Interoperabiliteits Framework

Het **European Interoperability Framework (EIF)** is een beleidskader dat EU-lidstaten ondersteunt bij het naadloos uitwisselen van informatie en diensten over lands- en organisatiedomeinen heen. Het richt zich op het toegankelijk en efficiënt laten samenwerken van overheidsinstanties, zodat burgers en bedrijven kunnen profiteren van betere, coherente en grensoverschrijdende digitale diensten. Het EIF definieert daarvoor gemeenschappelijke principes, richtlijnen en aanbevelingen die helpen om barrières in systemen, processen en regelgeving te doorbreken.
Het framework onderscheidt verschillende niveaus van interoperabiliteit: **technisch, semantisch, organisatorisch en juridisch**. Deze niveaus zorgen ervoor dat niet alleen de technische systemen kunnen communiceren, maar ook dat gegevens dezelfde betekenis hebben, processen op elkaar zijn afgestemd en regelgeving compatibel is. Zo voorkomt het EIF dat samenwerking stokt door verschillende interpretaties van data, uiteenlopende werkafspraken of conflicterende wetgeving.

Daarnaast benadrukt het EIF het belang van open standaarden, herbruikbare bouwstenen en een “once-only”-benadering, waarbij gegevens slechts één keer hoeven te worden aangeleverd en vervolgens veilig kunnen worden hergebruikt. Het framework stimuleert daarmee efficiëntie, transparantie en innovatie binnen de Europese digitale overheid. Door de richtlijnen van het EIF te volgen, kunnen organisaties niet alleen hun interne processen verbeteren, maar ook bijdragen aan een sterkere, geïntegreerde digitale Europese markt.

### Legal interoperability
Bla bla
### Organisational interoperability
Bla bla
### Semantic interoperability
Bla bla
### Technical interoperability
Bla bla
