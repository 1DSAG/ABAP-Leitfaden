---
layout: page
title: Formulare
permalink: /forms/
nav_order: 8
---

{: .no_toc}
# Formulare

1. TOC
{:toc}

## Formulartechnologien

Im Laufe der Jahre hat SAP verschiedene Formulartechnologien herausgebracht. Inzwischen gibt es drei verschiedene Technologien, welche in S/4HANA verfügbar sind. Dadurch herrscht bei vielen Unternehmen z.T. eine große Mischung was die Verwendung der verschiedenen Formulartechnologien angeht. Dementsprechend müssen die zuständigen Entwickler das entsprechende Knowhow für die verwendeten Formulartechnologien vorhalten.

Allgemein ist noch auf das Ende der Unterstützungsdauer für die Formulartechnologien SAPscript und SmartForms hinzuweisen, welche im Jahr 2040 liegt (siehe auch die Hinweise 2791338 und 2900377).

### SAPscript (1992 R/3)  

Auch im Jahr 2025 haben sehr viele Unternehmen weiterhin SAPscript Formulare im Einsatz. Häufig sind dies seit Jahren oder z.T. Jahrzehnten bestehende Formulare. Deshalb müssen ABAP Entwickler sich auch weiterhin mit dieser Technologie auskennen um ggf. Anpassungen an den Formularen vornehmen zu können.

Die Übertragung der Daten vom Druckprogramm an das Formular erfolgt per globaler Variablen. Die Variablen müssen exakt gleich im Druckprogramm und im Formular benannt werden, um eine automatische Datenübertragung zu gewährleisten.

Wird ein Formular in anderen Sprachen benötigt, so muss das Formular mit dem selben Namen, aber in der entsprechend anderen Sprache, in der Transaktion SE71 angelegt/gespeichert werden, um die Übersetzung durchführen zu können.

Während der Laufzeit können SAPscript Formulare gedebugged werden. Dafür muss der Debugger in Transaktion SE71 im Menü unter „Hilfsmittel“ als erstes eingeschalten werden. Anschließend wird das Druckprogramm / die Transaktion zum Prozessieren des Formulars ausgeführt.  
Das Debuggen ist relativ unkomfortable und eigentlich nicht mehr zeitgemäß. Es wird jedes Textelement angesprungen, was z.T. zeitaufwändig ist. Werte von Variablen kann man sich anzeigen lassen in dem der Variablenname ohne „&“ im Debugger eingegeben und mit ENTER bestätigt wird.  

Mittels Funktionsbaustein OPEN_FORM wird das SAPscript Formular aufgerufen.

| Transaktion | Beschreibung |
| --- | --- |
| SE71 | SAPscript Editor |
| SE72 | SAPscript Stil |
| SE78 | Verwaltung Formulargrafiken |
| SO10 | (SAPscript-) Standardtexte |
| TXBA | Verwendungsnachweis Textbausteine |

### SmartForms (2001) 

Im Vergleich zu SAPscript hat SmartForms eine modernere SAP GUI Oberfläche, zur Gestaltung von Formularen. Ab dieser Technologie wurde auch mit einer Schnittstelle zur Datenübertragung zwischen Druckprogramm und Formular gearbeitet. Somit ist jedoch auch eine Möglichkeit mehr da, wo sich evtl. Coding für eine Datenbeschaffung bzw. –steuerung verbergen kann.  

Bei dieser Technologie wurde die Mehrsprachigkeit von SAP besser umgesetzt als im SAPscript. Hier kann mittels Transaktion SE63 übersetzt werden und es muss nicht das komplette Formular in einer neuen Sprache angelegt werden. Des weiteren wurde eine Anbindung an das SAP Transportwesen integriert. Leider fehlt genauso wie bei SAPscript eine Versionierung der Formularanpassungen im Standard. Dies macht es erforderlich einen manuellen Prozess zu gestalten, mit dem gewährleistet wird auch kurzfristig auf einen älteren Formularstand zurückgehen zu können. Ein Beispiel hierfür wäre, dass anzupassende Formular unter einem neuen Namen (ggf. mit Datumsangabe im Namen) im Entwicklungssystem vor der Änderung in ein lokales Paket zu kopieren und somit diesen letzten im Produktivsystem funktionierenden Stand zu sichern. Stimmen Sie sich bezüglich Vorgehen und Namenskonvention unbedingt in ihrem Entwicklungsteam ab!  

