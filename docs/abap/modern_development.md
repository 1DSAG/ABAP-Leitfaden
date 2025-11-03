---
layout: page
title: Entwurf und Gestaltung moderner SAP-Anwendungen
permalink: /abap/oo-design/
parent: Moderne ABAP Entwicklung
nav_order: 2
---

{: .no_toc}
# Entwurf und Gestaltung moderner SAP-Anwendungen

1. TOC
{:toc}

## Moderne Geschäftsanwendungen erfordern zeitgemäße Softwareentwicklungsmethoden

Geschäftsanwendungen in der klassischen prozeduralen ABAP Entwicklung werden in Form von Programmen erstellt, die durch komplexe, prozedurale, tief verschachtelte Kontrollstrukturen geprägt sind. Modularisierung erfolgte mittels Form-Routinen oder für die Wiederverwendung in Funktionsbausteinen. Bei guter Planung und Anwendung von Methoden der Softwareentwicklung waren Funktionsgruppen nicht überladen, sondern bestehen aus zusammengehörigen spezifischen Funktionen. Vielleicht kennen Sie aber auch die eine oder andere Funktionsgruppe, die zahlreiche Funktionsbausteine mit unterschiedlichen Aufgaben enthält und beim einen oder anderen Transport auch mal das eine oder andere Problem verursacht hat. Mit der Anzahl der vorgenommenen Änderungen wurden diese Anwendung immer komplexer, fehleranfälliger und immer schwerer zu warten.  

An moderne Anwendungen werden heute hohe Anforderungen gestellt:

- Anwendungen müssen die funktionalen Anforderungen bestens erfüllen.
- Anwendungen müssen fehlerfrei, robust, performant und fehlertolerant betrieben werden können.
- Änderungen sollen schnell, effizient, fehlerfrei und mit wenig Testaufwand durchführbar sein und keine neuen Fehler erzeugen.  

Somit müssen auch Anforderungen an den ABAP-Code gestellt werden:

