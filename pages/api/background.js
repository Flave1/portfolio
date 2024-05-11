const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "Middlesex University",
        degree:
          "BSc Honours, Information Technology and Business Information Systems",
        detail:
          "Information Technology and Business Information Systems BSc Honours",
        year: "2023",
        location: "London, United Kingdom",
      },
      {
        id: 1,
        title: "Aptech Nigeria",
        degree: "Advance Diploma",
        detail: "Advance Diploma in Software Engineering ADSE",
        year: "2019",
        location: "Imo, Nigeria",
      },
      {
        id: 2,
        title: "Federal Polytechnic Nekede",
        degree: "Diploma",
        detail: "Co-operative Economics",
        year: "2016",
        location: "Imo, Nigeria",
      },
    ],
  },
  {
    expCards: [
      {
        id: -1,
        title: "VENDTECHSL",
        role: "Software Engineer",
        url: "https://vendtechsl.com",
        desc: "Company into Utility Bill Payment Systems, offering seamless management of bills across various services.",
        year: "02/2021 - Present",
        location: "Freetoen, Sierra Leone",
      },
      {
        id: 0,
        title: "Plano.co",
        role: "Software Engineer",
        url: "https://plano.co/plano-app",
        desc: "Plano company specializes in solution that equip children with their parental control solutions and eye health app to manage their device use and keep their eyes healthy in this unpredictable digitalised world",
        year: "02/2022 - 2022",
        location: "30 Cecil Street, #19-08 Prudential Tower, Singapore 049712",
      },
      {
        id: 1,
        title: "Swiftcore Technologies",
        role: "Software Engineer",
        url: "https://swiftcoretech.com",
        desc: "SwiftCore Tech leverages process management software and custom apps to upgrade and automate your operational tasks ranging from backend processes to frontdesk engagements",
        year: "02/2023 - Present",
        location: "Toronto, ON Canada",
      },
      {
        id: 2,
        title: "GODP Consulting",
        role: "Software Enigneer",
        url: "https://www.godp.co.uk/",
        desc: "Consulting Comapny into Business consulting human resourse and saas solutions",
        year: "02/2020 - 05/2022",
        location: "Lagos, Nigeria",
      },
      {
        id: 3,
        title: "Xplug Technologies",
        role: "Software Engineer",
        url: "http://www.xplugng.com",
        desc: "Company in Software as a Service (Saas) Solutions, ",
        year: "09/2019 - 02/2020",
        location: "Lagos, Nigeria",
      },
      {
        id: 4,
        title: "Exwhyzee Technologies",
        role: "Software Engineer",
        url: "http://exwhyzee.ng",
        desc: "A company specializde in providing innovative educational tools and services tailored to meet the needs of modern learners",
        year: "01/2018 - 02/2019",
        location: "Imo, Nigeria",
      },
      {
        id: 5,
        title: "Oche Micro-Finance Bank",
        role: "Administrator",
        url: "https://ochemfb.com",
        desc: "A financial institution playing a pivotal role in the economy by providing a range of financial services to individuals, businesses, and governments.",
        year: "09/2016 - 02/2017",
        location: "Imo, Nigeria",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
