import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | JHICON-2027",
  description: "Get in touch with the organizing committee of the 1st Jharkhand International Conference (JHICON-2027) at Arka Jain University.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-linear-to-r from-primary to-primary-dark py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Contact Us</h1>
          <p className="mt-3 text-white/80 text-lg">
            Have questions? We&apos;d love to hear from you
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Contact Info Card */}
            <div className="bg-white rounded-2xl border border-gray-200/60 shadow-xs p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Get in Touch</h2>
                <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                  For inquiries regarding paper submissions, registration, sponsorship, or general information about JHICON-2027, please reach out to us at the addresses below.
                </p>

                <div className="space-y-8">
                  {/* Venue Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 text-primary border border-primary/10">
                      <FaMapMarkerAlt className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-base">Venue Address</h3>
                      <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">
                        Arka Jain University<br />
                        NH-33, Gamharia<br />
                        Seraikela-Kharsawan, Jharkhand 832108<br />
                        India
                      </p>
                    </div>
                  </div>

                  {/* Emails */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 text-primary border border-primary/10">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-base">Email Contact</h3>
                      <div className="text-sm text-gray-600 mt-1.5 flex flex-col gap-2">
                        <a
                          href="mailto:jhicon.ieee@arkajainuniversity.ac.in"
                          className="break-all font-medium hover:text-accent transition-colors"
                        >
                          jhicon.ieee@arkajainuniversity.ac.in
                        </a>
                        <a
                          href="mailto:dr.ashwini@arkajainuniversity.ac.in"
                          className="break-all font-medium hover:text-accent transition-colors"
                        >
                          dr.ashwini@arkajainuniversity.ac.in
                        </a>
                        <a
                          href="mailto:dr.aditya@arkajainuniversity.ac.in"
                          className="break-all font-medium hover:text-accent transition-colors"
                        >
                          dr.aditya@arkajainuniversity.ac.in
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 text-xs text-gray-400">
                Official Correspondence of the 1st Jharkhand International Conference (JHICON-2027)
              </div>
            </div>

            {/* Map Card */}
            <div className="rounded-2xl overflow-hidden border border-gray-200/80 shadow-xs h-[450px] lg:h-auto min-h-[400px]">
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
    </>
  );
}
