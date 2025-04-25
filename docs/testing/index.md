---
layout: page
title: Testen in SAP 
permalink: /testing/
has_children: true
nav_order: 5
---

{: .no_toc}
# Testen in SAP 

1. TOC
{:toc}


## Inhalt des Kapitels

Im Rahmen des ABAP-Leitfadens, der moderne ABAP Entwicklung zum Kerninhalt hat, behandeln wir in diesem Kapitel vorrangig das Thema von programmierten Tests mit ABAP-UNIT und was erforderlich ist, sowohl testbare Software im Generellen zu schreiben, aber auch wie ABAP-UNIT Tests gut geschrieben werden können und wie das Vorgehen zur Erstellung von Unit Tests ist.  
Des Weiteren geben wir Hinweise zu den Herausforderungen und erforderlichen Rahmenbedingungen.  
Ergänzend finden Sie noch ein paar Hinweise zu weiteren Testtools und Methoden, diese werden aber nur kurz angesprochen.  
Unter Unit Tests werden oft verschiedene Definitionen von Tests verstanden. Wenn wir hier von Unit Tests schreiben, handelt es sich um programmierte Tests mit dem ABAP-UNIT Framework, die automatisiert ausgeführt werden können.  
Die manuelle Ausführen einzelner Code Einheiten z.B. mittels SE37 / SE24 / Reports ist kein Testen, sondern das Ausprobieren von Funktionalitäten.  

## Zielgruppe

In diesem Kapitel möchten wir einerseits den Entscheidern und Verantwortlichen Empfehlungen und Hinweise geben, warum ABAP-UNIT Test für die heutige Form der modernen ABAP Programmierung sehr wichtig ist und welchen Nutzen Sie für dieses Investment erhalten können.  
Dieser Leitfaden dient aber auch Entwicklern und Entwicklungsverantwortlichen oder vgl. Rollen dazu, ABAP-UNIT Testing sinnvoll einzusetzen, oder falls es noch nicht umfangreich im Einsatz ist, den Einstieg zu erleichtern.  
Vielleicht hilft dieser Leitfaden auch dabei sowohl Entwickler als auch Entscheider zu motivieren, ABAP-UNIT Tests umfangreich im Entwicklungsprozess einzusetzen und die Rahmenbedingungen dafür zu schaffen.

## Motivation

Ein wichtiger Faktor in SAP-Projekten ist die zur Verfügung stehende Zeit. Und meistens herrscht hoher Zeitdruck wenn um die Erstellung von SAP-Anwendungen und Anpassungen geht. Die Erstellung von ABAP Unit Tests und die dazu erforderlichen softwaretechnischen Maßnahmen benötigen Zeit und Wissen. Hier entsteht ein Spannungsfeld da dies auf den ersten Blick Zielkonflikte aufwirft.

Der Mitbegründer des agilen Manifests und Buchautor mehrerer Bücher zur Softwareentwicklung, Robert C. Martin sagte: "The only way to go fast is, to go well."
Warum soll man Aufwand und Zeit in die Erstellung von Unit Tests investieren ?  
In ABAP Unit erfahrene Entwickler wissen dass die Erstellung von Software, die mit ABAP-UNIT Tests abgedeckt ist, neben der höheren Qualität auch Effizienz- und Geschwindigkeitsvorteile mit sich bringen. 
Wir möchten zu Beginn des Kapitels Ihnen die Vorteile aufzeigen und gehen im Weiteren dann auf die technischen Details ein.

**Vorteile die sich durch den Einsatz von Unit Tests ergeben:**

- Die Erstellung von Software, die mit Unit Tests unterlegt ist, beinhaltet, bedingt durch die erforderliche Massnahmen zur Testbarkeit, eine klare Struktur, die objektorientierten Designprinzipien folgt.
- Software, die ABAP-Unit Tests enthält hat aufgrund der architektonischen Erfordernisse wie Separation of Concerns eine bessere Struktur und Trennung der Belange (Fachliche Logik und technisches Coding). Damit ist die Software flexibler und besser anpassbar.
- Die Entwicklung enthält ein Sicherheitsnetz, dass von Entwicklern genutzt werden kann wenn Software weiterentwickelt wird.
- Fehler werden bereits während der Entwicklung auf dem Entwicklungssystem erkannt, dies spart Aufand in Integrations- und Anwendertest.
- Durch due erforderliche Erstellung der Testfälle und programmatische Testdatenerstellung, werden Unklarheiten in der Anforderungsspezifikation in einer frühen Phase der Entwicklung festgestellt.
- eine Testabdeckung durch Unit Test ermöglicht die ständige Verbesserung und das Refaktoring der Software was ein Aufbau von technischen Schulden vermeidet.
- Wissensverteilung in Team. Dies ermöglicht eine bessere Verteilung der Resourcen im Entwicklerteam wenn es für Themen mehrere Entwickler gibt.
- Die Unit Tests sind programmierte Spezifikation des Verhaltens. Damit können auch andere Entwickler an vorhandenem Code arbeiten.
- Sobald eine in der Produktion befindliche Anwendung erweitert oder angepasst werden muss, sind die Vorteile von ABAP-UNIT Tests feststellbar, da bereits während der Entwicklung über die Tests getestet werden kann und Fehler zum frühesten Zeitpunkt erkannt werden können und durch die Tests bereits Testdaten und technische Spezifikationen vorliegen, welches die Änderung/Erweiterung des Codes vereinfacht.

