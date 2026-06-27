import SectionHeading from "./SectionHeading";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Contact Us"
          subtitle="Have questions about JHICON-2027? Reach out to us"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Left: Contact Info */}
          <div className="bg-white rounded-xl border border-gray-200/60 shadow-xs p-8 flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Get in Touch</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  For any inquiries regarding submissions, registration, sponsorship, or general queries about the conference, feel free to contact us.
                </p>
              </div>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center shrink-0 text-primary border border-primary/10">
                    <FaMapMarkerAlt className="text-lg" />
                  </div>
                  <div className="text-sm text-gray-600">
                    <p className="font-semibold text-foreground">Venue Address</p>
                    <p className="mt-1 leading-relaxed">
                      Arka Jain University, Gamharia, Seraikela-Kharsawan, Jharkhand 832108, India
                    </p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center shrink-0 text-primary border border-primary/10">
                    <FaEnvelope className="text-lg" />
                  </div>
                  <div className="text-sm text-gray-600 min-w-0">
                    <p className="font-semibold text-foreground">Email Contact</p>
                    <div className="flex flex-col gap-1.5 mt-1.5">
                      <a href="mailto:jhicon.ieee@arkajainuniversity.ac.in" className="hover:text-accent transition-colors break-all font-medium text-primary">
                        jhicon.ieee@arkajainuniversity.ac.in
                      </a>
                      <a href="mailto:dr.ashwini@arkajainuniversity.ac.in" className="hover:text-accent transition-colors break-all font-medium text-primary">
                        dr.ashwini@arkajainuniversity.ac.in
                      </a>
                      <a href="mailto:dr.aditya@arkajainuniversity.ac.in" className="hover:text-accent transition-colors break-all font-medium text-primary">
                        dr.aditya@arkajainuniversity.ac.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-xs h-[350px] lg:h-auto min-h-[350px]">
            <iframe
              title="Arka Jain University Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9814.013552989769!2d86.09872055973601!3d22.839245776231312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e5f1b496777f%3A0x1d506033b3ed835d!2sARKA%20JAIN%20UNIVERSITY%20CAMPUS!5e0!3m2!1sen!2sin!4v1772993512424!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
