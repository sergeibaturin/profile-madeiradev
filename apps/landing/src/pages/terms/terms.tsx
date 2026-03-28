import { Box, Container, Typography } from '@mui/material'

const sections = [
  {
    title: 'Preamble',
    body: 'THIS TERMS OF USE AGREEMENT (the "Agreement") constitutes a legally binding agreement by and between BATURIN SERGEI, operating as MadeiraDev, an Empresa Unipersonal organized under the laws of Uruguay (Nº Contribuyente: 00220525910015, registered address: Av. Mcal. Fco. Solano López 1475, Apto. 404, CP 11400, Montevideo, Uruguay) ("MadeiraDev") and the client, whether personally or on behalf of an entity ("Client"), with regard to access and use of MadeiraDev\'s website: https://madeiradev.com (the "Website"), the CTO-as-a-Subscription service (the "Service"), and any other media form, channel, mobile website, or mobile application related, linked, or otherwise connected thereto. Failure to agree and adhere to all of the terms, conditions, and obligations contained herein results in the express prohibition of the Client\'s use of the Website and the Service, and the Client is ordered to discontinue use immediately. Thereafter the relationship between Client and MadeiraDev shall cease and be of no further force and effect between the parties, except that any obligation of Client to pay MadeiraDev for services rendered shall remain and continue to be an ongoing obligation owed by Client to MadeiraDev.',
  },
  {
    title: '1. Intellectual Property Rights',
    body: 'Unless otherwise indicated, the Website (https://madeiradev.com) is the property of BATURIN SERGEI (Empresa Unipersonal, Nº Contribuyente: 00220525910015), and all source code, databases, functionality, software, website designs, audio, video, text, photographs and graphics of any nature and regardless of format (herein, collectively or individually, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned and controlled by MadeiraDev and are protected by copyright and trademark laws and any other applicable intellectual property law or regulation of Uruguay, foreign jurisdictions and international conventions. The Content and Marks are provided "As-Is" for your information and personal use only. Except as expressly provided herein, no part of the Website and no Content may be copied, reproduced, aggregated, republished, uploaded, posted, displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without MadeiraDev\'s express prior written permission. MadeiraDev reserves all rights in the Website, Content and Marks.',
  },
  {
    title: '2. Ownership of Materials',
    body: 'Notwithstanding MadeiraDev\'s ownership of Submissions, as described in Paragraph 6 ("Client Feedback"), all code, configurations, infrastructure-as-code, design files, documentation, and original source files created on Client\'s behalf ("Projects") belong to Client, and Client shall be the sole owner of the copyright for all Projects. In the event that any operation of law would cause MadeiraDev to become the owner of a Project, in whole or in part, rather than Client, MadeiraDev irrevocably and perpetually assigns its entire interest in the Project to Client, without limitation. Client warrants that any and all materials provided to MadeiraDev — including but not limited to AI-generated codebases, prompts, API keys, credentials, and third-party assets — are owned by Client or properly licensed and do not infringe on or misappropriate any third party\'s rights, including all intellectual property rights and any right of publicity. MadeiraDev always reserves the right to share the Client\'s work publicly (social media, website, case studies, etc.) unless agreed upon as stated in Section 19 of this document.',
  },
  {
    title: '3. Third-Party Software, Fonts, and Licenses',
    body: 'In the event that any Project incorporates third-party software libraries, APIs, fonts, or other assets that are not owned by MadeiraDev and require a commercial license in order for Client to legally reproduce, distribute, host, or publicly display the Project ("Third-Party Assets"), MadeiraDev will inform Client in writing that one or more Third-Party Assets have been incorporated into the Project and that Client will need to purchase the required licenses from the respective rights-holders. Said notice will include information sufficient for Client to identify which licenses are required and who to contact in order to purchase them. So long as MadeiraDev has informed Client of the incorporation of Third-Party Assets as described above, Client assumes all responsibility for any consequences as a result of a failure by Client to purchase or maintain the required licenses.',
  },
  {
    title: '4. The Service',
    body: 'The Service consists of a "CTO-as-a-Subscription" model focused on auditing, hardening, and deploying AI-created (vibe-coded) software into production environments. Specific deliverables include but are not limited to: full codebase audits, security reviews, infrastructure setup and ongoing management, CI/CD pipeline implementation, bug fixing, production debugging, deployment fixes, performance optimization, API failure resolution, prompt engineering fixes, token cost optimization, fallback logic implementation, hallucination reduction, authentication and permissions hardening, database refactoring, rate limiting, error monitoring, SEO and metadata implementation, and ongoing maintenance of AI-generated codebases.\n\nThe Service is delivered as a single subscription plan at the current published rate. The billing cycle is 31 days. Client may pause or cancel the subscription at any time. If Client pauses, billing stops immediately and remaining days are banked for future use. One task is worked on at a time to ensure maximum quality and zero technical debt. Most tasks are completed within 24 to 48 hours; larger architectural work is broken into daily updates.\n\nIncluded in the subscription: the full codebase audit on day one (no separate charge), unlimited bug fixes and production support, infrastructure setup and ongoing management, deployment pipeline and CI/CD, security monitoring, patching and incident response, up to 40 hours of development per month for new features and improvements, a dedicated Slack channel with same-day response (4-hour SLA during business hours), weekly 45-minute strategy call, performance monitoring and optimization, and quarterly architecture review with a written roadmap.\n\nUsage Boundaries: up to 20 active issues per month, async support on weekdays, 2 strategy calls per month, and 1 deployment window per week.\n\nExcluded from the subscription: full application rebuilds, new feature development beyond the agreed monthly cap, and large-scale migrations. If the onboarding audit reveals that the appropriate course of action is a ground-up rebuild rather than maintenance, MadeiraDev reserves the right to scope that as a separate fixed-price project before the subscription begins.\n\nA one-time onboarding fee may apply for the first month to cover the initial audit, environment setup, and the work required to bring Client\'s codebase into a manageable state. The onboarding fee, if applicable, will be communicated to Client prior to the commencement of services.',
  },
  {
    title: '5. User Representations',
    body: "By using the Website and/or subscribing to the Service, Client represents and warrants that: Client has the legal capacity and agrees to comply with these Terms of Use; Client is not a minor in the jurisdiction of their domicile; Client will not access the Website through automated or non-human means; Client will not use the Website or the Service for any illegal or unauthorized purpose; Client's use of the Website and the Service will not violate any applicable law or regulation; Client owns or has proper licenses for all codebases, AI-generated code, and third-party assets submitted to MadeiraDev for work; and Client acknowledges that MadeiraDev's SLA response time is not equivalent to resolution time.",
  },
  {
    title: '6. Prohibited Activities',
    body: "Client shall not access or use the Website for any purpose other than that for which the Website is made available to the Client. The Website may not be used in connection with any commercial endeavors except those related to the work performed by MadeiraDev on behalf of the Client. Further, Client agrees to refrain from the following: making any unauthorized use of the Website; retrieving data or content for the purposes of creating or compiling a database or directory; circumventing, disabling, or otherwise interfering with security-related features on the Website; engaging in unauthorized framing or linking of the Website; tricking, defrauding, or misleading MadeiraDev or other users; interfering with, disrupting, or creating an undue burden on the Website or MadeiraDev's networks or servers; using the Website in an effort to compete with MadeiraDev; deciphering, decompiling, disassembling, or reverse engineering any of the software comprising or in any way making up a part of the Website; bypassing any measures on the Website designed to prevent or restrict access; harassing, annoying, intimidating, or threatening any of MadeiraDev's employees, independent contractors, or agents; deleting the copyright or other rights notice from any Content; copying or adapting the Website's software; uploading or transmitting viruses, Trojan horses, or other malicious material; uploading or transmitting any material that acts as a passive or active information collection or transmission mechanism; disparaging, tarnishing, or otherwise harming MadeiraDev; and using the Website in a manner inconsistent with any applicable laws, statutes, or regulations.",
  },
  {
    title: '7. Client Feedback',
    body: 'Client acknowledges and agrees that any questions, comments, suggestions, or other feedback or submission (each a "Submission") shall be the sole property of MadeiraDev. MadeiraDev is under no obligation to keep a Submission confidential or take steps necessary to ensure the confidentiality of a Submission. MadeiraDev shall be the sole and exclusive owner of all rights related to the Submission except to the extent that rights are granted to Client under Paragraph 2 ("Ownership of Materials"), and shall at its sole and unrestricted discretion use and disseminate a Submission for any lawful purpose without permission, acknowledgment, or compensation of or to the Client. Client agrees that it has the right to articulate and put forth the Submission and Client hereby waives all claims and recourse against MadeiraDev for its use of the Submission in accordance with the terms hereof and in its sole discretion hereafter.',
  },
  {
    title: '8. Management and Oversight',
    body: "MadeiraDev reserves the right to monitor the Website for violations of these Terms of Use and to take appropriate legal action in response to a violation of these Terms of Use or any applicable law, statute, or regulation. MadeiraDev further reserves the right to restrict or deny access to the Website or disable the Client's use of the Website or the Service. Such decision shall be in the sole discretion of MadeiraDev, without notice or liability to Client. All decisions regarding the management of the Website and the Service shall be at the sole discretion of MadeiraDev and shall be designed to protect MadeiraDev's rights and property.",
  },
  {
    title: '9. Privacy Policy',
    body: "By using the Website, Client agrees to be bound and abide by the Privacy Policy and the terms more particularly set forth therein and adopted and incorporated herein. The Website is hosted and services are provided from Uruguay. Access of the Website from other regions of the world may result in the applicability of laws, statutes, or regulations differing from those of Uruguay which govern personal data collection, use, or disclosure. Client's continued use of the Website and transfer of data constitutes express consent of Client to the transfer and processing of data. MadeiraDev does not knowingly accept or solicit information from individuals under the age of 18. Upon the receipt of actual knowledge that an individual under the age of 18 has provided personally identifiable information to MadeiraDev without parental consent, MadeiraDev shall delete that information as soon as reasonably practical.",
  },
  {
    title: '10. Returns and Refunds',
    body: 'MadeiraDev reserves the right to deny refunds based on its own discretion and without notice or liability to Client. Refund requests are assessed on a case-by-case basis. Should Client request a refund and the refund is granted, all materials produced by MadeiraDev during that period become the property of MadeiraDev and are prohibited from being used by the Client in any way. Furthermore, non-refundable payment processing fees associated with the transaction will not be refunded. MadeiraDev reserves the right to take appropriate legal actions against Client for breach of this paragraph.',
  },
  {
    title: '11. Modification',
    body: 'MadeiraDev reserves the right to change, alter, modify, amend, or remove anything or any content on the Website for any reason at its sole discretion. MadeiraDev reserves the right to modify or discontinue all or part of the Website or the Service without notice and without liability to Client.',
  },
  {
    title: '12. Connection Interruptions',
    body: "MadeiraDev does not guarantee or warrant the Website will be available and accessible at all times. Issues with hardware, software, or other items may result in interruption delays or errors beyond MadeiraDev's control. Client agrees that MadeiraDev shall not be liable to Client for any loss, damage, or inconvenience caused by Client's inability to access or use the Website during any interruption in the connection or service.",
  },
  {
    title: '13. Governing Law',
    body: 'These Terms of Use shall be governed by and construed in accordance with the laws of the Republic of Uruguay (República Oriental del Uruguay) without regard to conflict of law principles.',
  },
  {
    title: '14. Litigation',
    body: 'Any legal action of whatever nature shall be brought in the courts of Montevideo, Uruguay. The parties hereto consent to personal jurisdiction in said courts and waive all defenses of lack of personal jurisdiction and forum non conveniens with respect to venue and jurisdiction. Application of the United Nations Convention on Contracts for the International Sale of Goods is excluded from these Terms of Use.',
  },
  {
    title: '15. Disclaimer',
    body: "The Website and the Service are provided on an as-is, as-available basis. Client agrees that its use of the Website and the Service are at Client's sole risk. MadeiraDev disclaims all warranties, express or implied, in connection with the Website, the Service, and Client's use thereof, including the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. MadeiraDev makes no warranties or representations about the accuracy or completeness of the Website or any content thereon or content of any websites linked to the Website and MadeiraDev assumes no liability for any errors, mistakes, or inaccuracies of content and materials, personal injury or property damage, any unauthorized access to or use of MadeiraDev's secure servers and/or any personal information and/or financial information stored therein, any interruption or cessation of transmission to or from the Website, any bugs, viruses, Trojan horses, or the like which may be transmitted to or through the Website by any third party, and/or any errors or omissions in content and materials or for any loss or damage of any kind incurred as a result of the use of any content posted, transmitted, or otherwise made available through the Website. MadeiraDev does not warrant, endorse, guarantee, or assume responsibility for any product or service advertised or offered by a third party either through the Website or any hyperlinked website.",
  },
  {
    title: '16. Limitations of Liability and Indemnification',
    body: "MadeiraDev and its directors, employees, members, independent contractors, or agents shall not be liable to Client or any third party for any direct, indirect, consequential, incidental, special, or punitive damages, including lost profit, lost revenue, lost data, attorneys' fees, court costs, fines, forfeitures, or other damages or losses arising from Client's use of the Website or the Service. In no event shall MadeiraDev's total aggregate liability exceed the amount paid by Client to MadeiraDev in the three (3) months immediately preceding the event giving rise to the claim.\n\nClient agrees to defend, indemnify, and hold harmless MadeiraDev and all respective officers, members, agents, partners, employees, and independent contractors from and against any loss, damage, liability, claim, or demand including reasonable attorneys' fees and expenses, made by any third party due to or arising out of: (1) use of the Website or the Service; (2) breach of these Terms of Use; (3) any breach of Client's representations and warranties set forth herein; (4) Client's violation of the rights of any third party, including but not limited to intellectual property rights; (5) any unauthorized use of AI-generated code, third-party libraries, or assets provided by Client. Notwithstanding the foregoing, MadeiraDev reserves the right, at Client's expense, to assume control and defense of any matter for which Client shall be required to indemnify MadeiraDev hereunder. Client agrees to cooperate with the defense of such claims.",
  },
  {
    title: '17. User Data',
    body: 'Client is solely responsible for all data transmitted to or that relates to any activity Client has undertaken using the Website or the Service. This includes but is not limited to source code, API keys, credentials, database contents, and any other sensitive information shared with MadeiraDev during the course of the engagement. MadeiraDev shall have no liability to Client for any loss or corruption of any such data and Client hereby waives any right of action against MadeiraDev from any such loss or corruption. MadeiraDev will make commercially reasonable efforts to handle Client data securely but does not guarantee against data loss.',
  },
  {
    title: '18. Electronic Communications, Transactions, and Signatures',
    body: 'Client hereby consents to receive electronic communications from MadeiraDev and Client agrees that all agreements, notices, disclosures, and other communications sent via email, Slack, or through the Website satisfy any legal requirement that such communication be in writing. Client hereby agrees to the use of electronic signatures, contracts, orders, and other records, and to electronic delivery of notices, policies, and records of transactions initiated or completed by MadeiraDev or through the Website. Client hereby waives any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records or to payments or the granting of credits by any means other than electronic.',
  },
  {
    title: '19. Licensing',
    body: 'Client agrees to assume full responsibility for any unauthorized use of images, fonts, software libraries, APIs, AI models, or other content deployed on their website, servers, communication channels, or any other mediums. It is the sole responsibility of the Client to ensure that all content utilized is properly licensed. While MadeiraDev may, in certain circumstances, hold appropriate licenses for the use of specific materials, such licenses are not transferable to the Client unless explicitly stated in writing. Client is solely responsible for maintaining valid licenses for all third-party AI tools (such as Cursor, Bolt, Lovable, or similar) used in the development of their product.',
  },
  {
    title: '20. Showcasing Client Work',
    body: "MadeiraDev reserves the right to share design work, code samples (anonymized where appropriate), architecture diagrams, and project case studies on digital channels including social media, website, and similar platforms unless otherwise agreed upon. The Client reserves the right to issue an NDA between themselves and MadeiraDev, which in turn would void the right of MadeiraDev to share or discuss Client's work publicly.",
  },
  {
    title: '21. Subscription Management',
    body: "The subscription billing cycle is 31 days. Client may pause or cancel their subscription at any time. Upon pausing, billing stops immediately and any remaining days in the current billing cycle are banked for future use. Upon cancellation, Client retains ownership of all Projects as defined in Paragraph 2. MadeiraDev will provide Client with all final deliverables, access credentials, and documentation within 7 business days of cancellation. MadeiraDev reserves the right to modify subscription pricing with 30 days' prior written notice to Client. Continued use of the Service after a price change constitutes acceptance of the new pricing.",
  },
  {
    title: '22. Confidentiality',
    body: "MadeiraDev acknowledges that in the course of providing the Service, it may have access to confidential information belonging to Client, including but not limited to source code, business plans, API keys, credentials, customer data, and proprietary algorithms. MadeiraDev agrees to treat all such information as confidential and shall not disclose it to any third party without Client's prior written consent, except as required by law. This obligation survives the termination of the Agreement.",
  },
  {
    title: '23. Miscellaneous',
    body: 'These Terms of Use and any policies posted on the Website or regarding the Website constitute the entire agreement and understanding between the Client and MadeiraDev. Failure of MadeiraDev to enforce any right or provision of these Terms of Use shall not operate as a waiver of such right or provision. If any provision or part of these Terms of Use is determined to be unlawful, void, or unenforceable, that provision shall be severed from these Terms of Use but shall not otherwise affect the validity or enforceability of the remaining provisions herein. Nothing in these Terms of Use, the Privacy Policy, or on the Website shall be construed to constitute the forming of a joint venture, partnership, employment, or agency relationship between Client and MadeiraDev.',
  },
  {
    title: '24. Contact Information',
    body: 'For any questions or complaints regarding the Website or the Service, please contact MadeiraDev at the registered address: Av. Mcal. Fco. Solano López 1475, Apto. 404, CP 11400, Montevideo, Uruguay; or via the Website at https://madeiradev.com.',
  },
]

