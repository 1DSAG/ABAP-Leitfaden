---
layout: page
title: Design und Erstellung von ABAP Entwicklungen mit ABAP OO
permalink: /abap/software_design_of_object_structur/
parent: Moderne ABAP Entwicklung
nav_order: 3
---

{: .no_toc}
# Design und Erstellung von ABAP-Entwicklungen mit ABAP OO

1. TOC
{:toc}

## Moderne Geschäftsanwendungen erfordern moderne Softwareentwicklungsmethoden

Geschäftsanwendungen in der klassischen ABAP Entwicklung wurden oft mit Reports erstellt, die durch komplexe, prozedurale Kontrollstrukturen geprägt waren. Modularisierung erfolgte mittels Form-Routinen oder für Wiederverwendung mit Funktionsbausteinen. Bei guter Planung waren Funktionsgruppen nicht überladen, sondern für spezifische und zusammengehörige Funktionen gebildet. Mit der Anzahl der vorgenommenen Änderungen wurden diese Anwendung immer komplexer, fehleranfälliger und immer schwerer zu warten. 

Die moderne ABAP-Entwicklungswelt ist ungleich komplexer und heterogener geworden als sie es zu Zeiten vor S/4HANA war. An moderne Anwendungen werden heute hohe Anforderungen gestellt. Sie sollen flexibel, die Anforderungen bestens erfüllen, schnell umgesetzt werden und robust, performant und fehlerfrei im Betrieb laufen.

Schon seit vielen Jahren gibt es in ABAP die Möglichkeit objektorientiert zu programmieren. Auch wenn dies anfangs noch nicht erforderlich war, ist es heute einerseits technisch notwendig, wenn neue Möglichkeiten genutzt werden sollen, Andererseits bietet die Methodik der Objektorientierung sehr viele gute Ansätze Geschäftsanwendung so zu entwickeln, dass sie flexibel, wartbar, erweiterbar und robust umgesetzt werden. Und durch die Nutzung von ABAP-Unit und eines guten Designs, können zahlreiche Tests bereits als UNIT Tests abgedeckt werden womit das Testen durch den Endanwender auf die TEstung des Prozesses und der Funktion reduziert werden kann.

Die Objektorientierung und die zahlreichen Möglichkeiten des modernen ABAP können wir in diesem Leitfaden nicht abhandeln, möchten Ihnen aber bezüglich des Vorgehens ein paar Hineweise geben, die den Einstieg erleichtern und einen Überblick über Handlungsfelder geben, die schnell zu Verbesserungen führen können.

## Grundlagen und einfache Anwendung von Objektorientierung im ABAP Kontext

Das Thema Objektorientierung ist komplex und viele existierende Funktionalitäten in SAP folgen nicht den Designprinzipien der Objektorientierung, auch dann nicht wenn diese in Klassen implementiert sind. Für dieses Kapitel sollten Grundprinzipien der Objektorientierung bekannt sein.  
Wir möchten hier Hinweise und Tipps geben in sehr vereinfachter Form darstellen, wie man vorgehen kann um die Objektorientierung nutzbringend anzuwenden, die unsere Empfehlungen praxisorientiert untermauern. Mit dieser Hilfestellung ist der Einstieg und das Herausarbeiten von OO Patterns in der Entwicklung begonnen und kann mittels Kursen, Büchern und durch Unterstützung von Experten weiter ausgebaut werden.  

## Grundprinzipien der Objektorientierung (SOLID) - Übernahme von Lukas im Abschnitt Clean Code
.... pull after merge of PR ....


## Was ist eine ABAP-OO Klasse und wann ist es objektorientierte Entwicklung

