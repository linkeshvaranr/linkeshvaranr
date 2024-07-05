const CFonts = require('cfonts');


function printResume() {
    CFonts.say('Linkeshvaran R', {
        font: 'block', 
        align: 'center',
        colors: ['system'],
        background: 'transparent', 
        letterSpacing: 1,
        lineHeight: 0.5,
        space: true,
        maxLength: '0',
    });

    CFonts.say('Contact Info:', {
        font: 'console',
        align: 'left',
        colors: ['system'],
        background: 'transparent',
        letterSpacing: 1,
        lineHeight: 1,
        space: true,
        maxLength: '0',
    });
    console.log(`
    Email: linkeshvaranr@gmail.com
    Phone: +91 8525076248
    Website: www.linkeshvaranr.com
    LinkedIn: linkedin.com/in/linkeshvaranr
    `);

    CFonts.say('Experience', {
        font: 'console',
        align: 'left',
        colors: ['system'],
        background: 'transparent',
        letterSpacing: 1,
        lineHeight: 1,
        space: true,
        maxLength: '0',
    });
    console.log(`
    # Salesforce Developer

      - Developed custom Salesforce solutions.
      - Built complex console components.
      - Customized FSL Automations based on Customer needs.
      - Created Dashboards involving multiple datasets using SAQL as well as Standard Lens Builder.
    `);

    CFonts.say('Skills', {
        font: 'console',
        align: 'left',
        colors: ['system'],
        background: 'transparent',
        letterSpacing: 1,
        lineHeight: 1,
        space: true,
        maxLength: '0',
    });
    console.log(`
    # Salesforce Development

        - Apex, Visualforce, Lightning
        - JavaScript, HTML, CSS
        - REST APIs, SOAP APIs

    # Salesforce FSL 

        - Work Order and Service Appointment Customization / Automation
        - Gantt 

    # Salesforce Analytics

        - CRM Analytics and Tableau
        - SQL and SAQL
    `);

}

printResume();
