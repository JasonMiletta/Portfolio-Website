'use strict';

portfolioApp.controller('salesforceProjectsController',
        function ($scope) {
            $scope.salesforceProjects = [
                {
                    name: 'Tenable Support Community',
                    description: 'Developed lightning components and community configurations to create a gamified support community where users can collaborate and earn rewards. ' + 
                    'Later phases integrated with the client\'s license management systems to provide a space where users could manage their purchased software as well. ' + 
                    'Coordinated integration efforts with the client\'s technical team through the use of REST endpoints and Mulesoft connectors.',
                    fileSrc: 'https://community.tenable.com/s/',
                    imgSrc: 'assets/img/SalesforceImages/TenableHomepage.png',
                    tag: 'Tech Lead - 7Summits',
                    button: 'visit'
                },
                {
                    name: 'Activision Support Community',
                    description: 'Created a brand new community with custom Lightning components where users can ask and answer questions to provide support for other members encountering issues with game releases. ' + 
                    'This was also paired with a customized gamification system where users would gain incentives for contributing to the community.',
                    fileSrc: 'https://support.activision.com/community/s/',
                    imgSrc: 'assets/img/SalesforceImages/ActivisionHomepage.png',
                    tag: 'Tech Lead - 7Summits',
                    button: 'visit'
                },
                {
                    name: 'DalTile - Distributor and SSC Portal',
                    description: 'Served as the Tech Lead on a large two-community project to provide distributors and small sellers with a new experience for them to manage their ' + 
                    'financial balances and orders while integrating with older systems to maintain legacy functionality. Lead a team of 3 on site developers and 2 other off shore developers.',
                    fileSrc: '',
                    imgSrc: 'assets/img/SalesforceImages/DaltileHomepage.png',
                    tag: 'Tech Lead - 7Summits',
                    button: ''
                },
                {
                    name: 'CBS - CBSConnect',
                    description: 'Created a brand new community to provide students a hub to surface school events and quickly surface notifications and metrics on their class assignments and messages. ' + 
                    'Integrated with other school systems through REST api callouts.',
                    fileSrc: '',
                    imgSrc: 'assets/img/SalesforceImages/CBSConnectHomepage.png',
                    tag: 'Lead Developer - 7Summits',
                    button: ''
                },
                {
                    name : 'Evolve Vacation Rental',
                    imgSrc: 'assets/img/SalesforceImages/EvolveAppointments.png',
                    fileSrc: '',
                    description : 'Created a brand new community where travelers and renters could view their travel appointments and bookings. The highlight was centered ' + 
                    'on heavily customized Lightning components surfacing events and calendars to provide a slick experience.',
                    tag: 'Salesforce Developer - 7Summits',
                    button: ''
                }, 
                {
                    name: 'Plus Relocation',
                    description: 'Developed and maintained custom Visualforce pages for a legacy Visualforce community with support centered around leveraging chatter for communications with end users.',
                    fileSrc: '',
                    imgSrc: 'assets/img/SalesforceImages/PlusRelocationHomepage.png',
                    tag: 'Salesforce Developer - 7Summits',
                    button: ''
                }
            ];
        }
    )