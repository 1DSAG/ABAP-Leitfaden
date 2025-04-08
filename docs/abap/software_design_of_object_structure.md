---
layout: page
title: Design und Erstellung von SAP-Anwendungen
permalink: /abap/oo-design/
parent: Moderne ABAP Entwicklung
nav_order: 3
---

{: .no_toc}
# Design und Erstellung von SAP-Anwendungen

1. TOC
{:toc}

## Moderne Geschäftsanwendungen erfordern moderne Softwareentwicklungsmethoden

Geschäftsanwendungen in der klassischen ABAP Entwicklung wurden oft mit Reports erstellt, die durch komplexe, prozedurale Kontrollstrukturen geprägt waren. Modularisierung erfolgte mittels Form-Routinen oder für Wiederverwendung mit Funktionsbausteinen. Bei guter Planung waren Funktionsgruppen nicht überladen, sondern bestanden aus zusammengehörigen spezifischen Funktionen.  Vielleicht kennen Sie aber auch die eine oder andere Funktionsgruppe, die zahlreiche Funktionsbausteine mit unterschiedlichen Aufgaben enthält und beim einen oder anderen Transport auch mal das eine oder andere Problem verursacht hat.  
Mit der Anzahl der vorgenommenen Änderungen wurden diese Anwendung immer komplexer, fehleranfälliger und immer schwerer zu warten. 

Die moderne ABAP-Entwicklungswelt ist ungleich komplexer und heterogener geworden als sie es zu früheren R/3 Zeiten war. An moderne Anwendungen werden heute hohe Anforderungen gestellt. 
- Anwendungen müssen die Anforderungen bestens erfüllen.
- Anwendungen müssen fehlerfrei, robust, performant und fehlertolerant betrieben werden können.
- Änderungen sollen schnell, effizient, fehlerfrei und mit wenig Testaufwand durchführbar sein und keine neuen Fehler erzeugen.  

Somit müssen auch Anforderungen an den ABAP-Code gestellt werden.  

1. ABAP-Code **muss** die funktionalen Anforderungen korrekt erfüllen und hat keine negativen Auswirkungen auf Sicherheitsthemen oder andere Entwicklungen.
2. ABAP-Code **soll** fachlich präzise strukturiert sein. Er wird in kleinen, semantisch zusammenpassenden und modularen Einheiten entwickelt. Diese Einheiten sind gut lesbar und für andere Entwickler leicht verständlich. Externe Zugriffe und modulübergreifende Abhängigkeiten sind über klar definierte Schnittstellen geregelt.
3. ABAP-Code **soll** moderne Programmiertechniken verwenden. Er enthält keine veralteten oder nicht unterstützten Anweisungen.

Mit langen, tief verschachtelten und eng verwobenen Modularisationseinheiten wie Reports, Forms und Funktionsbausteinen sind diese Anforderungen nur schwer zu erfüllen, da diese eine hohe Abwärtskompabilität aufweisen und vieles möglich ist, was mit ABAP-OO bereits technisch geprüft oder teilweise sogar verhindert wird.  

Schon seit vielen Jahren gibt es in ABAP die Möglichkeit objektorientiert zu programmieren. Auch wenn dies anfangs noch nicht erforderlich war, ist es heute einerseits technisch notwendig, wenn neue Möglichkeiten genutzt werden sollen, andererseits bietet die Methodik der Objektorientierung sehr viele gute Ansätze Geschäftsanwendung so zu entwickeln, dass sie flexibel, wartbar, erweiterbar und robust umgesetzt werden können. Und durch die Nutzung von ABAP-Unit und eines guten Designs, können zahlreiche Tests bereits als UNIT Tests abgedeckt werden womit das Testen durch den Endanwender auf die Testung des Prozesses und der Funktion reduziert werden kann.

Und obwohl die oben genannten Nachteile der prozeduralen und Vorteile der Objektorientierten Programmierung bekannt sind, werden auch in aktuellen Projekten weiterhin Funktionalitäten nicht objektorientiert umgesetzt bzw. nicht das volle Potenzial moderner Entwicklungsmethoden genutzt. Dies können z.B. Programme sein, die prozedural implementiert werden, Klassen die objektorientierte Prinzipien nicht umsetzen oder Implementierung von Funktionsbausteinen oder direkte Implementierung von komplexen Code in BAdI-Implementierung direkt ohne weitere Strukturierung.