export const Terms = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        pt: 6,
        pb: 8,
        display: 'flex',
        flexDirection: 'column',
      }}
      disableGutters
    >
      <Typography
        sx={{
          fontFamily: 'Roboto',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 900,
          mb: 1,
        }}
      >
        Terms & Conditions
      </Typography>
      <Typography
        sx={{
          fontFamily: 'JetBrains Mono',
          fontSize: '0.875rem',
          color: '#bfbfbf',
          mb: 6,
        }}
      >
        Last Updated: March 24, 2026
      </Typography>
      <Typography
        sx={{
          fontFamily: 'JetBrains Mono',
          fontSize: 'clamp(0.875rem, 1.4vw, 1rem)',
          color: '#bfbfbf',
          mb: 6,
          lineHeight: 1.8,
        }}
      >
        By subscribing to the Service provided by BATURIN SERGEI (Empresa Unipersonal, RUT:
        00220525910015), the "Client" agrees to be bound by the following Terms and Conditions.
      </Typography>

      {sections.map(section => (
        <Box key={section.title} sx={{ mb: 5 }}>
          <Typography
            sx={{
              fontFamily: 'JetBrains Mono',
              fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
              fontWeight: 700,
              color: '#E2E8F0',
              mb: 1.5,
            }}
          >
            {section.title}
          </Typography>
          {Array.isArray(section.body) ? (
            section.body.map((line, i) => (
              <Typography
                key={i}
                sx={{
                  fontFamily: 'JetBrains Mono',
                  fontSize: 'clamp(0.8rem, 1.3vw, 0.95rem)',
                  color: '#bfbfbf',
                  lineHeight: 1.8,
                  mb: 0.75,
                }}
              >
                {line}
              </Typography>
            ))
          ) : (
            <Typography
              sx={{
                fontFamily: 'JetBrains Mono',
                fontSize: 'clamp(0.8rem, 1.3vw, 0.95rem)',
                color: '#bfbfbf',
                lineHeight: 1.8,
              }}
            >
              {section.body}
            </Typography>
          )}
        </Box>
      ))}
    </Container>
  )
}
