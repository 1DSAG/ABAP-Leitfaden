---
layout: page
title: ABAP Unit Framework
permalink: /testing/abap_unit/
parent: Testen
nav_order: 2
---

{: .no_toc}
# Testing mit dem ABAP Unit Test Framework

1. TOC
{:toc}


## offene Punkte:

- Erfahrungen und bekannte Probleme bei Unit Tests.  Z.B. das SAP Factories immer wieder gemockt werden müssen.

## ABAP Unit Tests

Dieses Kapitel handelt von automatisierten Entwicklertests (Unit Tests) in ABAP und richtet sich an Programmierende jeglichen Niveaus als auch an managende und organisierende Personen. Jede Person, die in irgendeiner Form mit ABAP-Programmierungen in Berührung kommt, sollte wissen, was Unit Tests sind, wie sie eingesetzt werden und welche Grenzen sie haben.

Wenn im Folgenden von _Unit Tests_ die Rede ist, dann sind ABAP Unit Tests mit Hilfe des ABAP Unit Frameworks gemeint. Das ABAP bezieht sich lediglich auf die Besonderheiten von Unit Tests im ABAP-Unit Framework. 

### Einstieg

Unit Tests sind wichtig. Das Erstellen, Verwalten und Entwickeln von Unit Tests erfordert umfangreiche Kenntnisse, die über das reine schreiben von ABAP hinaus gehen. Das widerspricht der Aussage, dass sich dieses Kapitel an alle Programmierende richtet, unabhängig vom Wissensstand. Das ist jedoch nur auf den ersten Blick widersprüchlich, denn wir wollen mit diesem Kapitel alle erreichen. Wenn jemand noch nicht gut oder gar nicht objektorientiert programmieren kann, sich nicht mit Entwurfsmustern und anderen Programmierparadigmen auskennt, dann sollte das gelernt werden. Unit Test können eine gute Umgebung darstellen Techniken zu erlenen und diese anschließend auf den Produktiven Code zu übertragen.
Wir wollen Anregungen und Hilfestellungen dazu geben. Gleichwohl können wir an dieser Stelle nur begrenzt Informationen zu diesem Thema bereitstellen.

>**Empfehlungen**
- Wir empfehlen Unit Tests
{: .highlight}


#### Skills die beim Arbeiten mit Unit Tests trainiert werden
 - Objekrientiertes Desing z.B. Lose Kopplung
 - erstellen von testbaren Designs (IoC & DI)
 - Agile Prinzipien und Methoden der Software Entwicklung z.B. ( S.O.L.I.D )
 - Test Prinzipien ( F.I.R.S.T )
 - Erstellen von keinen Einheiten



### Was sind Unit Test genau?
Unit Tests sind Funktionen, die modularisierte Einheiten (Methoden, Funktionsbausteine) oder ganze Prozesse mit vorgegebenen Funktionen aufrufen und das Ergebnis mit den erwarteten Vorgaben abgleichen. 

Folgendes Beispiel demonstriert die Vorgehensweise: Es gibt eine Klasse mit einer Methode, die aus einem Text die Straße und die Hausnummer ermitteln soll. Es werden nun Unit Tests erstellt, die aus bereits bekannten Problemen testen, ob das erwartete Ergebnis ermittelt wird.

Rufe die Methode ```ZCL_ADDRESS->SEPARATE_HOUSENO_FROM_STREET``` mit der Eingabe ```ABC-Straße 13``` auf und prüfe, ob das Ergebnis ```13``` ist. Sollte das Ergebnis vom erwarteten Wert abweichen, dann schlägt der Unit Test fehlt und erzeugt eine Fehlermeldung in der Testumgebung.

Für die Prüfung des Ergebnisses gibt es eine Reihe von Methoden der Klasse ```CL_ABAP_UNIT_ASSERT```. Die bekannteste Methode ist ```EQUALS```. Sie prüft, ob der vorgegebene Wert gleich dem erwareteten Wert ist. Es gibt noch andere Methoden, auf die wir im weiteren Kapitel eingehen.