>**Empfehlungen**  
* Fordern Sie bei allen Entwicklungen die Umsetzung in ABAP Objects unter Einsatz objektorientierter Methoden ein
* Achten Sie auf die Anwendung der SOLID Prinzipien der Objektorientierung
* Wenden Sie beim Anwendungsdesign die gängigen objektorientierten Designpatterns an. 
* Trennen Sie die unterschiedlichen Belange der Geschäftsanwendungen in Klassen auf (z.B. Controller Klasse, Datenzugriff, Geschäftslogiken, Prüfungen etc.)
* Halten Sie die Schnittstellen klein und nutzen Sie die Factory für Übergabe wichtiger Daten an das Objekt
* Verschalen und konzentrieren Sie Aufrufe von SAP-Code bzw. Paketfremden Code in eigenen privaten Methoden.
* Verwenden Sie klassenbasierte Ausnahmen für das komplette Fehlerhandling inklusive Nachrichtenabwicklung in der Anwendung
{: .highlight}


Die detaillierte Erläuterung der Objektorientierung und die zahlreichen Möglichkeiten des modernen ABAP können wir in diesem Leitfaden nicht umfänglich abhandeln, möchten Ihnen aber bezüglich des Vorgehens Empfehlungen, Hinweise und Hilfen geben, die den Einstieg erleichtern und einen Überblick über Handlungsfelder geben, die schnell zu Verbesserungen führen können.

## Grundlagen und einfache Anwendung von Objektorientierung im ABAP Kontext

Das Thema Objektorientierung ist komplex und viele existierende Funktionalitäten in SAP folgen nicht den Designprinzipien der Objektorientierung, auch dann nicht wenn diese in ABAP-Klassen implementiert sind. Für dieses Kapitel sollten die Grundprinzipien der Objektorientierung bereits bekannt sein.  
Die Hinweise und Tipps erfolgen hier in sehr vereinfachter Form. Es soll ein Vorgehen aufzeigen um die Objektorientierung nutzbringend anzuwenden und unsere Empfehlungen praxisorientiert untermauern.  
Dies ist ein Anfang und kann helfen das Verständnis für ABAP-OO in den Entwicklerteams zu schaffen, erste Erfolgserlebnisse zu erzielen und mittels weitere Unterstützung durch Trainings, Dokumentation und Literatur und Coachings das Thema nachhaltig in der Organisation gewinnbringend zu nutzen.

## Merkmale Objektorientierter Entwicklung in ABAP-Klassen

Eine Klasse bildet eine spezielle (Teil-)Aufgabe ab, die in überschaubaren Methoden implementiert wird.  
Eine ABAP-Klasse besteht aus Attributen, die Werte speichern können oder Konstanten sein können.  
Es es gibt Methoden, die Funktionen implementieren und in *Public*, *Protected* und *Private* Methoden unterteilt sind. Man kann auch Klassenspezifische Typen definieren, die in der Klasse aber auch von Aufrufern verwendet werden können (wenn in Public Section definiert).  
Darüber hinaus definieren Klassen weitergehende Eigenschaften wie Paketzugehörigkeit und die Art der Instanziierbarkeit und ggf. Vererbungsinformationen.  
Oft werden ABAP-Klassen als eine moderne Form von Funktionsbausteinen betrachtet, dieser Vergleich wird den Möglichkeiten einer Klasse nicht gerecht.
Der entscheidende Unterschied ist die Instanziierbarkeit, d.h. es können für Klassen mehrere Objekte im gleichen Programmkontext erzeugt werden.

Bei einer Klasse, die nur statische Methoden beinhaltet und in der Verwendung nicht instanziiert wird, handelt es sich somit nicht um eine Klasse die objektorientierten Prinzipien folgt.

Klassen sollten eher übersichtlich gestaltet werden und Methoden mit einer Länge von bis max ~150 Zeilen besitzen. Ebenso sollten die Klassen nicht zu viele Methoden besitzen. Die Größenbeschränkung zwingt dazu, Aufgaben in verschiedene Klassen zu delegieren. Damit sind die einzelnen Klassen weniger Komplex, die Komplexität verschiebt sich damit je nach Anwendung in das Klassengeflecht und dem Zusammenspiel der einzelnen Klassen.  Dieses Zusammenspiel und die übergeordnete Logik wird in einem **Controller** gebündelt.  
Um hier nicht einfach eine Komplexitätsverschiebung zu erhalten, bedarf es guter Überlegung und eines entsprechenden Paketdesigns und guter Grobplanung der Anwendung. 
Dass während der Entwicklung Methoden und Attribute verschoben und umbenannt werden und Objekte umstrukturiert = Refactored werden, gehört zum Softwareentwicklungsprozess dazu und ist Dank moderner Softwareentwicklungswerkzeuge in den ABAP-Development Tools in Eclipse und zusätzlichen AddOns einfach und sicher durchzuführen.

