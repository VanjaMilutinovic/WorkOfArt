const artists = [
    {   
        id: 1,
        pdf_src: 'files/1.pdf',
        img_src: 'artists/1.jpg',
        data: [
            //in serbian language
            {name: 'Leonardo da Vinči', bio: `
            Leonardo da Vinči (1452-1519) bio je izvanredan polimat italijanske renesanse,
             čiji je genijalnost obuhvatala umetnost, nauku i inženjerstvo,
             ostavljajući neizbrisiv trag u istoriji čovečanstva. Kroz ikonička remek-dela poput "Mona Lize" 
             i "Poslednje večere", revolucionisao je slikarstvo,
              hvatajući suštinu ljudske emocije i postavljajući nove standarde za realizam. 
              Njegova neutaživa radoznalost vodila ga je u istraživanju različitih oblasti, 
              od anatomije i botanike do arhitekture i izuma, čineći ga istinskim vizionarom ispred svog vremena.`},
            //in english language
            {name: 'Leonardo da Vinci', bio: `
            Leonardo da Vinci (1452-1519) was an extraordinary polymath of the Italian Renaissance,
             whose genius spanned across art, science, and engineering,
              leaving an indelible mark on human history.
               Through iconic masterpieces like the "Mona Lisa" and "The Last Supper," 
               he revolutionized painting, capturing the essence of human emotion and setting
                new standards for realism. His insatiable curiosity led him to explore diverse fields, 
                from anatomy and botany to architecture and inventions, making him a true visionary
                 ahead of his time.`}
        ]
    },
    {
        id: 2,
        pdf_src: 'files/2.pdf',
        img_src: 'artists/2.jpg',
        data: [
            //in serbian language
            { name: 'Mikelanđelo', bio: `
            Mikelanđelo Buonaroti (1475-1564) bio je italijanski umetnik renesanse, 
            najpoznatiji po svojim monumentalnim skulpturama i freskama.
             Njegova najpoznatija dela uključuju skulpturu "David" i fresku "Stvaranje Adama" 
            na plafonu Sikstinske kapele. 
            Mikelanđelo je bio majstor anatomije i sposoban da prenese emotivnost i pokret u kamenu.
            Njegovo nasleđe ostaje kao jedno od najvažnijih u istoriji umetnosti.` },
            //in english language
            { name: 'Michelangelo', bio: `
            Michelangelo Buonarroti (1475-1564) was an Italian Renaissance artist,
            best known for his monumental sculptures and frescoes.
             His most famous works include the sculpture "David" and the fresco "The Creation of Adam" 
             on the ceiling of the Sistine Chapel. 
             Michelangelo was a master of anatomy and capable of conveying emotion and 
             movement in stone. His legacy remains one of the most significant in the history of art.` }
        ]
    },
    {
        id: 3,
        pdf_src: 'files/3.pdf',
        img_src: 'artists/3.jpg',
        data: [
            //in serbian language
            { name: 'Frédéric Auguste Bartholdi', bio: `
            Frédéric Auguste Bartholdi (1834-1904) bio je francuski vajar poznat po svojim monumentalnim skulpturama.
            Njegovo najpoznatije delo je Statua slobode (The Statue of Liberty), koja predstavlja simbol slobode i demokratije.
            Bartholdi je bio majstor u oblikovanju bakra i kovanog gvožđa,
             a njegova dela i danas oduševljavaju i nadahnjuju posmatrače širom sveta.` },
            //in english language
            { name: 'Frédéric Auguste Bartholdi', bio: `
            Frédéric Auguste Bartholdi (1834-1904) was a French sculptor known for his monumental sculptures.
            His most famous work is the Statue of Liberty, which stands as a symbol of freedom and democracy.
            Bartholdi was a master of shaping copper and wrought iron, 
            and his works continue to captivate and inspire viewers around the world.` }
        ]
    },
    {
        id: 4,
        pdf_src: 'files/4.pdf',
        img_src: 'artists/4.jpg',
        data: [
            //in serbian language
            { name: 'Džef Kuns', bio: `
            Džef Kuns (1955-) je američki umetnik poznat po svojim kontroverznim instalacijama i skulpturama.
            On je jedan od najuticajnijih savremenih umetnika, čija dela često izazivaju rasprave o prirodi umetnosti i vrednosti.
            Njegova skulptura "Balloon Dog" postala je ikona popularne kulture, a njegove instalacije obuhvataju različite materijale i teme,
            istražujući koncepte konzumerizma, popularne kulture i vrednosti umetnosti.` },
            //in english language
            { name: 'Jeff Koons', bio: `
            Jeff Koons (1955-) is an American artist known for his controversial installations and sculptures.
            He is one of the most influential contemporary artists, whose works often spark discussions about the nature of art and its value.
            His sculpture "Balloon Dog" has become an icon of popular culture, and his installations encompass various materials and themes,
            exploring the concepts of consumerism, popular culture, and the value of art.` }
        ]
    },
    {
        id: 5,
        pdf_src: 'files/5.pdf',
        img_src: 'artists/5.jpg',
        data: [
            //in serbian language
            { name: 'Mauricio Katelan', bio: `
            Mauricio Katelan (1960-) je italijanski umetnik poznat po svojim provokativnim instalacijama i skulpturama.
            Njegova umetnost često izaziva kontroverze i iznenađenja posmatrače, suočavajući ih sa nekonvencionalnim temama i konceptima.
            Jedno od njegovih najpoznatijih dela je skulptura "Kneeling Hitler", koja predstavlja kritiku fašizma i totalitarizma.` },
            //in english language
            { name: 'Maurizio Cattelan', bio: `
            Maurizio Cattelan (1960-) is an Italian artist known for his provocative installations and sculptures.
            His art often provokes controversy and surprises viewers, confronting them with unconventional themes and concepts.
            One of his most famous works is the sculpture "Kneeling Hitler," which represents a critique of fascism and totalitarianism.` }
        ]
    },
    {
        id: 6,
        pdf_src: 'files/6.pdf',
        img_src: 'artists/6.jpg',
        data: [
            //in serbian language
            { name: 'Trejsi Emin', bio: `
            Trejsi Emin (1963-) je britanska umetnica poznata po svom iskrenom i intimnom umetničkom izražavanju.
            Njen rad često uključuje lične detalje i intimne trenutke, izazivajući emocije i 
            otvarajući dijalog o univerzalnim ljudskim iskustvima.
            Jedno od njenih najpoznatijih dela je instalacija "My Bed",
             koja prikazuje umetničin krevet sa ličnim predmetima kao što su isprljani čaršavi,
              prazne boce i upotrebljeni kondomi.` },
            //in english language
            { name: 'Tracey Emin', bio: `
            Tracey Emin (1963-) is a British artist known for her honest and intimate artistic expression.
            Her work often involves personal details and intimate moments, evoking emotions and
             opening a dialogue about universal human experiences.
            One of her most famous works is the installation "My Bed," which depicts the artist's
             bed with personal items such as stained sheets, empty bottles, and used condoms.` }
        ]
    },
    { 
        id: 7,
        pdf_src: 'files/7.pdf',
        img_src: 'artists/7.jpg',
        data: [
            //in serbian language
            { name: 'Nepoznati umetnik', bio: '' },
            //in english language
            { name: 'Unknown Artist', bio: '' }
        ]
    }
]

export default artists;