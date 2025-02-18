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

Schon seit vielen Jahren gibt es in ABAP die Möglichkeit objektorientiert zu programmieren. Auch wenn dies anfangs noch nicht erforderlich war, ist es heute einerseits technisch notwendig, wenn neue Möglichkeiten genutzt werden sollen, andererseits bietet die Methodik der Objektorientierung sehr viele gute Ansätze Geschäftsanwendung so zu entwickeln, dass sie flexibel, wartbar, erweiterbar und robust umgesetzt werden können. Und durch die Nutzung von ABAP-Unit und eines guten Designs, können zahlreiche Tests bereits als UNIT Tests abgedeckt werden womit das Testen durch den Endanwender auf die Testung des Prozesses und der Funktion reduziert werden kann.

Und obwohl die oben genannten Nachteile der prozeduralen und Vorteile der Objektorientierten Programmierung bekannt sind, werden auch in aktuellen Projekten weiterhin Funktionalitäten nicht objektorientiert umgesetzt bzw. nicht das volle Potenzial moderner Entwicklungsmethoden genutzt. Dies können z.B. Programme sein, die prozedural implementiert werden, Klassen die objektorientierte Prinzipien nicht umsetzen oder Implementierung von Funktionsbausteinen oder direkte Implementierung von komplexen Code in BAdI-Implementierung direkt ohne weitere Strukturierung 

>**Empfehlungen**  
***Fordern Sie bei allen Entwicklungen die Umsetzung in ABAP Objects ein:***
- Sämtlicher Code ist in ABAP Klassen unter Einhaltung Objektorientierter Prinzipien zu erstellen
- Bei der Erfordernis der Implementierung von Reports, Funktionsbausteinen oder Form Routinen in Formularen sind diese als Wrapper zu sehen und die Logik ist in Klassen zu implementieren, deren Methode(n) in diesen Objekttypen aufgerufen werden. 
- Trennen Sie die unterschiedlichen Belange der Geschäftsanwendungen in Klassen auf (z.B. Controller Klasse, Datenzugriff, Geschäftslogiken, Prüfungen etc.)
- Fordern Sie vor der Implementierung ein Konzeptdokument des Entwicklers ein, in dem die Umsetzung beschrieben wird (s. auch Kapitel [**Dokumentation**](/ABAP-Leitfaden/documentation/index)).
{: .highlight}


Die Objektorientierung und die zahlreichen Möglichkeiten des modernen ABAP können wir in diesem Leitfaden nicht abhandeln, möchten Ihnen aber bezüglich des Vorgehens ein paar Hinweise geben, die den Einstieg erleichtern und einen Überblick über Handlungsfelder geben, die schnell zu Verbesserungen führen können.

## Grundlagen und einfache Anwendung von Objektorientierung im ABAP Kontext

Das Thema Objektorientierung ist komplex und viele existierende Funktionalitäten in SAP folgen nicht den Designprinzipien der Objektorientierung, auch dann nicht wenn diese in Klassen implementiert sind. Für dieses Kapitel sollten Grundprinzipien der Objektorientierung bekannt sein.  
Wir möchten hier Hinweise und Tipps geben in sehr vereinfachter Form darstellen, wie man vorgehen kann um die Objektorientierung nutzbringend anzuwenden, die unsere Empfehlungen praxisorientiert untermauern. Mit dieser Hilfestellung ist der Einstieg und das Herausarbeiten von OO Patterns in der Entwicklung begonnen und kann mittels Kursen, Büchern und durch Unterstützung von Experten weiter ausgebaut werden.  

## Was ist eine ABAP-OO Klasse und wann ist es objektorientierte Entwicklung

