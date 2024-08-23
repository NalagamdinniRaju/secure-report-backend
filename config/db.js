// // // const mongoose = require('mongoose');

// // // const connectDB = async () => {
// // //     try {
// // //         await mongoose.connect(process.env.MONGO_URI, {
// // //             useNewUrlParser: true,
// // //             useUnifiedTopology: true
// // //         });
// // //         console.log('MongoDB connected');
// // //     } catch (err) {
// // //         console.error(err.message);
// // //         process.exit(1);
// // //     }
// // // };

// // // module.exports = connectDB;
// // // config/db.js
// // const mongoose = require('mongoose');

// // const connectDB = async () => {
// //   try {
// //     await mongoose.connect(process.env.MONGO_URI, {
// //       useNewUrlParser: true,
// //       useUnifiedTopology: true
// //     });
// //     console.log('MongoDB connected');

// //     // Insert dummy data
// //     await insertDummyData();
// //   } catch (err) {
// //     console.error(err.message);
// //     process.exit(1);
// //   }
// // };

// // const insertDummyData = async () => {
// //   const Role = require('../models/Role');
// //   const Report = require('../models/Report');

// //   // Insert dummy roles
// //   const roles = [
// //     { name: 'Admin', permissions: ['create', 'read', 'update', 'delete'] },
// //     { name: 'Editor', permissions: ['read', 'update'] },
// //     { name: 'Viewer', permissions: ['read'] }
// //   ];

// //   for (let role of roles) {
// //     await Role.findOneAndUpdate({ name: role.name }, role, { upsert: true });
// //   }

// //   // Insert dummy reports
// //   const reports = [
// //     { title: 'Q1 Financial Report', content: 'Financial details for Q1' },
// //     { title: 'Q2 Financial Report', content: 'Financial details for Q2' },
// //     { title: 'Q3 Financial Report', content: 'Financial details for Q3' },
// //     { title: 'Q4 Financial Report', content: 'Financial details for Q4' },
// //     { title: 'Annual Report 2023', content: 'Annual financial report for 2023' },
// //     { title: 'Marketing Strategy', content: 'Marketing strategy for the upcoming year' },
// //     { title: 'Product Roadmap', content: 'Product development roadmap' },
// //     { title: 'Customer Satisfaction Survey', content: 'Results of the customer satisfaction survey' },
// //     { title: 'Employee Engagement Report', content: 'Employee engagement survey results' },
// //     { title: 'IT Infrastructure Assessment', content: 'Assessment of current IT infrastructure' }
// //   ];

// //   for (let report of reports) {
// //     await Report.findOneAndUpdate({ title: report.title }, report, { upsert: true });
// //   }

// //   console.log('Dummy data inserted successfully');
// // };

// // module.exports = connectDB;
// // config/db.js
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });
//     console.log('MongoDB connected');

//     // Insert dummy data
//     await insertDummyData();
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };

// const insertDummyData = async () => {
//   const Role = require('../models/Role');
//   const User = require('../models/User');
//   const Report = require('../models/Report');

//   // Insert roles
//   const roles = [
//     { name: 'Admin', permissions: ['create', 'read', 'update', 'delete', 'share'] },
//     { name: 'Editor', permissions: ['read', 'update', 'share'] },
//     { name: 'Viewer', permissions: ['read'] }
//   ];

//   for (let role of roles) {
//     await Role.findOneAndUpdate({ name: role.name }, role, { upsert: true });
//   }

//   // Insert admin user
//   const adminRole = await Role.findOne({ name: 'Admin' });
//   const adminPassword = await bcrypt.hash('admin123', 10);
//   await User.findOneAndUpdate(
//     { username: 'admin' },
//     { username: 'admin', password: adminPassword, role: adminRole._id },
//     { upsert: true }
//   );

