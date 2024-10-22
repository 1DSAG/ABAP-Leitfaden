---
layout: page
title: Künstliche Intelligenz
permalink: /artificial-intelligence/
next_page_title: Künstliche Intelligenz
nav_order: 12
---

{: .no_toc}
# Künstliche Intelligenz

1. TOC
{:toc}


## KI in der Entwicklung

Aktuell ist das Thema AI ein Hypethema. Produkte/Lösungen wie ChatGPT,  Microsoft Copilot, Google GEMINI und SAP Joule werden überall diskutiert und finden in Lösungen ihre praktische Anwendung. Auch in der Softwareentwicklung werden diese Lösungen eingesetzt, sogar in der ABAP Entwicklung gibt es entsprechende AI Unterstützung, diese steckt zwar noch in den „Kinderschuhen“, aber es gibt diese schon, die Lösungen werden allerdings stetig weiterentwickelt, so dass diese bald aus den "Kinderschuhen" entwachsen werden.

Was hier in der Zukunft noch kommen wird ist sehr spannend und aktuell nicht vorhersehbar. In diesem Kapitel wollen wir allgemeine Hilfestellungen für eine Entscheidungsfindung für die Nutzung/Anwendung von AI Lösungen in der Softwareentwicklung geben. Wir wollen bewusst nicht die eine oder andere Softwarelösung vorstellen oder bewerten.

Generell lässt sich heute sagen, das KI in der Software-Entwicklung hilft, schneller und besser (sicherer) zu entwickeln (Code zu entwickeln). Die AI entwickelt sich hier rasant weiter, aber sie wird aktuell den menschlichen Entwickler noch nicht ersetzen können, sie kann aber diesen schon sehr gut unterstützen.

### Hilfestellungen für die Entscheidungsfindung

Folgende Fragestellungen können zu einer Entscheidungsfindung beitragen:
- Welche Sicherheitsanforderungen werden an die AI gestellt?
    - Private Space vs. Public Space
        - Private Space: AI Modelle und -Daten werden geschützt und sind vor unbefugtem Zugriff abgesichert
        - Public Space: AI-Systeme und -Daten sind für die breite Öffentlichkeit zugänglich wo ist hier die Datenhaltung - in der EU?
- Welche Modelle werden verwendet? 
    - LLM Large Language Model
    - ML Machine Learning 
    - Deep Learning
    - Neuronale Netze
    - Andere, wenn ja welche?
- Werden Third-Party AI Produkte verwendet, ja ja welche?
- Welche Datenbasis wurde/wird für das Trainieren verwendet?
- Werden eigene Unternehmensdaten für das Trainieren der Modelle verwendet?
    - Wie ist sichergestellt, dass die Daten „beim Unternehmen verbleiben“ und nicht weiterverwendet werden?