Eine Klasse bildet eine spezielle (Teil-)Aufgabe ab, die in überschaubaren Methoden implementiert wird.  
Eine ABAP-Klasse besteht aus Attributen, die Werte speichern können oder Konstanten sein können. 
Es es gibt Methoden, die Funktionen implementieren und in *Public*, *Protected* und *Private* Methoden unterteilt sind. Man kann auch Klassenspezifische Typen definieren, die in der Klasse aber auch von Aufrufern verwendet werden können (wenn in Public Section definiert).    
Darüber hinaus definieren Klassen weitergehende Eigenschaften wie Paketzugehörigkeit und die Art der Instanziierbarkeit und ggf. Vererbungsinformationen.  
Oft werden ABAP-Klassen als eine moderne Form von Funktionsbausteinen betrachtet, dieser Vergleich wird den Möglichkeiten einer Klasse nicht gerecht.
Der Entscheidende Unterschied ist die Instanziierbarkeit, d.h. es können für Klassen mehrere Objekte im gleichen Programmkontext erzeugt werden.   
Bei einer Klasse, die nur statische Methoden beinhaltet und in der Verwendung nicht instanziiert wird, handelt es sich somit nicht bereits um vollumfängliche Objektorientierte Programmiermethodik.  
Klassen sollten eher übersichtlich gestaltet werden und Methoden mit einer Länge von bis max ~150 Zeilen besitzen. Ebenso sollten die Klassen nicht zu viele Methoden besitzen. Die Größenbeschränkung zwingt dazu, Aufgaben in verschiedene Klassen zu delegieren. Damit sind die einzelnen Klassen weniger Komplex, die Komplexität verschiebt sich damit je nach Anwendung in das Klassengeflecht und dem Zusammenspiel der einzelnen Klassen.  Dieses Zusammenspiel und die übergeordnete Logik wird in einem **Controller** gebündelt.  
Um hier nicht einfach eine Komplexitätsverschiebung zu erhalten, bedarf es guter Überlegung und eines entsprechenden Paketdesigns und guter Grobplanung der Anwendung. 
Dass während der Entwicklung Methoden und Attribute verschoben und umbenannt werden und Objekte umstrukturiert = Refactored werden, gehört zum Softwareentwicklungsprozess dazu und ist Dank moderner Softwareentwicklungswerkzeuge in den ABAP-DEVELOPMENT TOOLS und zugehörigen AddOns einfach und sicher durchzuführen.

Weitere Erkennnungsmerkmale einer Klasse, die objektorientierten Prinzipien folgt sind:
+ Größe der Klasse - ein zu große Klasse zeigt vermutlich auf dass das Single Responsibility Prinzip verletzt wurde 
+ Größe der Methoden - zu große Methoden weisen auf Strukturdefizite und redundanten Code hin
+ Umfangreiche Parameterschnittstellen - Objekte arbeiten mit Objekten und nicht mit Parametern, dies geht meistens mit zu großen Methoden einher
+ .... any other - to be discussed.
 

