---
layout: page
title: Design und Erstellung von ABAP Entwicklungen mit ABAP OO
permalink: /abap/oo-design/
parent: Moderne ABAP Entwicklung
nav_order: 3
---

{: .no_toc}
# Design und Erstellung von ABAP-Entwicklungen mit ABAP OO

1. TOC
{:toc}

## Moderne Geschäftsanwendungen erfordern moderne Softwareentwicklungsmethoden

Geschäftsanwendungen in der klassischen ABAP Entwicklung wurden oft mit Reports erstellt, die durch komplexe, prozedurale Kontrollstrukturen geprägt waren. Modularisierung erfolgte mittels Form-Routinen oder für Wiederverwendung mit Funktionsbausteinen. Bei guter Planung waren Funktionsgruppen nicht überladen, sondern bestanden aus zusammengehörigen spezifischen Funktionen.  Vielleicht kennen Sie aber auch die eine oder andere Funktionsgruppe, die zahlreiche Funktionsbausteine mit unterschiedlichen Aufgaben enthält und beim einen oder anderen Transport auch mal das eine oder andere Problem verursacht hat.  
Mit der Anzahl der vorgenommenen Änderungen wurden diese Anwendung immer komplexer, fehleranfälliger und immer schwerer zu warten. 

Die moderne ABAP-Entwicklungswelt ist ungleich komplexer und heterogener geworden als sie es zu früheren R/3 Zeiten war. An moderne Anwendungen werden heute hohe Anforderungen gestellt. Sie sollen flexibel, die Anforderungen bestens erfüllen, schnell umgesetzt werden und robust, performant und fehlerfrei im Betrieb laufen. Zukünftige Änderungen sollen schnell, kostengünstig und mit wenig Testaufwand durchführbar sein und keine neuen Fehler erzeugen.  

Schon seit vielen Jahren gibt es in ABAP die Möglichkeit objektorientiert zu programmieren. Auch wenn dies anfangs noch nicht erforderlich war, ist es heute einerseits technisch notwendig, wenn neue Möglichkeiten genutzt werden sollen, andererseits bietet die Methodik der Objektorientierung sehr viele gute Ansätze Geschäftsanwendung so zu entwickeln, dass sie flexibel, wartbar, erweiterbar und robust umgesetzt werden können. Und durch die Nutzung von ABAP-Unit und eines guten Designs, können zahlreiche Tests bereits als UNIT Tests abgedeckt werden womit das Testen durch den Endanwender auf die Testung des Prozesses und der Funktion reduziert werden kann.

Und obwohl die oben genannten Nachteile der prozeduralen und Vorteile der Objektorientierten Programmierung bekannt sind, werden auch in aktuellen Projekten weiterhin Funktionalitäten nicht objektorientiert umgesetzt bzw. nicht das volle Potenzial moderner Entwicklungsmethoden genutzt. Dies können z.B. Programme sein, die prozedural implementiert werden, Klassen die objektorientierte Prinzipien nicht umsetzen oder Implementierung von Funktionsbausteinen oder direkte Implementierung von komplexen Code in BAdI-Implementierung direkt ohne weitere Strukturierung 

>**Empfehlungen**  
***Fordern Sie bei allen Entwicklungen die Umsetzung in ABAP Objects unter Einsatz objektorientierter Methoden ein:***
- Sämtlicher Code ist in ABAP Klassen unter Einhaltung Objektorientierter Prinzipien zu erstellen
- Bei der Erfordernis der Implementierung von Reports, Funktionsbausteinen oder Form Routinen (z.B. Formular Form Routinen) sind diese als Wrapper zu sehen und die Logik ist in Klassen zu implementieren, deren Methode(n) in diesen Objekttypen aufgerufen werden. 
- Trennen Sie die unterschiedlichen Belange der Geschäftsanwendungen in Klassen auf (z.B. Controller Klasse, Datenzugriff, Geschäftslogiken, Prüfungen etc.)
- Fordern Sie vor der Implementierung ein Konzeptdokument des Entwicklers ein, in dem die Umsetzung beschrieben wird (s. auch Kapitel [**Dokumentation**](/ABAP-Leitfaden/documentation/index)).
{: .highlight}


Die detaillierte Erläuterung der Objektorientierung und die zahlreichen Möglichkeiten des modernen ABAP können wir in diesem Leitfaden nicht umfämglich abhandeln, möchten Ihnen aber bezüglich des Vorgehens Empfehlungen, Hinweise und Hilfen geben, die den Einstieg erleichtern und einen Überblick über Handlungsfelder geben, die schnell zu Verbesserungen führen können.

