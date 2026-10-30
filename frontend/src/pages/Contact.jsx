import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div className="min-h-screen bg-[#fffaf5]">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-32 pb-20 bg-[#ff6b00]">

        {/* Decorative shapes */}
        <div className="absolute -top-32 -right-32 w-[450px] h-[450px] rounded-full bg-yellow-300/20" />

        <div className="absolute -bottom-40 -left-32 w-[450px] h-[450px] rounded-full bg-orange-300/20" />

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="max-w-4xl">

            <p className="text-white/70 uppercase tracking-[5px] font-semibold text-sm mb-5">
              Contact Foodie
            </p>

            <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.05]">
              Let's talk about
              <br />
              <span className="text-black">
                food & everything
              </span>
              <br />
              in between.
            </h1>

            <p className="mt-7 text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed">
              Whether you have a question, feedback, or need help
              with your order, our team is always ready to help.
            </p>

          </div>

        </div>
      </section>


      {/* ================= MAIN CONTACT AREA ================= */}
      <section className="py-20 md:py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">

            {/* ================= LEFT ================= */}
            <div>

              <p className="text-orange-500 font-semibold uppercase tracking-[3px] text-sm mb-3">
                Get in touch
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                We're here
                <br />
                <span className="text-orange-500">
                  for you.
                </span>
              </h2>

              <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-md">
                Have something on your mind? Reach out to us and
                we'll make sure your message reaches the right team.
              </p>


              {/* Contact details */}
              <div className="mt-10 space-y-4">

                {/* Email */}
                <div className="group flex items-center gap-5 p-5 bg-white rounded-2xl border border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all duration-300">

                  <div className="w-12 h-12 shrink-0 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center text-lg group-hover:bg-orange-500 group-hover:text-white transition">
                    <FaEnvelope />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                      Email us
                    </p>

                    <p className="font-semibold text-gray-800 mt-1">
                      support@foodie.com
                    </p>
                  </div>

                </div>


                {/* Phone */}
                <div className="group flex items-center gap-5 p-5 bg-white rounded-2xl border border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all duration-300">

                  <div className="w-12 h-12 shrink-0 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center text-lg group-hover:bg-orange-500 group-hover:text-white transition">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                      Call us
                    </p>

                    <p className="font-semibold text-gray-800 mt-1">
                      +91 23456 74100
                    </p>
                  </div>

                </div>


                {/* Location */}
                <div className="group flex items-center gap-5 p-5 bg-white rounded-2xl border border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all duration-300">

                  <div className="w-12 h-12 shrink-0 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center text-lg group-hover:bg-orange-500 group-hover:text-white transition">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                      Find us
                    </p>

                    <p className="font-semibold text-gray-800 mt-1">
                      New Delhi, India
                    </p>
                  </div>

                </div>


                {/* Hours */}
                <div className="group flex items-center gap-5 p-5 bg-white rounded-2xl border border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all duration-300">

                  <div className="w-12 h-12 shrink-0 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center text-lg group-hover:bg-orange-500 group-hover:text-white transition">
                    <FaClock />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                      Support hours
                    </p>

                    <p className="font-semibold text-gray-800 mt-1">
                      Every day · 9 AM — 10 PM
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* ================= RIGHT FORM ================= */}
            <div className="relative">

              {/* Orange shadow/background */}
              <div className="absolute inset-0 bg-orange-500 rounded-[32px] translate-x-3 translate-y-3" />

              <div className="relative bg-white rounded-[32px] p-7 md:p-10 shadow-2xl border border-gray-100">

                <div className="mb-8">

                  <p className="text-orange-500 text-sm font-semibold uppercase tracking-[3px]">
                    Send a message
                  </p>

                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                    How can we help?
                  </h3>

                  <p className="text-gray-500 mt-3">
                    Tell us what's on your mind. We'll get back to you
                    as soon as possible.
                  </p>

                </div>


                <form className="space-y-5">

                  {/* Name + Email */}
                  <div className="grid md:grid-cols-2 gap-5">

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Your name
                      </label>

                      <input
                        type="text"
                        placeholder="Mention your name..."
                        className="
                          w-full
                          px-5
                          py-4
                          rounded-xl
                          bg-gray-50
                          border
                          border-gray-200
                          outline-none
                          transition
                          focus:bg-white
                          focus:border-orange-500
                          focus:ring-4
                          focus:ring-orange-100
                        "
                      />
                    </div>


                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email
                      </label>

                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="
                          w-full
                          px-5
                          py-4
                          rounded-xl
                          bg-gray-50
                          border
                          border-gray-200
                          outline-none
                          transition
                          focus:bg-white
                          focus:border-orange-500
                          focus:ring-4
                          focus:ring-orange-100
                        "
                      />
                    </div>

                  </div>


                  {/* Subject */}
                  <div>

                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>

                    <input
                      type="text"
                      placeholder="How can we help you?"
                      className="
                        w-full
                        px-5
                        py-4
                        rounded-xl
                        bg-gray-50
                        border
                        border-gray-200
                        outline-none
                        transition
                        focus:bg-white
                        focus:border-orange-500
                        focus:ring-4
                        focus:ring-orange-100
                      "
                    />

                  </div>


                  {/* Message */}
                  <div>

                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>

                    <textarea
                      rows="6"
                      placeholder="Write your message here..."
                      className="
                        w-full
                        px-5
                        py-4
                        rounded-xl
                        bg-gray-50
                        border
                        border-gray-200
                        outline-none
                        resize-none
                        transition
                        focus:bg-white
                        focus:border-orange-500
                        focus:ring-4
                        focus:ring-orange-100
                      "
                    />

                  </div>


                  {/* Submit */}
                  <button
                    type="submit"
                    className="
                      w-full
                      flex
                      items-center
                      justify-center
                      gap-3
                      bg-black
                      text-white
                      py-4
                      rounded-xl
                      font-semibold
                      text-lg
                      hover:bg-orange-500
                      hover:shadow-xl
                      transition-all
                      duration-300
                    "
                  >
                    Send Message
                    <FaArrowRight />
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= BOTTOM CTA ================= */}
      <section className="px-6 pb-24">

        <div className="max-w-7xl mx-auto">

          <div className="relative overflow-hidden bg-black rounded-[32px] px-8 py-14 md:px-16 md:py-16">

            {/* Decoration */}
            <div className="absolute -right-20 -top-32 w-80 h-80 rounded-full bg-orange-500/20" />

            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">

              <div>

                <p className="text-orange-500 font-semibold uppercase tracking-[3px] text-sm mb-3">
                  Ready to order?
                </p>

                <h2 className="text-white text-3xl md:text-5xl font-bold">
                  Your next favourite meal
                  <br />
                  is waiting.
                </h2>

              </div>

              <Link
                to="/menu"
                className="
                  shrink-0
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  bg-orange-500
                  text-white
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  hover:bg-orange-600
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Explore Menu
                <FaArrowRight />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;