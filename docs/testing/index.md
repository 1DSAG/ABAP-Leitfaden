---
layout: page
title: Testen
permalink: /testing/
next_page_title: ABAP Unit Framework
next_page_link: /testing/abap_unit/
has_children: true
nav_order: 8
---

{: .no_toc}
# Testen

1. TOC
{:toc}


## Zielgruppe
- Management auch relevant
    - return on Invest 
- Hauptzielgruppe Lead / Senior-Entwickler, die motiviert sind 
    - Hilfe zur Selbsthilfe / Lernen
- Rechtfertigen als Quelle nutzen 
- Teständerung


# Abschnittstruktur: 
## Abgrenzungen 
o Was betrachten wir nicht. 
o Am Ende schreiben 
## ABAP Unit Test
    o Einstieg
    § Motivation, Benefits aufzeigen
    § Nötige Skills
    · Gutes ABAP OO design ist Grundlage 
    o	ABAP OO 
    o Unit test erfordern einen höheren Level an OO-Skills 
    · Beispiel RFC Funktionsbaustein, mit OO versorgen.
    · 
    § ABAP Unit Tests sind nicht optional.
    · Definition of Done erweitern und unit tests mit aufnehmen
    · Kultur einhalten
    o Beispiele für sinnvoll.
    · Test leiden immer unter (Projekt-)Zeitdruck 
    · 
    o Grundsätzlich ist fasst alles mit ABAP Unit testbar! 
    § NO excuses. 
    o Experten Themen 
    § Unittest / Infrastruktur ausbauen um Aufwand für neue Tests zu verringern. 
## Testunterstützung:
o Ecatt? 
§ Wohl nicht mehr relevant
o TestdatenContainer Ecatt für Testdaten 
§ Nutzen für CDS /DB Mocks
o Andere TestFriends:
§ Dynamische Logpoints => ABAP Kaptiel, ADT Leitfaden,  Link 
§ End2End Trace Cross Trace  …
§ https://github.com/dominikpanzer/cacamber-BDD-for-ABAP
§ ATC &  Transportintegration
o 
## Empfehlungen für Test-Tools
o Marco Krapf 
o Cloud ALM
§ Marco Krapf 
§ ?Automatische Prozesstests mit CloudALM? 
· Geht das ? 
§ Stand Sept 2024 laut Marco noch nicht gut nutzbar. ( freundlich formulieren ) 
o Tricentris: https://www.tricentis.com/de/sap
§ Hat erst mal mit ABAP-Entwicklung wenig zu tun, also da wäre nix zu beaachten, aber als allgemeines Tool, um Software zu testen