Die o.g. Punkte führen im Ergebnis dazu, dass der Testaufwand der Anwendung durch die Fachabteilung deutlich reduziert wird. Anpassungen und Erweiterungen der Anwendungen werden durch die Implementierung von Unit Tests deutlich vereinfacht und vor allem sicherer, da neue Fehler bereits durch die bestehenden Unit Tests während der Entwicklung der entdeckt werden und somit in den Anwendertests auf dem Testsystem auftreten. Dies sind vor allem Fehler in der Struktur oder Flüchtigkeitsfehler die unvermeidlich sind.  

Neben den generellen Vorteilen die sich positiv auf den Aufwand und die Organisation auswirken, bringt der Einsatz von Unit Tests aber auch Vorteile für den Entwickler, der zuerst Aufwand und Energie in die Erstellung von Unit Tests stecken muss und ggf. auch deswegen gegen Widerstände ankämpfen muss.

**Vorteile für den Entwickler:**

- Durch die Notwendigkeit Testdaten zu programmieren, erhält der Entwickler gute Einblicke in die zu verarbeitenden Daten und bekommt damit auch verwertbare Informationen über die zu erstellende Anwendung die helfen, die Anforderungen besser zu verstehen und damit besser umzusetzen.
- Um Tests zu implementieren muss von Grund auf eine gute Struktur erstellt werden. Dies verhindert die Erstellung von Code der verschiedene Belange vermischt und spätere Anpassungen erschwert.
- Sobald die ersten Tests geschrieben sind, können auf dem Entwicklungssystem die Komponenten der Anwendung ausgeführt und debugged werden und damit auch wertvolle Hinweise über das Laufzeitverhalten frühzeitig ermittelt werden und Fehlannahmen vermieden werden, die sonst aufwändig behoben werden müssten.
- Der initiale Mehraufwand wird durch spätere Effizienzgewinne ausgeglichen. Verbunden damit, dass der Entwickler über UNIT TEST abgesicherte Software bessere Qualität liefert, schneller funktionierende Software auf den Testsystemen zur Verfügung gestellt werden kann und weniger Fehler in späteren Testphasen auftreten, verringert sich der Gesamtaufwand, es gibt weniger Testzyklen und dies steigert letztlich die Zufriedenheit sowohl auf Entwicklungs- als auch auf Anwenderseite.

## Einleitung Testing => Voraussetzungen + Rahmenbedingungen

### Mangelndes Wissen und Qualifikation



----- kommt weg -----------
* das hier müssen wir umdrehen -----
Auch im Jahr 2025 bleibt die Herausforderung für Unternehmen bestehen, dass der großteil der SAP Entwickler nur über eine lückenhafte bis nicht vorhandene Ausbildung und Erfahrung im Bereich der automatisierten Softwaretest hat.  
Dies hat eine Vielzahl von Gründen, die vor allem in der Nachfragesituation von SAP Projektkunden liegen. Eine große Anzahl an Fachkräften wird in Beratungsfirmen ausgebildet, diese Fähigkeiten von Kunden nicht nachgefragt sind.  
In vielen extern besetzten Projekten wird durch den hohen Erfolgs- und Zeitdruck auf die vermeintlich optionale Möglichkeit Software durch automatische Tests zu stabilisieren und zu verifizieren verzichtet. Kunden wünsche automatische Tests meist nicht, da sie davon ausgehen, dass diese nicht zu einer Verkürzung der Gesamtentwicklungsdauer beitragen werden. Beratungsfirmen fördern aufgrund der mangelnden Nachfrage diese Fähigkeiten der Entwickler kaum. 
Vielmehr ist es leider teilweise so das Entwickler, die aus eigenem Antrieb / Qualitätbewusstsein oder um sich selber mittelfristig ein Sicherheitsnetz zu erstellen, Unit tests schreiben, somit gegen projektregeln verstoßen und mit Problemen rechnen müssen.

Damit sich Unit Tests in ABAP weiter durchsetzen ist hier in Umdenken aus dem Projektmanagement und bei den Verantwotlichen für den Betrieb von Software nötig.

Erst wenn dies in den Organisationen angekommen ist, dass der vermeintliche zusätzliche Aufwand für unit test code kein zusätzlicher Aufwand ist, sondern nur eine Verlagerung der Tätigkeiten vom Fehlersuchen, manuellen Daten erstellen, Testen, hin zur Programmierung, wird es nachhaltig dazu kommen, dass Unit-Test flächendeckend eingesetzt werden. 
Hier sollten wir uns aus dem Bereich SAP vorbilder aus anderen erfolgreichen Unternehmen suchen.

Unit-tests und das Wissen dazu muss sich zu einem geforderten und geprüften Skill etablieren. Für einen ABAP-Entwickler muss analog zu anderen unabdingbaren bauteilen gehören unittests zu erstellen, zu pflegen und weiter zu entwickeln.
----

>Empfehlungen:
- Die Trennung der Belange wié Datenbankzugriffe und SAP-Aufruf sind essentiel für die Unit Testerstellung
- Trennen Sie sauber die verschiedenen Belange
- Verpflichten Sie die Entwickler zur erstellung von Unit tests - sind nicht optioneal DoD. fordern Sie eine 
{: .highlight}