## Grundlagen und einfache Anwendung von Objektorientierung im ABAP Kontext

Das Thema Objektorientierung ist komplex und viele existierende Funktionalitäten in SAP folgen nicht den Designprinzipien der Objektorientierung, auch dann nicht wenn diese in ABAP-Klassen implementiert sind. Für dieses Kapitel sollten die Grundprinzipien der Objektorientierung bereits bekannt sein.    
Die Hinweise und Tipps erfolgen hier in sehr vereinfachter Form. Es soll ein Vorgehen aufzeigen um die Objektorientierung nutzbringend anzuwenden und unsere Empfehlungen praxisorientiert untermauern.  
Dies ist ein Anfang und kann helfen das Verständnis für ABAP-OO in den Entwicklerteams zu schaffen, erste Erfolgserlebnisse zu erzielen und mittels weitere Unterstützung durch Trainings, Dokumentation und Literatur und Coachings das Thema nachhaltig in der Organisation gewinnbringend zu nutzen.

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
+ **Größe der Klasse** - ein zu große Klasse zeigt vermutlich auf dass das Single Responsibility Prinzip verletzt wurde 
+ **Größe der Methoden** - zu große Methoden weisen auf Strukturdefizite und redundanten Code hin
+ **Umfangreiche Parameterschnittstellen** - Objekte arbeiten mit Objekten und nicht mit Parametern, dies geht meistens mit zu großen Methoden einher
+ .... any other - to be discussed. - check Clean Core Capitel bzw. clean ABAP Styleguide
 

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
Die Customizing Klasse kann nun so gestaltet werden, dass in der Factory Methode die Customizing Tabelle geprüft wird und nur im Falle eines vorhandenen Eintrages in der Tabelle zu den Parametern, eine Instanz an den Aufrufer übergeben wird. Damit muss der Aufrufer nicht mehr die Prüfung übernehmen, sondern durch Abfrage der Objektinstanz kann ermittelt werden, ob eine Funktion aufgerufen werden soll. Damit vereinfacht sich der Code der Geschäftslogik und die Komplexität des Customizing wird verschalt.  
Einzelne Parameter des Customizings können in Attributen der Customizing Klasse vorgehalten werden und mittels sog. Getter-Methoden bei Bedarf in anderen zugehörigen Klassen abgefragt werden.  
Da über die Factory dem Objektkonstrukt die Customizing Instanz bekannt ist und bei Bedarf diese in anderen Objekten als Attribut abgelegt werden kann, ist der Zugriff auf das Customizing standardisiert im gesamten Konstrukt ohne redundanten Code möglich.    
Dies bedeutet einen initialen Erstellungsaufwand, der sich aber bei Änderungen und Ergänzungen auszahlt, da auf vorhandene Services effizient und aufwandslos zugegriffen werden kann und fehleranfällige Coderedundanzen nicht mehr erforderlich sind.
*--- eigentlich voll cool --- muss aber noch knackiger beschreiben werden und ggf. kleine Grafik zur besseren Veranschaulichung*

Die Erstellung der zahlreichen Objekte erscheint deutlich aufwändiger als der Top-Down Ansatz beim prozeduralen Vorgehen. Man gewinnt hier aber durch die Aufteilung der Funktionen gemäß der Verantwortlichkeiten eine deutlich höhere Flexibilität und Robustheit und durch die Mechanismen eine Form der Automatisierung.  
Ist dieses Muster erst einmal eingeübt, übertreffen die Vorteile dieses Verfahrens den Nachtteil des vermeintlich erhöhten initialen Aufwands bei weitem.

Die Effizienz kann ergibt sich allerdings nur durch den Einsatz der ABAP Development Tools in Eclipse (ADT). Mittels Autovervollständigung, Nutzung von Code Templates und Quickfixes kann viel Code sehr schnell und einfach erstellt werden, wodurch sich der Mehraufwand sehr in Grenzen hält.  
Natürlich muss dass Vorgehen auch eingeübt werden um eine gewisse Entwicklungsperformanz und -effizienz zu entwickeln.   
Bitte beachten Sie hierzu den ADT-Leitfaden der DSAG, der Sie unterstützt, ADT effizient und flächendeckend im Unternehmen einzusetzen.