Unit Tests werden in der Regel als lokale Testklassen zu einer globalen Klasse definiert. Die Unit Tests werden nur im Entwicklungssystem durchgeführt. 


### Wann sind Unit Tests sinnvoll?
Beim Thema Unit Tests gibt es in der Regel zwei Lager: Die einen sagen, dass jegliches Coding mit Unit Tests geprüft werden muss (100% Code-Abdeckung). Die anderen sind der Meinung, dass Unit Tests überbewertet werden.
Wir sind der Meinung, dass Unit Tests zum Programmieralltag dazugehören und dort eingesetzt werden sollten, wo sie sinnvoll sind. 

Was unter "sinnvoll" zu verstehen ist, sollte jedes Team für sich selbst herausfinden. Ebenso sollte bewertet werden, ob eine Funktionalität als "kritisch" eingestuft werden kann. Wenn es eine kritisch Geschäftsfunktion gibt, dann sollte die Funktionalität auf jeden Fall über Unit Tests abgedeckt werden.

Besonders Prädestiniert für Unit Tests sind Methoden, die eine komplexe Logik haben und/ oder geschäftskritisch sind. 

#### Grundsätzlich ist fasst alles mit ABAP Unit testbar 
"Das kann man nicht testen" 
Es gibt Programmbereiche, die nicht mittels ABAP Unit Tests überprüft werden können. Dazu gehören alle Programmteile, die auf einen Dialog angewiesen sind oder Daten Darstellen (ALV-Grid).
Für alles andere gibt es möglichkeiten diese Programme mit unittest ab zu sichern. Anfänglich wird dies aufwändig und müsam sein. Die Mühe wird sich aber lohnen uns schnell auszahlen.
Es is definitiv möglich Bapis / Badis / RFC / IDOC / mit Unitest ab zu sichern. 

### Behandlung von Mandanten in Unit Tests 
Die klassischen Systemkonfikuration im Entwicklungsystem mit einen Entwicklungs- und einem Testmandanten stellen eine Hürde für den reibungslosen Ablauf Komponenten- oder Integrationstests dar, da diese meinst von Daten der datenbank abhängig zu sein seinen. 