eine Klasse bildet eine spezielle (Teil-)Aufgabe ab, die in überschaubaren Methoden implementiert wird.  
Eine ABAP-Klasse besteht aus Attributen, die Werte speichern können oder Konstanten sein können. Man kann auch Klassenspezifische Typen definieren. Es es gibt Methoden, die Funktionen implementieren und in Public, Protected und Private Methoden unterteilt sind. Darüber hinaus definieren Klassen weitergehende Eigenschaften wie Paketzugehörigkeit und die Art der Instanziierbarkeit und ggf. Vererbungsinformationen.
Oft werden ABAP-Klassen als eine moderne Form von Funktionsbausteinen betrachtet, dieser Vergleich wird den Möglichkeiten einer Klasse nicht gerecht.
Der Entscheidende Unterschied ist die Instanziierbarkeit, d.h. es können für Klassen mehrere Objekte im gleichen Programmkontext erzeugt werden. 
Bei einer Klasse, die nur statische Methoden beinhaltet und in der Verwendung nicht instanziiert wird, handelt es sich somit nicht bereits um vollumfängliche Objektorientierte Programmiermethodik.
Die wohlbekannten BAPI Funktionsbausteine haben teilweise sehr komplexe Parameterschnittstellen und sind sehr mächtig in der Funktionalität. Klassen sollten eher übersichtlich gestaltet werden und Methoden mit einer Länge von bis 150 Zeilen besitzen. Ebenso sollten die Klassen nicht zu viele Methoden besitzen. Die Größenbeschränkung zwingt dazu, Aufgaben in verschiedene Klassen zu delegieren. Damit sind die einzelnen Klassen weniger Komplex, die Komplexität verschiebt sich damit je nach Anwendung in das Klassengeflecht. Um hier nicht einfach eine Komplexitätsverschiebung zu erhalten, bedarf es guter Überlegung und eines entsprechenden Paketdesigns und guter Grobplanung der Anwendung. Dass während der Entwicklung Methoden und Attribute verschoben und umbenannt werden und Objekte umstrukturiert = Refactored werden gehört zum Softwareentwicklungsprozess dazu und Dank moderner Softwareentwicklungswerkzeuge in den ABAP-DEVELOPMENT TOOLS und zugehörigen AddOns einfach und sicher durchzuführen.

## 

>**Empfehlungen**  
* Erstellen Sie ein Konzeptdokument der zu erstellenden Klassen mit deren Aufgaben und deren Zusammenwirken.
* Übertragen Sie die Erstellung von Objektinstanzen bei kleinen Anwendungen den einzelnen Klassen mittels einer Factory Methode
* Verwenden Sie bei komplexeren Anwendungen mit mehreren Klassen eine Factory Klasse, die die Objektbeziehungen verwaltet 
* Teilen Sie die Teilfunktionalitäten in einzelne Klassen auf.
* Halten Sie die Schnittstellen klein und nutzen Sie die Factory für Übergabe wichtiger Daten
...
## Bitte mal checken ob so der Stil in die richtige Richtung geht ## 
{: .highlight}


## Vergleich Vorgehen prozedurale vs. objektorientierter Entwicklung
### Ablauf Prozedurale Entwicklung
Beim Umsetzen einer Anforderung z.B. in einem Report oder eines Funktionbausteins würde das Design gemäß der Spezifikation klassischerweise wie folgt sich gestalten
++ Übernahme der Eingangsdaten aus Import Parametern 
++ Lesen des Customizings aus der Datenbank (z.B. Z-Tabelle)
++ Lesen der Daten aus den Datenbanktabellen
++ Verarbeiten der Daten mit Loops, Read Tables und diversen IF-Endif Kontrollstrukturen:
++  z.B. Prüfen, Berechnen, sortieren, abmischen ...
++ Übergabe des Ergebnisses and Export Parameter
Damit wird die Anforderung in imperativer Form in Programmcode dargestellt, ggf. werden Teilfunktionen modularisiert.

### Ablauf bei Objektorientiertem Ansatz
Wenn die Anfordungen bekannt sind und analysiert wurden sollten die unterschiedlichen Aufgaben zuerst definiert und aufgabenspezifisch gruppiert werden. Anhand der Aufgaben können die Klassen und abgeleiteten sinnvollen Klassennamen definiert werden. Eine analog des oben beschriebenen könnte dann die OO Implementierung wie folgt aussehen

+ Definition Objekt zum Lesen und Auswerten des Customizings auf Basis Organisationsdaten = Customizing Objekt
+ Definition Objekt zum Lesen der Datenbank, ggf. je nach Komplexität Aufteilung nach Geschäftsobjekt = Datenobjekt(e).
+ Definition Objekt welches die Datenprüfungen und Validierungen durchführt = Check Objekt
+ Definition Objekt welches die Datenprozessierung durchführt und für die Erstellung des Ergebnisses zuständig ist.
+ Definition Objekt welches die Geschäftsfunktionalität abbildet und das Zusammenwirken der einzelnen Objekte orchestriert und Kontrolliert = Controller.
+ Hier empfiehlt sich die Erstellung einer Factory Klasse, die die einzelnen Objektinstanzen erzeugt und somit auch über eine Inkjektorklasse das Mocking einzelner Funktionen ermöglicht wird. Die Details zum ABAP UNIT und wie man Unit Tests erstellt finden Sie im Kapitel Testing(link)

Erstellung eines Konstruktors pro Klasse
Jedes Objekt sollte Factory methode haben und übergabe nötiger parameter über Konstruktur in die Klasse
Aufruf Factory methode aus Factory Klasse