//   // Insert reports
//   const reports = [
//     {
//       title: 'Q4 2023 Financial Report',
//       summary: 'Comprehensive financial analysis for Q4 2023',
//       content: `
//         <h2>Q4 2023 Financial Highlights</h2>
//         <ul>
//           <li>Revenue: $10.5 million (up 15% YoY)</li>
//           <li>Net Profit: $2.3 million (up 8% YoY)</li>
//           <li>Operating Margin: 22% (up 2% from Q3)</li>
//         </ul>
//         <p>Our Q4 performance demonstrates strong growth across all business units...</p>
//       `
//     },
//     {
//       title: 'Annual Cybersecurity Assessment 2023',
//       summary: 'Detailed review of our cybersecurity posture',
//       content: `
//         <h2>Key Findings</h2>
//         <ol>
//           <li>Implemented multi-factor authentication across 95% of systems</li>
//           <li>Reduced average time to patch critical vulnerabilities by 40%</li>
//           <li>Conducted 12 phishing simulation exercises, improving employee awareness</li>
//         </ol>
//         <p>While we've made significant improvements, areas for further enhancement include...</p>
//       `
//     },
//     {
//       title: 'Customer Satisfaction Survey Results',
//       summary: 'Analysis of customer feedback for Q3 2023',
//       content: `
//         <h2>Survey Highlights</h2>
//         <ul>
//           <li>Overall satisfaction score: 8.7/10 (up from 8.3 in Q2)</li>
//           <li>Net Promoter Score (NPS): 62 (up 5 points from Q2)</li>
//           <li>Top areas for improvement: mobile app performance, customer support response time</li>
//         </ul>
//         <p>The survey results indicate a positive trend in customer satisfaction...</p>
//       `
//     },

//   ];

//   for (let report of reports) {
//     await Report.findOneAndUpdate({ title: report.title }, report, { upsert: true });
//   }

//   console.log('Dummy data inserted successfully');
// };

// module.exports = connectDB;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Importing models
const Role = require('../models/Role');
const User = require('../models/User');
const Report = require('../models/Report');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');

    // Insert dummy data
    await insertDummyData();
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