Weitere Erkennnungsmerkmale einer Klasse, die objektorientierten Prinzipien folgt sind:

+ **Größe der Klasse** - ein zu große Klasse zeigt vermutlich auf dass das Single Responsibility Prinzip verletzt wurde 
+ **Größe der Methoden** - zu große Methoden weisen auf Strukturdefizite und redundanten Code hin. Die maximale Zielgröße liegt bei ca. 150 Zeilen.
+ **Umfangreiche Parameterschnittstellen** - Objekte arbeiten mit Objekten und nicht mit Parametern, dies geht meistens mit zu großen Methoden einher
+ .... any other - to be discussed. - check Clean Core Kapitel bzw. clean ABAP Styleguide
 

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

## Entwurfsmuster
In der Objektorientierung gibt es zahlreiche Entwurfsmuster (Design Pattern), die für verschiedene Problemstellungen und Anwendungsfälle bereits vorgefertigte und erprobte softwaretechnische Mechanismen bieten, die auch in ABAP umgesetzt werden können. So sind in ABAP folgende Pattern direkt und sinnvoll anwendbar, diese werden im folgenden näher erläutert:
- Singleton
- Factory
- Facade
- MVC (Model-View-Controller)

### Singleton-Pattern
Das Singleton-Pattern zielt darauf ab, dass zu einer Klasse nur eine einzige Objektinstanz zur Laufzeit existiert bzw. existieren kann. Dazu wird die erste durch den Konstruktor erzeugte Instanz in eine Klassenvariable (CLASS-DATA) geschrieben und bei den folgenden Aufrufen des Klassenkonstruktors zur Erzeugung eines neuen Objektes wird ebendiese gespeicherte Instanz aus der Klassenvariable gelesen und zurückgegeben. So kann man kontrollieren, dass zu jeder Zeit nur eine Instanz einer Klasse existiert. Anwendungsbeispiele hierfür wären *!!TODO!!*

### Factory-Pattern
...

### Facade-Pattern
...

### MVC-Pattern
Das MVC-Pattern wird verwendet, um die Programmierlogik in die 3 Bereiche Model (Datenmodell), View (Präsentationslogik) und Controller (Businesslogik) zu unterteilen. 

Auch hier können wir leider nicht im Detail darauf eingehen, im Internet und der Fachliteratur finden sie zahlreiche Möglichkeiten sich dem Thema Anzunähern und in die Organisation zu bringen. [ABAP-OO Design Patterns m. Beispielen](https://zevolving.com/category/abapobjects/oo-design-patterns/).

## Vergleich Vorgehen prozedurale vs. objektorientierter Entwicklung

### Ablauf Prozedurale Entwicklung

Beim Umsetzen einer Anforderung z.B. in einem Report oder eines Funktionbausteins würde das Design gemäß der Spezifikation klassischerweise wie folgt sich gestalten:

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
+ Definition Objekt welches die Datenprozessierung durchführt und für die Erstellung des Ergebnisses zuständig ist **Geschäftslogik**.
+ Definition Objekt welches die Geschäftsfunktionalität abbildet und das Zusammenwirken der einzelnen Objekte orchestriert und verwaltet = **Controller**.
+ Erstellung einer Factory Klasse, die die einzelnen Objektinstanzen erzeugt.
+ Definition einer Injektorklasse, mittels der das Mocking einzelner Funktionen ermöglicht wird.

Die Details zum ABAP UNIT und wie man Unit Tests erstellt finden Sie im Kapitel [**Testing**](/ABAP-Leitfaden/testing/index))

## Konzepte in der Objektorientierung

Neben den Grundlagen, gibt es weitere Konzepte und Techniken, durch deren Einsatz erst der volle Mehrwert der Objektorientierung zum Einsatz kommt und auch komplexe Problemstellungen elegant gelöst werden können, was mit klassischen Technologien deutlich aufwändiger oder gar nicht möglich war. Auch hier können wir in der ersten Version des neuen Leitfadens nur in sehr kurzer Form hinweisen. In der ABAP Dokumentation und in Trainings und Büchern finden Sie weitere Informationen.

