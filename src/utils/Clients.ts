import { v4 as uuidv4 } from 'uuid';

export interface clientProps {
        ClientId : string,
        ClientName : string,
        DateOfBirth:string,
        Phone : string,
        Email:string
    
}
export interface gradeProps {
    id : string,
    name : string,
    value : string
}

export interface schoolSettingsProps {
    id : string,
    name : string,
    value : string
}

export const clients: clientProps[] = [
    {"ClientId":uuidv4(),"ClientName":"Lazaro Lovelace","DateOfBirth":"5/21/2024","Email":"llovelace0@va.gov","Phone":"767-148-2980"},
    {"ClientId":uuidv4(),"ClientName":"Jesse McCloughen","DateOfBirth":"7/12/2024","Email":"jmccloughen1@geocities.jp","Phone":"464-354-2690"},
    {"ClientId":uuidv4(),"ClientName":"Anthia Ogelsby","DateOfBirth":"5/30/2024","Email":"aogelsby2@blog.com","Phone":"591-103-5933"},
    {"ClientId":uuidv4(),"ClientName":"Calli Perrigo","DateOfBirth":"9/12/2023","Email":"cperrigo3@jugem.jp","Phone":"693-111-9955"},
    {"ClientId":uuidv4(),"ClientName":"Elise Bowater","DateOfBirth":"10/12/2023","Email":"ebowater4@eventbrite.com","Phone":"733-112-3007"},
    {"ClientId":uuidv4(),"ClientName":"Rogerio Wife","DateOfBirth":"8/17/2023","Email":"rwife5@mozilla.org","Phone":"211-621-6994"},
    {"ClientId":uuidv4(),"ClientName":"Allsun Viggars","DateOfBirth":"2/26/2024","Email":"aviggars6@aol.com","Phone":"974-747-7438"},
    {"ClientId":uuidv4(),"ClientName":"Antin Vernalls","DateOfBirth":"1/28/2024","Email":"avernalls7@paginegialle.it","Phone":"565-210-8794"},
    {"ClientId":uuidv4(),"ClientName":"Luciano Mainson","DateOfBirth":"2/14/2024","Email":"lmainson8@flickr.com","Phone":"936-582-9885"},
    {"ClientId":uuidv4(),"ClientName":"Adham Enderby","DateOfBirth":"8/13/2024","Email":"aenderby9@sitemeter.com","Phone":"389-523-3681"},
    {"ClientId":uuidv4(),"ClientName":"Leslie Whatman","DateOfBirth":"7/5/2024","Email":"lwhatmana@github.io","Phone":"131-107-1329"},
    {"ClientId":uuidv4(),"ClientName":"Connie Batchan","DateOfBirth":"4/13/2024","Email":"cbatchanb@microsoft.com","Phone":"512-871-1610"},
    {"ClientId":uuidv4(),"ClientName":"Gearalt Dinsale","DateOfBirth":"7/17/2024","Email":"gdinsalec@networksolutions.com","Phone":"261-485-3748"},
    {"ClientId":uuidv4(),"ClientName":"Thacher Dupree","DateOfBirth":"9/10/2023","Email":"tdupreed@booking.com","Phone":"496-295-6157"},
    {"ClientId":uuidv4(),"ClientName":"Roosevelt Hayzer","DateOfBirth":"11/30/2023","Email":"rhayzere@usnews.com","Phone":"531-503-8459"},
    {"ClientId":uuidv4(),"ClientName":"Marlon O'Leahy","DateOfBirth":"8/8/2024","Email":"moleahyf@skype.com","Phone":"911-845-2123"},
    {"ClientId":uuidv4(),"ClientName":"Vite Coakley","DateOfBirth":"11/29/2023","Email":"vcoakleyg@twitter.com","Phone":"901-112-5179"},
    {"ClientId":uuidv4(),"ClientName":"Rozalie Fidelli","DateOfBirth":"9/24/2023","Email":"rfidellih@archive.org","Phone":"528-341-4856"},
    {"ClientId":uuidv4(),"ClientName":"Morgen Rodway","DateOfBirth":"6/29/2024","Email":"mrodwayi@sphinn.com","Phone":"760-596-8611"},
    {"ClientId":uuidv4(),"ClientName":"Merci Norcutt","DateOfBirth":"11/23/2023","Email":"mnorcuttj@skype.com","Phone":"324-360-9941"},
    {"ClientId":uuidv4(),"ClientName":"Juliane Mathewson","DateOfBirth":"5/7/2024","Email":"jmathewsonk@epa.gov","Phone":"340-946-0284"},
    {"ClientId":uuidv4(),"ClientName":"Ronnie Farryn","DateOfBirth":"11/9/2023","Email":"rfarrynl@topsy.com","Phone":"788-882-9972"},
    {"ClientId":uuidv4(),"ClientName":"Jojo Billingham","DateOfBirth":"6/17/2024","Email":"jbillinghamm@nifty.com","Phone":"519-525-5853"},
    {"ClientId":uuidv4(),"ClientName":"Carie Siemens","DateOfBirth":"2/24/2024","Email":"csiemensn@comcast.net","Phone":"224-959-9538"},
    {"ClientId":uuidv4(),"ClientName":"Clare Blanning","DateOfBirth":"10/20/2023","Email":"cblanningo@si.edu","Phone":"797-511-8958"},
    {"ClientId":uuidv4(),"ClientName":"Milt Cushion","DateOfBirth":"9/24/2023","Email":"mcushionp@tiny.cc","Phone":"304-504-9199"},
    {"ClientId":uuidv4(),"ClientName":"Giuditta Bentzen","DateOfBirth":"1/29/2024","Email":"gbentzenq@tiny.cc","Phone":"121-221-5984"},
    {"ClientId":uuidv4(),"ClientName":"Vernen Tebbe","DateOfBirth":"10/27/2023","Email":"vtebber@homestead.com","Phone":"722-741-6405"},
    {"ClientId":uuidv4(),"ClientName":"Franzen Lanbertoni","DateOfBirth":"8/24/2023","Email":"flanbertonis@blogs.com","Phone":"581-216-2230"},
    {"ClientId":uuidv4(),"ClientName":"Fitz Rosgen","DateOfBirth":"12/13/2023","Email":"frosgent@nps.gov","Phone":"440-231-1173"},
    {"ClientId":uuidv4(),"ClientName":"Abeu Petcher","DateOfBirth":"12/18/2023","Email":"apetcheru@privacy.gov.au","Phone":"523-208-6994"},
    {"ClientId":uuidv4(),"ClientName":"Phil Isacoff","DateOfBirth":"6/8/2024","Email":"pisacoffv@nih.gov","Phone":"395-362-2269"},
    {"ClientId":uuidv4(),"ClientName":"Neel Ubee","DateOfBirth":"12/21/2023","Email":"nubeew@sphinn.com","Phone":"223-708-2041"},
    {"ClientId":uuidv4(),"ClientName":"Claudetta Christoffels","DateOfBirth":"6/9/2024","Email":"cchristoffelsx@istockphoto.com","Phone":"297-344-4224"},
    {"ClientId":uuidv4(),"ClientName":"Antoinette Westgarth","DateOfBirth":"5/11/2024","Email":"awestgarthy@about.com","Phone":"718-841-9827"},
    {"ClientId":uuidv4(),"ClientName":"Juliana Tackley","DateOfBirth":"7/15/2024","Email":"jtackleyz@mysql.com","Phone":"330-161-8542"},
    {"ClientId":uuidv4(),"ClientName":"Kissie Rowland","DateOfBirth":"2/9/2024","Email":"krowland10@ucla.edu","Phone":"648-897-7717"},
    {"ClientId":uuidv4(),"ClientName":"Caesar Salt","DateOfBirth":"4/4/2024","Email":"csalt11@reference.com","Phone":"298-535-2209"},
    {"ClientId":uuidv4(),"ClientName":"Stefano Andrich","DateOfBirth":"6/14/2024","Email":"sandrich12@i2i.jp","Phone":"977-290-1339"},
    {"ClientId":uuidv4(),"ClientName":"Regine Kaming","DateOfBirth":"1/3/2024","Email":"rkaming13@fotki.com","Phone":"145-574-2909"},
    {"ClientId":uuidv4(),"ClientName":"Price Duxbury","DateOfBirth":"3/30/2024","Email":"pduxbury14@icq.com","Phone":"529-337-3018"},
    {"ClientId":uuidv4(),"ClientName":"Kellen Heindle","DateOfBirth":"4/26/2024","Email":"kheindle15@joomla.org","Phone":"249-295-0478"},
    {"ClientId":uuidv4(),"ClientName":"Bessy Corringham","DateOfBirth":"4/21/2024","Email":"bcorringham16@jiathis.com","Phone":"112-673-3200"},
    {"ClientId":uuidv4(),"ClientName":"Maxie Hadcroft","DateOfBirth":"7/1/2024","Email":"mhadcroft17@redcross.org","Phone":"280-364-9484"},
    {"ClientId":uuidv4(),"ClientName":"Diann Camois","DateOfBirth":"4/21/2024","Email":"dcamois18@opensource.org","Phone":"629-691-5617"},
    {"ClientId":uuidv4(),"ClientName":"Pietra Girogetti","DateOfBirth":"11/7/2023","Email":"pgirogetti19@buzzfeed.com","Phone":"146-418-1990"},
    {"ClientId":uuidv4(),"ClientName":"Tarrah Olivera","DateOfBirth":"10/9/2023","Email":"tolivera1a@wired.com","Phone":"928-345-9824"},
    {"ClientId":uuidv4(),"ClientName":"Rhody Duckels","DateOfBirth":"8/26/2023","Email":"rduckels1b@npr.org","Phone":"790-489-2469"},
    {"ClientId":uuidv4(),"ClientName":"Uri Klampk","DateOfBirth":"8/14/2023","Email":"uklampk1c@chronoengine.com","Phone":"882-318-2445"},
    {"ClientId":uuidv4(),"ClientName":"Broderick Zanitti","DateOfBirth":"3/27/2024","Email":"bzanitti1d@upenn.edu","Phone":"450-353-7669"}];