Der Name des Schnittstellenbausteins wird vom System generiert und unterscheidet sich von SAP System zu SAP System (Entwicklung, Qualitätssicherung, Produktion). Daher ist es nötig den Funktionsbaustein „SSF_FUNCTION_MODULE_NAME“ im Druckprogramm aufzurufen um den tatsächlichen Namen (Importing-Parameter FM_NAME) des generierten Funktionsbausteins zur Laufzeit im jeweiligen SAP System zu ermitteln.  

Möchte man ein SmartForms Formular debuggen setzt man am Besten einen Breakpoint im generierten Schnittstellenfunktionsbaustein. Den Namen des Funktionsbausteins kann man sich über die Transaktion SMARTFORMS im Menü „Umfeld“ anzeigen lassen. Diesen Funktionsbaustein dann z.B. mittels Transaktion SE37 oder SE80 anzeigen und an entsprechender Stelle einen Breakpoint setzen.

Der SAP Standard liefert diverse Testprogramme und Testformulare aus. Diese beginnen mit „SF_\*“.

| Transaktion | Beschreibung |
| --- | --- |
| SMARTFORMS | SmartForms Editor für Formulare und Stile |

### Adobe Forms


#### SAP Interactive Forms by Adobe (2005)  


Lassen Sie sich von dem Teil „Interactive“ im Namen nicht täuschen – hierbei handelt es sich sehr wohl um „Druckformulare“ und nicht ausschließlich um interaktive Formulare.  

Das Formularlayout wird mittels LiveCycle Designer (LCD von Adobe) in der Transaktion SFP gestaltet. Der LCD muss dafür im SAP GUI installiert sein. Ebenfalls in der Transaktion SFP wird die Schnittstelle und der Kontext des Formulars angelegt und bearbeitet.

Folgende Funktionalitäten werden bei der Formulargestaltung mit SAP Interactive Forms by Adobe im Vergleich zu SAPscript und SmartForms unterstützt:  

- Grafiken können direkt eingebettet werden  
- Objekte können gedreht werden  
- verschiedene Seitenausrichtungen in einem Formular möglich  
- Grafische Elemente (Falzmarken) möglich  
- Wiederverwendung komplexer Layoutelemente  
- Verwendung von TrueType-Schriftarten möglich  
- Barcodes können auf vielen Druckern gedruckt werden (Postscript, PCL, PDF und Zebra)  
- Barrierefreiheit möglich  
- Drag&Drop Funktion zum Positionieren von Objekten

Adobe Formulare bestehen bzgl. Layout aus verschiedenen Objekten:

- Masterseite:  
    ein oder mehrere Masterseiten sind pro Formular möglich und sind die oberste Ebene eines Formulars um das Formular zu strukturieren. Hier werden Informationen, welche sich auf jeder Ausgabeseite wiederholen sollen platziert, ebenso wie die Größe und der Platz des Inhaltsbereichs definiert.  

- Inhaltsbereich:  
    Bereich zur Ausgabe der dynamischen oder statischen Inhalte.  

- Inhaltsseite:  
    enthält die Inhalte, die einem Inhaltsbereich einer Masterseite zugeordnet werden.

Um diese Objekte zu pflegen und zu bearbeiten, muss im Layoutbereich der Transaktion SFP zwischen den Tabreitern „Designansicht“ und „Masterseiten“ gewechselt werden.  
Der Tabreiter „PDF-Vorschau“ ermöglicht eine Vorschau auf das Formularlayout.