### Erstellung eines Konstruktors pro Klasse

Jedes Objekt sollte eine Factory methode haben und die Übergabe nötiger parameter erfolgt über den Konstruktur in die Klasse. Erfolgt die Instanziierung der Klassen der Anwendung über eine zentrale Factory, wird die Factory Methode der Klasse in der Factory Klasse gerufen.

### Beispiel: Verschalung des Customizing in der Factory-Methode (s.Issue #117 - Klärung Pattern)

Die Customizing Klasse kann nun so gestaltet werden, dass in der Factory Methode die Customizing Tabelle geprüft wird, in der die Steuerung der Funktion hinterlegt ist. Nur wenn sich ein Eintrag in dieser Tabelle zu den Parametern der Factory-Methode (z.B. Werk oder Buchungskreis etc.) befindet, wird eine Instanz an den Aufrufer übergeben. Falls kein Eintrag oder ein Problem vorliegt, sollte eine Ausnahme ausgelöst werden, die vom Aufrufer abgefangen wird. Somit muss der Aufrufer nicht mehr die Prüfung der Tabelle übernehmen, sondern die Instanz ist nur dann vorhanden, wenn die Funktion auch aktiv ist. Im Positivfall können dann über die zurückgegebene Instanz die entsprechenden Methoden aufgerufen werden.  
Damit vereinfacht sich der Code der Geschäftslogik und die Komplexität des Customizing wird verschalt bzw. automatisiert. Einzelne Parameter des Customizings können in Attributen der Customizing Klasse vorgehalten werden und mittels sog. Getter-Methoden bei Bedarf in anderen zugehörigen Klassen abgefragt werden.  
Da dem Objektkonstrukt mittels der Factory die Customizing Instanz bekannt ist und bei Bedarf diese in anderen Objekten als Attribut abgelegt werden kann, ist der Zugriff auf das Customizing standardisiert im gesamten Konstrukt ohne redundanten Code möglich.  
Dies bedeutet einen initialen Erstellungsaufwand, der sich aber bei Änderungen und Ergänzungen auszahlt, da auf vorhandene Services effizient und aufwandslos zugegriffen werden kann und fehleranfällige Coderedundanzen nicht mehr erforderlich sind.

Die Erstellung der zahlreichen Objekte erscheint deutlich aufwändiger als der Top-Down Ansatz beim prozeduralen Vorgehen. Man gewinnt hier aber durch die Aufteilung der Funktionen gemäß der Verantwortlichkeiten eine deutlich höhere Flexibilität und Robustheit und durch die Mechanismen eine Form der Automatisierung.  
Ist dieses Muster erst einmal eingeübt, übertreffen die Vorteile dieses Verfahrens den Nachtteil des vermeintlich erhöhten initialen Aufwands bei weitem.