>**Empfehlung**  
Erstellen sie ihre ABAP Unit Test Unabhänhig von der Datenbank, so dass sie mit hilfe von dependency Injection und Mocks
in jedem Mandanten laufen. Die Hürde dabei entsteht, dass im Mandant 100 entwickelt wird und in 110 die Unit Test laufen führt dazu, dass Entwickler seltener Unit Tests laufen lassen.\
Sie sollten alles dafür Einsetzen das Unit Test in jedem Mandanten immer lauffähig sind. 
Welche Techniken Sie beim Erreichten dieser Unabhängigkeit untestützen finden sie hier im  Abschnit [Erweiterte Techniken](#erweiterte-techniken)
{: .highlight}



### Testumgebung

Die ABAP-Unit-Tests können aus den ABAP-Development-Tools heraus oder der SAP-GUI Entwicklungsumgebung (SE80, SE24) erstellt und verwendet werden. Die Vorgehensweise unterscheidet sich nur in Kleinigkeiten.
Empfohlen wird hier klar ADT, da hier auch die verwendung von [Test Relations](https://www.youtube.com/watch?app=desktop&v=yiKhKlQz89Y&t=14s) möglich ist. \
Die Techniken, die zur Erstellung notwendig sind, ähneln sich jedoch stark. Unit Test, die in der SE80 erstellt wurden, können auch in Eclipse gewartet und getestet werden und umgekehrt. Die Tastenkombination zum Ausführen der Unit Test ist in beiden Tools **STRG + SHIFT + F10.** Andere Funktionen sind in der ABAP Workbench teilweise nur durch das Menü erreichbar während es im ADT eine Tastenkombination dafür gibt.



In den folgenden Kapiteln werden diese Themen behandelt:
* Erstellen von Unit Tests
* Ausführen von Unit Tests
* Ergebnisanzeige
* Codeabdeckung (Code Coverage)

Wir gehen davon aus, dass Sie Erfahrung mit dem jeweiligen Tool haben. Aus diesem Grund erfolgt keine Schritt-für-Schritt-Anleitung, sondern lediglich eine grobe Darstellung des Vorgehens.

#### Tastenkombinationen  ( TJOHN:"Würde ich streichen, zu detailliert hier das Tooling zu erklären")

ADT

* Ctrl + Shift + F9: Unit Test Preview anzeigen
* Ctrl + Shift + F10: Unit Tests ausführen
* Ctrl + Shift + F11: Unit Tests mit Coverage ausführen
* Ctrl + Shift + F12: Unit Test Ausführungsdialog aufrufen
* Ctrl + Shift + (F2: ATC-Prüfung mit Standardvariante ausführen)

ABAP Workbench

* Ctrl + Shift + F10: Unit Tests ausführen
* Ctrl + Shift + F11: Lokale Testklassen anzeigen (nur formularbasierter Editor)
* Ctrl + F11: Lokale Testklassen anzeigen (nur Quelltext-basierter Editor)

#### Eclipse ( TJOHN:"Würde ich streichen, zu detailliert hier das Tooling zu erklären")

* Öffnen globale Klasse
* Tab "Test Classes"
* Muster testClass


#### SAPGUI/ SE80 ( TJOHN:"Würde ich streichen, zu detailliert hier das Tooling zu erklären")

* Öffnen globale Klasse SE24/ SE80
* Menü: Utilities - Test Classes - Generate



### GIVEN - WHEN - THEN
GIVEN-WHEN-THEN ist ein Stil, um Unit Test zu formulieren. Mit GIVEN wird eine Bedingung angegeben, unter denen der Test stattfinden soll. WHEN beschreibt die Aktion, die durchgeführt wird und THEN beschreibt das erwartete Ergebnis.

Bezogen auf unser Beispiel mit der Hausnummer könnte die Formulierung heißen:\
GIVEN: ABC-Straße 13\
WHEN: die Hausnummer aus diesem String ermittelt wird\
THEN: Sollte die Hausnummer 13 sein


### Clean Code in Unit Tests
Oft trifft man auf die Einstellung, dass es in Unit Tests nicht nötig ist sich an Regen der Code Qualität zu halten #CleanABAP. Schlechte wartbarkeit Qualität in Unit Tests wird dazu führen dass die Tests nicht weiterentwickelt werden und nutzlos werden. Doppelter Code, fehlende Modularisierung ist hier ebenso zu vermeiden wie in produktiven code. 

#### Unit Test sauber halten
Ebenso ist es zwingend nötig alle Unit Test Erfolgreich durch zu führen. Seien sie hier nicht nachlässig und priorisieren sie diese Augaben die es bedürfen den Geschäfts-Code oder den Unit Test zu repariern, bis wieder alle Tests erfolgreich sind. 

### RAISING cx_static_check  #Review: Timo John"Alte Dokumentation( in aktueller nciht mehr drin) & meiner Ansicht nach nicht sinnvoll als Regel"

[SAP empfiehlt](https://help.sap.com/doc/saphelp_crm700_ehp03/7.0.3.11/de-DE/dd/587324e2424b14ab5afb3239a77a8d/frameset.htm): Wenn der zu testende Code in der Lage ist, eine Ausnahme auszulösen, sollte die Testmethode selbst diese nicht behandeln, sondern sie in ihrer Signatur deklarieren (abgesehen von provozierten Ausnahmen), so dass der Testfall fehlschlägt, wenn er zur Laufzeit auftritt. 



### Unit Test Klasse  #Review TJOHN macht das wirklich Sinn das zu erklären ?? 
* Beschreibung, wie eine Klasse aufgebaut ist
* Risklevel
* Duration
* erstellen in
  * Eclipse
  * SE80
* SETUP 
* TEARDOWN
* FOR TESTING
* genereller Ablauf


#### Risiko Level 
* @all:   Gibt es Erfahrungen mit den Einstellungen 

Folgen sie den Vorgaben der SAP zum Risiko Level:
* CRITICAL - a test changes system settings or customizing data (default)
* DANGEROUS - a test changes persistent data
* HARMLESS - a test does not change system settings or persistent data

Grundsätzlich sollten Sie es vermeiden Tests zu schreiben, die wirkliche Ändrungen an der Datenbank vornehmen ( müssen ) während ihrer Laufzeit. Dies ist oft ein Indiktor für fehlendes Management von Abhängikeiten bzw. deren Austausch. 
 
Ihr Ziel muss sein möglichst alle Tests als Hamrless definieren zu können. 

Mit hilfe der von SAP bereitgestellten Framworks zum Mocken von Datenbanktabellen und CDS Views ist dies ermöglicht worden. Siehe Abschnitt [Mocking..](Mocking, faking, spying und stubbing)

#### Dauer / Duration

Einstellung der verschiedenen Laufzeiten können sie via Transaktion: SAUNIT_CLIENT_SETUP vornehmen. 

Auch hier gilt das klare Ziel, dass ihre Tests schnell sein müssen, damit sie immer wiedr ausgeführt werden können. 


### ASSERT  #Review TJOHN macht das wirklich Sinn das zu erklären ?? 

* Vorstellung CL_ABAP_UNIT_ASSERT ?? macht das wirklich Sinn das zu erklären ?? 


### Beispiel Testklasse

Das folgende Beispiel zeigt die Testklasse zu der globalen Klasse `ZCL_ADDRESS`, in der die Methode `SPLIT_ADDRESS` dafür zuständig ist, einen String, der Adresse und Hausnummer enthält, in die Bestandteile `Straße` und `Hausnummer` aufzuteilen.

```
CLASS ltcl_verify_addresses DEFINITION FINAL FOR TESTING
  DURATION SHORT
  RISK LEVEL HARMLESS.

  PRIVATE SECTION.
    DATA cut TYPE REF TO zcl_address.
    METHODS:
      setup,
      strasse_17_juni FOR TESTING,
      abc_strasse FOR TESTING,
      parkallee FOR TESTING.
ENDCLASS.


CLASS ltcl_verify_addresses IMPLEMENTATION.

  METHOD strasse_17_juni.
    DATA(address) = cut->split_address( |Straße des 17. Juni 134| ).
    cl_abap_unit_assert=>assert_equals(
      exp = |Straße des 17. Juni|
      act = address-street ).
    cl_abap_unit_assert=>assert_equals(
      exp = |134|
      act = address-house_no ).
  ENDMETHOD.

  METHOD abc_strasse.
    DATA(address) = cut->split_address( |ABC-Straße 89| ).
    cl_abap_unit_assert=>assert_equals(
      exp = |ABC-Straße|
      act = address-street ).
    cl_abap_unit_assert=>assert_equals(
      exp = |89|
      act = address-house_no ).
  ENDMETHOD.

  METHOD parkallee.
    DATA(address) = cut->split_address( |Parkallee 11 a-f| ).
    cl_abap_unit_assert=>assert_equals(
      exp = |Parkallee|
      act = address-street ).
    cl_abap_unit_assert=>assert_equals(
      exp = |11 a-f|
      act = address-house_no ).
  ENDMETHOD.

  METHOD setup.
    cut = NEW #( ).
  ENDMETHOD.

ENDCLASS.
```


#### Methoden zur Zusammenstellung von abhängigen Klassen

Bei komplizierten Testfällen müssen eventuell umfangreiche Vorarbeiten getan werden, damit die eigentlichen Tests durchgeführt werden können. Es sollten zwar so wenig Abhängigkeiten wie möglich vorhanden sein, aber gänzlich vermeiden lassen sich Abhängigkeiten leider nicht immer. Hilfsmethoden können helfen, das notwendige Setup für einen Test vorzubereiten.

**Beispiel:**

Die Methode `prepare_setup( ).` erstellt zwei Instanzen, die zur Verifizierung der Adresse notwendig sind:
* Strassenverzeichnis
* Postleitzahlenkatalog

#### Hilfsmethoden zum Aufbau von Testdaten

Wenn Testdaten aus vielen Komponenten bestehen (Kopfdaten, Positionsdaten, Partner, Materialien usw.), dann kann das Zusammenstellen dieser Daten umfangreich werden. Entsprechende Hilfsmethoden sind hier unbedingt erforderlich um die Zusammenstellung erleichtern.

**Beispiel:**

Die Methode `get_setup_for_document( doc_id = c_nice_docuemt_id ).` stellt alle notwendigen Daten zur Verfügung, die zu dem geforderten Dokument gehören.
{: .note }
Wenn sie auf Dokumente der Datenban zurückgreifen müssen, pflegen Sie zentral Konstanten mit sprechenden Namen und Erläuterungen.  Sie werden irgendwann nicht mehr wissen welche Eigenarten Beleg 564 hatte.   
```ABAP
CONSTANTS:  "! Sales order that has one item, Material ..., not released ... 
             c_order_one_iten_ok
```


#### Hilfsmethoden zur Modularisierung von Tests

Bei Tests kann es notwendig sein, dass nicht nur ein Aspekt des Ergebnisses getestet wird, sondern viele. Solche Programmierungen können in der Regel gut in Methoden ausgelagert werden.

**Beispiel:**

Die Methode `verify_address_is_valid( address = data )` prüft nicht nur, ob Straßenname und Hausnummer erfolgreich extrahiert werden konnten, sondern auch, ob die Postleitzahl aus fünf Zahlen besteht und mit dem Ortsnamen übereinstimmt.

### Testen von privaten, geschützten und öffentlichen Methoden
Es gibt die Meinung, dass nur öffentliche Methoden getestet werden sollten. Über die Codeabdeckung kann analysiert werden, ob alle Codestrecken durchlaufen wurden.
Allerdings kann das Bereitstellen der notwendigen Daten sehr aufwändig sein, so dass es sinnvoll sein kann, die kleineren Einheiten (private und geschützte Methoden) zu testen. Zudem "verwässern" umfangreiche Datenkonstellationen den Zweck eines Unit Tests. Tests für private Methoden können ebenfall helfen den Ursprung eine Fehlers schneller zu lokalisieren. 

**Beispiel Adressaufbereitung:**\
Nehmen wir an, wir haben eine Klasse, die Adressen entgegen nimmt und analysiert. Die eine Methode ```SEPARATE_HOUSENO_FROM_STREET``` haben wir bereits kennengelernt. Zusätzlich gibt es eine Methode ```CHECK_POST_CODE```, die sicherstellen soll, dass die Postleitzahl 5-stellig ist und nur aus Zahlen besteht. Wenn beide privaten Methoden von der öffentlichen Methode ```CHECK_ADDRESS``` aufgerufen werden, müssen wir zum Testen immer eine komplette Adresse übergeben. Einfacher und auch deutlicher ist es, wenn wir die privaten Methoden separat testen.
Sie können so nur die eigentliche Funktion der Methode ```SEPARATE_HOUSENO_FROM_STREET``` testen, das Aufteilen,  da die Prüfmethoden  `CHECK-` eigene Tests besitzen. 

### Unit Tests erweitern
Wenn wir uns das Beispiel mit dem Ermitteln der Hausnummer ansehen, dann gibt es viele Fallstricke, die ein unerwartetes Ergebnis hervorrufen können. Die Eingaben, die zu einem fehlerhafte Ergebnis führen, kennen wir im Vorfeld jedoch nicht. Wir lernen sie erst kennen, wenn sich Anwender beschweren, die ein falsches Ergebnis erhalten. In diesem Fall können die Eingaben, die zu fehlerhaften Ausgaben geführt haben, in einen Unit Test aufgenommen werden. Nach der Änderung des Codings werden alle bereits definierten Unit Tests durchgeführt und der Entwickelnde kann sicher sein, dass alles wie zuvor funktioniert.


#### Beispiel Testklasse mit Hilfsmethode

In diesem Beispiel wird die Demoklasse aus dem vorherigen Kapitel, die eine Adresse in ihre Bestandteile Straße und Hausnummer aufteilt, aufgegriffen. Diese Klasse hat drei Testmethoden für einzelne Varianten. Da das Schema immer das gleiche ist, wäre es einfacher, wenn die Straßennamen und Hausnummern zusammengesetzt und dann in einer Methode getestet würden. 

Also zum Beispiel:

`verify_address( strasse = 'Beispielstraße'  house_number = '23' )`.

Die Testklasse könnte dann wie folgt aussehen:

```ABAP
CLASS ltcl_verify_addresses_helper DEFINITION FINAL FOR TESTING
  DURATION SHORT
  RISK LEVEL HARMLESS.

  PRIVATE SECTION.
    DATA cut TYPE REF TO zcl_address.
    METHODS:
      setup,
      verify_address
        IMPORTING
          street   TYPE string
          house_no TYPE string,

      test_german_standards FOR TESTING.
ENDCLASS.


CLASS ltcl_verify_addresses_helper IMPLEMENTATION.

  METHOD test_german_standards.

    verify_address( street = |Straße des 17. Juni| house_no = |134| ).
    verify_address( street = |ABC-Straße| house_no = |89| ).
    verify_address( street = |Parkallee| house_no = |11 a-f| ).
  ENDMETHOD.

  METHOD setup.
    cut = NEW #( ).
  ENDMETHOD.

  METHOD verify_address.

    DATA(address_string) = |{ street } { house_no }|.
    DATA(address_result) = cut->split_address( address_string ).
    cl_abap_unit_assert=>assert_equals(
      exp = street
      act = address_result-street
      msg = |Streetname should be { street }| ).
    cl_abap_unit_assert=>assert_equals(
      exp = house_no
      act = address_result-house_no
      msg = |House number should be { house_no }| ).

  ENDMETHOD.

ENDCLASS.
```

Die Testklasse enthält nun nur noch die eine Testmethode `TEST_GERMAN_STANDARDS`, in der alle Tests durchgeführt werden.

Es gibt eine Hilfsmethode `VERIFY_ADDRESS`, die einen Straßennamen und eine Hausnummer entgegennimmt, diese zusammensetzt und durch die zu testende Methode `SPLIT_ADDRESS` wieder aufteilen lässt. Da ein Testfall nun nicht mehr 1:1 einer Testmethode entspricht, wurde der Parameter `MSG` von `CL_ABAP_UNIT_ASSERT=>ASSERT_EQUALS` verwendet, um direkt auf den Fehlerhaften Testfall hinweist.

Die Testklasse ist nun deutlich übersichtlicher und die Testfälle sind auf einen Blick gut erkennbar.

Diese Variante erlaubt es, auch weiterhin Tests durchzuführen, die nach einem anderen Schema funktionieren. 

Hinweis: Dies ist keine Empfehlung, alle Tests in einer Testmethode unterzubringen. Das Beispiel soll lediglich aufzeigen, dass Hilfsmethoden genutzt werden können, um die Unit Tests kompakter, besser wartbar und lesbarer zu gestalten.

##### Aufteilen von lokalen & globalen Testklassen 


### Testumgebung
ABAP Unit test können in ADT als auch im SAP GUI ausgeführt und ihre Ergebnisse analysiert werden. 
Empfohlen wird hier klar ADT, da hier auch die verwendung von [Test Relations](https://www.youtube.com/watch?app=desktop&v=yiKhKlQz89Y&t=14s) möglich ist. 

 
### Auflösen von Abhängigkeiten mit Mocking, faking,stubbing und spying

Eine wichtige Eigenschaft von testbarem Code ist, dass (Geschäfts-)Logik, Datenbeschaffung und Präsentation strikt getrennt sind. Wenn dies gewährleistet ist, dann können abhängige Klassen durch nicht-produktive Objekte ersetzt werden. Diese Objekte können unterschiedliche Aufgaben haben und werden dementsprechend benannt. Die folgenden Arten sind möglich:

Ein **Mock**-Objekt ist ein Objekt, dass dynamisch auf die Eingaben der Aufrufers reagieren kann. Ein Mock-Objekt kann zum Beispiel eine Abfrage in einem externen System oder der Datenbank imitieren und testfallabhängig die gewünschten Daten liefern. 

Ein **Stub** ist ein Objekt mit minimaler Implementierung der zum Testen notwendigen Methoden. Dieses Objekt ist nur dazu da, um den fehlerfreien Aufruf der zu testenden Methoden zu gewährleisten. 

Ein **Fake**-Objekt liefert notwendige Daten nach einem vereinfachten Algorithmus. Beispielsweise könnte das Echte Objekt eine umfangreiche Postleitzahlenprüfung vornehmen, bei der Geodaten, Ortsteile und Postleitzahlen auf Grundlage verschiedener Dienste verifiziert werden. Der entsprechende Faker könnte einfache Prüfungen machen, die für die Durchführung der Tests ausreichend sind.

Ein **Spion**-Objekt kann Eigenschaften von Stubs, Fakes und Mocks enthalten, übernimmt jedoch zusätzlich noch die Funktion, Zugriffe zu protokollieren. So könnte ein Spy zum Beispiel beim Testen aufgerufen werden; es wird jedoch nicht direkt das Ergebnis geprüft, sondern nur, ob diese Methode aufgerufen wurde. Dieser Typ wird gerne verwendet, um sicherzustellen, dass bei bestimmten Aktionen E-Mails oder andere Nachrichten verschickt worden wären. 

* [Martin Fowler - Mocks Aren't Stubs](https://www.martinfowler.com/articles/mocksArentStubs.html)

#### Test-Doubles

Die Verwendung von Test-Doubles ist notwendig, wenn Abhängigkeiten bestehen, die nicht ausreichend aufgelöst wurden oder aufgelöst werden konnten. Mit entsprechenden Test-Double-Frameworks kann das Ergebnis von Datenbankzugriffe oder Funktionsbausteinaufrufen gefälscht werden. 

Test-Double-Frameworks sind in der Regel umständlich zu bedienen und sehr unübersichtlich. Mit vielen Definitionen und Methoden müssen Eingabeparameter und die gewünschten Ergebnisse vorgegeben werden. Wenn möglich sollten Sie die Abhängigkeiten eliminieren um auf die Verwendung von Test-Doubles verzichten zu können. Dies ist jedoch nicht immer möglich. Deswegen stehen Test-Double-Frameworks für folgende Objekte zur Verfügung:
* Datenbankzugriffe (oSQL)
* Funktionsbausteine


#### Test-Double-Framework für ABAP Datenbankzugriffe / CDS Views / AMDP

SAP stellt Ihnen verchiedenen Frameworks zur Seite um Abhängigkeiten von verschiedenen Datenbankartefakten zu lösen. 
Diese Frameworks basieren auf Techniken womit die echten Daten in den Tabellen durch vorkonfigurierte MOCK Daten ersetzt werden können.

Ziel ist es hierbei eine stabile wiedrholbare Umgebung aufzubaue in der sich Test beliebig oft wiederholen lassen ohne das Belege neu erstellt werden müssen. 

Eine Übersich der vorhandenen Möglichkeiten finden Sie bei der SAP
https://help.sap.com/docs/abap-cloud/abap-development-tools-user-guide/managing-database-dependencies-with-abap-unit


Die Herausforderung ligt nun in der Identifizierung der Tabellen / Views und dem Befüllen der Mock-Datenbank. 
Planen Sie hierfür Zeit in der Entwicklung ein eine Infrastruktur zu schaffen, die es Ihnen für viele Tests ermöglicht von der Mock Datenbank für einen Geschäftsbereich zu profitieren. 


#### Test-Double-Framework für Funktionsbausteine

Analog zu anderen Mocking Frameworks ermöglich Ihnen das Test-Double-Framework für Funktionsbausteine die Aufrufe an konfigurierbare Doubles um zu leiten. 
Sie sind somit in der Lage für den unit tests zu bestimmen wie sich der Funktionsbaustein verhalten soll, ohne auf die korrtekten Parameterübrgaben angewiesen zu sein. Somit ist es z.B. einfach möglich die möglichen Feherfälle zu provozieren und den Bunsiness Code auf korrekrte behandlung derer zu prüfen.  


### Test-Seams

Die Technik der Test-Seams ist **keien** bevorzugte Technik für Unit Tests. Sie sollten nur Temporär eingesetzt werden. 
Test-Seams ersetzen kein tesbar gestaltete software architektur. 
Siehe [Clean ABAP Test Seams](https://github.com/SAP/styleguides/blob/main/clean-abap/CleanABAP.md#use-test-seams-as-temporary-workaround)




## Erweiterte Techniken

#### SAP Komponenten wie Bapis & Funktionsbausteine in Unit Test
Sollten sie in Ihren Komponenten oder Integrationstest darauf angewiesen sein, dass eine BAPI oder ein Funktionsbause oder auch eine Klasse von SAP einen Schritt ausführt der Teil Ihrest Tests sein soll, ist es meist nötig wiederholbare und stabile Testdaten in den relevanten Tabellen zu haben.  siehe [Mocking von Datenbanktabellen](Testdatenverwaltung in ECATT-Containern). 

In allen anderen Fällen ist es ratsam die 


#### Mockdaten aus DB-Tabelle erstellen in Eclipse
tbd 
#### Testdatenverwaltung in ECATT-Containern
Zur Erstellung stabiler Testdaten können ECATT-Testdaten-Container verwendet werden. 

Zugriff auf die Ecatt Test Daten: 
 
 ```ABAP 
 data(lo_tdc_api) = cl_apl_ecatt_tdc_api=>get_instance( i_testdatacontainer         = get_tdc_name( )
                                                         i_testdatacontainer_version = get_tdc_version( )  ).
```

Diese Testdaten aus den ECATT-Containern können dann in die mock Datenbank eingefügt werden. 

 sql_environment = cl_osql_test_environment=>create( change_dependencies( tables_to_be_mocked ) ).

!Achtung!
      " For reference 2024 the insert from tdc was ~12 seconds / 5 times slower than the manual insert.
      data tdc_data_description type if_osql_test_environment=>tty_double_tdc_info.
      sql_environment->insert_from_tdc( tdc_data_description ).

Schneller: 
  sql_environment->insert_test_data 

#### Automatisierte regelmäßige Läufe von Unit Tests
Es gibt mehrere Möglichkeiten Unit Test regelmäßig laufen zu lassen. 

- Programm RS_AUCV_RUNNER  
- ATC Läufte 
- Rest Service ( Communication scenario SAP_COM_0735 )

>**Empfehlung**  
Planen Sie die Unit Test eines Systems regelmäßig ein und erstellen Sie Benachrichtigungen hierfür. 
Für jeden Enwickler sollte es zur Morgenroutine gehören zu prüfen ob alle Test fehlerfrei sind, damit dies gegebenenfalls Daily besprochen werden kann. 
{: .highlight}

## Do's & Dont's 
* Im Zweifel einen UNit test mehr anlegen
+ weniger in einem Test prüfen
* CL_Aunit_Assert nicht mehr benutzen bzw ersetzen, da sie obsolet ist. Entsprechend auch das Erben von der Klasse ersetzen. 

##  tbd Beispiele Anbringen: 
- ?Woher bekommen wir Beispiele mit Fleisch dran, die nicht nur SFLIGHT sind. 
- Erfahrungen und bekannte Probleme bei Unit Tests.  Z.B. das SAP Factories immer wieder gemockt werden müssen.