Die Customizing Klasse kaann nun so gestaltet ewrden, dass in der Factory Methode die Customizing Tabelle geprüft wird und nur im Falle eines Eintrages eine Instanz an den Aufrufer übergeben werden. Um zu pr+fn pb eine Funktion aktiv ist reicht es zu orüfen ob die Instanz erzeugt wurde. Damit wird die Komplexität des Customizing verschalt werden. Einzelne PArameter des Customizings können in Attributen der Customizing Klasse vorgehalten werden und mittels getter bei Bedarf in den anderen Klassen abgefragt werden.
Da über die Faktory die Customizing Instanz dem Objektkonstrukt bekannt ist, und bei Bedarf in den Objekten als attribut die Customiuzing instanz abgelegt werden kann, ist es dann der Zugriff auf das Customizing standardisiert im Gesamten Konstrukt möglich. Dies bedeutet einen initialen Erstellungsaufwand, bei Änderungen bzw. Ergänzungen zahlt sich dies aber aus, da auf vorhandene Services zugegriffen werden kann, und keine fehleranfälltigen Coderedunzanzen erforderlich sind.
--- eigentlich voll cool --- muss aber noch knackiger beschreiben werden und ggf. klein Grafik

Die Erstellung der zahlreichen Objekte erscheint deutlich aufwändiger als der Top-Down Ansatz beim prozeduralen Vorgehen. Man gewinnt hier aber durch die Aufteilung eine deutlich höhere Flexibilität, da hier über die Schnittstellen eine klare Trennung der Aufgaben erfolgt (S - Separation of concerns). Durch die Nutzung der ADT kann viel Code durch Templates und Qwuickfixes erstellt werden wodurch sich der Mehraufwand sehr in Grenzen hält. Natürllich muss dass Vorgehen auch eingeübt werden um eine gewisse Entwicklungsperformanz zu entwickeln.



### Was wird hier geschrieben - notes 
* Was ist eine Klasse - * Eigenschaften einer guten Klasse - ANFANG GEmacht
* Wie werden Klassen instantiiert  -- dran 
* Aufteilung der Funktionen auf einzelne Klassen -- dabei
* Namenskonventionen ----
* Fehlerbehandlung mit Exceptions
* Delegieren statt vererben
* Nutzung von Interfaces



# Testbarkeit als Designprinzip - später
Wer UNTI Test methodik anwendet, schreibt die Tests, der Produktcode ist dann quasi automatisch da und viel besser da besser durchdacht.
...
Im klassischen ABAP-Umfeld besteht die Vorgehensweise klassischerweise darin, dass zeitnah eine Entwicklung durch die Entwickler bereitgestellt werden und sobald als möglich die Tests durch die Entwickler und die Fachabteilung erfolgt. Beim Auftreten eines Fehlers oder Defekts wird dann die Entwicklung korrigiert und weitere Anpassungen vorgenommen. Dies kann dann zu zahlreichen Zyklen von Entwicklung - Test - Korrektur - Test usw. führen. Tests einzelner Komponenten ist entweder schwierig oder bedingt durch die monolithische Anwendungsstruktur nicht möglich. Daher können hier auch nur vollständige Funktions- oder gar Prozesstests mit entsprechend hohem Aufwand durchgeführt werden. Dabei kann nicht ausgeschlossen werden, dass einige Fehler erst im Rahmen des Produktivbetriebes erkannt werden, da auf Testsystem weder die kompletten Prozessdaten vorhanden sind, weder die Masse an Transaktionen durchgeführt wird, noch die Varianz an Transaktionsausführung vorhanden ist. Daher sollte dieses Vorgehen vermieden werden.  
Moderne Softwareentwicklung bietet mittels moderner Softwarearchitektur das Testing in die frühe Phase der Softwareerstellung zu verschieben und Fehler frühzeitig zu finden.
Ziel einer modernen Anwendungsarchitektur ist es, eine Anwendung in kleine, abgrenzbare und testbare Komponenten aufzuteilen. Diese werden in entsprechenden Unterpaketen des Anwendungspaketes gekapselt. Da diese Komponenten kaum manuell testbar sind, ist hier UNIT Testing mit ABAP UNIT einzusetzen. Dies erfordert aber eine gute Strukturierung und weitere Hilfspakete, die Testfunktionalitäten bereitstellen.


Bei der modernen Entwicklungsmethodik werden potenzielle Fehler bereits in der Designphase betrachtet, das gewünschte Programmverhalten definiert und evtl. Problematiken im Vorfeld mit dem Anforderer besprochen.



{: .note }
SOLID: Beschreibung hat Lukas schon - kann ich hier rüberziehen !