## Grundprinzipien der Objektorientierung (SOLID)
Beim Einstieg in ABAP Objects geschieht es schnell, dass aus einer Funktionsgruppe mit mehreren Funktionsbausteinen einfach eine Klasse mit mehreren statischen Methoden wird. So können jedoch die Vorteile der Objektorientierung nicht genutzt werden. Die Nutzung von statischen Methoden verhindert etwa, dass Abhängigkeiten in Unit Tests durch Mocks ersetzt werden können. [Mehr Informationen dazu im Clean ABAP-Guide](https://github.com/SAP/styleguides/blob/main/clean-abap/CleanABAP.md#prefer-objects-to-static-classes).

Ein Hilfsmittel für objektorientierte Entwürfe sind die SOLID-Prinzipien. Jeder Buchstabe gibt ein Prinzip für objektorientierte Entwicklung vor. Hier geben wir
nur eine kurze Übersicht der Prinzipien, eine ausführliche Erklärung findet sich z.B. [im Blog von Uncle Bob](https://blog.cleancoder.com/uncle-bob/2020/10/18/Solid-Relevance.html), dem Autor von Clean Code.

<dl>
  <dt>Single Responsibility Principle</dt>
  <dd>
    Eine Codeeinheit (Klasse, Methode, ...) sollte immer einen Zweck und damit einen Grund für Anpassungen haben. Eine Methode, die etwa
    Customizing-Einträge liest, anhand derer Daten aufbereitet, und anschließend ein Formular ausgibt, hat drei Zwecke und auch mögliche Gründe für
    Anpassungen (nämlich immer, wenn sich etwas an Customizing/Daten/Formular) ändern soll. Diese Methode sollte also aufgeteilt werden.
  </dd>

  <dt>Open/Closed Principle</dt>
  <dd>
    Ein Modul sollte offen für Erweiterungen und geschlossen für Veränderungen sein. Das heißt, das Anpassungen vorgenommen werden können, ohne
    dazu z.B. die ursprünglich genutzte Klasse zu bearbeiten. Eine Klasse `Drucker`, die etwa im Konstruktor die zu druckenden Daten beschafft, kann
    ohne Anpassung des ursprünglichen Codes nichts anderes drucken. Bekommt diese Klasse hingegen eine Instanz des Interfaces `Datenbeschaffung` im
    Konstruktor übergeben und ruft passende Methoden dieser auf, kann zur Anpassung einfach eine zweite Datenbeschaffungsklasse entwickelt werden.
  </dd>

  <dt>Liskov Substitution Principle</dt>
  <dd>
    Code, der mit einer Klasse oder einem Interface arbeitet, sollte immer mit implementierenden oder erbenden Klassen funktionieren. Eine erbende Klasse
    sollte also beispielsweise nicht in einer der implementierten Methoden eine unerwartete Exception werfen und somit einen Dump auslösen.
  </dd>

  <dt>Interface Segregation Principle</dt>
  <dd>
    Interfaces sollten so aufgeteilt sein, dass Nutzer nur notwendige Abhängigkeiten erhalten. Eine Datenbankzugriffsklasse, die in einer Anwendung
    verwendete Daten lesen und schreiben kann, könnte etwa ein Interface `Datenleser` und ein Interface `Datenschreiber` implementieren, so dass
    nur lesende Nutzer keine Abhängigkeit zu schreibenden Methoden haben.
  </dd>

  <dt>Dependency Inversion Principle</dt>
  <dd>
    Abhängigkeiten wie z.B. die Instanz einer Klasse, die das Interface `Datenbeschaffung` implementiert, sollten nicht durch eine verwendende Klasse `Anzeiger`
    erzeugt werden, sondern dieser stattdessen im Konstruktor oder einer Methode übergeben werden. So kann für den Test von `Anzeiger` einfach eine andere
    Implementierung für die Datenbeschaffung übergeben werden.
  </dd>
</dl>

>**Empfehlungen**  
* Erstellen Sie ein Konzeptdokument der zu erstellenden Klassen mit deren Aufgaben und deren Zusammenwirken.
* Übertragen Sie die Erstellung von Objektinstanzen bei kleinen Anwendungen den einzelnen Klassen mittels einer Factory Methode
* Verwenden Sie bei komplexeren Anwendungen mit mehreren Klassen eine Factory Klasse, die die Objektbeziehungen verwaltet 
* Teilen Sie die Teilfunktionalitäten in einzelne Klassen auf.
* Halten Sie die Schnittstellen klein und nutzen Sie die Factory für Übergabe wichtiger Daten
* Achten Sie auf die Anwendung der Solid Prinzipien
... **Bitte mal checken ob so der Stil in die richtige Richtung geht**
{: .highlight}

## Vergleich Vorgehen prozedurale vs. objektorientierter Entwicklung
### Ablauf Prozedurale Entwicklung
Beim Umsetzen einer Anforderung z.B. in einem Report oder eines Funktionbausteins würde das Design gemäß der Spezifikation klassischerweise wie folgt sich gestalten
+ Übernahme der Eingangsdaten aus Import Parametern 
+ Lesen des Customizings aus der Datenbank (z.B. Z-Tabelle)
+ Lesen der Daten aus den Datenbanktabellen
+ Verarbeiten der Daten mit Loops, Read Tables und diversen IF-Endif Kontrollstrukturen:  z.B. Prüfen, Berechnen, sortieren, abmischen ...
+ Übergabe des Ergebnisses and Export Parameter
Damit wird die Anforderung in imperativer Form in Programmcode dargestellt, ggf. werden Teilfunktionen modularisiert.

### Ablauf bei Objektorientiertem Ansatz
Wenn die Anforderungen bekannt sind und analysiert wurden, sind zuerst die unterschiedlichen Aufgaben zu definieren und zu gruppieren. Anhand der Aufgaben können die Klassen und abgeleiteten sinnvollen Klassennamen definiert werden. Basierend auf diesem Vorgehen kann die OO Implementierung wie folgt aussehen:

+ Definition Objekt zum Lesen und Auswerten des Customizings auf Basis Organisationsdaten = **Customizing Objekt**
+ Definition Objekt zum Lesen der Datenbank, ggf. je nach Komplexität Aufteilung nach Geschäftsobjekt = **Datenobjekt(e)**.
+ Definition Objekt welches die Datenprüfungen und Validierungen durchführt = **Check Objekt**
+ Definition Objekt welches die Datenprozessierung durchführt und für die Erstellung des Ergebnisses zuständig ist **Geschäftslogig**.
+ Definition Objekt welches die Geschäftsfunktionalität abbildet und das Zusammenwirken der einzelnen Objekte orchestriert und verwaltet = **Controller**.
+ Erstellung einer Factory Klasse, die die einzelnen Objektinstanzen erzeugt.
+ Definition einer Injektorklasse, mittels der das Mocking einzelner Funktionen ermöglicht wird.

Die Details zum ABAP UNIT und wie man Unit Tests erstellt finden Sie im Kapitel [**Testing**](/ABAP-Leitfaden/testing/index))

#### Erstellung eines Konstruktors pro Klasse 
Jedes Objekt sollte eine Factory methode haben und die Übergabe nötiger parameter erfolgt über den Konstruktur in die Klasse. Die Factory Methode der Klasse wird dann in der Factory Klasse gerufen. 

#### Beispiel: Verschalung des Customizing in der Factory Methode
Die Customizing Klasse kann nun so gestaltet werden, dass in der Factory Methode die Customizing Tabelle geprüft wird und nur im Falle eines vorhandenen Eintrages in der Tabelle zu den Parametern, eine Instanz an den Aufrufer übergeben wird. Damit muss der Aufrufer nicht mehr die Prüfung übernehmen, sondern durch Abfrage der Objektinstanz kann ermittelt werden, ob eine Funktion aufgerufen werden soll. Damit vereinfacht sich der Code der Geschäftlogik und die Komplexität des Customizing wurde verschalt.   Einzelne Parameter des Customizings können in Attributen der Customizing Klasse vorgehalten werden und mittels sog. Getter-Methoden bei Bedarf in anderen zugehörigen Klassen abgefragt werden.
Da über die Factory dem Objektkonstrukt die Customizing Instanz bekannt ist und bei Bedarf diese in anderen Objekten als Attribut abgelegt werden kann, ist der Zugriff auf das Customizing standardisiert im gesamten Konstrukt ohne Redundanten Code möglich.  
Dies bedeutet einen initialen Erstellungsaufwand, der sich aber bei Änderungen und Ergänzungen auszahlt, da auf vorhandene Services effizient und aufwandslos zugegriffen werden kann und fehleranfällige Coderedunzanzen nicht mehr erforderlich sind.
--- eigentlich voll cool --- muss aber noch knackiger beschreiben werden und ggf. klein Grafik

Die Erstellung der zahlreichen Objekte erscheint deutlich aufwändiger als der Top-Down Ansatz beim prozeduralen Vorgehen. Man gewinnt hier aber durch die Aufteilung der Funktionen gemäß der Verantwortlichkeiten eine deutlich höhere Flexibilität und Robustheit.  

Die Effizienz kann ergibt sich allerdings nur durch den Einsatz der ABAP Development Tools in Eclipse (ADT). Mittels Autocompletion, Templates und Quickfixes kann viel Code sehr schnell und einfach erstellt werden, wodurch sich der Mehraufwand sehr in Grenzen hält.  
Natürlich muss dass Vorgehen auch eingeübt werden um eine gewisse Entwicklungsperformanz zu entwickeln.  
Bitte beachten Sie hierzu den ADT-Leitfaden der DSAG, der Sie unterstützt, ADT effizient und flächendeckend im Unternehmen einzusetzen.

### Was wird hier geschrieben - notes 
+ da muss noch einiges : ....
* Was ist eine Klasse - * Eigenschaften einer guten Klasse - ANFANG GEmacht
* Wie werden Klassen instantiiert  -- dran 
* Aufteilung der Funktionen auf einzelne Klassen -- dabei
* Namenskonventionen ----
* Fehlerbehandlung mit Exceptions
* Delegieren statt vererben
* Nutzung von Interfaces



# Testbarkeit - besserer Titel und Bezug zum Testkapitel herstellen - ist mehr Teaser hier

Wenn die Grundlagen einer guten Softwarearchitektur und eines guten Designs gegeben sind, sind auch die Voraussetzungen gegeben um die Methodik des Unit Tests anzuwenden.  Ein Punkt der oft verhindert ABAP-UNIT einzusetzen ist neben mangelnder OO Kenntnisse das Problem des Zeitaufwands und der Diskrepanz der zur Verfügung stehenden Zeit. Hier erfordert es einige Anstrengungen, gute Kenntnisse und hohe Motivation im Entwicklerteam um UNIT Tests nicht nur vereinzelt anzuwenden.  

Im klassischen ABAP-Umfeld besteht die Vorgehensweise klassischerweise darin, dass zeitnah eine Entwicklung durch die Entwickler bereitgestellt werden und sobald als möglich die Tests durch die Entwickler und die Fachabteilung erfolgt.  
Beim Auftreten eines Fehlers oder Defekts wird dann die Entwicklung korrigiert und weitere Anpassungen vorgenommen. Dies kann dann zu zahlreichen Zyklen von Entwicklung - Test - Korrektur - Test usw. führen. Tests einzelner Komponenten ist entweder schwierig oder bedingt durch die monolithische Anwendungsstruktur nicht möglich. Daher können hier auch nur vollständige Funktions- oder gar Prozesstests mit entsprechend hohem Aufwand durchgeführt werden.   
Dabei kann nicht ausgeschlossen werden, dass einige Fehler erst im Rahmen des Produktivbetriebes erkannt werden, da auf Testsystem weder die kompletten Prozessdaten vorhanden sind, weder die Masse an Transaktionen durchgeführt wird, noch die Varianz an Transaktionsausführung vorhanden ist.
Daher sollte dieses Vorgehen vermieden werden.   

Moderne Softwareentwicklung bietet die Möglichkeit mittels moderner Softwarearchitektur das Testing in die frühe Phase der Softwareerstellung zu verschieben und Fehler frühzeitig zu finden. potenzielle Fehler werden bereits in der Designphase betrachtet, das gewünschte Programmverhalten definiert und evtl. Problematiken im Vorfeld mit dem Anforderer besprochen.
Ziel einer modernen Anwendungsarchitektur ist es, eine Anwendung in kleine, abgrenzbare und testbare Komponenten aufzuteilen. Diese werden in entsprechenden Unterpaketen des Anwendungspaketes gekapselt. Da diese Komponenten kaum manuell testbar sind, ist hier UNIT Testing mit ABAP UNIT einzusetzen. Dies erfordert aber eine gute Strukturierung und weitere Hilfspakete, die Testfunktionalitäten bereitstellen.

Das Schreiben der UNIT-Tests und der benötigten Mocks und Testdaten erfordert einiges an Aufwand. Die Bereitstellung einer testbaren Version verzögert sich durch den Aufwand der sich durch die Erstellung des Objektgeflechts und der Testartefakte ergeben.    

Im Gegenzug entsteht der sogenannte Produktcode, der die Logik enthält anschließend fast von selbst. Die Erkenntnisse, die sich beim Design der Testdaten und der Tests ergeben, führen dazu, dass viele Situationen und Fragestellungen der Anwendung sich schon frühzeitig ergeben und vorab geklärt werden und über die automatisieren Tests abgedeckt werden können. Viele Fehler werden frühzeitig während der Entwicklung entdeckt und behoben und müssen nicht erst durch die Fachabteilung entdeckt werden. Die Anwendung wird damit robuster und ausgereifter als sie es ohne die Unit Test Erstellung wäre und somit entfallen auch zahlreiche Transportzyklen von Entwicklungs- in Test- oder gar Produktivsysteme.  

