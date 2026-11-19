import type { Metadata } from "next";
import { FaCheckCircle, FaExternalLinkAlt, FaFileAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Camera-Ready Submission Guidelines | IEEE JHICON 2027",
  description:
    "Camera-ready manuscript preparation, submission, copyright, and author checklist guidelines for JHICON-2027.",
};

const checklist = [
  "The IEEE conference template has been followed.",
  "All reviewer comments have been addressed.",
  "Paper length is within the permitted maximum of 6 pages, including references.",
  "Title, authors, affiliations and email addresses are correct.",
  "Similarity/originality has been checked and it is below 30%.",
  "The correct copyright notice has been inserted.",
  "The PDF has successfully passed IEEE PDF eXpress using Conference ID 72161X.",
  "IEEE eCF/copyright formalities have been completed when enabled.",
  "The final PDF has been uploaded to the correct paper record in Microsoft CMT.",
];

function GuidelineCard({
  number,
  title,
  children,
}: {
  number?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 flex items-baseline gap-2 text-xl font-bold text-primary">
        {number && <span className="text-accent">{number}.</span>}
        {title}
      </h2>
      <div className="space-y-4 text-sm leading-relaxed text-gray-600">{children}</div>
    </article>
  );
}

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2">
          <FaCheckCircle className="mt-1 shrink-0 text-xs text-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 font-semibold text-primary hover:text-accent"
    >
      {children}
      <FaExternalLinkAlt className="text-xs" />
    </a>
  );
}