>**Tipp**:  
Wird bei Bearbeiten > Formulareigenschaften > Vorschau eine XFD.xml Datei mit Beispieldaten (welche z.B. aus einem Test- oder Produktivsystem generiert und heruntergeladen wurde) hinterlegt, so werden diese Formularinhalte dann auch in einem Entwicklungssystem unter “PDF-Vorschau” angezeigt. Dies ist äußerst hilfreich um z.B. inhaltsabhängige Formatierungen zu testen o.ä.
{: .highlight}

<br/>

![Vorschau](./img/image-01.png)

Vorschau
{: .img-caption}


_Hinweis:_  
Der LCD lässt Anpassungen im Anzeigenmodus zu. Diese können NICHT gespeichert werden!  
Vergewissern Sie sich also vor der Arbeit an einem Adobe Formular, dass Sie sich im „Ändern-Modus“ der Transaktion SFP befinden.  

Die Schnittstelle ist ein eigenständiges Objekt mit einem eindeutigen Namen. Sie kann mehrfach verwendet werden und stellt die Zuordnung der Anwendungsdaten, z.B. aus einem Druckprogramm, zum Formular dar.

![Aufbau](./img/image-02.png)

Aufbau
{: .img-caption}


Folgende Schnittstellentypen stehen zur Verfügung:

- ABAP Dictionary basierte Schnittstelle
- XML Schema basierte Schnittstelle
- Smart Forms kompatible Schnittstelle

Der am häufigsten verwendete Schnittstellentyp ist die „ABAP Dictionary basierte“ Schnittstelle.  
Die Schnittstelle besteht aus drei konkreten Bereichen:

- Formularschnittstelle  
    mit den Unterbereichen: Import, Export, Ausnahmen  

- Globale Definitionen  
    Zur Definition von Variablen um zusätzlich zu Daten der Formularschnittstelle auch andere Daten speichern zu können.  

- Initialisierung  
    Möglichkeit zusätzliche Daten im Formular nachzulesen. Das Coding sollte kurz und knapp gehalten werden. Der Editor hat an dieser Stelle einige Einschränkungen wie z.B. keine Vorwärtsnavigation und kein Pretty-Printer.  
    
    >**Empfehlung**
    Business Logik in eine Klasse auslagern, welche hier aufgerufen wird.  
    {: .highlight}

    *Hinweis:*  
    Um die Übersichtlichkeit nicht zu verlieren und die Logik des Formulardrucks nicht zu komplex zu machen, sollte vor jeder Implementierung überlegt werden, ob das nötige Coding im aufrufenden Druckprogramm hinterlegt wird oder in der Formularschnittstelle. Die Entscheidung hängt natürlich auch davon ab, ob ein SAP Standarddruckprogramm verwendet wird, oder ein kundeneigenes Druckprogramm.

Wie bei SmartForms wird auch bei Adobe Forms Formularen ein vom SAP System generierter Funktionsbaustein benötigt, um das Formular auszugeben. Da dieser Funktionsbausteinname ebenfalls wie bei SmartForms von System zu System unterschiedlich ist, muss der Funktionsbaustein FP_FUCTION_MODULE_NAME verwendet werden, um zur Laufzeit den richtigen Namen des Funktionsbausteins zu ermitteln.  
Grundsätzlich hat der generierte Funktionsbaustein die gleichen Import- und Exportparameter wie die Formularschnittstelle (SFP), außerdem sind die Kontextobjekte ebenfalls enthalten.

In das Debugging eines Adobe Formulars kann ebenfalls mittels Breakpoint im generierten Funktionsbaustein eingestiegen werden.  

Adobe Forms Formulare können mittels der Transaktion SFP versioniert werden. Dies kann manuell erfolgen oder wird automatisch durchgeführt, sobald ein Transport vom Entwicklungssystem in ein anderes SAP System erzeugt wird.