- ABAP-Code muss die funktionalen Anforderungen korrekt erfüllen und hat keine negativen Auswirkungen auf Sicherheitsthemen oder andere Entwicklungen.
- ABAP-Code soll fachlich präzise strukturiert sein. Er wird in kleinen, semantisch zusammenpassenden und modularen Einheiten entwickelt. Diese Einheiten sind gut lesbar und für andere Entwickler leicht verständlich. Externe Zugriffe und modulübergreifende Abhängigkeiten sind über klar definierte Schnittstellen geregelt.
- ABAP-Code soll gut lesbar und verständlich geschrieben sein und Kommentare helfen beim Verständnis der implementierten Funktionalität.
- ABAP-Code soll dem [Clean-Core Level Modell](/ABAP-Leitfaden/clean-core/solution-approach/#level-concept) entsprechen.

Mit der klassischen, prozeduralen ABAP-Programmierung sind diese Anforderungen nur schwer zu erfüllen, da diese eine hohe Abwärtskompabilität aufweisen, veraltete Möglichkeiten bieten und die Wartbarkeit erschweren. Dieser klassische, prozedurale Ansatz ist nicht mehr zeitgemäß und sollte nicht mehr Anwendung finden.  

Die Softwareentwicklungsmethoden und Techniken die heute dem ABAP-Entwickler zur Verfügung stehen, bieten für o.g. Problemfelder und für die Herausforderungen, die Anforderungen moderner Geschäftsanwendungen mit sich bringen, gute Lösungsansätze.  

Schon seit vielen Jahren gibt es in ABAP die Möglichkeit objektorientiert zu programmieren. Auch wenn dies anfangs noch nicht erforderlich war, ist es heute einerseits technisch notwendig, wenn neue Möglichkeiten genutzt werden sollen. Andererseits bietet die Methodik der Objektorientierung sehr viele gute Ansätze Geschäftsanwendung so zu entwickeln, dass sie flexibel, wartbar, erweiterbar und robust umgesetzt werden können. Durch die Nutzung von ABAP Unit und eines guten Designs, können zahlreiche Funktionen über Unit Tests geprüft werden. Damit kann das Testen durch den Endanwender auf das Testen des Prozesses und damit der Testaufwand in der Fachabteilung reduziert werden, da die innere Struktur der Software über ABAP Unit Tests abgesichert wird.

Obwohl die oben genannten Nachteile der prozeduralen und Vorteile der Objektorientierten Programmierung bekannt sind, werden auch in aktuellen Projekten weiterhin Funktionalitäten nicht objektorientiert umgesetzt bzw. nicht das volle Potenzial moderner Entwicklungsmethoden genutzt. Dies können z.B. Programme sein, die prozedural implementiert werden, Klassen die objektorientierte Prinzipien nicht umsetzen oder Implementierung von Funktionsbausteinen oder direkte Implementierung von komplexen Code in BAdI-Implementierung ohne weitergehende Strukturierung in eigenen Klassen. All dies ist zu vermeiden und durch entsprechende Prinzipien der Objektorientierung zu lösen.

{: .recommendation}
>- Fordern Sie bei allen Entwicklungen die Umsetzung in ABAP Objects unter Einsatz objektorientierter Methoden ein.
>- Achten Sie auf die Anwendung der SOLID Prinzipien der Objektorientierung.
>- Wenden Sie beim Anwendungsdesign die gängigen objektorientierten Designpatterns an.
>- Trennen Sie die unterschiedlichen Belange der Geschäftsanwendungen in Klassen auf (z.B. Controller Klasse, Datenzugriff, Geschäftslogiken, Prüfungen etc.).
>- Halten Sie die Schnittstellen klein und nutzen Sie die Factory für Übergabe wichtiger Daten an das Objekt.
>- Verschalen und konzentrieren Sie Aufrufe von SAP-Code bzw. Paketfremden Code in eigenen privaten Methoden.
>- Verwenden Sie klassenbasierte Ausnahmen für das komplette Fehlerhandling inklusive Nachrichtenabwicklung in der Anwendung.
>- Propagieren Sie nur Interfaces oder spezielle Fassadenklassen in den Paketschnittstellen.

Die detaillierte Erläuterung der Objektorientierung und die zahlreichen Möglichkeiten des modernen ABAP können wir in diesem Leitfaden nicht umfänglich abhandeln, möchten Ihnen aber bezüglich des Vorgehens Empfehlungen, Hinweise und Hilfen geben, die den Einstieg erleichtern und einen Überblick über Handlungsfelder geben, die schnell zu Verbesserungen führen können.

## Grundlagen und einfache Anwendung von Objektorientierung im ABAP Kontext

Das Thema Objektorientierung ist komplex und viele existierende Funktionalitäten in SAP folgen nicht den Designprinzipien der Objektorientierung, auch dann nicht wenn diese in ABAP-Klassen implementiert sind. Für dieses Kapitel sollten die Grundprinzipien der Objektorientierung bereits bekannt sein.  
Die Hinweise und Tipps erfolgen hier in sehr vereinfachter Form. Es soll ein Vorgehen aufzeigen um die Objektorientierung nutzbringend anzuwenden und unsere Empfehlungen praxisorientiert untermauern.  
Dies ist ein Anfang und kann helfen das Verständnis für ABAP-OO in den Entwicklerteams zu schaffen, erste Erfolgserlebnisse zu erzielen und mittels weitere Unterstützung durch Trainings und Coachings, Dokumentationen, Blogs und Online Events und durch Fachliteratur das Thema nachhaltig in der Organisation gewinnbringend zu nutzen.

## Merkmale Objektorientierter Entwicklung in ABAP-Klassen

Eine Klasse bildet eine spezielle (Teil-)Aufgabe ab, die in überschaubaren Methoden implementiert wird.  
Eine ABAP-Klasse besteht aus Attributen, die Werte speichern können oder Konstanten sein können.  
Es es gibt Methoden, die Funktionen implementieren und in *Public*, *Protected* und *Private* Methoden unterteilt sind. Man kann auch Klassenspezifische Typen definieren, die in der Klasse aber auch von Aufrufern verwendet werden können (wenn in Public Section definiert).  
Darüber hinaus definieren Klassen weitergehende Eigenschaften wie Paketzugehörigkeit und die Art der Instanziierbarkeit und ggf. Vererbungsinformationen.  
Oft werden ABAP-Klassen als eine moderne Form von Funktionsbausteinen betrachtet, dieser Vergleich wird den Möglichkeiten einer Klasse nicht gerecht.
Der entscheidende Unterschied ist die Instanziierbarkeit, d.h. es können für Klassen mehrere Objekte im gleichen Programmkontext erzeugt werden.

Bei einer Klasse, die nur statische Methoden beinhaltet und in der Verwendung nicht instanziiert wird, handelt es sich somit nicht um eine Klasse die objektorientierten Prinzipien folgt.

Weitere Erkennungsmerkmale einer Klasse, die **nicht** objektorientierten Prinzipien folgt sind:

- **Größe der Klasse** - eine Klasse mit vielen (öffentlichen) Methoden zeigt vermutlich auf dass das Single Responsibility Prinzip verletzt wurde  
- **Größe der Methoden** - umfangreiche Methoden weisen auf Strukturdefizite, redundanten Code und Verletzung des Separation of Concerns Prinzips hin.  
- **Umfangreiche Parameterschnittstellen** - Objekte arbeiten mit Objekten und nicht mit Parametern. Dies geht meistens mit zu großen Methoden einher. Daher besitzen objektorientierte Methoden oftmals sehr schmale Schnittstellen, die Objekte als Übergabeparameter, bei funktionalen Methoden Return Parameter, enthalten.  

Klassen, die die diese Erkennungsmerkmale besitzen, widersprechen den o.g. Anforderungen an modernen ABAP-Code.
Weitere Indikatoren finden z.B. im [Clean-ABAP Styleguide](https://github.com/SAP/styleguides/blob/main/clean-abap/CleanABAP.md).

Klassen sollen übersichtlich gestaltet werden und entsprechend dem Single-Responsibility Prinzip nur eine Aufgaben erfüllen. Methoden so kurz wie möglich und dabei auch nur eine Aufgabe erfüllen. Diese Beschränkung zwingt dazu, Aufgaben in verschiedene Klassen zu delegieren. Damit sind die einzelnen Klassen weniger Komplex, die Komplexität verschiebt sich damit je nach Anwendung in das Klassengeflecht und dem Zusammenspiel der einzelnen Klassen. Dieses Zusammenspiel und die übergeordnete Logik wird in einem **Controller** gebündelt.  
Um hier einer Komplexitätsverschiebung zu reduzieren und Strukturdefizite zu vermeiden, bedarf es guter Planung und Gestaltung der Struktur der Anwendung.  
Dass während der Entwicklung Methoden und Attribute verschoben und umbenannt werden und Objekte umstrukturiert [Refactoring](/ABAP-Leitfaden/abap/oo-design/#die-bedeutung-des-refactorings-von-bestehenden-anwendungen) werden, gehört zum Softwareentwicklungsprozess dazu und ist Dank moderner Softwareentwicklungswerkzeuge in den ABAP-Development Tools in Eclipse und zusätzlichen AddOns einfach und sicher durchzuführen.

## Grundprinzipien der Objektorientierung (SOLID)

Beim Einstieg in ABAP Objects geschieht es schnell, dass aus einer Funktionsgruppe mit mehreren Funktionsbausteinen einfach eine Klasse mit mehreren statischen Methoden wird. So können jedoch die Vorteile der Objektorientierung nicht genutzt werden. Die Nutzung von statischen Methoden verhindert etwa, dass Abhängigkeiten in Unit-Tests durch Mocks ersetzt werden können. Mehr Informationen finden Sie hierzu im [Clean ABAP-Guide](https://github.com/SAP/styleguides/blob/main/clean-abap/CleanABAP.md#prefer-objects-to-static-classes).

Ein Hilfsmittel für objektorientierte Entwürfe sind die SOLID-Prinzipien. Jeder Buchstabe gibt ein Prinzip für objektorientierte Entwicklung vor. Es gibt folgende Prinzipien:

- **S**ingle Responsibility Principle
- **O**pen/Closed Principle
- **L**iskov Substitution Principle
- **I**nterface Segregation Principle und das
- **D**ependency Inversion Principle

Eine kurze Beschreibung der Prinzipien finden Sie im [Unterabschnitt](/ABAP-Leitfaden/abap/oo-basics/), eine ausführliche Erklärung findet sich z.B. [im Blog von Uncle Bob](https://blog.cleancoder.com/uncle-bob/2020/10/18/Solid-Relevance.html), dem Autor von Clean Code.

Insbesondere die beiden ersten Prinzipien sind ohne allzu tiefes OO Verständnis in ABAP umzusetzen und der Mehrwert wird schnell ersichtlich wenn die Wartung und Änderung von Code besser durchgeführt werden kann und weniger Seiteneffekte auftreten. Detailliertes Wissen und die Anwendung im ABAP-Kontext finden sich in Fachliteratur zum Thema Agile Softwareentwicklung in ABAP bzw. Testdriven Design in ABAP.  

## Entwurfsmuster

In der Objektorientierung gibt es zahlreiche Entwurfsmuster (Design Pattern), die für verschiedene Problemstellungen und Anwendungsfälle bereits vorgefertigte und erprobte softwaretechnische Mechanismen bieten. Diese können auch in ABAP angewendet werden. So sind in ABAP folgende Pattern direkt und sinnvoll anwendbar:  

- **Factory** - Erzeugung von Instanzen einer Klasse
- **Singleton** - Erzeugung einer zentralen Instanz einer Klasse
- **Facade** - Verschalung von Komplexität einer Funktion  
   Fassaden eignen sich für die Propagierung in Paketschnittstellen zur Verwendung durch andere Pakete
- **MVC** (Model-View-Controller) - Trennung der Belange einer Anwendung

Detaillierte Erläuterungen und Code Beispiele finden Sie im [Unterabschnitt](/ABAP-Leitfaden/abap/oo-basics/)

Auch hier können wir leider nicht im Detail auf alle Entwurfsmuster eingehen, im Internet und der Fachliteratur finden sie zahlreiche Möglichkeiten, sich dem Thema anzunähern und in die Organisation zu bringen. Ein guter Startpunkt für die eigene Recherche ist z.B. [ABAP-OO Design Patterns m. Beispielen](https://zevolving.com/category/abapobjects/oo-design-patterns/).

## Vergleich Vorgehen prozedurale vs. objektorientierter Entwicklung

### Ablauf Prozedurale Entwicklung

Beim Umsetzen einer Anforderung z.B. in einem Report oder eines Funktionbausteins würde das Design gemäß der Spezifikation klassischerweise wie folgt sich gestalten:

- Übernahme der Eingangsdaten aus Import Parametern 
- Lesen des Customizing aus der Datenbank (z.B. Z-Tabelle)
- Lesen der Daten aus den Datenbanktabellen
- Verarbeiten der Daten mit Loops, Read Tables und diversen IF-Endif Kontrollstrukturen:  z.B. Prüfen, Berechnen, sortieren, abmischen ...
- Übergabe des Ergebnisses and Export Parameter
Damit wird die Anforderung in imperativer Form in Programmcode dargestellt, ggf. werden Teilfunktionen modularisiert.

### Ablauf bei Objektorientiertem Ansatz

Wenn die Anforderungen bekannt sind und analysiert wurden, sind zuerst die unterschiedlichen Aufgaben zu definieren und zu gruppieren. Anhand der Aufgaben können die Klassen und abgeleiteten sinnvollen Klassennamen definiert werden. Basierend auf diesem Vorgehen kann die objektorientierte Implementierung wie folgt aussehen:

- Definition Objekt zum Lesen und Auswerten des Customizing auf Basis Organisationsdaten = **Customizing Objekt**
- Definition Objekt zum Lesen der Datenbank, ggf. je nach Komplexität Aufteilung nach Geschäftsobjekt = **Datenobjekt(e)**.
- Definition Objekt welches die Datenprüfungen und Validierungen durchführt = **Check Objekt**
- Definition Objekt welches die Datenprozessierung durchführt und für die Erstellung des Ergebnisses zuständig ist **Geschäftslogik**.
- Definition Objekt welches die Geschäftsfunktionalität abbildet und das Zusammenwirken der einzelnen Objekte orchestriert und verwaltet = **Controller**.
- Erstellung einer Factory Klasse, die die einzelnen Objektinstanzen erzeugt.
- Definition einer Injektorklasse, mittels der das Mocking einzelner Funktionen ermöglicht wird.

Die Details zum ABAP Unit und wie man Unit-Tests erstellt finden Sie im Kapitel [**Testing**](/ABAP-Leitfaden/testing/index))

## Konzepte in der Objektorientierung

Neben den Grundlagen, gibt es weitere Konzepte und Techniken, durch deren Einsatz erst der volle Mehrwert der Objektorientierung zum Einsatz kommt und auch komplexe Problemstellungen elegant gelöst werden können, was mit klassischen Technologien deutlich aufwändiger oder gar nicht möglich war. Auch hier können wir in der ersten Version des neuen Leitfadens nur in sehr kurzer Form hinweisen. In der ABAP Dokumentation und in Trainings und Büchern finden Sie weitere Informationen.

### Erstellung von Factories

Jedes Objekt sollte eine Factory Methode haben, die Übergabe erforderlicher Parameter an die Klasse erfolgt über den Konstruktor der Klasse. Erfolgt die Instanziierung der Klassen einer Anwendung über eine zentrale Factory, wird die Factory Methode der Klasse in der Factory Klasse gerufen. Durch Anwendung des Factory Patterns, bleibt die Kontrolle der Objektinstanziierung bei den Klassen bzw. der zentralen Factory Klasse.

{: .note }
Vermeiden Sie, dass Klassen von außerhalb über den Befehl *New* bzw. *Create Object* instanziiert werden.

### Beispiel: Verschalung des Customizing in der Factory-Methode

Eine Klasse, die für die Auswertung des Customizing verantwortlich ist, kann derart gestaltet werden, dass in der Factory Methode die Customizing Tabelle geprüft wird, in der die Steuerung der Funktion hinterlegt ist.  
Nur wenn sich ein Eintrag in dieser Tabelle zu den Parametern der Factory-Methode (z.B. Werk oder Buchungskreis etc.) befindet, wird eine Instanz an den Aufrufer übergeben.  
Einzelne Parameter des Customizing können in Attributen der Customizing Klasse vorgehalten werden und mittels sog. Getter-Methoden bei Bedarf in anderen zugehörigen Klassen abgefragt werden.  
Falls kein Eintrag hierfür oder ein Problem vorliegt, sollte eine Ausnahme ausgelöst werden, die vom Aufrufer abgefangen wird. Somit muss der Aufrufer nicht mehr die Prüfung der Tabelle übernehmen, sondern bekommt nur dann eine Instanz zurück, wenn die Funktion im betreffenden Fall aktiv ist. Im Positivfall können dann über die zurückgegebene Instanz die entsprechenden Methoden aufgerufen werden.  

Alternativ bietet sich hier auch die Verwendung des Nullobjekt Entwurfsmusters an, bei dem im Falle einer negativen Customizingprüfung anstatt der Klasse mit der Implementierung, eine Klasse mit leerer Implementierung zurückgegeben wird. Beim Aufruf der Methoden des Nullobjekts passiert dann einfach nichts. Dies hat den Vorteil, dass der Aufrufer nicht mit Ausnahmen umgehen muss.  

Da dem Objektkonstrukt mittels der Factory die Customizinginstanz bekannt ist, ist der Zugriff auf das Customizing im gesamten Konstrukt standardisiert und ohne redundanten Code möglich.  
Dieses Verfahren folgt dem Prinzip der Steuerungsumkehr und trägt zur Separation of Concerns bei. Damit vereinfacht sich der Code der Geschäftslogik und die Komplexität des Customizing wird verschalt bzw. automatisiert.

Die Erstellung technischer Objekte erscheint anfangs aufwändiger als der Top-Down Ansatz beim prozeduralen Vorgehen. 
Mittels Autovervollständigung, Nutzung von Code Templates und Quickfixes in den ABAP Development Tools in Eclipse (ADT) wird der ABAP-Code für die technischen Klassen sehr schnell und einfach erstellt, wodurch sich der Mehraufwand im Coding sehr in Grenzen hält.  
Ist dieses Muster erst einmal eingeübt, übertreffen die Vorteile dieses Verfahrens den Nachteil des vermeintlich erhöhten initialen Aufwands bei weitem.  
Natürlich muss dass Vorgehen auch eingeübt werden um eine gewisse Entwicklungsperformanz und -effizienz zu entwickeln.  
Bitte beachten Sie hierzu den **[ADT-Leitfaden](https://1dsag.github.io/ADT-Leitfaden/)** der DSAG, der Sie unterstützt, ADT effizient und flächendeckend im Unternehmen einzusetzen.

### Vollständiger Einsatz von klassenbasierten Ausnahmen zur Fehlerbehandlung

Verwenden Sie für die Behandlung von Fehlern ausschließlich klassenbasierte Ausnahmen. Diese sollen auch nur für den Fall von Fehlern eingesetzt werden und nicht für Erfolgs- oder Statusmeldungen aus der Anwendung missbraucht werden. Lediglich technische Einschränkungen von Seiten SAP zwingen Sie an einigen wenigen Stellen dazu klassische Exceptions einzusetzen.  
Von der Verwendung von Returncodes raten wir ihnen ebenso ab wie von der alleinigen Rückgabe von Message Tabellen wie z.B. BAPIRET2, wie Sie dies z.B. in BAPI-Funktionsbausteinen oft vorfinden. diese Konzepte erzeugen das Problem, dass im aufrufenden Programm innerhalb des Ablaufs der Geschäftslogik geprüft werden muss, ob ein Fehlerfall vorliegt und somit eine saubere Trennung von technischen Belangen und Geschäftslogik nicht gegeben ist.
Der Einsatz von Ausnahmeklassen ermöglicht hier eine deutlich bessere Trennung, Des Weiteren können Sie die Fehlerbehandlung aufgrund der Propagierung von Ausnahmen an zentralen Stellen bündeln. Bitte beachtens Sie hierzu auch die Empfehlungen des 
[Clean-ABAP Styleguide](https://github.com/SAP/styleguides/blob/main/clean-abap/sub-sections/Exceptions.md)

Ein in ABAP-OO geübter Entwickler definiert in der Konzeptionsphase die auftretenden Fehlersituationen, die in einem (Unter)Paket auftreten können und erstellt darauf basierend die entsprechenden Ausnahmeklassen mit den Fehlermeldungen (als Text-ID oder Nachrichtenbasiert).
Wenn der Code der Geschäftslogik implementiert wird und die Fehler behandelt werden müssen, wird an der betreffenden Stelle die Exception aufgerufen. Die Behandlung muss nun nicht wie bei Funktionsbausteinen in jeweils jeder Aufrufschicht erfolgen, sondern kann zentral an einer Stelle erfolgen.
Dies gewährleistet eine konsistente Behandlung und vermindert den Aufwand wenn Fehler an mehreren Stellen auftreten können.

### Interfaces

Durch den Einsatz von Interfaces wird die Definition von Methoden und deren Implementierung voneinander entkoppelt. Wird ein Interface verwendet, kann die Implementierung der Klasse geändert, bzw. flexibilisiert werden. Das Interface definiert sozusagen den Vertrag zwischen Verwender und implementierender Klasse und "versteckt" somit die Implementierung (Software-Hiding-Prinzip).  
Für öffentliche Methoden die Funktionen für andere Klassen bereitstellen sollten Sie grundsätzlich Interfaces definieren und damit dafür sorgen, dass die Verwender nur mit diesen Interfaces arbeiten. Das Erzeugen von konkreten Objekten übernimmt eine separate Factory Klasse oder in besonders einfachen Fällen eine Factorymethode der Klasse, z.B.: ```ZCL_BUSINESS_LOGIC=>GET_INSTANCE( CompanyCode )``` [Siehe SAP-Styleguide](https://github.com/SAP/styleguides/blob/main/clean-abap/CleanABAP.md#prefer-multiple-static-creation-methods-to-optional-parameters)

Interfaces werden auch für Unit-Tests benötigt, da z.B. Datenbankzugriffe in Unit-Tests durch programmierte Testdaten ersetzt werden müssen. Die Datenbankklasse implementiert ein Interface, das im Produktcode aufgerufen wird. Wird der Unit-Test ausgeführt, wird statt der Datenbankklasse, eine sog. Mockingklasse aufgerufen, die statisch hinterlegte Daten beinhaltet, Methoden zur lokalen Testdatenerzeugung bereitstellt und diese zurückliefert oder Das OSQL Framework nutzt um die Datenbankabfragen im Test zu simulieren.  
Die Ausführungen dazu finden Sie im Kapitel [**Testing**](/ABAP-Leitfaden/testing/index).

### Vererbung

Ein wichtiges Konzept in der Objektorientierung ist die Vererbung. Dabei kann eine Klasse von einer anderen Klasse abgeleitet werden und somit die Eigenschaften der übergeordneten Klasse erben. So hat eine erbende Klasse die Attribute und Methoden der übergeordneten Klasse, kann aber weitere spezifische Methoden ergänzen oder ererbte Methoden redefinieren, d.h. eine Ergänzung der vererbten Implementierung oder gar eine eigene Implementierung der Methode erhalten.  
Bei der Vererbung ist das Liskovsche Substitutionsprinzip zu beachten und genau zu prüfen, ob im vorgesehenen Kontext Vererbung Sinn macht. Oft ist es besser statt Vererbung Interfaces zu verwenden oder die Methode der Delegation zu verwenden und verschiedene Aspekte einer Klasse auf verschiedene Klassen zu verteilen und das Zusammenspiel über einen Controller und die Instanzen über eine Factory zu regeln.  

## Objektorientierung in Funktionsbausteinen und Form-Routinen

Manchmal ist es erforderlich, dass Funktionalitäten in vorgegebenen Artefakten umgesetzt werden müssen. Z.B. Funktionsbausteine in AIF, Remote Funktionsbausteine, Form Interface Routinen bei Adobe Forms usw.
In diesem Fall dienen diese Entwicklungsobjekte als Verschalung und rufen die eigentliche Funktionalität nur auf, die dann in ABAP-Klassen und deren Methoden implementiert ist. Der Code in diesen Entwicklungsobjekten sollte sich nur auf technisches Coding beschränken wie z.B. Datenzuordnungen, Objektinstanziierung oder minimale Prüfungen.
Dies bietet wiederum den Vorteil der möglichen Wiederverwendung und Implementierung von Unit-Tests.

## Verwendung von SAP Code - Gesetz von Demeter

Die Verwendung von SAP-Code (Klassen, Funktionsbausteinen, BAPIs, etc.) oder auch paketfremder Code, sollte immer in einer eigenen Zugriffsschicht liegen. Dies entspricht dann auch einer sauberen Trennung der Belange (S - Separation of Concerns).  
Dies entspricht der Entwurfsrichtlinie der Objektorientierung ["Gesetz von Demeter"](https://de.wikipedia.org/wiki/Gesetz_von_Demeter), welches besagt, das Objekte nur mit Objekten in ihrer unmittelbaren Umgebung kommunizieren sollen.  
Auch wenn es sich um freigegebene Elemente handelt, sollten diese stets mit einer Klasse gekapselt werden, damit es zu einer zentralen Stelle des Übergangs von Eigen- an Fremdcode gibt.  

Erstellen Sie Klassen, deren Aufgabe es ist, den Programmcode der Anwendung frei von jeglichen Abhängigkeiten zum SAP Code oder zu paketfremden Code zu halten. Dies wird auch die Wiederverwendung fördern.  
Falls die Erstellung eigener Klassen überdimensioniert ist, kann in Sonderfällen die Trennung auch durch den Aufruf des fremden Codes in eigens dafür erstellten privaten Methoden erfolgen. Die Schnittstellendefinition sollte sich dabei eher an den Aufrufer und nicht am aufgerufenen Objekt orientieren. Somit ist später ein Austausch des verwendeten Fremdcodes einfacher. Je nach Komplexität kann das Mapping zwischen Eigen- und Fremdcodeschnittstellen in eigene Methoden ausgelagert werden.  
Ziel ist es hier Kontrolle über Abhängigkeiten zu behalten und die Wartbarkeit der Software zu erhöhen.

Datenzugriffe, z.B. CDS-Views oder SAP-Funktionsbausteine sollten aus Gründen der Testbarkeit in einer eigenen Datenbankzugriffsschicht implementiert werden, die eine Entkopplung des Datenzugriffs über Dependency Inversion für ABAP Unit Tests ermöglicht (s. Kapitel Testen).

Eine hilfreiche Erweiterung dieser Klassen ist die Transformation der klassischen Ausnahmen, oder Return Codes, die von SAP Code zur Fehlerbehandlung verwendet werden, hin zu Ausnahmeklassen.  
Diese Trennung ist auch eine wichtige Voraussetzung für die Testbarkeit einer Anwendung.

## Testbarkeit durch gutes Design

Gute Strukturierung in den Paketen, als auch in den Objekten sind grundlegende Voraussetzungen um die Testbarkeit der Software zu erhöhen. Sind die Verantwortlichkeiten der Komponenten im Rahmen einer guten Architektur geklärt und die Aufgaben auf verschiedene Objekte sinnvoll verteilt, erleichtert dies den Einsatz von ABAP Unit massgeblich.
Im Rahmen der vorgenannten Architektur- und Designentscheidungen müssen bereits testrelevante Aspekte miteinbezogen werden, um effizient ABAP-Unit umsetzen zu können, da die Struktur sich unmittelbar auf die Testbarkeit auswirkt.

Sind Datenbankzugriffe und Zugriffe auf SAP Funktionsbausteine oder Klassen bereits in einer eigenen Softwareschicht gekapselt und werden die Instanzen über eine Factory erzeugt, die eine Injection vorsieht, ist es für einen erfahrenen Entwickler sehr unproblematisch, den eigenen Code über ABAP Unit Tests zu testen und Datenbankzugriffe sowie SAP-Funktionen über Test-Mocks-Objekte zu entkoppeln. Dies verringert den Aufwand für die Unit-Test Erstellung deutlich gegenüber einem Vorgehen, bei dem der Testentwickler im Code Techniken wie Test-seams anwenden muss oder den Code umbauen muss, um die Entkopplung der Eigenentwicklung von SAP-Bausteinen in Tests sicherzustellen.

Das Vorgehen, Empfehlungen und Hinweise zu ABAP Unit finden Sie im Kapitel [Testen von SAP-Anwendungen](/ABAP-Leitfaden/testing/#testen).

## Die Bedeutung des Refactorings von bestehenden Anwendungen

Die in diesem Leitfaden beschriebenen Empfehlungen, technischen Methodiken und Programmiertechniken lassen sich sehr gut bei der Erstellung neuer Anwendungen einplanen und anwenden. darüberhinaus können und sollten diese auch zur Verbesserung bestehender Entwicklungen angewendet werden. Man bezeichnet dies als Refactoring  

Refactoring sollte immer dann vorgenommen werden, wenn bestehende Anwendungen geändert oder erweitert werden müssen. Dafür muss Zeit eingeplant werden. Gute Hinweise für ein sinnvolles Vorgehen zum Refactoring ist z.B. im [Clean-ABAP Styleguide](https://github.com/SAP/styleguides/blob/main/clean-abap/CleanABAP.md) beschrieben.

Refactoring beschreibt aber nicht nur die Verbesserung des Codes im Einzelnen, sondern kann im übertragenen Sinne auch auf die Struktur in Form der Pakete angewendet werden. Objekte können sinnvoll in neue Unterpakete verteilt werden. Falls bisher Ihre Anwendungen nicht auf einer Struktur basieren, die durch Hauptpakete geordnet sind, empfehlen wir, Hauptpakete zu erstellen, die Ihre Hauptfunktionalitäten abbilden und bisherige Pakete können dann diesen Paketen entsprechend ihrer Zugehörigkeit zugeordnet werden. Eine Aufteilung zu grosser Pakete in kleinere Pakete ist möglich, allerdings sind hier die Abhängigkeiten zu prüfen, zu klären und ggf. zu eliminieren. Dabei hilft aber die Paketkapselung und die Paketprüfung. Diese Funktionalitäten sind im optionalen Abschnitt [Grundlagen des Paketkonzepts](/ABAP-Leitfaden/abap/package_extended.md) detailliert erläutert.
Die Verbesserung an bestehender Software sollte kontinuierlich und in kleinen Schritten erfolgen und durch Tests abgesichert werden. Wenn dies im Entwicklungsprozess integriert ist und zum Tagesgeschäft der Entwicklung gehört, wird sich das mit besser wartbarer und weniger Fehleranfälligen Software auszahlen.

## Eine gute Architektur braucht auch sauberen Code

Nachdem Sie einiges über die Architektur und Struktur moderner Anwendungsentwicklung und Methoden zur Gestaltung der Software erfahren haben, lesen Sie im nächsten Abschnitt welche Eigenschaften Clean Code besitzt und erhalten unsere Empfehlungen und Hinweise wie moderner und sauberer Code (Clean Code) bei der Anwendungsentwicklung erreicht werden kann. Denn eine Anwendung sollte nicht nur eine gute Architektur und Strukturierung besitzen. Ebenso wichtig ist sauberen Code zu erstellen und den Clean-Code Prinzipien zu folgen. Denn dies unterstützt das Ziel moderner und wartungsfreundlicher Software.  