Die Effizienz kann ergibt sich allerdings nur durch den Einsatz der ABAP Development Tools in Eclipse (ADT). Mittels Autovervollständigung, Nutzung von Code Templates und Quickfixes kann viel Code sehr schnell und einfach erstellt werden, wodurch sich der Mehraufwand sehr in Grenzen hält.  
Natürlich muss dass Vorgehen auch eingeübt werden um eine gewisse Entwicklungsperformanz und -effizienz zu entwickeln.  
Bitte beachten Sie hierzu den **[ADT-Leitfaden](https://1dsag.github.io/ADT-Leitfaden/)** der DSAG, der Sie unterstützt, ADT effizient und flächendeckend im Unternehmen einzusetzen.

### Vollständiger Einsatz von klasssenbasierten Ausnahmen zur Fehlerbehandlung.

Verwenden Sie für die Behandlung von Fehlern ausschließlich klassenbasierte Ausnahmen. Diese sollen auch nur für den Fall von Fehlern eingesetzt werden und nicht für Erfolgs- oder Statusmeldungen aus der Anwendung missbraucht werden. Lediglich technische Einschränkungen von Seiten SAP zwingen Sie an einigen wenigen Stellen dazu klassische Exceptions einzusetzen.  
Von der Verwendung von Returncodes raten wir ihnen ebenso ab wie von der alleinigen Rückgabe von Message Tabellen wie z.B. BAPIRET2, wie Sie dies z.B. in BAPI-Funktionsbausteinen oft vorfinden. diese Konzepte erzeugen das Problem, dass im aufrufenden Programm innerhalb des Ablaufs der Geschäftslogik geprüft werden muss, ob ein Fehlerfall vorliegt und somit eine saubere Trennung von technischen Belangen und Geschäftslogik nicht gegeben ist.
Der Einsatz von Ausnahmeklassen ermöglicht hier eine deutlich bessere Trennung, Des Weiteren können Sie die Fehlerbehandlung aufgrund der Propagierung von Ausnahmen an zentralen Stellen bündeln. Bitte beachtens Sie hierzu auch die Empfehlungen des 
[Clean-ABAP Styleguide](https://github.com/SAP/styleguides/blob/main/clean-abap/sub-sections/Exceptions.md)


Ein in ABAP-OO geübter Entwickler definiert in der Konzeptionsphase die auftretenden Fehlersituationen, die in einem (Unter)Paket auftreten können und erstellt darauf basierend die entsprechenden Ausnahmeklassen mit den Fehlermeldungen (als Text-ID oder Nachrichtenbasiert).
Wenn der Code der Geschäftslogik implementiert wird und die Fehler behandelt werden müssen, wird an der betreffenden Stelle die Exception aufgerufen. Die Behandlung muss nun nicht wie bei Funktionsbausteinen in jeweils jeder Aufrufschicht erfolgen, sondern kann zentral an einer Stelle erfolgen.
Dies gewährleistet eine konsistente Behandlung und vermindert den Aufwand wenn Fehler an mehreren Stellen auftreten können.

### Interfaces

Durch den Einsatz von Interfaces wird die Definition von Methoden und deren Implementierung voneinander entkoppelt. Wird ein Interface verwendet, kann die Implementierung der Klasse geändert, bzw. flexibilisiert werden. Das Interface definiert sozusagen den Vertrag zwischen Verwender und implementierender Klasse.
Interfaces werden bei UNIT-Tests benötigt, da z.B. Datenbankzugriffe in Unit Tests durch programmierte Testdaten ersetzt werden müssen. Die Datenbankklasse implementiert ein Interface, das im Produktcode aufgerufen wird. Wird der Unit-Test ausgeführt, wird statt der Datenbankklasse, eine sog. Mockingklasse aufgerufen, die statisch hinterlegte Daten beinhaltet und zurückliefert oder Das OSQL Framework nutzt um die Datenbankabfragen im Test zu simulieren.  
Die Ausführungen dazu finden Sie im Kapitel [**Testing**](/ABAP-Leitfaden/testing/index).


------
An @ABAP-Pete25 von  @TimoJohn 
" ich würde gerne noch dazu schreiben das grundsätzlich immer Iinterfaces zu verwenden sind für die Lose Kopplung. Das Unit Test das nutzen ist gut. Klingt hier aber so als würde man dies nur für unit test machen. Und dann kommen wieder Leute auf creative Gründe "ich brauche das nicht weil ..."
Vorschlag: 

Sie sollten grundsätzlich Methoden die Funktionen für andere Klassen bereitstellen in Interfaces defineren und dafür sorgen, dass die Verwender nur mit diesen Intetrfaces Arbeiten. Das Erzeugen von konkreten Obkjekten über nimmt eine separate Factory Klasse oder in besonders einfachen Fällen eine Factory Methode der Klasse. 
```ZCL_BUSINESS_LOGIC=>GET_INSTANCE( ConpanyCode )``` 

[Siehe](https://github.com/SAP/styleguides/blob/main/clean-abap/CleanABAP.md#prefer-multiple-static-creation-methods-to-optional-parameters)
--------

### Vererbung

Ein wichtiges Konzept in der Objektorientierung ist die Vererbung. Dabei kann eine Klasse von einer anderen Klasse abgeleitet werden und somit die Eigenschaften der übergeordneten Klasse erben. So hat eine erbende Klasse die Attribute und Methoden der übergeordneten Klasse, kann aber weitere spezifische Methoden ergänzen oder ererbte Methoden redefinieren, d.h. eine Ergänzung der vererbten Implementierung oder gar eine eigene Implementierung der Methode erhalten.  
Bei der Vererbung ist das Liskovsche Substitutionsprinzip zu beachten und genau zu prüfen, ob im vorgesehenen Kontext Vererbung Sinn macht. Oft ist es besser statt Vererbung Interfaces zu verwenden oder die Methode der Delegation zu verwenden und verschiedene Aspekte einer Klasse auf verschiedene Klassen zu verteilen und das Zusammenspiel über einen Controller und die Instanzen über eine Factory zu regeln.  

## Objektorientierung in Funktionsbausteinen und Form Routinen

Manchmal ist es erforderlich, dass Funktionalitäten in vorgegebenen Artefakten umgesetzt werden müssen. Z.B. Funktionsbausteine in AIF, Remote Funktionsbausteine, Form Interface Routinen bei Adobe Forms usw.
In diesem Fall dienen diese Entwicklungsobjekte als Verschalung und rufen die eigentliche Funktionalität nur auf, die dann in ABAP-Klassen und deren Methoden implementiert ist. Der Code in diesen Entwicklungsobjekten sollte sich nur auf technisches Coding beschränken wie z.B. Datenzuordnungen, Objektinstanziierung oder minimale Prüfungen.
Dies bietet wiederum den Vorteil von möglicher Wiederverwendung und Implementierung von Unit Test.

## Verwendung von SAP Code

Die Verwendung von SAP-Code (CDS Views, Klassen, Funktionsbausteinen, BAPIs, etc.) oder auch paketfremder Code, sollte immer in einer eigenen Zugriffsschicht liegen. Dies entspricht dann auch einer sauberen Trennung der Belange (S - Separation of Concerns). Der Einsatz von ABAP Cloud forciert dies durch das 3-Tier Konzept ebenso s. Kapitel [Clean Core](Link Kap. CC).  
Auch wenn es sich um freigegebene Elemente handelt, sollten diese stets mit einer Klasse gekapselt werden, damit es nur einen Ort des Übergangs von Eigen- an Fremdcode gibt.
Erstellen Sie Klassen, deren Aufgabe es ist, den Programmcode der Anwendung frei von jeglichen Abhängigkeiten zum SAP Code oder zu paketfremden Code zu halten. Dies wird auch die Wiederverwendung fördern.  
Falls die Erstellung eigener Klassen überdimensioniert ist, kann in Sonderfällen die Trennung auch durch den Aufruf des fremden Codes in eigens dafür erstellten privaten Methoden erfolgen. Die Schnittstellendefinition sollte sich dabei eher an den Aufrufer und nicht am aufgerufenen Objekt orientieren. Somit ist später ein Austausch des verwendeten Fremdcodes einfacher. Je nach Komplexität kann das Mapping zwischen Eigen- und Fremdcodeschnittstellen in eigene Methoden ausgelagert werden.

Eine hilfreiche Erweiterung dieser Klassen ist die Transformation der klassischen Ausnahmen, oder Return Codes, die von SAP Code zur Fehlerbehandlung verwendet werden, hin zu Ausnahmeklassen.  
Diese Trennung ist auch eine wichtige Voraussetzung für die Testbarkeit einer Anwendung.


## Testbarkeit durch gutes Design

Gute Strukturierung in den Paketen, als auch in den Objekten sind grundlegende Voraussetzungen um die Testbarkeit der Software zu erhöhen. Sind die Verantwortlichkeiten der Komponenten im Rahmen einer guten Architektur geklärt und die Aufgaben auf verschiedene Objekte sinnvoll verteilt, erleichtert dies den Einsatz von ABAP-Unit massgeblich.
Im Rahmen der vorgenannten Architektur- und Designentscheidungen müssen bereits testrelevante Aspekte miteinbezogen werden, um effizient ABAP-UNIT umsetzen zu können, da die Struktur sich unmittelbar auf die Testbarkeit auswirkt.

Sind Datenbankzugriffe und Zugriffe auf SAP Funktionsbausteine oder Klassen bereits in einer eigenen Softwareschicht gekapselt und werden die Instanzen über eine Factory erzeugt, die eine Injection vorsieht, ist es für einen erfahrenen Entwickler sehr unproblematisch, den eigenen Code über ABAP-UNIT Tests zu testen und Datenbankzugriffe sowie SAP-Funktionen über Test-Mocks-Objekte zu entkoppeln.  
ies verringert den Aufwand für die Unit-Test Erstellung deutlich gegenüber einem Vorgehen, bei dem der Testentwickler im Code Techniken wie Test-seams anwenden muss oder den Code umbauen muss, um die Entkopplung der Eigenentwicklung von SAP-Bausteinen in Tests sicherzustellen.

Das Vorgehen, Empfehlungen und Hinweise zu ABAP-UNIT finden Sie im Kapitel [Testen von SAP-Anwendungen](/ABAP-Leitfaden/testing/#testen).

## TODO before Review ?

CHECKPOINT -> Empfehlungen prüfen - was fehlt?