Die Übersetzung eines Adobe Formulars kann direkt in der Transaktion SFP durchgeführt werden (Menü: Springen > Übersetzung) oder mittels Transaktion SE63 (Menü: ABAP Objekte > Andere Langtexte > FS Formulare und Stile > PDFB PDF- basierte Formulare).

Der SAP Standard liefert diverse Testprogramme und Testformulare aus. Diese beginnen mit „FP_TEST\*“.

| Transaktion | Beschreibung |
| --- | --- |
| SFP | Adobe Form Builder für Formulare und Formularschnittstellen |

<br/>

#### SAP S/4HANA Forms (2015 S/4HANA)  


Grundlage sind Adobe Formulare mit Gateway-Schnittstellen, deren Datenbeschaffung mittels Gateway-Services (also keine klassischen Druckprogramme) erfolgt. Die Pflege erfolgt mit Fiori Apps und somit sind “SAP S/4HANA Forms” public-cloud-fähig.

Das Layout wird ebenfalls mit dem LiveCycle Designer, jedoch als standalone, designed. Hierbei ist zu beachten, das die bearbeiteten Objekte manuell in Transportaufträge aufgenommen werden müssen (mittels Fiori-App ID F1589) und es keine automatische Objektsperre gibt.  

Ebenso wie die “SAP Interactive Forms by Adobe” benötigen die SAP S/4HANA Forms einen Adobe Document Service (ADS -> SAP Forms Service by Adobe).

Zu nennen ist an dieser Stelle, dass kundenindividuelle Bedingungen nur sehr beschränkt abgebildet werden können.

Diese Formulartechnologie ist nur zusammen mit der Ausgabelösung S/4HANA Output Control (siehe Abschnitt XYZ) möglich.

_Hinweis:_  
- lokale Bearbeitung des Layouts / Formulars -> daher muss sich im Team abgestimmt werden!  
- keine autom. Transportanbindung -> Bedenken Sie das Sie alle Objekte manuell zusammensuchen und in einen Transport aufnehmen müssen.  

| App ID | Beschreibung |
| --- | --- |
| F1434 | Formularvorlagen pflegen |
| F2894 | Texte verwalten |
| F2761 | Logos verwalten |
| F1589 | Objekte in Transporte aufnehmen |

_Hinweis:_
Um diese Fiori Apps finden zu können muss die Katalog-ID SAP_BASIS_TCR_T dem angemeldeten Benutzer über eine Rolle zugewiesen werden (Transaktion PFCG).

![Transaktion PFCG](./img/image-03.png)

Transaktion PFCG
{: .img-caption}

![Zuordnung Katalog](./img/image-04.png)

Zuordnung Katalog
{: .img-caption}

![Zuordnung Benutzer](./img/image-05.png)

Zuordnung Benutzer
{: .img-caption}

Adobe Fragments

Es handelt sich hierbei um die Wiederverwendung von Masterformularvorlagen. Dadurch lassen sich Ausgaben aus unterschiedlichen Teilen zusammensetzen. Es wird zwischen den folgenden zwei Teilen unterschieden:

- Masterformular  
    Kopf- und Fußbereich  
    Findung durch Customizing in Abhängigkeit von Organisationsebenen wie z.B. Buchungskreis  

- Inhaltsformular  
    z.B. Rechnung oder Bestellung  
    Findung durch BRF+ in Abhängigkeit zur Ausgabeart (z.B. Bestellung)

Wichtige Fragmente sind z.B:

- SOMU_FORM_MASTER_A4
- SOMU_FORM_MASTER_LETTER

![Darstellung im SAP-GUI](./img/image-06.png)

Darstellung im SAP-GUI
{: .img-caption}


![Darstellung in Fiori](./img/image-07.png)

Darstellung in Fiori
{: .img-caption}


![Fragments](./img/image-08.png)

Adobe Fragments sind nur im Zusammenhang mit Output Control nutzbar
{: .img-caption}


