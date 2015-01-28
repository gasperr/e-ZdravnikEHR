Delujoča demo spletna stran: http://gasperr.github.io/e-ZdravnikEHR/

## e-Zdravstveni Pomočnik predstavlja zdravniško kartoteko v elektronski obliki.

## Na kratko o sami zgradbi:

- vključitev zunanjih podatkovnih virov - API (Twitter, zdravniška zbornica slovenije - iskanje po njihovi podatkovni bazi, Google API)
- povezava z nastajajočo platformo EHRScape (https://www.ehrscape.com/); operiranje z EHRScape podatkovno bazo (vsi podatki temeljijo na tej PB), AQL poizvedbe..
-  spletna aplikacija v celoti deluje na strani odjemalca s pomočjo API klicev pa pridobiva podatke iz zunanjih virov
-  aplikacija temelji na Bootstrapu, deluje na vseh napravah enako (mobitel, tablica, ..)
-  za vizualizacijo grafov uporaba D3js knjižnice
-  ...


## Aplikacija omogoča:

- vnos novih vitalnih znakov ter opozori, če so vitalni znaki slabi; ponudi tudi najbližjo zdravniško pomoč

- vnos novih alergij, izvidov, slik, zdravil, ...

- pregled nad dosedanjimi alergijami ter opozarja, če prihaja letni čas, kadar je vaša alergija najbolj intenzivna

- pregled na dosedanjimi vitalnimi znaki ter grafični prikaz le-teh na podlagi 'normalnih'

- pregled nad zdravili, ki ste jih jemali do sedaj skozi celotno življenje ter na podlagi vitalnih znakov v času jemanja generira status za zdravilo (primer: slab status pomeni, da se morate nujno posvetovati z zdravnikom, če želito nanovo začeti jemati to zdravilo, saj so se vam vitalni znaki slabšali v času jemanja)

- slikovni ter organiziran prikaz vseh dosedanjih izvidov ter dokumentacij

- prikaz družinksega drevesa z genetskimi bolezni, ki bi lahko vplivale na vas

- hitro iskanje po podatkovni bazi zdravniške zbornice

- pregled vseh vaših zdravstvenih podatkov (zavarovalnica, nezaključeni specialistični pregledi, trenutno jemajoča zdravila)

- organiziran (zgornji, spodnji del telesa, trup) pregled nas vsemi dosedanjimi slikami telesa (xray, mri, ct..)


....ter še mnogo več......



