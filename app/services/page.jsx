"use client";
import { useState } from "react";
import Image from "next/image";

import Title from "@/components/common/Title";
import CTASection from "@/components/common/CTASection";
import Button from "@/components/common/Button";

import { motion, AnimatePresence } from "framer-motion";

const page = () => {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);

  return (
    <>
      <section>
        <Title
          pretitle="Our Services"
          header="see what we can do for you"
          align="center"
        />

        <motion.div
          id="grp-gre-jointing"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <div className="relative isolate rounded-2xl shadow-lg bg-white">
            <div className="relative z-10  w-full space-y-5 rounded-b-2xl bg-white md:mr-auto md:mt-0 md:rounded-2xl md:p-8">
              <div
                className={`relative h-[220px] w-full overflow-hidden rounded-t-2xl
            md:absolute md:inset-y-0 md:right-0 md:h-full
            md:w-[25%]
                  ${
                    isExpanded1
                      ? "md:rounded-tr-2xl md:rounded-tl-none md:rounded-br-none"
                      : "md:rounded-r-2xl md:rounded-tl-none"
                  }
            
            transition-all duration-500 ease-in-out`}
              >
                <Image
                  src="/assets/services/grplamination.webp"
                  alt="GRE and GRP piping installation and lamination"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="space-y-5 md:w-[75%] p-6">
                <h2 className="border-l-4 border-red-600  py-2 pl-4 text-center text-xl font-bold text-primary md:text-left md:text-2xl">
                  GRE / GRP Piping Systems
                </h2>

                <p>
                  Skytech General Contracting is an ADNOC-approved specialist in
                  the installation and jointing of glass-reinforced epoxy (GRE)
                  and glass-reinforced plastic (GRP) piping systems. We serve
                  oil & gas, utilities, industrial and infrastructure projects
                  across the UAE.
                </p>

                <p>
                  Composite piping performs only as well as its joints. Our
                  teams are trained and experienced in all the major GRE/GRP
                  jointing systems, and they follow manufacturer procedures,
                  approved method statements and project specifications on every
                  joint.
                </p>

                <motion.button
                  type="button"
                  onClick={() => setIsExpanded1(!isExpanded1)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="font-semibold text-red-600 transition-colors duration-200 hover:text-red-800"
                >
                  {isExpanded1 ? " " : "Read More ↓"}
                </motion.button>
              </div>
            </div>

            <AnimatePresence initial={false}>
              {isExpanded1 && (
                <motion.div
                  key="expanded-content"
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{
                    height: { duration: 0.4, ease: "easeInOut" },
                    opacity: { duration: 0.3 },
                    y: { duration: 0.3 },
                  }}
                  className="overflow-hidden"
                >
                  <div className="space-y-5 px-6 py-2">
                    <div className="space-y-5 rounded-xl bg-primary p-6 shadow-sm transition-shadow duration-300 hover:shadow-md md:p-8 md:m-5">
                      <h4 className="text-center text-lg font-semibold text-accent md:text-left">
                        Our Jointing Capabilities
                      </h4>

                      <ul className="list-disc space-y-2 pl-5 marker:text-red-600 text-white ">
                        <li>
                          <strong>Butt & Wrap Lamination Joints:</strong> Pipe
                          ends are butted and overwrapped with resin-saturated
                          glass reinforcement to form a rigid, fully restrained
                          structural joint. This joint suits large diameters,
                          tie-ins, closures and repairs.
                        </li>

                        <li>
                          <strong>Adhesive Bonded Joints:</strong>{" "}
                          Conical-Cylindrical and Taper-Taper bell and spigot
                          joints, bonded with high-performance epoxy adhesive
                          and heat cured for permanent, leak-tight service.
                        </li>

                        <li>
                          <strong>Rubber Seal Lock Joints:</strong> An O-ring
                          sealed, key-locked mechanical joint. It is fully
                          restrained, needs no curing time, and is fast to
                          install on long buried pipelines.
                        </li>

                        <li>
                          <strong>Flanged Joints:</strong> Connections to
                          valves, pumps, equipment and steel piping, drilled to
                          ASME/ANSI, DIN or BS. Bolts are tightened in a
                          controlled torque sequence.
                        </li>

                        <li>
                          <strong>Double Bell Coupler Joints:</strong> Flexible
                          EPDM-gasketed couplings for large-diameter,
                          non-restrained GRP lines. They accommodate angular
                          deflection and ground settlement.
                        </li>
                      </ul>

                      <p className="text-white">
                        Our jointing work follows a documented QA/QC system.
                        Joint preparation, adhesive and resin batches, cure
                        cycles and inspection records are tracked for full
                        traceability through to hydrostatic testing and
                        handover. All work is carried out under strict HSE
                        controls in line with our ISO 9001, ISO 14001 and ISO
                        45001 certified management systems.
                      </p>

                      <p className="text-white">
                        From new pipeline installation to plant shutdowns,
                        tie-ins and emergency repairs, Skytech delivers
                        composite piping you can rely on for the life of the
                        asset.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:m-5 mb-5">
                      <div className="rounded-lg bg-primary p-5">
                        <h4 className="mb-5 text-center text-lg font-semibold text-accent md:text-left">
                          Applications
                        </h4>

                        <ul className="list-disc space-y-2 pl-5 text-white marker:text-red-600">
                          <li>
                            Oil & Gas – produced water, water injection and
                            process lines
                          </li>
                          <li>Firewater Networks</li>
                          <li>Seawater Intake & Cooling Water Systems</li>
                          <li>Potable Water & Utilities</li>
                          <li>Sewerage & Storm Water Drainage</li>
                          <li>Industrial & Chemical Process Piping</li>
                        </ul>
                      </div>
                      <div className="rounded-lg bg-primary p-5">
                        <h4 className="mb-5 text-center text-lg font-semibold text-accent md:text-left">
                          Service Offerings
                        </h4>

                        <ul className="list-disc space-y-2 pl-5 text-white  marker:text-red-600">
                          <li>GRE/GRP Pipe Installation & Jointing</li>
                          <li>Field Lamination & Pipeline Repairs</li>
                          <li>Tie-ins, Modifications & Shutdown Works</li>
                          <li>Hydrostatic Testing & Commissioning Support</li>
                          <li>
                            Qualified GRE/GRP Bonders, Laminators & Supervisors
                          </li>
                          <li>
                            [Spool Fabrication / Material Supply – include only
                            if offered]
                          </li>
                        </ul>
                      </div>
                      <div>
                        <motion.button
                          type="button"
                          onClick={() => setIsExpanded1(false)}
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          transition={{ duration: 0.2 }}
                          className="font-semibold text-red-600 transition-colors duration-200 hover:text-red-800"
                        >
                          Read Less ↑
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          id="hdpe-piping-systems"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <div className="relative isolate rounded-2xl shadow-lg bg-white">
            <div className="relative z-10  w-full space-y-5 rounded-b-2xl bg-white md:mr-auto md:mt-0 md:rounded-2xl md:p-8">
              <div
                className={`relative h-[220px] w-full overflow-hidden rounded-t-2xl
            md:absolute md:inset-y-0 md:left-0 md:h-full
            md:w-[25%]
                  ${
                    isExpanded2
                      ? "md:rounded-tl-2xl md:rounded-tr-none md:rounded-bl-none"
                      : "md:rounded-l-2xl md:rounded-tr-none"
                  }
            
            transition-all duration-500 ease-in-out`}
              >
                <Image
                  src="/assets/services/pvcjointing.webp"
                  alt="PVC piping jointing"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="space-y-5 md:w-[75%] p-6 ml-auto">
                <h2 className="border-l-4 border-red-600 py-2 pl-4 text-center text-xl font-bold text-primary md:text-left md:text-2xl">
                  HDPE Piping Systems
                </h2>
                <p>
                  High-density polyethylene (HDPE) is valued for its
                  flexibility, corrosion resistance and fully welded, leak-free
                  joints. Skytech installs and welds HDPE pipelines for water,
                  wastewater, irrigation and industrial service. We use both
                  main fusion techniques, so each joint is made with the method
                  that suits its location and function.
                </p>

                <p>
                  Composite piping performs only as well as its joints. Our
                  teams are trained and experienced in all the major GRE/GRP
                  jointing systems, and they follow manufacturer procedures,
                  approved method statements and project specifications on every
                  joint.
                </p>

                <motion.button
                  type="button"
                  onClick={() => setIsExpanded2(!isExpanded2)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="font-semibold text-red-600 transition-colors duration-200 hover:text-red-800"
                >
                  {isExpanded2 ? " " : "Read More ↓"}
                </motion.button>
              </div>
            </div>
            <AnimatePresence initial={false}>
              {isExpanded2 && (
                <motion.div
                  key="expanded-content"
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{
                    height: { duration: 0.4, ease: "easeInOut" },
                    opacity: { duration: 0.3 },
                    y: { duration: 0.3 },
                  }}
                  className="overflow-hidden"
                >
                  <div className="space-y-5 px-6 py-2">
                    <div className="space-y-5 rounded-xl bg-primary p-6 shadow-sm transition-shadow duration-300 hover:shadow-md md:p-8 md:m-5">
                      <h4 className="text-center text-lg font-semibold text-accent md:text-left">
                        Our Welding Methods
                      </h4>

                      <ul className="list-disc space-y-2 pl-5 text-white marker:text-red-600">
                        <li>
                          <strong>Butt Fusion:</strong> Pipe ends are faced,
                          heated on a controlled hot plate and fused under
                          pressure. This produces a joint as strong as the pipe
                          itself, ideal for long mainline runs.
                        </li>

                        <li>
                          <strong>Electrofusion:</strong> Couplers and fittings
                          with embedded heating elements are fused to the pipe
                          under automatically controlled parameters. This method
                          suits confined trenches, branch connections, tapping
                          saddles and live-line repairs.
                        </li>
                      </ul>

                      <p className="text-white">
                        Every weld is made by qualified HDPE welders using
                        calibrated equipment. Weld parameters are calculated,
                        applied and recorded for each joint, and the result is a
                        complete, traceable weld log for the client and
                        consultant. Our crews handle everything from new
                        pipeline installation to maintenance upgrades, shutdowns
                        and emergency repairs.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:m-5">
                      <div className="rounded-lg bg-primary p-5">
                        <h4 className="mb-5 text-center text-lg font-semibold text-accent md:text-left">
                          Applications
                        </h4>

                        <ul className="list-disc space-y-2 pl-5 text-white marker:text-red-600">
                          <li>Potable Water Distribution</li>
                          <li>Wastewater & Sewerage</li>
                          <li>Irrigation Networks</li>
                          <li>Storm Water Management</li>
                          <li>Chemical & Industrial Lines</li>
                          <li>Municipal & Utility Projects</li>
                        </ul>
                      </div>

                      <div className="rounded-lg bg-primary p-5">
                        <h4 className="mb-5 text-center text-lg font-semibold text-accent md:text-left">
                          Service Offerings
                        </h4>

                        <ul className="list-disc space-y-2 pl-5 text-white marker:text-red-600">
                          <li>HDPE Pipe Installation & Welding</li>
                          <li>Butt Fusion & Electrofusion Jointing</li>
                          <li>Qualified & Experienced HDPE Welders</li>
                          <li>Weld Parameter Recording & Traceability</li>
                          <li>Repairs, Modifications & Tie-ins</li>
                          <li>Welding range: up to _25__ mm diameter 500mm</li>
                        </ul>
                      </div>
                      <div>
                        <motion.button
                          type="button"
                          onClick={() => setIsExpanded2(false)}
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          transition={{ duration: 0.2 }}
                          className="font-semibold text-red-600 transition-colors duration-200 hover:text-red-800"
                        >
                          Read Less ↑
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          id="in-situ-works–grp"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <div className="relative isolate rounded-2xl shadow-lg bg-white">
            <div className="relative z-10  w-full space-y-5 rounded-b-2xl bg-white md:mr-auto md:mt-0 md:rounded-2xl md:p-8">
              <div
                className={`relative h-[220px] w-full overflow-hidden rounded-t-2xl
            md:absolute md:inset-y-0 md:right-0 md:h-full
            md:w-[25%]
                  ${
                    isExpanded3
                      ? "md:rounded-tr-2xl md:rounded-tl-none md:rounded-br-none"
                      : "md:rounded-r-2xl md:rounded-tl-none"
                  }
            
            transition-all duration-500 ease-in-out`}
              >
                <Image
                  src="/assets/services/chemicalstorage.webp"
                  alt="In-Situ Works – GRP Lamination & Lining"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="space-y-5 md:w-[75%] p-6">
                <h2 className="border-l-4 border-red-600  py-2 pl-4 text-center text-xl font-bold text-primary md:text-left md:text-2xl">
                  In-Situ Works – GRP Lamination & Lining
                </h2>
                <p>
                  Many structures cannot be lined before installation because of
                  their size, shape or the way they are built on site. For
                  these, on-site GRP lamination provides a seamless, durable
                  protective barrier. Skytech carries out in-situ lamination for
                  new construction and rehabilitation projects, building each
                  laminate to the thickness, resin system and reinforcement the
                  project specifies.
                </p>

                <motion.button
                  type="button"
                  onClick={() => setIsExpanded3(!isExpanded3)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="font-semibold text-red-600 transition-colors duration-200 hover:text-red-800"
                >
                  {isExpanded3 ? " " : "Read More ↓"}
                </motion.button>
              </div>
            </div>
            <AnimatePresence initial={false}>
              {isExpanded3 && (
                <motion.div
                  key="expanded-content"
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{
                    height: { duration: 0.4, ease: "easeInOut" },
                    opacity: { duration: 0.3 },
                    y: { duration: 0.3 },
                  }}
                  className="overflow-hidden"
                >
                  <div className="space-y-5 px-6 py-2">
                    <div className="space-y-5 rounded-xl bg-primary p-6 shadow-sm transition-shadow duration-300 hover:shadow-md md:p-8 md:m-5">
                      <h4 className="text-center text-lg font-semibold text-accent md:text-left mb-1">
                        Manhole Benching & Chamber Lamination
                      </h4>

                      <p className="text-white mb-5">
                        Sewer manholes, chambers and wet wells are exposed to
                        hydrogen sulphide gas and aggressive effluent, which
                        steadily attack unprotected concrete. We apply GRP
                        lamination directly to the benching, channels, inverts,
                        walls and pipe entries. This forms a watertight,
                        chemically resistant lining that greatly extends the
                        life of the structure.
                      </p>

                      <h4 className="text-center text-lg font-semibold text-accent md:text-left mb-1">
                        Tank & Structure Lining
                      </h4>

                      <p className="text-white mb-5">
                        Large concrete tanks, chambers and pits receive
                        site-applied GRP lining to protect them against
                        corrosion, chemical attack and water ingress.
                      </p>
                      <h4 className="text-center text-lg font-semibold text-accent md:text-left mb-1">
                        Pipeline Joint Reinforcement
                      </h4>

                      <p className="text-white">
                        We also use in-situ lamination to permanently reinforce
                        and seal pipe joints and pipe-to-fitting connections on
                        installed GRP/GRE lines. Each laminate is designed
                        around the pipe specification and service conditions.
                      </p>

                      <p className="text-white">
                        Our site teams are trained in confined-space entry,
                        permit-to-work procedures and the practical challenges
                        of live infrastructure sites. Each surface is prepared
                        and laminated to approved method statements and
                        inspected for thickness and quality.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:m-5">
                      <div className="rounded-lg bg-primary p-5">
                        <h4 className="mb-5 text-center text-lg font-semibold text-accent md:text-left">
                          Applications
                        </h4>

                        <ul className="list-disc space-y-2 pl-5 text-white marker:text-red-600">
                          <li>Sewer Manholes & Inspection Chambers</li>
                          <li>Pump Station Wet Wells</li>
                          <li>Wastewater Treatment Structures</li>
                          <li>Concrete Tanks & Pits</li>
                          <li>GRP/GRE Pipeline Joints & Connections</li>
                        </ul>
                      </div>

                      <div className="rounded-lg bg-primary p-5">
                        <h4 className="mb-5 text-center text-lg font-semibold text-accent md:text-left">
                          Service Offerings
                        </h4>

                        <ul className="list-disc space-y-2 pl-5 text-white marker:text-red-600">
                          <li>
                            In-Situ GRP Lamination (Manhole Benching & Lining)
                          </li>
                          <li>Concrete Tank & Chamber Lining</li>
                          <li>Site Joint Reinforcement Lamination</li>
                          <li>Rehabilitation of Existing Structures</li>
                          <li>Confined-Space Trained Laminating Crews</li>
                        </ul>
                      </div>
                      <div>
                        <motion.button
                          type="button"
                          onClick={() => setIsExpanded3(false)}
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          transition={{ duration: 0.2 }}
                          className="font-semibold text-red-600 transition-colors duration-200 hover:text-red-800"
                        >
                          Read Less ↑
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>
      <CTASection
        img="/assets/construction.webp"
        title="Need help choosing a Service ?"
        subtitle="Talk to our experienced consultants to find the right solution for your project"
        button={<Button variant="CTA" text="Contact Us" href="/contact" />}
      />
    </>
  );
};

export default page;