## Ausgabelösungen

Im Folgenden erhalten Sie einen Überblick über die möglichen Ausgabelösungen.

### Nachrichtensteuerung (NAST)  
Mit der Nachrichtensteuerung werden verschiedene Ausgabearten wie Drucken, E-Mail, EDI, Workflows, Systemintegration (ALE) und Sonderfunktionen im SAP pro Nachricht zu diversen Modulen (z.B. SD und MM) gecustomzied. Über die sogenannte Konditionstechnik wird die produktive Ausgabe von Formularen und Etiketten gesteuert. Hinter einer Nachricht liegt die Zuordnung des Druckprogramms und des Formulars, welche angestoßen werden, wenn eine Nachricht erzeugt wird.  

Die Transaktion NACE dient als zentraler Einstiegspunkt zur Pflege der Nachrichtenfindung pro Applikation. Die dort gepflegten Einstellungen werden in der Datenbanktabelle TNAPR gespeichert.  
    
_Hinweis:_  
Eine Auswertung aller erzeugten Nachrichten kann über die Transaktion TAANA für die Datenbanktabelle NAST erstellt werden. Hierfür muss diese Transaktion im Produktivsystem ausgeführt werden. Um die Auswertung Jahresweise durchzuführen muss vorher ggf.noch ein neues „virtuelles Feld“ (ERYEAR) hinzugefügt werden. Die Ergebnisliste kann als Excel-Tabelle heruntergeladen werden und dort für eine leichtere Auswertung zur Pivot-Tabelle umgestellt werden.

Eine solche Auswertung empfiehlt sich, um sich einen Überblick zu verschaffen, welche Nachrichtenarten überhaupt und hauptsächlich verwendet werden. In welchen Sprachen werden meine Belege (Formulare) ausgegeben und wie groß ist das jeweilige Volumen. Dies hilft bei einer weiteren Planung von Umstellungs- und Go-Live Szenarien.  

Eine genaue Anleitung zur Nutzung der Transaktion TAANA finden Sie unter folgendem Link (HIER SOFTWAY LINK ERLAUBT BEI YOUTUBE????).

![Pflege der Tabelle](./img/image-09.png)

Pflege der Tabelle
{: .img-caption}

![Pflege der Felder](./img/image-10.png)

Pflege der Felder
{: .img-caption}

### Post Processing Framework (PPF)

Das PPF dient der Automatisierung von bestimmten Aktionen in der Lieferabwicklung zur Ausgabe von Dokumenten von Belegen per Drucker oder per E-Mail. Verwendung findet es z.B. im eWM und TM. Die Pflege erfolgt über die Transaktion SPPFCADM.  

### Druck-Workbench

Die Ausgabe von Dokumenten erfolgt über die Definition von Korrespondenzarten. Verwendet wird sie vor allem als Branchenlösung im IS-U Bereich (Energieversorger), ist aber auch außerhalb von IS-U grundsätzlich verfügbar. In der Druck-Workbench wird die Datenversorgung eines Anwendungsformulars gekapselt. Es können zur Datenermittlung SAP Standard Objekte oder kundeneigene Objekte verwendet und hinterlegt werden. Mittels Transaktion EFRM werden die relevanten Einstelllungen vorgenommen werden.  

### Applikationsspezifische Lösungen

Applikationsspezifisches Customizing bestimmt die Ausgabe von Dokumenten. Diese Art der Ausgabelösung wird z.B. im FI, PP und QM verwendet. Im FI zum Beispiel wird die Findung des Mahnformulars abhängig von der Mahnstufe durchgeführt.  

### S/4HANA Output Control  

