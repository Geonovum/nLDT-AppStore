# nLDT-AppStore
nLDT App Store beschrijving

## Respec Document

Het respec document is te vinden op: [https://geonovum.github.io/nLDT-AppStore/](https://geonovum.github.io/nLDT-AppStore/)

### English

The English version of the NLDT Architecture can be found here: [https://geonovum.github.io/nLDT-AppStore/en/](https://geonovum.github.io/nLDT-AppStore/en/)

## Recipe

Het recept is een niet-bestaand voorbeeld en de gebruikte namen zijn louter illustratief,

```mermaid
  graph LR;
    Weather-->Public-Transportation;
    Weather-->Mobility;
    Mobility-->Communication
```


## Sequence diagram

De uitvoering is van een niet-bestaand recept voorbeeld (zie boven) en de gebruikte namen zijn louter illustratief,

```mermaid
sequenceDiagram
    participant John
    participant AppStore
    participant Oven
    participant N&S
    participant Tygron
    participant Goudappel
    participant Clappform
    participant Data
  
    John->>AppStore:Find recipe
    AppStore->>John:Recipe
    John-)Oven:bake met parameters
    Oven->>Oven: traverse graph
    Oven-)N&S:execute process
    N&S->>Data:get data
    Data->>N&S: data
    N&S->>N&S: compute
    N&S--)Oven: success, results
    Oven-)Tygron:execure process
    Tygron->>Data:get data
    Data->>Tygron: data
    Tygron->>Tygron: compute
    Tygron--)Oven: success, results

    Oven-)Goudappel:execure process
    Goudappel->>Data:get data
    Data->>Goudappel: data
    Goudappel->>Goudappel: compute
    Goudappel--)Oven: success, results

    Oven-)Clappform:execure process
    Clappform->>Data:get data
    Data->>Clappform: data
    Clappform->>Clappform: compute
    Clappform--)Oven: success, results

    Oven->>Oven: await results
    Oven--)John: results    
```