const insertDummyData = async () => {
  try {
    // // Clear existing data
    // await User.deleteMany({});
    // await Role.deleteMany({});
    // await Report.deleteMany({});

    // // Create roles
    // const adminRole = await Role.create({ name: 'Admin', permissions: ['create', 'read', 'update', 'delete', 'share'] });
    // const editorRole = await Role.create({ name: 'Editor', permissions: ['read', 'update', 'share'] });
    // const viewerRole = await Role.create({ name: 'Viewer', permissions: ['read'] });

    // // Create users with hashed passwords
    // const adminPassword = await bcrypt.hash('admin123', 10);
    // const editorPassword = await bcrypt.hash('editor123', 10);
    // const viewerPassword = await bcrypt.hash('viewer123', 10);

    // await User.create([
    //   { username: 'admin', password: adminPassword, role: adminRole._id },
    //   { username: 'editor', password: editorPassword, role: editorRole._id },
    //   { username: 'viewer', password: viewerPassword, role: viewerRole._id },
    // ]);
        // Clear existing data
        await User.deleteMany({});
        await Report.deleteMany({});
    
        // Create users with string roles
        const adminPassword = await bcrypt.hash('admin123', 10);
        const editorPassword = await bcrypt.hash('editor123', 10);
        const viewerPassword = await bcrypt.hash('viewer123', 10);
    
        await User.create([
          { username: 'admin', password: adminPassword, role: 'Admin' },
          { username: 'editor', password: editorPassword, role: 'Editor' },
          { username: 'viewer', password: viewerPassword, role: 'Viewer' },
        ]);

    // Create reports
    const reports = [
      {
        title: 'Q4 2023 Financial Report',
        summary: 'Comprehensive financial analysis for Q4 2023',
        content: `
          <h2>Q4 2023 Financial Highlights</h2>
          <ul>
            <li>Revenue: $10.5 million (up 15% YoY)</li>
            <li>Net Profit: $2.3 million (up 8% YoY)</li>
            <li>Operating Margin: 22% (up 2% from Q3)</li>
          </ul>
          <p>Our Q4 performance demonstrates strong growth across all business units...</p>
        `,
      },
      {
        title: 'Annual Cybersecurity Assessment 2023',
        summary: 'Detailed review of our cybersecurity posture',
        content: `
          <h2>Key Findings</h2>
          <ol>
            <li>Implemented multi-factor authentication across 95% of systems</li>
            <li>Reduced average time to patch critical vulnerabilities by 40%</li>
            <li>Conducted 12 phishing simulation exercises, improving employee awareness</li>
          </ol>
          <p>While we've made significant improvements, areas for further enhancement include...</p>
        `,
      },
      {
        title: 'Customer Satisfaction Survey Results',
        summary: 'Analysis of customer feedback for Q3 2023',
        content: `
          <h2>Survey Highlights</h2>
          <ul>
            <li>Overall satisfaction score: 8.7/10 (up from 8.3 in Q2)</li>
            <li>Net Promoter Score (NPS): 62 (up 5 points from Q2)</li>
            <li>Top areas for improvement: mobile app performance, customer support response time</li>
          </ul>
          <p>The survey results indicate a positive trend in customer satisfaction...</p>
        `,
      },
      {
        title: 'Product Roadmap 2024',
        summary: 'Outline of product development plans for 2024',
        content: `
          <h2>Key Initiatives</h2>
          <ol>
            <li>Launch of AI-powered analytics dashboard (Q2 2024)</li>
            <li>Mobile app redesign and feature expansion (Q3 2024)</li>
            <li>Integration with major CRM platforms (ongoing throughout 2024)</li>
          </ol>
          <p>Our product strategy for 2024 focuses on enhancing user experience and expanding our ecosystem...</p>
        `,
      },
      {
        title: 'Employee Engagement Report',
        summary: 'Results from the annual employee engagement survey',
        content: `
          <h2>Key Insights</h2>
          <ul>
            <li>Overall engagement score: 7.8/10 (up from 7.5 last year)</li>
            <li>Top drivers of engagement: work-life balance, career development opportunities</li>
            <li>Areas for improvement: internal communication, recognition programs</li>
          </ul>
          <p>The survey results show positive trends in employee satisfaction, with some areas identified for further improvement...</p>
        `,
      },
      {
        title: 'Market Analysis Report 2023',
        summary: 'Analysis of market trends and competitive landscape',
        content: `
          <h2>Market Trends</h2>
          <ul>
            <li>Increased adoption of cloud computing solutions</li>
            <li>Growing demand for AI-driven analytics</li>
            <li>Expansion in the cybersecurity market</li>
          </ul>
          <p>Our analysis suggests that companies investing in cloud and AI technologies are poised for growth...</p>
        `,
      },
      {
        title: 'Sales Performance Review Q3 2023',
        summary: 'Evaluation of sales performance across all regions',
        content: `
          <h2>Regional Highlights</h2>
          <ul>
            <li>North America: $4.2 million in sales (up 10% YoY)</li>
            <li>Europe: $3.1 million in sales (flat YoY)</li>
            <li>Asia: $2.7 million in sales (up 20% YoY)</li>
          </ul>
          <p>Our sales teams have delivered strong results, particularly in the Asia-Pacific region...</p>
        `,
      },
      {
        title: 'HR Compliance Report 2023',
        summary: 'Review of HR compliance and policies',
        content: `
          <h2>Compliance Highlights</h2>
          <ul>
            <li>All mandatory training programs completed by 98% of employees</li>
            <li>New harassment prevention policy implemented company-wide</li>
            <li>Internal audit revealed minor discrepancies in employee records...</li>
          </ul>
          <p>Overall, the company is compliant with all relevant HR regulations and policies...</p>
        `,
      },
      {
        title: 'Sustainability Initiatives Report',
        summary: 'Overview of our sustainability efforts and impact',
        content: `
          <h2>Initiatives</h2>
          <ul>
            <li>Reduced carbon emissions by 15% in 2023</li>
            <li>Launched company-wide recycling program</li>
            <li>Implemented energy-efficient lighting in all offices</li>
          </ul>
          <p>Our commitment to sustainability is reflected in our ongoing efforts to reduce our environmental footprint...</p>
        `,
      },
      {
        title: 'Innovation Summit 2023 Summary',
        summary: 'Key takeaways from the annual Innovation Summit',
        content: `
          <h2>Highlights</h2>
          <ul>
            <li>Launch of new AI-based customer service tool</li>
            <li>Introduction of blockchain technology for supply chain management</li>
            <li>Partnerships announced with leading tech firms</li>
          </ul>
          <p>The Innovation Summit showcased our commitment to staying ahead in technology and innovation...</p>
        `,
      },
      {
        title: 'Diversity and Inclusion Report',
        summary: 'Progress and goals for enhancing diversity and inclusion',
        content: `
          <h2>Key Metrics</h2>
          <ul>
            <li>Increased representation of women in leadership roles to 35%</li>
            <li>Launched mentorship programs for underrepresented groups</li>
            <li>Conducted diversity training for all employees</li>
          </ul>
          <p>We are committed to fostering an inclusive environment where everyone can thrive...</p>
        `,
      },
      {
        title: 'Tech Infrastructure Upgrade Plan',
        summary: 'Detailed plan for upgrading our tech infrastructure',
        content: `
          <h2>Upgrade Phases</h2>
          <ul>
            <li>Phase 1: Server upgrades and cloud migration (Q1 2024)</li>
            <li>Phase 2: Network security enhancements (Q2 2024)</li>
            <li>Phase 3: Data center consolidation (Q3 2024)</li>
          </ul>
          <p>The upgrade plan will ensure our infrastructure is robust, secure, and scalable...</p>
        `,
      },
      {
        title: 'Customer Retention Strategy 2024',
        summary: 'Strategies to enhance customer loyalty and retention',
        content: `
          <h2>Key Strategies</h2>
          <ul>
            <li>Personalized customer experience initiatives</li>
            <li>Improved loyalty programs with exclusive offers</li>
            <li>Enhanced customer support channels</li>
          </ul>
          <p>Our retention strategy is focused on providing value and building lasting relationships with customers...</p>
        `,
      },
      {
        title: 'Employee Training and Development Plan',
        summary: 'Overview of training programs for employee skill enhancement',
        content: `
          <h2>Training Programs</h2>
          <ul>
            <li>Leadership development courses for managers</li>
            <li>Technical skill workshops for engineering teams</li>
            <li>Soft skill training for customer-facing roles</li>
          </ul>
          <p>Investing in our employees' development is crucial to our long-term success...</p>
        `,
      },
      {
        title: 'Q3 Marketing Campaign Performance',
        summary: 'Analysis of marketing campaigns and their effectiveness',
        content: `
          <h2>Campaign Results</h2>
          <ul>
            <li>Social media campaigns generated 1.5 million impressions</li>
            <li>Email marketing had a 25% open rate</li>
            <li>Pay-per-click advertising resulted in a 5% conversion rate</li>
          </ul>
          <p>Our marketing campaigns have effectively increased brand awareness and engagement...</p>
        `,
      },
      {
        title: 'Supply Chain Optimization Report',
        summary: 'Strategies for optimizing supply chain efficiency',
        content: `
          <h2>Optimization Tactics</h2>
          <ul>
            <li>Implementing AI-driven demand forecasting</li>
            <li>Enhancing supplier collaboration through integrated systems</li>
            <li>Reducing lead times and inventory holding costs</li>
          </ul>
          <p>Optimizing our supply chain is key to maintaining competitiveness and customer satisfaction...</p>
        `,
      },
    ];

    await Report.insertMany(reports);

    console.log('Dummy data inserted successfully');
  } catch (err) {
    console.error('Error inserting dummy data:', err);
  }
};

module.exports = connectDB;
