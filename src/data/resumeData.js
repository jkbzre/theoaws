
const resumeData = [
    
        {num: 1, date: "2024", title: "EXPOSURE, MUDEC, Museo delle Culture, Milan, Italy"},
        {num: 2, date: "2023", title: "Africa and Byzantium, The Metropolitan Museum of Art, NY, USA"},
        {num: 3, date: "2023", title: "Saint Moritz Art Film Festival, Saint Moritz, Switzerland"},
        {num: 4, date: "2023", title: "Museo delle Opacità, Museo delle Civiltà, Rome, Italy"},
        {num: 5, date: "2022", title: "AFRIQUE Les Religions de l’extase, L’Abbaye de Daoulas, France"},
        {num: 6, date: "2021", title: "Gwangju Biennale, Minds Rising Spirits Tuning, Gwangju, South Korea"},
        {num: 7, date: "2020", title: "The Sum of all Parts, Museum of Modern Art (MoMA) Collections from the 70ies to present, NY, USA"},
        {num: 8, date: "2019", title: "The Sorcerer’s Burden, Contemporary Art and the Anthropological Turn, The Contemporary Austin, Austin, USA"},
        {num: 9, date: "2019", title: "Masks: The Art of Transformation, Kunst Museum, Bonn, Germany"},
        {num: 10, date: "2019", title: "Faces and Places, AK Bank Sanat, Istanbul, Turkey "},
        {num: 11, date: "2019", title: "Atlas Portraits, Tiwani Contemporary, London, UK "},
        {num: 12, date: "2019", title: "AFRIQUE Les Religions de l’extase, Musée d’ethnographie de Genève MEG, Switzerland"},
        {num: 13, date: "2018", title: "I is Other – Be the Other, National Gallery of Modern and Contemporary Art, Rome, Italy"},
        {num: 14, date: "2018", title: "YOU ARE HERE, Light, Color & Sound Experience, North Carolina Museum of Art, Raleigh, USA"},
        {num: 15, date: "2018", title: "FEEDBACK: ArtAfrica and the 1980s, Iwalewahaus, Bayreuth, Germany"},
        {num: 16, date: "2018", title: "Face-to-face Picasso, Past and present, Musée des beaux arts de Montréal, Canada"},
        {num: 17, date: "2018", title: "ARTS OF GLOBAL AFRICA, Newark Museum of Art, New Jersey, USA"},
        {num: 18, date: "2018", title: "Collections, Royal Ontario Museum, Canada"},
        {num: 19, date: "2018", title: "The Slave Ship, Nachtstücke, E-Werk Freiburg, Germany"},
        {num: 20, date: "2017", title: "Documenta14, Learning from Athens, Neu Neu Galerie, Kassel, Germany"},
        {num: 21, date: "2017", title: "Documenta14, Learning from Athens, Athens Conservatoire (Odeion), Athens, Greece"},
        {num: 22, date: "2017", title: "The Slave Ship, Tiwani Contemporary Gallery, London, UK"},
        {num: 23, date: "2017", title: "Cours Cous, Camarade, Le vieux monde est derrièr toi, Archive Kabinett, Berlin, Germany"},
        {num: 24, date: "2015", title: "Constellations, Tiwani Contemporary Gallery, London, UK"},
        {num: 25, date: "2015", title: "STADT / BILD – Xenopolis, Deutsche Bank KunstHalle, curated by Simon Njami, Berlin, Germany"},
        {num: 26, date: "2015", title: "1.54 African art Fair, video presentation, Somerset House, London, UK"},
        {num: 27, date: "2015", title: "Indonesia LAB, (with Ensemble Modern), ArtLAb, Frankfurt, Germany"},
        {num: 28, date: "2014", title: "Transform: Artists Beyond Film, Theo Eshetu, Tate Britain, London, UK"},
        {num: 29, date: "2014", title: "Whorled Explorations, Kochi-Muziris Biennale, India"},
        {num: 30, date: "2014", title: "The Return of the Axum Obelisk, DAAD Gallery, Berlin, Germany"},
        {num: 31, date: "2013", title: "Cinemafrica in Cineteca, Retrospective, Cinema Trevi, Rome, Italy"},
        {num: 32, date: "2013", title: "Circus Maximus, Video Projection for a concert by Alvin Curran, Integra Festival, Royal Danish Conservatory and Moderna Música festival, Centro del Carmen, Valencia, Spain"},
        {num: 33, date: "2013", title: "ART AT WORK pavilion VISIONARY AFRICA, Ouagadougou, Burkina Faso"},
        {num: 34, date: "2010", title: "Brave New World, Museum of African Art, The Smithsonian Institute, Washington DC, USA"},
        {num: 35, date: "2009", title: "The Return of The Axum Obelisk, UNESCO Headquarters, Paris and FAO headquarters, Rome, Italy"},
        {num: 36, date: "2009", title: "Ars & Navis, Arsenale di La Spezia, Italy"},
        {num: 37, date: "2009", title: "Non Angli Sed Angeli: a Pilgrimage a Mission, Venerable English College, Rome, Italy"},
        {num: 38, date: "2008", title: "Retrospettive, In-Video Festival, Milano, Italy"},
        {num: 39, date: "2008", title: "I Racconti del Mandala, Teatro Colosseo, Rome, Teatro Civico di Carrara, Italy"},
        {num: 40, date: "2008", title: "Five For Monk, Video & Dance at St Stevens, Theatre performance w. Roberta Garrison, Rome, Italy"},
        {num: 41, date: "2007", title: "Buio in Sala, Sala Principe dei Piemonti, Viareggio, Italy"},
        {num: 42, date: "2007", title: "Made In Italy, Retrospective Theo Eshetu, Filmstudio Rome - Featured Artist, Rome, Italy"},
        {num: 43, date: "2007", title: "South of the Other, The Robert Flaherty Film Seminar, Poughkeepsie, USA"},
        {num: 44, date: "2006", title: "Meditation on African Light, Baltimore Museum of Art, USA"},
        {num: 45, date: "2005", title: "Africanized, retrospective, the videos of Theo Eshetu, Padova, Verona and Bari, Italy"},
        {num: 46, date: "2004", title: "Films of Theo Eshetu, Presented at BAM Cinemateque, Brooklyn, USA"},
        {num: 47, date: "2004", title: "Monografia Elettronica, Zo cultural Centre, Catania, Italy"},
        {num: 48, date: "2004", title: "Special Event presentation of Body and Soul, Venice Film Festival, Italy"},
        {num: 49, date: "2003", title: "Blood, Museo Laboratorio dell’Università La Sapienza, Rome, Italy"},
        {num: 50, date: "2003", title: "Digital Africa, Electronic Arts Intermix / Dia Foundation / African Film Festival, New York, USA"},
        {num: 51, date: "2002", title: "Africanized, Presented at the 58th Venice Film Festival, Italy"},
        {num: 52, date: "1999", title: "Brave New World, MACRO (Galleria Comunale d'Arte Moderna e Contemporanea), Rome, Italy"},
        {num: 53, date: "1998", title: "La nascita di Dioniso, (installation) Museo de Arte Italiana, Lima, Peru"},
        {num: 54, date: "1996", title: "University of Addis Abeba, Dept. Of Social Anthropology, Ethiopia"},
        {num: 55, date: "1995", title: "Retrospective at Arcipelago 3, Osservatorio sul cinema Italiano, Cinema Savoy, Rome, Italy"},
        {num: 56, date: "1995", title: "Il Gatto e la Volpe, Galleria Pio Monti, Rome, Italy"},
        {num: 57, date: "1994", title: "Museum of Modern and Contemporary Art, Nice, France"},
        {num: 58, date: "1994", title: "Mass Memory, 50° Venice Film Festival, Venezia, Italy"},
        {num: 59, date: "1994", title: "Arte & Jeans: Minimi Rilievi, Passage de Retz, Paris"},
        {num: 60, date: "1994", title: "Mill Valley Film Festival, Opening video, San Francisco, USA"},
        {num: 61, date: "1994", title: "La Nascità di Dionisio, Galleria Cesare Manzo, Pescara, Italy"},
        {num: 62, date: "1993", title: "Museo del Cinema, Torino film festival, Torino, Italy"},
        {num: 63, date: "1993", title: "Zapping, Galleria Nova, Rome"},
        {num: 64, date: "1992", title: "Travelling Light, ICA, Institute of Contemporary Arts, London, UK"},
        {num: 65, date: "1992", title: "Artel, Galleria Comunale, Cagliari. TER Int. Exhibition of Cont. Art, Termoli, Italy"},
        {num: 66, date: "1992", title: "Festival dei Due Mondi, premiere of Travelling Light, Spoleto, Italy"},
        {num: 67, date: "1990", title: "Il Luogo della complessità, Museo Laboratorio dell’Università La Sapienza, Rome, Italy"},
        {num: 68, date: "1987", title: "Studio D'ars, Exhibition, Milan, Italy"},
        {num: 69, date: "1987", title: "Monitors, Till Death US Do Part installation, Galleria MR/Goethe Institute, Rome, Italy"},
        {num: 70, date: "1987", title: "Video Art Italiana, Galleria Civica, Monza, Italy"},
        {num: 71, date: "1985", title: "Video Wall installation, Till Death us do Part, Saint Louis Music City, Rome, Italy"},
        {num: 72, date: "1983", title: "The Portrait part One, New International Gallery, Rome, Italy"}
        
        
    

]



export default resumeData;