Mit SAP S/4HANA bietet SAP eine weitere Ausgabelösung mit dem Namen „SAP S/4HANA Output Management“ an. Diese beinhaltet den wiederverwendbaren Service „SAP S/4HANA Output Control“, welcher für viele komplexe Ausgabeszenarien verwendet werden kann. Auf Ebene von Organisationseinheiten kann die Findung von Masterformularvorlagen, Logos und allgemeine Kopf- und Fußtexte gecustomized werden. Mit dieser Ausgabelösung können sogenannte „Adobe Fragments“ verwendet werden. Siehe hierzu den entsprechenden Abschnitt. Im Vergleich zur Nachrichtensteuerung (NAST) haben Sie mit dem Output Control die Einschränkung, dass keine Workflows und Sonderfunktionen hinterlegt werden können.  

![Output Szenarien](./img/image-11.png)

Output Szenarien
{: .img-caption}

Hinweis:  
In diesem Zusammenhang wird oft BRFplus (oder BRF+) als Ausgabelösung genannt. Dies ist falsch. BRFplus ist _eine optionale Möglichkeit_ um eine Konfiguration für die Dokumentenausgabe zu hinterlegen (= ein Regelwerk, ähnlich der Konditionstechnik NAST).  

Die Einstellungen im S/4HANA Output Control erfolgt in der GUI über den folgenden Pfad:  
Transaktion SPRO > Anwendungsübergreifende Komponenten > Ausgabesteuerung  

Unter Hinweis [2791338](https://me.sap.com/notes/2791338/E) finden sich FAQs zum Thema Ausgabesteuerung.

## Adobe Document Services  

Adobe Document Services – auch kurz „ADS“ genannt – wird von SAP Interactive Forms als auch SAP S/4HANA Forms benötigt, um die gewünschten Datei- oder Druckformate zu erzeugen (Rendering). Mit anderen Worten handelt es sich hierbei um die Services, welche die Dokumente zur Laufzeit erzeugen und generieren. 

Die erzeugten Dateiformate sind PDF oder PDF/A. Das Format PDF/A stellt hierbei eine Variante des PDF dar, welche verwendet wird um Langzeitarchivierung sicherzustellen. Damit können Dokumente, unabhängig von der verwendeten Software, immer wieder reproduziert werden, da alle relevanten Informationen in der Datei eingebettet sind.  

Die folgenden wichtigsten Druckformate können von den ADS erzeugt werden:
- PCL
- ZPL
- PostScript

Abhängig von der ADS Version werden auch die Druckersprachen z.B. IPL, DPL oder TPCL unterstützt.

Bei den Adobe Document Services muss zwischen zwei Versionen unterschieden werden. Einer lokalen on-premise Version „lokalem ADS“ und einer Cloud Version „SAP Forms Service by Adobe (Cloud-ADS)“.

### ADS On-Premise

- SAP Wartung und Support auf  
    - SAP NetWeaver Application Server Java bis 2027 (erweiterte Wartung bis 2030)  
    - SAP S/4 HANA Java bis 2030
- Die Nachfolgelösung wird auf SAP HANA Extended Application Services Advanced Model (XSA) laufen und ist für Q1 2027 mit dem S/4 HANA 2025 FPS03 geplant.
- Für Druck-Formulare lizenzkostenfrei
- [Blog zur Maintenance Strategie von SAP](https://community.sap.com/t5/technology-blogs-by-sap/maintenance-strategy-adobe-forms-on-premise/ba-p/13627957)

### SAP Forms Service by Adobe (Cloud-ADS)

- Läuft als Service auf der SAP BTP (Cloud Foundry Environment)
- Bereitstellung und Wartung durch SAP
- Zusätzliche Informationen unter Hinweis 2219598  

Ob die Adobe Document Services in Ihrem System eingerichtet und angebunden sind, können Sie mit dem Testprogramm FP_TEST_00 (Form Processing – Zentrales Testprogramm) schnell und zuverlässig testen.

Weitere Testprogramme sind:

- FP_TEST_01 Form Processing – Zentrales Testprogramm mit Archivierung
- FP_TEST_02 Form Processing – Testprogramm für verschiedene Datentypen