export const grades: gradeProps[] = [
    {
        id : uuidv4(),
        name : 'K',
        value : 'K'
    },
    {
        id : uuidv4(),
        name : '1st',
        value : '1'
    },{
        id : uuidv4(),
        name : '2nd',
        value : '2'
    },{
        id : uuidv4(),
        name : '3rd',
        value : '3'
    },{
        id : uuidv4(),
        name : '4th',
        value : '4'
    },{
        id : uuidv4(),
        name : '5th',
        value : '5'
    },{
        id : uuidv4(),
        name : '6th',
        value : '6'
    },{
        id : uuidv4(),
        name : '7th',
        value : '7'
    },{
        id : uuidv4(),
        name : '8th',
        value : '8'
    },{
        id : uuidv4(),
        name : '9th',
        value : '9'
    },{
        id : uuidv4(),
        name : '10th',
        value : '10'
    },{
        id : uuidv4(),
        name : '11th',
        value : '11'
    },{
        id : uuidv4(),
        name : '12th',
        value : '12'
    },
];

export const schoolSettings: schoolSettingsProps[] = [
   
    {
        id : uuidv4(),
        name : 'Public School',
        value : 'Public School'
    },{
        id : uuidv4(),
        name : 'Private School',
        value : 'Private School'
    },{
        id : uuidv4(),
        name : 'Home School',
        value : 'Home School'
    },{
        id : uuidv4(),
        name : 'Virtual School',
        value : 'Virtual School'
    },{
        id : uuidv4(),
        name : 'NA',
        value : 'NA'
    }
];