export default function CameraReadyPage() {
  return (
    <>
      <section className="bg-linear-to-r from-primary to-primary-dark py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Camera-Ready Submission Guidelines
          </h1>
          <p className="mt-3 text-lg text-white/80">
            Final manuscript preparation and submission requirements for JHICON-2027
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl space-y-6 px-4 sm:px-6 lg:px-8">
          <GuidelineCard title="Prepare the Final Camera-Ready Manuscript">
            <p>
              Authors of accepted papers must prepare and submit the final revised manuscript
              in accordance with the JHICON 2027 author guidelines. All reviewer comments and
              required corrections should be incorporated carefully into the camera-ready
              manuscript.
            </p>
            <BulletList
              items={[
                <>
                  Manuscripts must be prepared in accordance with the{" "}
                  <ExternalLink href="https://www.ieee.org/conferences/publishing/templates">
                    IEEE format
                  </ExternalLink>
                  .
                </>,
                "Research papers must not exceed 6 pages, including the references. No appendix is allowed. Only electronic submissions in PDF format will be considered.",
                "Authors should carefully proofread the title, author names, affiliations, email addresses, equations, figures, tables, captions, references and acknowledgements before final submission.",
                "Final manuscript must be named as TRACK NO PIDXXX (where XXX is your paper ID). For example, for a Track-1 paper with ID 123, the name of the manuscript should be TRACK 1 PID123.",
                "A paper submitted to JHICON 2027 cannot be under review for any other conference or journal during the entire time it is considered for JHICON 2027, and it must be substantially different from any previously published work.",
                "A paper submitted to JHICON 2027 must present original work not described in any prior publication that is more than 4 double-column pages in length. If a submission has overlap with a prior publication, the submission must cite the prior publication, along with all other relevant published work.",
                "Submissions will be reviewed in a single-blind manner. Submissions that are rejected in the first round of the JHICON 2027 research track are not eligible for resubmission to the second round.",
                "IEEE reserves the right to exclude a paper from distribution (e.g., remove it from IEEE Xplore) after the conference if none of the authors attend the conference to present their paper.",
              ]}
            />
            <p>
              <ExternalLink href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FJHICON2027">
                Conference Management Toolkit - Login
              </ExternalLink>
            </p>
          </GuidelineCard>

          <GuidelineCard number="2" title="Originality, Similarity and Publication Compliance">
            <p>
              The camera-ready manuscript must represent original scholarly work and comply
              with IEEE publication requirements.
            </p>
            <p>
              The paper must not be simultaneously under review by another conference or
              journal while it is under consideration by JHICON 2027.
            </p>
            <p>
              Please ensure that plagiarism of your manuscript is less than 30% before
              submitting the camera-ready paper to confirm inclusion in IEEE Xplore. Papers
              with plagiarism above 30% will not be forwarded for publication.
            </p>
          </GuidelineCard>

          <GuidelineCard number="3" title="Author Registration and Presentation Requirement">
            <BulletList
              items={[
                "At least one Full Author Registration is required for inclusion of the paper(s) in the conference programme and IEEE proceedings.",
                "In the student registration category, only one paper can be presented.",
                "The registration fee is non-refundable.",
                "A paper may be excluded from IEEE Xplore if none of its authors attends the conference and presents the paper, in accordance with IEEE requirements.",
              ]}
            />
          </GuidelineCard>

          <GuidelineCard number="4" title="IEEE Copyright Notice on the First Page">
            <p>
              The final manuscript is required to carry the IEEE copyright notice at the
              bottom of the first page. Authors must use only the copyright code officially
              communicated for JHICON 2027.
            </p>
            <p className="font-semibold text-foreground">
              Exact JHICON 2027 IEEE copyright clearance codes:
            </p>
            <BulletList
              items={[
                "For papers in which all authors are employed by the US government: U.S. Government work not protected by U.S. copyright.",
                "For papers in which all authors are employed by a Crown government (UK, Canada, and Australia): 979-8-3195-3955-7/27/$31.00 ©2027 Crown.",
                "For papers in which all authors are employed by the European Union: 979-8-3195-3955-7/27/$31.00 ©2027 European Union.",
                "For all other papers: 979-8-3195-3955-7/27/$31.00 ©2027 IEEE.",
              ]}
            />
          </GuidelineCard>

          <GuidelineCard number="5" title="PDF eXpress Account Check">
            <p>
              After preparing the final revised manuscript, submit it to PDF eXpress using
              Conference ID <strong>72161X</strong>.
            </p>
            <p>
              <ExternalLink href="https://ieee-pdf-express.org/">
                IEEE PDF eXpress
              </ExternalLink>
            </p>
            <p className="font-semibold text-foreground">For first-time users:</p>
            <BulletList
              items={[
                "Select New Users - IEEE PDF eXpress: Login.",
                "Enter 72161X for the Conference ID, your email ID, and a password.",
                "Continue to enter information as prompted.",
                "An online confirmation will be displayed, and an email confirmation will be sent verifying your account setup.",
              ]}
            />
            <p>
              Previous users of PDF eXpress need to follow the above steps and enter the same
              password used for previous conferences. Verify that your contact information is
              valid.
            </p>
          </GuidelineCard>

          <GuidelineCard number="6" title="Upload the Camera-Ready Paper">
            <p>
              Once the manuscript has been revised, checked for IEEE PDF compliance, and all
              required author formalities have been completed, the final camera-ready file
              should be submitted through the JHICON 2027 Microsoft CMT portal.
            </p>
            <p>
              <strong className="text-foreground">CMT submission portal:</strong>{" "}
              <ExternalLink href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FJHICON2027">
                Microsoft CMT Author Login
              </ExternalLink>
            </p>
            <BulletList
              items={[
                "Upload the final IEEE-compliant PDF against the correct Paper ID.",
                "Ensure that the information entered in CMT matches the information appearing in the final manuscript.",
              ]}
            />
          </GuidelineCard>

          <GuidelineCard number="7" title="IEEE Electronic Copyright Form (eCF)">
            <p>
              Completion of the IEEE electronic Copyright Form is normally required for
              papers intended for IEEE Xplore.
            </p>
            <p>
              Log in to the Microsoft CMT author portal, open the accepted paper record, and
              access the IEEE Copyright/eCF option. Follow the instructions on the IEEE
              electronic Copyright Form portal and complete the copyright transfer.
            </p>
            <ExternalLink href="https://cmt3.research.microsoft.com/docs/help/author/camera-ready-submission.html">
              CMT camera-ready submission help
            </ExternalLink>
          </GuidelineCard>

          <GuidelineCard number="8" title="Final Author Checklist">
            <BulletList items={checklist} />
          </GuidelineCard>

          <div className="flex items-start gap-3 rounded-xl border border-accent/30 bg-accent/10 p-5 text-sm text-gray-700">
            <FaFileAlt className="mt-0.5 shrink-0 text-accent" />
            <p>
              Please review every requirement above before submitting your final manuscript.
              Papers must satisfy the formatting, originality, registration, copyright, PDF
              validation, and CMT upload requirements for consideration in the IEEE
              proceedings.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