- Erfüllt die Lösung geltenden Regelungen/gesetzliche Vorgaben (z.B. EU AI Act, DSGVO/GDPR,  ...) 
- Wie ist die AI Lösung gemäß den [EU Kritikalitätsstufen](https://www.trail-ml.com/blog/eu-ai-act-how-risk-is-classified) (minimales/kein Risiko, Begrenzt, Hoch, Inakzeptabel) eingruppiert
- Wird sichergestellt dass die Lösung keine urheberrechtlich geschützen Daten oder Inhalte verwendet? Wie wird dies sichergestellt?
- Kann die Speicherung von Prompts deaktiviert werden? Wo werden die Prompts gespeichert?
- Hat das Unternehmen welches die Lösung entwickelt hat/vertreibt ein „AI-Ethik-Fundament“, Beispielhaft sei hier die SAP genannt „[KI Ethik Handbuch](https://www.sap.com/germany/products/artificial-intelligence/ai-ethics.html)“
- Was ist der Inhalt? Wie passt dieser auf die eigene Unternehmenskultur oder gar mit dem eigenen AI Ethik Fundament?

Neben den oben genannten Fragestellungen birgt der Einsatz von AI auch Themen-/Problemfelder wie man mit ethischen Bedenken der aus den Trainingsdaten übernommene „Voreingenommenheit“ von KI Modellen (Schlagwort ist hier AI BIAS) umgeht bzw. wie man diese begegnet/entgegnet? 

Oder auch Fragestellungen der Ergebnisüberprüfung durch „Sachkundige“ um algorithmische Verzerrungen („Halluzinationen“) zu erkennen. Hierzu sei auf das Ergebnis einer [Studie der Purdue University, West Lafayette, USA](https://dl.acm.org/doi/pdf/10.1145/3613904.3642596) im Rahmen der Konferenz CHI 2024 verwiesen, die zu dem Ergebnis kommt, dass  39% der Fehler im Ergebnis einer KI unerkannt geblieben sind, da die Fragen „höflich“ beantwortet wurden. Deshalb die Empfehlung die Ergebnisse sachlich und besonnen zu prüfen und zu validieren.

## Generative KI in der Entwicklung

Genereller Disclamer zu diesem Teilbereich: Aktuell (Juli 2024) sind die Tools der SAP im Bereich der AI Unterstützung in der ABAP Entwicklung noch nicht verfügbar, diese befinden sich in der Entwicklung. Deshalb kann hier nur über den aktuellen Entwicklungsstand und die darüber verfügbaren Informationen eine Einschätzung gegeben werden. Dies bitte immer berücksichtigen.

Aktueller Stand des Ansatzes der  AI Unterstützung im SAP Umfeld:

![SAP Business AI approach](./img/image-01.png)

Quelle SAP – DSAG Online Session 11.07.2024 – Einsatzszenarion von gen. AI in der modernen ABAP Entwicklung
{: .img-caption}

Zentrale Komponente ist“SAP Joule“, für die Integration der einzeln Modelle dient die „AI Foundation“ auf der BTP. Dies ist auch die Basis für die technische Verfügungstellung der AI Unterstützung für ABAP.

Geplant sind aktuell drei Bereiche der Unterstützung im ABAP Entwicklungsumfeld:

- Accelerate
    - Hier plant SAP aktuell 4 Anwendungsfälle
        - Generierung von RAP Business Objekten (BO‘s) und Services
        - Generierung von Unit-Tests für ABAP Klassen, CDS-Views und RAP BO‘s
        - Erläuterung/“Erklärung“ von bereits existierendem (legacy) code
        - Hilfe bei Code Snippets, Codeanalysen, Dokumentation, vorhanden Hilfsinhalte und Code Prognosen (prediction) 
- Transform
    - Unterstützung bei der Migration von kundeneigenem Code in ABAP Cloud. Eingebunden in die „ADT for Eclipse“ soll hier eine Migrationsunterstüzung erfolgen, ebenso soll eine Implementierung der AI im „ABAP Test Cockpit Cloud“ erfolgen. 
- Empower
    - Geplant ist hier, die Integration von AI Szenarien mit einem AI-SDK in kundeneigene Entwicklungen zu unterstützen

Ausblick auf die SAP Entwicklung und die geplante Roadmap (Stand Juli 2024)

![Roadmap](./img/image-02.png)

Aktuelle Roadmap
{: .img-caption}

![Einflussmöglichkeiten](./img/image-03.png)

Einflussmöglichkeiten
{: .img-caption}

## AI als Werkzeug bei Dokumentationserstellung

Bis sich AI im Alltag des ABAP Entwicklers dauerhaft und voll integriert wiederfindet, wird sicher noch einige Zeit vergehen. Allerdings kann AI bereits jetzt unterstützend ohne technische Integration sinnvoll im Entwickleralltag eingesetzt werden.

Ein Anwendungsszenario ist die unterstützende Erstellung der Dokumentation einer Eigenentwicklung. So können die aktuell verfügbaren Chat Bots vom Entwickler oder dem für die Entwicklung zuständigen Mitarbeiter verwendet werden um die technische Dokumentation der Anwendung zu erstellen. Dazu muss der generativen AI die Aufgabe (also das gewünschte Ergebnis: Erstelle eine technische Dokumentation), der Kontext und Zweck der Anwendung mitgeteilt werden. Für die technischen Details kann dann der Code der wichtigsten Klassen, die die Geschäftslogik enthält und ergänzende Informationen mitgegeben werden. Sind bereits erläuternde Informationen als Kommentar oder im besten Fall als ABAP Doc in der Entwicklung enthalten, kann dies von der genAI für die Dokumentation herangezogen werden.

Als erstes Ergebnis erhält man hier eine Beschreibung was die AI aus dem Code und den Informationen auswerten konnte. Hier wird schnell offensichtlich inwiefern der Code die gewünschte Logik erklärbar umsetzt und wo iterationen und manuelle Korrekturen und Ergänzungen notwendig sind.

Um eine ansprechende Dokumentation zu bekommen ist gutes Prompt Engineering erforderlich. Doch mit jeder Iteration kann man hier Erfahrung sammeln um bessere Ergebnisse zu erzielen.

Auch wenn die genAI hier nicht in wenigen Minuten die vollständige und direkt verwendbare Dokumentation erstellt, hilft dieser Prozess bei der Erstellung einer Entwurfsversion und erspart Tipparbeit. Beim Durchsehen wird schnell ersichtlich wo manuelle Nacharbeit erforderlich ist, Man bekommt sozusagen einen Diskussionspartner und erzielt am Ende ein besseres Ergebnis, da durch die Iteration mit der genAI logische Inkonsistenzen oder Unklarheiten beim Lesen erkannt werden.

Ob man am Ende schneller ist, kommt auf die Anwendung und die Beherrschung der AI an. Aber der schwierige Schritt des Anfangs ist deutlich einfacher und die gewonnene Zeit kann investiert werden eine qualitativ hochwertige Dokumentation zu erstellen.

Eine technische Integration entfällt, da die Schnittstelle der Mensch ist. Bei der Übertragung des Codes und Beschreibung der Anwendung im gen AI Prompt sind die Belange des Datenschutzes und ggf. eine Prüfung auf Vertraulichkeit der Anwendung zu berücksichtigen. 

Im Idealfall ist im Unternehmen eine genAI im Einsatz die diese Belange über eigene Tenants oder spezielle Verträge absichert.

## Weitere Hinweise

**Wichtig:** beim Review der Antworten, die Antworten „nüchtern“ prüfen (lt. Studie 39% der Fehler unerkannt geblieben, da Fragen „höflich“ beantwortet wurden): [Qualitätsmängel: Forscher warnen vor ChatGPT-Einsatz beim Programmieren](https://t3n.de/news/qualitaet-chatgpt-programmieren-1626510/)
