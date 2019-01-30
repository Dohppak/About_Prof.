import React from 'react';
import Profinfo from '../Profinfo';

const dummy = 
        {   'Name': 'Choi, Young Rok(최영록)',
            'id': '56090930900',
            'Lab': 'Entrepreneurship & Innovation Strategy Lab',
            'ResearchInterest': 'Entrepreneurship, Innovation Strategy, Family & Small Business, Strategic Alliances',
            'Website': '',
            'department': 'Graduate School of Technology and Innovation Management(기술경영전문대학원)',
            'imglink': 'http://114.70.1.191/rims/upload/image/201507/user_profile_1300348777247492752105336.jpg',
            'paper': 
                [
                    {'Title': "Entrepreneurs' decisions to exploit opportunities",
                    'Cited by': 'nan',
                    'Link': 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85017366690&doi=10.4337%2f9781784716042&partnerID=40&md5=83a5bd43ddaffbb7bdc97030d2e287fa',
                    'Source title': 'Decision Making in Entrepreneurship: Selected Joint Papers of Dean A. Shepherd',
                    'Year': '2016',
                    'Authors': 'Choi Y.R., Shepherd D.A.'},
                    {'Title': 'Family ownership and R&D investment: The role of growth opportunities and business group membership',
                    'Cited by': '11.0',
                    'Link': 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-84924440720&doi=10.1016%2fj.jbusres.2014.10.007&partnerID=40&md5=e7f767ec35b88b3e07b25ba0238e7f1d',
                    'Source title': 'Journal of Business Research',
                    'Year': '2015',
                    'Authors': 'Choi Y.R., Zahra S.A., Yoshikawa T., Han B.H.'},
                    {'Title': "Entrepreneurs' Decisions to Exploit Opportunities",
                    'Cited by': 'nan',
                    'Link': 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-84959079307&doi=10.4337%2f9781783479801.00010&partnerID=40&md5=8b6677e8de93e01116bf2fa89985d114',
                    'Source title': 'A Psychological Approach to Entrepreneurship: Selected Essays of Dean A. Shepherd',
                    'Year': '2014',
                    'Authors': 'Choi Y.R., Shepherd D.A.'},
                    {'Title': 'When should entrepreneurs expedite or delay opportunity exploitation?',
                    'Cited by': 'nan',
                    'Link': 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-84959081104&doi=10.4337%2f9781783479801.00011&partnerID=40&md5=f6ebfa0a15cd9b723f8fabcaf706b1d0',
                    'Source title': 'A Psychological Approach to Entrepreneurship: Selected Essays of Dean A. Shepherd',
                    'Year': '2014',
                    'Authors': 'Choi Y.R., Lévesque M., Shepherd D.A.'},
                    {'Title': 'Exploration, exploitation, and growth through new product development: The moderating effects of firm age and environmental adversity',
                    'Cited by': '3.0',
                    'Link': 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-84904768834&doi=10.1109%2fTEM.2014.2310633&partnerID=40&md5=1f8a0164622d2b37e851cbd09583e356',
                    'Source title': 'IEEE Transactions on Engineering Management',
                    'Year': '2014',
                    'Authors': 'Choi Y.R., Phan P.H.'},
                    {'Title': 'Market-oriented institutional change and R&D investments: Do business groups enhance advantage?',
                    'Cited by': '11.0',
                    'Link': 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-84908048663&doi=10.1016%2fj.jwb.2013.10.002&partnerID=40&md5=772e7c15ba12b5e874a044d482888318',
                    'Source title': 'Journal of World Business',
                    'Year': '2014',
                    'Authors': 'Choi Y.R., Yoshikawa T., Zahra S.A., Han B.H.'},
                    {'Title': 'Ownership structure, business group affiliation and R&D investments',
                    'Cited by': '1.0',
                    'Link': 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-84864247025&doi=10.1109%2fICMIT.2012.6225784&partnerID=40&md5=b7453f8467acee089a85d48133d72e2f',
                    'Source title': '2012 IEEE 6th International Conference on Management of Innovation and Technology, ICMIT 2012',
                    'Year': '2012',
                    'Authors': 'Choi Y.R., Zahra S.A., Yoshikawa T., Han B.H.'},
                    {'Title': 'When should entrepreneurs expedite or delay opportunity exploitation?',
                    'Cited by': '61.0',
                    'Link': 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-39749086272&doi=10.1016%2fj.jbusvent.2006.11.001&partnerID=40&md5=3b05280b17e8df414df384132fdfb140',
                    'Source title': 'Journal of Business Venturing',
                    'Year': '2008',
                    'Authors': 'Choi Y.R., Lévesque M., Shepherd D.A.'},
                    {'Title': 'The influences of economic and technology policy on the dynamics of new firm formation',
                    'Cited by': '30.0',
                    'Link': 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-33746791542&doi=10.1007%2fs11187-005-5989-2&partnerID=40&md5=606b848b2526afc4e964d2e8b876a62e',
                    'Source title': 'Small Business Economics',
                    'Year': '2006',
                    'Authors': 'Choi Y.R., Phan P.H.'},
                    {'Title': 'Stakeholder perceptions of age and other dimensions of newness',
                    'Cited by': '98.0',
                    'Link': 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-23644448941&doi=10.1177%2f0149206304272294&partnerID=40&md5=8fffe77058d555a19055e95f2912744b',
                    'Source title': 'Journal of Management',
                    'Year': '2005',
                    'Authors': 'Choi Y.R., Shepherd D.A.'},
                    {'Title': 'Dynamics of new firm formation: Impacts of economic and technology policy',
                    'Cited by': 'nan',
                    'Link': 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-17644391442&partnerID=40&md5=5d1816770a26406a114fcd1a54970446',
                    'Source title': 'IEEE International Engineering Management Conference',
                    'Year': '2004',
                    'Authors': 'Choi Y.R., Phan P.H.'},
                    {'Title': "Entrepreneurs' decisions to exploit opportunities",
                    'Cited by': '257.0',
                    'Link': 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-1842501974&doi=10.1016%2fj.jm.2003.04.002&partnerID=40&md5=b17110bf29d28be8a69ce833b74c18aa',
                    'Source title': 'Journal of Management',
                    'Year': '2004',
                    'Authors': 'Choi Y.R., Shepherd D.A.'},
                    {'Title': 'Strategic Types and Performances of Small Firms in Korea',
                    'Cited by': '14.0',
                    'Link': 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-84973818308&doi=10.1177%2f0266242694131001&partnerID=40&md5=c149b902fa9ffe6b8744e5fb6010b973',
                    'Source title': 'International Small Business Journal',
                    'Year': '1994',
                    'Authors': 'Kim Y., Choi Y.'}
                ]
        }

const Result = () => {
    return (
        <div>
            <Profinfo img = {dummy.imglink}
            Name = {dummy.Name} 
            id = {dummy.id}
            Lab = {dummy.Lab} 
            RI = {dummy.ResearchInterest}
            Web = {dummy.Website}
            Dept = {dummy.department}/>
        </div>
    )
}

export default Result