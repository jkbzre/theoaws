import React, { useState } from 'react';

function Exhibitions( { setFadeOut, handleTheoClick }) {
    const imagesData = [
        { num: "1", text: "Return Of The Axum Obelisk", description: "Across 15 monitors, Theo Eshetu’s elaborate non-linear video installation charts the return of the fabled obelisk of Axum to Ethiopia 70 years after it was confiscated by Mussolini. The Return of the Axum Obelisk, a complexly stratified multiscreen video piece, not only in form but also in content, brings together mythological, religious, political and aesthetic issues. Using a visual language reminiscent of traditional Ethiopian icon paintings, Eshetu narrates the reestablishment of an equilibrium, which could be likened to the seesaw of the Past Perfect and the Future Perfect,” wrote critic Bonaventure Soh Bejeng Ndikung in Artreview in 2015", location: "Location 1"},
        { num: "2", text: "Till Death Us Do Part", description: "Till Death Us Do Part consists of five episodic videos shown on a grid of 20 television screens. This pioneering video work explores the burgeoning media culture of the 1980s and its impact on race and identity at that time. “We felt marginalized and outside of a system that didn’t acknowledge our existence,” Eshetu recently reflected. “It became our ‘project’ to find ways of expressing ourselves in an attempt to integrate with a system that didn’t include us.”" },
        { num: "3", text: "Atlas Fractured", description: "Projected on a giant banner, which formerly hung across the facade of Berlin’s Ethnological Museum Atlas Fractured, produced for Documenta14, is a spectacular video essay that looks at myth, psychology, art, and politics as realms that can help us integrate a fragmented world. In 2014 Eshetu salvaged the banner as an artifact of the Ethnographic Museum and used it as a filmic surface reinterpreting the depicted masks with filmed portraits that modify and skew the masks. The projections subvert and destabilize the banner’s “world allegory” in favor of Eshetu’s more nuanced worldview. (how to handle athens verion text)" },
        { num: "4", text: "Trip To Mount Zuqualla", description: "Trip to Mount Zuqualla is a three-screen video installation that documents a pilgrimage to a holy mountain in Ethiopia where the syncretic ritual of conversion from Animism to Christianity is celebrated. The video presented as a Triptych, shows the passage from a belief in the spirit of nature to monotheism." },
        { num: "5", text: "Kiss the Moment", description: "Kiss the Moment made during Eshetu’s residency at the DAAD artist-in-Berlin program is a portrait of Berlin. Inspired by a large studio window overlooking a small park as a point of departure for a musical journey into German mythology that blends harmony and dissonance, through the documentation of events that took place over the course of a year’s experience living in Berlin."},
        { num: "6", text: "The Phi Phenomenon", description: "In this work, thousands of photographs of African religious objects associated with funeral traditions have been reactivated and brought back to life through a process of rapid editing giving the illusion of movement known as the phi phenomenon. Decontextualized from their ritual settings and rendered static within the framework of Museum ethnographic display.The role of visual perception in rites and ceremonies often is to move the viewer toward the invisible and inexpressible—an ineffable emptiness or “in-betweenness” not unlike the gaps that “the phi phenomenon” enables our brain to bridge, so that our perception registers, instead of absence, a potent presence."},
        { num: "7", text: "The Festival of Sacrifice", description: "Shot on the Kenyan island of Lamu The Festival of Sacrifice is based on the Eid al-Adha, which celebrates the end of the Ramadan. The sacrifice of an animal whose flesh is offered to the poor is in this context an act of generosity towards the needy. The video transforms the ‘raw’ content of the slaughter into its original spiritual connotation through the multiplication and mirroring of the images reminiscent of the beauty of Islamic patterns and designs."},
        { num: "8", text: "Adieu Les Demoiselles", description: "In this ‘filmic painting” Theo Eshetu deconstructs Picasso’s Les Demoiselles d’Avignon, through a performative reinterpretation that situating Picasso’s practice as a social and historical process. Eshetu inserts images of African sources directly over the painting, as well as other modernist sources that informed the creation of the work, we are invited to consider the construction and dissolution of cultural tropes within Western history. This layering and animation destabilize the famous painting, dissolving it. As Eshetu’s title suggests, we say “adieu” to “Les Demoiselles” as prostitutes and encounter instead performers whose sexuality is both more nuanced and empowered." },
        { num: "9", text: "The Mystery of History and His Story in My Story", description: "The Mystery of History and His Story in My Story is a picture essay based on material found at the Museum of Yugoslav History. Between 1966 and 1970 the artist’s grandfather, a celebrated historian, was Ethiopia’s Ambassador in Belgrade. At the time Ethiopia and Yugoslavia were members of the non-aligned movement, involved in discussing their position beyond the cold war politics of the Soviet Union and the United States. The artist delved into the extensive photo archive in search of oblique traces of biography, tangential associative thoughts, fragments of forgotten memories, and unwritten personal histories to create an alchemic composition." },
        { num: "10", text: "Zar Possession", description: "The Zar, which originated in Ethiopia, is a matriarchal cult of spiritual possession practiced in north and east Africa and the Middle East. This ancient ceremonial practice was a space of freedom and invocation for women, but throughout its history has also attracted controversy and condemnation, as it involved ritual sacrifice. It survives through music and dance as a spiritual practice of purification. The video recreates the ceremonial trance inducing ritual, both in content and in the viewers perception." },
        { num: "11", text: "Ghost Dance", description: "Ghost Dance (2020) looks at the relations between the ethnographical display of Asian and African collections and the choreographing of their metaphorical death and life as they enter the museum space. What does it mean for objects to possess subjectivity in representing spheres of life and social bonds? This question circulates through the bodies of two exceptional dancers, who channel the kinetic energy as a repository of spirit-objects and rituality suspended behind the museum’s walls."},
        { num: "12", text: "The Slave Ship", description: "The Slave Ship (2015) is a pensive oceanic epic evoking the history of slavery. Eshetu uses the metaphor of the oceans to examine the legacy of historic trade from South to North. Borrowing from the legend of the Flying Dutchman - a phantom vessel condemned to sail the oceans for eternity, with a ghostly crew of dead men, the film also references Drexciya - an Afrofuturist origin myth in which a sub-aquatic metropolis founded by the unborn children of African women who had been thrown overboard during the Middle Passage. Eshetu’s film suggests that the ghosts of deceased enslaved Africans still haunt the waters of European ports."},
    ];

    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedDescription, setSelectedDescription] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedTitle, setSelectedTitle] = useState('');



    const handleImageClick = (imageData) => {
        setSelectedImage(selectedImage === imageData.num ? null : imageData.num);
        setSelectedDescription(selectedImage === imageData.num ? '' : imageData.description);
        setSelectedLocation(selectedImage === imageData.num ? '' : imageData.location);
        setSelectedTitle(selectedImage === imageData.num ? '' : imageData.text);
    };

    return (
        <>
        <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-72 pt-10">
            <div className="flex justify-between items-center pb-32">
                <a onClick={handleTheoClick} className=' text-xl cursor-pointer'>THEO ESHETU</a>
                <h1 className=' text-xl '>ALL EXHIBITIONS</h1>
            </div>
            
            <div className="flex">
                <div className="grid grid-cols-4 gap-4">
                    {imagesData.map((imageData) => (
                        (selectedImage === null || selectedImage === imageData.num) && (
                            <div 
                                key={imageData.num} 
                                className="relative group hover:opacity-100 transition-opacity duration-300"
                                onClick={() => handleImageClick(imageData)}
                            >
                                <img 
                                    src={`images/exhibitions/${imageData.num}.png`} 
                                    alt={imageData.text}
                                />
                                <div className="absolute inset-0 flex items-center cursor-pointer justify-center opacity-0 bg-white bg-opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                                </div>
                            </div>
                        )
                    ))}

                    {/* Description container */}
                    <div className="col-span-2">
                        <h2 className='text-xl'>{selectedTitle}</h2>
                        <p className='text-sm'>{selectedDescription}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Exhibitions;