## Weitere Konzepte in der Objektorientierung
Neben den Grundlagen, gibt es weitere Konzepte und Techniken, durch deren Einsatz erst der volle Mehrwert der Objektorientierung zum Einsatz kommt und auch komplexe Problemstellungen elegant gelöst werden können, was mit klassischen Technologien deutlich aufwändiger oder gar nicht möglich war. Auch hier können wir in der ersten Version des neuen Leitfadens nur in sehr kurzer Form hinweisen. In der ABAP Dokumentation und in Trainings und Büchern finden Sie weitere Informationen.

### Fehlerbehandlung mit Exceptions
Während bei Funktionsbausteinen und Programmen die Fehlerbehandlung mittels Exception Codes oder Parametern oder Messages gelöst wurden und so sich in den Parameterschnittstellen wiedergefunden haben, verwendet man in der Objektorientierung die sogenannten Klassenbasierten Exceptions.  
Ein in OO geübter Entwickler definiert in der Konzeptionsphase die auftretenden Fehlersituationen, die in einem (Unter)Paket auftreten können und erstellt darauf basierend die entsprechenden Exceptionklassen mit den Fehlermeldungen (als Text-ID oder Nachrichtenbasiert).
Wenn der Code der Geschäftslogik implementiert wird und die Fehler behandelt werden müssen, wird an der betreffenden Stelle die Exception aufgerufen. Die Behandlung muss nun nicht wie bei Funktionsbausteinen in jeweils jeder Aufrufschicht erfolgen, sondern kann zentral an einer Stelle erfolgen.   
Dies gewährleistet eine konsistente Behandlung und vermindert den Aufwand wenn Fehler an mehreren Stellen auftreten können.

### Interfaces 
Durch den Einsatz von Interfaces wird die Definition von Methoden und deren Implementierung voneinander entkoppelt. Wird ein Interface verwendet, kann die Implementierung der Klasse geändert, bzw, flexibilisiert werden. Das Interface definiert sozusagen den Vertrag zwischen Verwender und implementierender Klasse.
Interfaces werden bei UNIT-Tests benötigt, da z.B. Datenbankzugriffe in Unit Tests durch programmierte Testdaten ersetzt werden müssen. Die Datenbankklasse implementiert ein Interface, das im Produktcode aufgerufen wird. Wird der Unit-Test ausgeführt, wird statt der Datenbankklasse, eine sog. Mockklasse aufgerufen, die statisch hinterlegte Daten behinhaltet und zurückliefert oder Das OSQL Framework nutzt um die Datenbankabfragen im Test zu simulieren.  
Die Ausführungen dazu finden Sie im Kapitel [**Testing**](/ABAP-Leitfaden/testing/index).

### Vererbung
Ein wichtiges Konzept in der Objektorientierung ist die Vererbung. Dabei kann eine Klasse von einer anderen Klasse abgeleitet werden und somit die Eigenschaften der übergeordneten Klasse erben. So hat eine erbende Klasse die Attribute und Methoden der übergeordneten Klasse, kann aber weitere spezifische Methoden ergänzen oder ererbte Methoden redefinieren, d.h. eine Ergänzung der vererbten Implementierung oder gar eine eigene Implementierung der Methode erhalten.  
Bei der Vererbung ist das Liskovsche Substitutionsprinzip zu beachten und genau zu prüfen, ob im vorgesehenen Kontext Vererbung Sinn macht. Oft ist es besser statt Vererbung Interfaces zu verwenden oder die Methode der Delegation zu verwenden und verschiedene Aspekte einer Klasse auf verschiedene Klassen zu verteilen und das Zusammenspiel über einen Controller und die Instanzen über eine Factory zu regeln.  

### Hab ich was vergessen ? 
CHECKPOINT -> Empfehlungen prüfen

### 
Wie Sie an den Ausführungen sehen können, ist es unabdingbar für moderne und flexible Softwareanwendungen neben einem guten Paketdesign auch ein gutes Design der einzelnen Softwarekomponenten unter Anwendung moderner Softwareentwicklungsmethodiken einzufordern und umzusetzen.  
Dazu muss es Instanzen geben, die diese Aspekte verantworten, definieren und auch für die Umsetzung in der täglichen Arbeit sorgen.  
Ein Upskilling und die Motivation der Entwickler ist ein unabdingbarer Erfolgsfaktor.  Dafür braucht es Rahmenbedingungen die im Unternehmen und in der täglichen Arbeit der Entwickler gegeben sein müssen. 
Wertvolle und ausführliche Informationen finden Sie im Kapitel [Organisation](/ABAP-Leitfaden/organization/index))



